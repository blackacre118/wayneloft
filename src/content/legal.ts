/**
 * Canonical legal copy. DRAFT — attorney review.
 * Every disclosure on the site renders from this file; do not paraphrase elsewhere.
 */
export const DRAFT_NOTICE = "DRAFT — attorney review";

export const footerDisclaimer =
  "Renderings and images are artist’s conceptions and may not reflect final design. Plans, features, amenities, materials and availability are subject to change without notice. Nothing on this site is an offer to sell or a solicitation of an offer to buy real estate in any jurisdiction where such an offer or solicitation is prohibited or requires prior qualification.";

export const condoShort =
  "The penthouse residences are condominium units offered for sale by Blackacre Management, LLC or its affiliate. This is not an offer to sell. No purchase agreement may be entered into until the condominium documents required by the Michigan Condominium Act have been made available. Prices, plans and specifications are subject to change.";

export const equalHousing =
  "Blackacre Management, LLC is pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status or national origin, or any other class protected under federal law or the Michigan Elliott-Larsen Civil Rights Act and Persons with Disabilities Civil Rights Act.";

export const legalPage = {
  meta: {
    title: "Disclosures",
    description: "Condominium disclosures, equal housing opportunity statement and general disclaimers for WAYNE.",
  },
  sections: [
    {
      id: "condominium",
      title: "Penthouse condominium disclosures",
      paragraphs: [
        "The twelve penthouse residences at WAYNE, 1200 Sixth Street, Detroit, Michigan, are proposed condominium units in a condominium project to be established under the Michigan Condominium Act, 1978 PA 59, MCL 559.101 et seq. The developer is Blackacre Management, LLC or an affiliate (the “Developer”).",
        "This website is not an offer to sell, or a solicitation of an offer to buy, a condominium unit. Any offer will be made only through a written purchase agreement accompanied by the condominium documents, including the master deed, condominium bylaws, condominium subdivision plan, purchaser information booklet and disclosure statement, as required by the Act.",
        "Under the Michigan Condominium Act, a purchaser who signs a purchase agreement before receiving the required condominium documents may withdraw from the agreement without penalty, and any deposit will be refunded, before conveyance and within the period provided by the Act after receipt of those documents. Purchase deposits will be held in escrow as required by the Act.",
        "Where state law requires registration or qualification before condominium units may be marketed to residents of that state, this website is not directed at those residents until such requirements have been met.",
        "Prices, floor plans, square footages, finishes, features, amenities, views, delivery dates and availability are estimates, are subject to change without notice and are not guaranteed. Views shown are illustrative and may change as the surrounding area develops. Stated dimensions and areas are approximate.",
        "Ownership of a penthouse residence includes membership in a condominium association and the obligation to pay assessments. Access to hotel services, food and beverage programs and building amenities may be subject to separate agreements, fees and rules, and may change.",
      ],
    },
    {
      id: "equal-housing",
      title: "Equal Housing Opportunity",
      paragraphs: [equalHousing],
    },
    {
      id: "renderings",
      title: "Renderings and forward-looking information",
      paragraphs: [
        footerDisclaimer,
        "Statements about planned uses, unit counts, key counts, schedules, operators and amenities reflect current plans and are subject to change, financing, approvals and market conditions. Approximate figures are rounded.",
        "No hotel operator or brand has been announced. Any future operator or brand will be identified only when agreements are in place.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: ["Blackacre Management, LLC · Detroit, Michigan · [LEGAL CONTACT EMAIL]"],
    },
  ],
} as const;

export const privacyPage = {
  meta: {
    title: "Privacy Policy",
    description: "How WAYNE and Blackacre Management handle information submitted through waynelofts.com.",
  },
  updated: "[EFFECTIVE DATE]",
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        "This website, waynelofts.com, is operated by Blackacre Management, LLC (“we”, “us”), the developer of WAYNE at 1200 Sixth Street, Detroit, Michigan.",
      ],
    },
    {
      title: "What we collect",
      paragraphs: [
        "When you submit the inquiry form, we collect the information you provide: your name, email address, organization (if given), the category you select and your message.",
        "Our hosting provider automatically processes basic technical data such as IP address, browser type and pages requested, to deliver and secure the site. We do not use advertising cookies or sell personal information.",
      ],
    },
    {
      title: "How we use it",
      paragraphs: [
        "We use inquiry information only to respond to you, to send information you have asked for about WAYNE, and to keep a record of the inquiry. We do not sell, rent or trade your information.",
      ],
    },
    {
      title: "Who we share it with",
      paragraphs: [
        "We use service providers to operate the site and deliver email (currently Vercel for hosting and Resend for email delivery). They process information on our behalf and are not permitted to use it for their own purposes. We may disclose information if required by law.",
      ],
    },
    {
      title: "Retention and your choices",
      paragraphs: [
        "We keep inquiry information for as long as needed to respond and to maintain business records. You may ask us to access, correct or delete your information, or to stop contacting you, by writing to [PRIVACY CONTACT EMAIL].",
      ],
    },
    {
      title: "Children",
      paragraphs: ["This site is not directed to children under 13, and we do not knowingly collect their information."],
    },
    {
      title: "Changes",
      paragraphs: ["We may update this policy. The effective date above shows when it last changed."],
    },
  ],
} as const;
