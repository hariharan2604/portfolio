import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hariharan Jayachandran",
  initials: "HJ",
  url: "https://hariharanj.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Innovative and results-driven software engineer with a strong foundation in computer science principles and hands-on experience in backend development.",
  summary:
    "I am a software engineer passionate about building high-performance solutions and optimizing complex systems. I have experience in backend development, API optimization, and SaaS applications.",
  avatarUrl: "/me.jpg",
  skills: [
    "Java",
    "C",
    "C++",
    "Python",
    "Typescript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Docker",
    "MySQL",
    "MongoDB",
    "AWS",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hariharanjayachandran04@gmail.com",
    tel: "+91 9342970272",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hariharan2604",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hariharan2604/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hariharanjayachandran04@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Novac Technology Solutions",
      href: "https://www.novactech.com/",
      location: "Chennai, India",
      title: "Backend Development Intern",
      logoUrl: "/novac.svg",
      start: "Aug 2023",
      end: "Dec 2023",
      description:
        "Optimized API performance, achieving a 40% improvement in response times. Implemented efficient query optimizations, caching mechanisms, and payload reductions, increasing user satisfaction by 25%. Replaced Webpack with ESbuild, reducing bundling times by 80% and accelerating deployment cycles.",
      technologies: ["Express.js", "MySQL", "HTML", "CSS", "jQuery", "Git", "ESBuild", "Nginx"],
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in/",
      degree: "B.Tech in Information Technology",
      logoUrl: "/vit.png",
      start: "July 2021",
      end: "July 2025",
    },
  ],
  projects: [
    {
      title: "AI-based Traffic Control System",
      dates: '2025',
      href: "",
      active: true,
      description:
        "Developed an AI-driven traffic management system leveraging YOLO (You Only Look Once) for real-time object detection and Ant Colony Optimization (ACO) to optimize traffic signal timings. The system significantly reduces congestion by dynamically adjusting signal durations based on live traffic density.",
      technologies: ["Python", "YOLO", "Ant Colony Optimization", "OpenCV", "Deep Learning"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/AI-Based-Traffic-Control",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/traffic.png",
      video: "",
    }, {
      title: "Post Invest Pro",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Developed an advanced AI-powered investment management platform to optimize portfolio tracking and analytics for over 500 agents and brokers. Integrated automated data analysis and predictive insights to improve decision-making. The system enhanced processing efficiency by 30% and provided real-time financial analytics through an interactive Next.js dashboard.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Machine Learning",
        "Python",
        "FastAPI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/PostInvest-Pro",
          icon: <Icons.github className='size-3' />,
        }
      ],
      image: "/earning.png",
      video: "",
    },

    {
      title: "Smart Campus Management Dashboard",
      dates: '2023',
      href: "",
      active: true,
      description:
        "Developed a deep learning-powered Smart Campus Management Dashboard utilizing YOLO and Faster R-CNN for real-time resource monitoring and optimization. The AI system analyzes campus activities, improving resource allocation efficiency by 20%. The project includes an interactive Next.js dashboard for visualization and control.",
      technologies: [
        "Next.js",
        "React",
        "Python",
        "YOLO",
        "Faster R-CNN",
        "TensorFlow",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/Smart-Campus-Manager",
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: "/campus.jpg",
      video: "",
    },
  ],
} as const;
