"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { inquiryCopy, roles, type Role } from "@/content/inquiry";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-0 border-b border-ink/40 bg-transparent py-3.5 text-lg text-ink placeholder:text-muted/70 focus:border-fire focus:outline-none focus-visible:outline-none";
const labelClass = "text-xs font-medium uppercase tracking-[0.24em] text-muted";

function isRole(v: string | null): v is Role {
  return roles.some((r) => r.value === v);
}

export function InquiryForm({ defaultRole }: { defaultRole?: Role }) {
  const params = useSearchParams();
  const fromQuery = params.get("role");
  const initialRole = isRole(fromQuery) ? fromQuery : defaultRole;

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) next.email = "Please enter a valid email.";
    if (!isRole(data.role ?? null)) next.role = "Please choose one.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4">
        <p className="font-display text-4xl font-light">{inquiryCopy.success.title}</p>
        <p className="text-base leading-relaxed text-ink/80">{inquiryCopy.success.body}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-9" aria-describedby="inquiry-consent">
      <fieldset className="flex flex-col gap-4">
        <legend className={`${labelClass} mb-4`}>{inquiryCopy.roleLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <label key={r.value} className="cursor-pointer">
              <input
                type="radio"
                name="role"
                value={r.value}
                defaultChecked={r.value === initialRole}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-11 items-center border border-ink/25 px-4 text-xs uppercase tracking-[0.2em] text-ink/80 transition-colors duration-300 hover:border-ink/60 peer-checked:border-fire peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-fire">
                {r.label}
              </span>
            </label>
          ))}
        </div>
        {errors.role ? <p className="text-sm text-fire">{errors.role}</p> : null}
      </fieldset>

      <div className="grid gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="inq-name" className={labelClass}>
            Name
          </label>
          <input
            id="inq-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "inq-name-err" : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id="inq-name-err" className="text-sm text-fire">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="inq-email" className={labelClass}>
            Email
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "inq-email-err" : undefined}
            className={fieldClass}
          />
          {errors.email ? (
            <p id="inq-email-err" className="text-sm text-fire">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="inq-org" className={labelClass}>
          Organization <span className="normal-case tracking-normal text-muted/70">(optional)</span>
        </label>
        <input id="inq-org" name="organization" autoComplete="organization" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="inq-message" className={labelClass}>
          Message <span className="normal-case tracking-normal text-muted/70">(optional)</span>
        </label>
        <textarea id="inq-message" name="message" rows={3} className={`${fieldClass} resize-y`} />
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="inq-website">Website</label>
        <input id="inq-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="inquiry-consent" className="text-xs text-muted">
          By submitting, you agree to our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-fire">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center justify-center border border-fire px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-fire hover:text-night disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
      </div>
      <p role="alert" className="min-h-5 text-sm text-fire">
        {status === "error" ? inquiryCopy.error : ""}
      </p>
    </form>
  );
}
