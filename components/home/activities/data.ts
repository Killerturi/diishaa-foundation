export interface Activity {
  id: number;
  title: string;
  slug: string;
  cover: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "Medical Camps",
    slug: "medical",
    cover: "/activities/medical/cover.webp",
  },
  {
    id: 2,
    title: "Food Distribution",
    slug: "food",
    cover: "/activities/food/cover.JPG",
  },
  {
    id: 3,
    title: "Tree Plantation",
    slug: "tree",
    cover: "/activities/tree/cover.webp",
  },
  {
    id: 4,
    title: "Blood Donation",
    slug: "blood",
    cover: "/activities/blood/cover.jpg",
  },
  {
    id: 5,
    title: "Educational Programs",
    slug: "education",
    cover: "/activities/education/cover.jpg",
  },
  {
    id: 6,
    title: "Community Events",
    slug: "community",
    cover: "/activities/community/cover.jpg",
  },
];
