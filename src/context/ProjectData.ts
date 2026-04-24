export type ProjectType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  github_link?: string;
  default_image_index: number;
  demo_id?: string;
  demo_pass?: string;
};

export const PROJECTS: ProjectType[] = [
  {
    id: "420fd351-5fed-4e49-9628-4c7o621112134",
    title: "calquick saas",
    description:
      "Designed and delivered a full-stack SaaS for e-commerce sellers, featuring a unified dashboard for online and in-store management. Built a hybrid order system with real-time sync, multi-store architecture, and integrated courier services with live tracking. Developed advanced inventory with variants, supplier ledger, expense tracking, and real-time profit analytics. Implemented subscription billing, theme customization, SMS notifications, and reusable media management.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172199/Screenshot_171_dddwvq.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171912/Screenshot_172_wuthy2.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171933/Screenshot_184_qriycv.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171933/Screenshot_198_j1fxej.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171932/Screenshot_196_h9rduo.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171928/Screenshot_193_ws2587.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171935/Screenshot_199_r7kd7k.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171917/Screenshot_178_fpbemp.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171919/Screenshot_177_sdavax.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171911/Screenshot_176_n3ednf.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765171919/Screenshot_182_je6bip.png",
    ],
    link: "https://calquick.app/",
    github_link: "",
    default_image_index: 0,
    demo_id: "demo@gmail.com",
    demo_pass: "Pa$$w0rd!",
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7o621252134",
    title: "OmniChat saas",
    description:
      "Developed a scalable, multi-tenant Omnichannel SaaS platform unifying Facebook, WhatsApp, TikTok, Telegram, and Instagram messages. Engineered a high-performance backend using Node.js, Express.js, and MongoDB for real-time routing, paired with a Next.js and WebSocket-powered frontend dashboard that enables support agents to manage thousands of live conversations instantly.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764868/Screenshot_2026-04-21_154515_rhm1tc.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764867/Screenshot_2026-04-21_154535_xfeoqo.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764868/Screenshot_2026-04-21_154444_alsebq.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764868/Screenshot_2026-04-21_154402_z2wrao.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764869/Screenshot_2026-04-21_154656_xj5nny.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764867/Screenshot_2026-04-21_154623_seofrq.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764867/Screenshot_2026-04-21_154640_o3culj.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764867/Screenshot_2026-04-21_154602_ibn2og.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776764867/Screenshot_2026-04-21_154715_sippwt.png",
    
    ],
    link: "https://omnichat.expressitbd.com/",
    github_link: "",
    default_image_index: 0,
    demo_id: "ceo@gmail.com",
    demo_pass: "123456",
  },
    {
    id: "420fd351-5fed-4e49-9628-4c7t621116134",
    title: "pixlyOne sGTM",
    description:
      "Developed the complete frontend for PixlyOne, a privacy-first server-side tracking platform, using Frontend React 19, Vite, and TypeScript & Backend Nest.js, PostgreSQL. Engineered a cookieless analytics solution that bypasses ad blockers and third-party cookie restrictions with built-in PII redaction and GDPR/CCPA compliance. Implemented a multi-language interface, role-based access control, and consent-mode support. The platform delivers high-performance Lighthouse scores and currently powers analytics for thousands of users and multiple agencies.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173257/Screenshot_210_kvrdi6.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173258/Screenshot_211_psbxsm.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173259/Screenshot_212_ll1evr.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173294/Screenshot_214_foj4ot.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173294/Screenshot_216_jgm7s5.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173293/Screenshot_215_lfftek.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173299/Screenshot_218_prlbzb.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173303/Screenshot_219_qfz9ae.png",
    ],
    link: "https://pixlyone.io/",
    github_link: "",
    default_image_index: 0,
    demo_id: "smaranshaha@gmail.com",
    demo_pass: "Shaha@1201",
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7u621116134",
    title: "hisabi saas",
    description:
      "Delivered a fast, single-tenant POS for shopping malls with barcode scanning, thermal printing, QR payments and customer loyalty features.Made it fully offline-first using Redux Persist with auto-sync and achieved top Lighthouse scores with instant page transitions.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172637/Screenshot_201_jynv9v.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172639/Screenshot_203_qvzywy.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172651/Screenshot_204_on9vlp.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172678/Screenshot_209_rxqdxb.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172676/Screenshot_205_jpr0vn.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172678/Screenshot_206_jo7fnd.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765172677/Screenshot_207_cy1bfh.png",
    ],
    link: "https://hisabi.smaran.me/",
    github_link: "",
    default_image_index: 0,
    
  },

  {
    id: "420fd351-5fed-4e49-9628-4c7i621112134",
    title: "emegadeal",
    description:
      "Developed and led frontend architecture for multiple production e-commerce platforms using Next.js, focusing on high performance with Turbopack. Built key user features including infinite scrolling, dynamic filtering, and a seamless checkout process. Implemented SEO-optimized SSR and ISR with dynamic meta tags and sitemaps to boost organic traffic. Integrated advanced analytics via server-side Google Tag Manager for accurate, cookieless tracking and GDPR-compliant data collection.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169342/Screenshot_145_x8l8px.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169337/Screenshot_149_hmzefa.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169335/Screenshot_150_oquikv.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169334/Screenshot_151_yqyu6z.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169332/Screenshot_147_wleb5y.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169335/Screenshot_153_su605u.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169336/Screenshot_154_ktecxq.png",
    ],

    link: "https://emegadeal.com/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7a321112134",
    title: "glamgirl",
    description:
      "Developed and led frontend architecture for multiple production e-commerce platforms using Next.js, focusing on high performance with Turbopack. Built key user features including infinite scrolling, dynamic filtering, and a seamless checkout process. Implemented SEO-optimized SSR and ISR with dynamic meta tags and sitemaps to boost organic traffic. Integrated advanced analytics via server-side Google Tag Manager for accurate, cookieless tracking and GDPR-compliant data collection.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169773/Screenshot_160_iodnwa.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169764/Screenshot_155_feihdy.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169760/Screenshot_162_cchvxu.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169770/Screenshot_165_vqvci5.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169757/Screenshot_161_elobfy.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169761/Screenshot_163_equish.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765169762/Screenshot_166_rsf4vm.png",
    ],
    link: "https://glamgirl.com.bd/",
    github_link: "",
    default_image_index: 0,
  },
   {
    id: "420fd351-5fed-4e49-9628-4c7k321358654",
    title: "Dev Interview",
    description:
      "ReCall JS – A dedicated interview preparation platform for full-stack developers, featuring a structured collection of Q&A on JavaScript, React, Node.js, and modern web architecture. Designed to help developers crack technical interviews with confidence.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776932633/Screenshot_2026-04-23_130449_rarzw7.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776932632/Screenshot_2026-04-23_130357_rrq4qv.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776932639/Screenshot_2026-04-23_142207_lqxuk9.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1776932637/Screenshot_2026-04-23_142229_ayjwco.png",
    ],
    link: "https://devinterview.smaran.me/bn",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7k32117654",
    title: "Azmainfashion",
    description:
      "Developed and led frontend architecture for multiple production e-commerce platforms using Next.js, focusing on high performance with Turbopack. Built key user features including infinite scrolling, dynamic filtering, and a seamless checkout process. Implemented SEO-optimized SSR and ISR with dynamic meta tags and sitemaps to boost organic traffic. Integrated advanced analytics via server-side Google Tag Manager for accurate, cookieless tracking and GDPR-compliant data collection.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765168138/Screenshot_141_yklpbh.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765168133/Screenshot_144_llkj7x.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765168137/Screenshot_143_cjt1vf.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765168140/Screenshot_142_plxbgb.png",
    ],
    link: "https://azmainfashion.com/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "420fd351-5fed-4e49-9628-4dea32117654",
    title: "Attireidyll",
    description:
      "Developed and led frontend architecture for multiple production e-commerce platforms using Next.js, focusing on high performance with Turbopack. Built key user features including infinite scrolling, dynamic filtering, and a seamless checkout process. Implemented SEO-optimized SSR and ISR with dynamic meta tags and sitemaps to boost organic traffic. Integrated advanced analytics via server-side Google Tag Manager for accurate, cookieless tracking and GDPR-compliant data collection.",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765170985/Screenshot_168_h0dxqb.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765170985/Screenshot_167_eoewg8.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765170995/Screenshot_169_mfhezw.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765170985/Screenshot_170_nitm40.png",
    ],
    link: "https://attireidyll.com/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "420fd351-5fed-4e49-9628-4c7a32110cd4",
    title: "Trendify",
    description:
      "Developed a visually appealing and user-friendly shopping platform where users can explore products,view details,and add items to their cart. Fully mobile-responsive for a seamless experience",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173570/trendify2_tsfst2.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173571/trendify1_y0tkvr.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173571/trendify3_ud5rfp.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173573/trendify_gcxjkk.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173574/trendify4_lycoyh.png",
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
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173781/clothoria_ue0kt5.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173775/clothoria4_wstrvl.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173777/clothoria1_ollku4.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173768/clothoria5_elwhtb.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173766/clothoria2_pyxu2m.png",
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
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174020/chat3_sauni5.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173996/chat2_n5x2pr.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173996/chat1_xs4xog.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765173995/chat_epbi9p.png",
    ],
    link: "https://chat-app-f-z21m.onrender.com/",
    github_link: "",
    default_image_index: 0,
  },
  {
    id: "42ghia76-c2b9-4b71-9008-1290o297c005",
    title: "Fruits shop",
    description:
      "This website about of Fruits Shop...this overall template created by css3 , html5 and raw javaScript",
    images: [
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174182/fruit_iy8we5.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174182/fruit2_phnljb.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174183/fruit1_bk8rlq.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174182/fruit3_cmlwuo.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174192/fruit4_jwni4x.png",
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
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174281/travel_numnss.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174275/travel2_liwjgn.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174275/travel2_liwjgn.png",
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
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174316/dress1_dbv4gh.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174315/dress3_py52d4.png",
      "https://res.cloudinary.com/dck5iqtu3/image/upload/v1765174315/dress2_gchppl.png",
    ],
    link: "https://shoronshaha.github.io/Dress/",
    default_image_index: 0,
  },
];
