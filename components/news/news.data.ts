export type NewsCategory =
  | "Upcoming"
  | "Events"
  | "Impact Stories"
  | "Announcements"
  | "Achievements";

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface NewsItem {
  id: string;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  category: NewsCategory;

  image: string;

  date: string;

  location?: string;
  time?: string;

  eventStatus?: EventStatus;

  featured?: boolean;

  registrationAvailable?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "community-health-camp-kolkata-2026",

    title: "Community Health Camp Brings Essential Care Closer to Families",

    excerpt:
      "Diishaa Foundation is bringing basic health awareness, consultation and support closer to communities through a dedicated health camp.",

    content:
      "Diishaa Foundation continues its commitment to creating healthier and more informed communities through grassroots initiatives. The upcoming community health camp will provide basic health consultation, awareness and guidance to participating families.",

    category: "Upcoming",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",

    date: "25 August 2026",

    location: "Kolkata, West Bengal",

    time: "10:00 AM – 2:00 PM",

    eventStatus: "upcoming",

    featured: true,

    registrationAvailable: true,
  },

  {
    id: "2",
    slug: "education-support-program-2026",

    title: "Supporting Young Learners Through Education",

    excerpt:
      "Our education initiative focuses on helping children access learning resources and opportunities that can strengthen their future.",

    content:
      "Education can open doors to opportunities and create long-term change. Through our education initiatives, Diishaa Foundation works with communities to support children and encourage continued learning.",

    category: "Impact Stories",

    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",

    date: "18 August 2026",

    location: "West Bengal",

    featured: true,
  },

  {
    id: "3",
    slug: "community-awareness-program",

    title: "Community Awareness Programme Reaches Local Families",

    excerpt:
      "A community-focused awareness programme brought together local residents, volunteers and members of the Diishaa Foundation team.",

    content:
      "The programme created an opportunity for community members to discuss important social issues, available support and ways to work together for positive change.",

    category: "Events",

    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",

    date: "10 August 2026",

    location: "West Bengal",
  },

  {
    id: "4",
    slug: "tree-plantation-community-drive",

    title: "Community Comes Together for a Greener Tomorrow",

    excerpt:
      "Volunteers and community members joined hands for a local tree plantation initiative promoting environmental responsibility.",

    content:
      "Environmental responsibility begins with local action. Volunteers and community members participated in a tree plantation activity designed to encourage awareness and collective responsibility towards our environment.",

    category: "Events",

    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",

    date: "5 August 2026",

    location: "West Bengal",
  },

  {
    id: "5",
    slug: "dishaa-foundation-volunteer-network",

    title: "Building a Stronger Volunteer Community",

    excerpt:
      "Diishaa Foundation continues to welcome individuals who want to contribute their time, skills and energy towards meaningful community initiatives.",

    content:
      "Volunteers play an important role in turning ideas into action. Diishaa Foundation is working towards building a community of people who are willing to contribute their skills and time to social initiatives.",

    category: "Announcements",

    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",

    date: "1 August 2026",
  },

  {
    id: "6",
    slug: "dishaa-foundation-community-milestone",

    title: "Diishaa Foundation Reaches a New Community Impact Milestone",

    excerpt:
      "A growing network of volunteers and supporters is helping Diishaa Foundation expand its community-focused initiatives.",

    content:
      "Every initiative becomes possible through the support of volunteers, community members and well-wishers. This milestone reflects the collective effort behind the foundation's growing work.",

    category: "Achievements",

    image:
      "https://images.unsplash.com/photo-1559027615-0281-4a8f1d2e?auto=format&fit=crop&w=1200&q=80",

    date: "28 July 2026",

    featured: true,
  },
];
