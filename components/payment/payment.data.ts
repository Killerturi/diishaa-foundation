/* =========================================================
   PAYMENT TYPES
========================================================= */

export type PaymentPurpose = "donation" | "community-membership";

export type PaymentMethod = "upi" | "bank" | "qr" | "online";

/* =========================================================
   PAYMENT METHOD
========================================================= */

export interface PaymentMethodOption {
  id: PaymentMethod;
  title: string;
  description: string;
}

/* =========================================================
   DONATION AMOUNTS
========================================================= */

export const donationAmounts = [500, 1000, 2500, 5000];

/* =========================================================
   PAYMENT METHODS
========================================================= */

export const paymentMethods: PaymentMethodOption[] = [
  {
    id: "upi",
    title: "UPI",
    description: "Pay using UPI",
  },
  {
    id: "bank",
    title: "Bank",
    description: "Direct bank transfer",
  },
  {
    id: "qr",
    title: "QR Code",
    description: "Scan & contribute",
  },
  {
    id: "online",
    title: "Online",
    description: "Secure online payment",
  },
];

/* =========================================================
   DONATION CONTENT
========================================================= */

export const donationPaymentContent = {
  eyebrow: "MAKE A DIFFERENCE",

  title: "Choose Your Donation",

  description:
    "Select an amount that you would like to contribute. Every contribution helps us serve communities in need.",

  amountLabel: "Your contribution",

  buttonLabel: "Donate Now",

  footerMessage: "Secure & trusted donation",

  impactMessage:
    "Your donation will help support our initiatives in education, healthcare, food distribution, child welfare, women empowerment and other community programs.",
};

/* =========================================================
   COMMUNITY MEMBERSHIP CONTENT
========================================================= */

export const communityPaymentContent = {
  eyebrow: "COMMUNITY MEMBERSHIP",

  title: "Complete Your Community Membership",

  description:
    "Complete your annual community contribution to activate your Diishaa Community Membership.",

  amountLabel: "Annual contribution",

  buttonLabel: "Complete Membership",

  footerMessage: "Secure & trusted payment",

  validity: "Valid for 1 Year",

  paymentNotice:
    "Your application has been approved. Complete the contribution to activate your Community Membership.",

  benefits: [
    "Diishaa Community Account",
    "Community ID with QR verification",
    "Digital Community Certificate",
    "Connection to eligible community activities",
  ],
};

/* =========================================================
   INDIAN CURRENCY FORMATTER
========================================================= */

export function formatIndianCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN").format(amount);
}
