export type ProjectType = {
    id: string;
    title: string;
    description: string;
    images: string[],
    link: string,
    github_link?: string,
    default_image_index: number;
}

export const PROJECTS: ProjectType[] = [
    {
        id: "420fd351-5fed-4e49-9628-4c7a32110ab4",
        title: "UNIVR",
        description: "Virtual Resource Room for students to access a wide range of educational resources conveniently and efficiently.",
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
        description: "Powering virtual schools globally | Simplifying learning processes.",
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
        title: "WhatsApp Clone",
        description: "Video call, flexible chat (send, edit, delete & react to messages), create and manage groups",
        images: [
            "/images/projects/whatsapp-1.png",
            "/images/projects/whatsapp-2.png",
            "/images/projects/whatsapp-3.png",
            "/images/projects/whatsapp-4.png",
        ],
        link: "https://www.linkedin.com/posts/offiong-bassey-dev_whatsapp-web-project-kindly-rate-and-share-activity-7156054147526492160-HDJD?utm_source=share&utm_medium=member_desktop",
        github_link: "https://github.com/offiongbassey/whatsapp_fe",
        default_image_index: 0
    },
    {
        id: "42ghia76-c2b9-4b71-9008-1290o297c005",
        title: "NT-Plus",
        description: "Streamlining and simplifying company/business registrations with CAC.",
        images: [
            "/images/projects/ntplus-1.png",
            "/images/projects/ntplus-2.png",
            "/images/projects/ntplus-3.png",
        ],
        link: "https://service.ntplus.net",
        github_link: "",
        default_image_index: 0
    },
    {
        id: "yu747a71-g6b9-4b71-8768-123256trc005",
        title: "Rainyvest",
        description: "Agric Investment platform - Digitalized stock trading",
        images: [
            "/images/projects/rainyvest-1.png",
            "/images/projects/rainyvest-2.png",
            "/images/projects/rainyvest-3.png",
            "/images/projects/rainyvest-4.png",
        ],
        link: "https://rainyvest-frontend.vercel.app",
        default_image_index: 0
    },
    

]