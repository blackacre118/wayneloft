import type { Metadata } from "next";
import { Suspense } from "react";
import { GalleryView } from "@/components/GalleryView";
import { gallery, galleryMeta } from "@/content/gallery";

export const metadata: Metadata = {
  title: galleryMeta.title,
  description: galleryMeta.description,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <h1 className="sr-only">Gallery</h1>
      <Suspense>
        <GalleryView categories={gallery} />
      </Suspense>
    </>
  );
}
