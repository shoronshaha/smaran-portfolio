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
    id: "420fd351-5fed-4e49-9628-4c7a32110cd4",
    title: "Trendify",
    description:
      "Developed a visually appealing and user-friendly shopping platform where users can explore products,view details,and add items to their cart. Fully mobile-responsive for a seamless experience",
    images: [
      "/images/projects/trendify.png",
      "/images/projects/trendify1.png",
      "/images/projects/trendify2.png",
      "/images/projects/trendify3.png",
      "/images/projects/trendify4.png",
    ],
    link: "https://trendify-nextjs-ts.vercel.app/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7a32110ab4",
    title: "Clothoria Shop",
    description:
      "Developed a feature-rich e-commerce site offering a seamless shopping experience for diverse product categories.Integrated JWT authentication, Redux Toolkit, and a PayPal payment system, ensuring a secure and efficient platform.Separate admin and user panels for streamlined management and user functionality.",
    images: [
      "/images/projects/clothoria.png",
      "/images/projects/clothoria1.png",
      "/images/projects/clothoria2.png",

      "/images/projects/clothoria4.png",
      "/images/projects/clothoria5.png",
    ],
    link: "https://clothoria-e-shop-f.onrender.com/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "a6beab01-59e4-4f2f-9c3e-bbfca09f0ef9",
    title: "Live Chat App",
    description:
      "Built a modern chat app with React (Vite), Redux Toolkit, and Socket.IO for real-time communication.Features include multi-user chat, secure JWT authentication, and a sleek, responsive UI.",
    images: [
      "/images/projects/chat.png",
      "/images/projects/chat1.png",
      "/images/projects/chat2.png",
      "/images/projects/chat3.png",
    ],
    link: "https://chat-app-f-z21m.onrender.com/",
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
      "/images/projects/dress1.png",
      "/images/projects/dress2.png",
      "/images/projects/dress3.png",
      "/images/projects/dress4.png",
    ],
    link: "https://shoronshaha.github.io/Dress/",
    default_image_index: 0,
  },
];
