/* =========================================================
   DISHAA COMMUNITY DATA
========================================================= */

export interface CommunityBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CommunityStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ContributionPlan {
  name: string;
  amount: number;
  duration: string;
  description: string;
  highlighted?: boolean;
}

export const communityBenefits: CommunityBenefit[] = [
  {
    id: "identity",
    title: "Official Community ID",
    description:
      "Receive your official Diishaa Community Member identity after completing the membership process.",
    icon: "id",
  },
  {
    id: "qr",
    title: "QR Verification",
    description:
      "Your Community ID includes a QR code for quick and convenient identity verification.",
    icon: "qr",
  },
  {
    id: "certificate",
    title: "Digital Certificate",
    description:
      "Receive a digital Community Membership Certificate after successful registration.",
    icon: "certificate",
  },
  {
    id: "events",
    title: "Community Events",
    description:
      "Stay connected with Diishaa initiatives and participate in eligible community activities and events.",
    icon: "events",
  },
  {
    id: "updates",
    title: "Stay Connected",
    description:
      "Receive updates about Diishaa Foundation initiatives, campaigns, activities and community programs.",
    icon: "updates",
  },
  {
    id: "community",
    title: "Be Part of the Community",
    description:
      "Build a meaningful connection with people working together to create positive social impact.",
    icon: "community",
  },
];

/* =========================================================
   MEMBERSHIP PROCESS
========================================================= */

export const communitySteps: CommunityStep[] = [
  {
    id: "application",
    number: "01",
    title: "Submit Application",
    description:
      "Complete the online Community Member application form with your details.",
  },
  {
    id: "review",
    number: "02",
    title: "Admin Review",
    description:
      "Our team reviews your application before confirming your membership.",
  },
  {
    id: "payment",
    number: "03",
    title: "Complete Contribution",
    description:
      "After approval, complete the applicable annual community contribution.",
  },
  {
    id: "identity",
    number: "04",
    title: "Receive Your Identity",
    description:
      "After successful payment, your Community Account, ID and QR verification become available.",
  },
  {
    id: "certificate",
    number: "05",
    title: "Receive Certificate",
    description:
      "Your digital Community Membership Certificate is issued after successful completion.",
  },
];

/* =========================================================
   CONTRIBUTION
========================================================= */

export const communityContribution: ContributionPlan = {
  name: "Community Membership",
  amount: 500,
  duration: "1 Year",
  description:
    "An annual contribution to support Diishaa Foundation's community initiatives and programs.",
  highlighted: true,
};

/* =========================================================
   HERO CONTENT
========================================================= */

export const communityHero = {
  eyebrow: "JOIN OUR COMMUNITY",

  title: "Be Part of Something Meaningful",

  highlightedTitle: "Create a Better Tomorrow",

  description:
    "Become a Diishaa Community Member and stay connected with initiatives, activities and opportunities that help create meaningful social impact.",

  primaryCta: "Join Now",

  secondaryCta: "Learn More",
};

/* =========================================================
   WHY JOIN CONTENT
========================================================= */

export const whyJoinCommunity = {
  eyebrow: "WHY JOIN US?",

  title: "More Than a Membership",

  description:
    "Joining the Diishaa community is a way to stay connected with our work, support our initiatives and become part of a growing community committed to positive change.",
};
