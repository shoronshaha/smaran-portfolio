export type ProjectType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  github_link?: string;
  default_image_index: number;
};

export const PROJECTS: ProjectType[] = [
  {
    id: "420fd351-5fed-4e49-9628-4c7a32110ab4",
    title: "UNIVR",
    description:
      "Virtual Resource Room for students to access a wide range of educational resources conveniently and efficiently.",
    images: [
      "/images/projects/univr-1.png",
      "/images/projects/univr-2.png",
      "/images/projects/univr-3.png",
      "/images/projects/univr-4.png",
      "/images/projects/univr-5.png",
      "/images/projects/univr-6.png",
    ],
    link: "https://github.com/offiongbassey/whatsapp_fe",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "a6beab01-59e4-4f2f-9c3e-bbfca09f0ef9",
    title: "Klas Inc.",
    description:
      "Powering virtual schools globally | Simplifying learning processes.",
    images: [
      "/images/projects/klas-1.png",
      "/images/projects/klas-2.png",
      "/images/projects/klas-3.png",
      "/images/projects/klas-4.png",
      "/images/projects/klas-5.png",
    ],
    link: "https://www.tryklas.com",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "42944e71-a2b9-4b71-9148-16124297c005",
    title: "Food House",
    description:
      "Created a full-stack application with a focus on seamless food ordering and management.Leveraged Stripe API, React Query, and Firebase authentication to enhance security and user experience.",
    images: [
      "/images/projects/foodh.png",
      "/images/projects/foodh1.png",
      "/images/projects/foodh2.png",
      "/images/projects/foodh3.png",
      "/images/projects/foodh4.png",
      "/images/projects/foodh5.png",
    ],
    link: "https://online-food-house.web.app/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "42ghia76-c2b9-4b71-9008-1290o297c005",
    title: "Fruits shop",
    description:
      "This website about of Fruits Shop...this overall template created by css3 , html5 and raw javaScript",
    images: [
      "/images/projects/fruit.png",
      "/images/projects/fruit1.png",
      "/images/projects/fruit2.png",
      "/images/projects/fruit3.png",
      "/images/projects/fruit4.png",
    ],
    link: "https://shoronshaha.github.io/fruits-ecommerce/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "yu747a71-g6b9-4b71-8768-123256trc005",
    title: "Travel",
    description:
      "This website about of Travel Agency...this overall template created by css3 , html5 and raw javaScript",
    images: [
      "/images/projects/travel.png",
      "/images/projects/travel1.png ",
      "/images/projects/travel2.png",
    ],
    link: "https://shoronshaha.github.io/travel-template/",
    default_image_index: 0,
  },
  {
    id: "yu747a71-g6b9-4b71-8768-123256trc145",
    title: "Dress Shop",
    description:
      "This website about of online dress shop...this overall template created by css3 , html5 and raw javaScript",
    images: [
      "/images/projects/dress1.PNG",
      "/images/projects/dress2.PNG",
      "/images/projects/dress3.PNG",
      "/images/projects/dress4.PNG",
    ],
    link: "https://shoronshaha.github.io/Dress/",
    default_image_index: 0,
  },
];
