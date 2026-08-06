export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  status: "Completed" | "Upcoming" | "Announcement";
  date: string;
  location: string;
  excerpt: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Free Health Camp Organized",
    slug: "free-health-camp",
    image: "/news/health-camp.jpg",
    status: "Completed",
    date: "20 May 2026",
    location: "Ukhra, West Bengal",
    excerpt:
      "More than 250 villagers received free health checkups and medicines.",
  },

  {
    id: 2,
    title: "Blood Donation Camp",
    slug: "blood-donation-camp",
    image: "/news/health-camp.jpg",
    status: "Upcoming",
    date: "15 June 2026",
    location: "Durgapur",
    excerpt: "Join our blood donation drive and help save precious lives.",
  },

  {
    id: 3,
    title: "Tree Plantation Drive",
    slug: "tree-plantation-drive",
    image: "/news/health-camp.jpg",
    status: "Announcement",
    date: "30 June 2026",
    location: "Asansol",
    excerpt: "Volunteers are invited to participate in our green mission.",
  },
];
