import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hariharan Jayachandran",
  initials: "HJ",
  url: "https://hariharanjayachandran.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Java backend engineer focused on API design, secure service workflows, and practical full-stack products.",
  summary:
    "I build APIs and service workflows with Java and Spring, alongside full-stack applications using Node.js, React, and Next.js. My projects include secure resource booking, expense sharing, investment operations, and live water-and-power monitoring. I focus on clear API boundaries, reliable data handling, and features that solve practical problems.",
  avatarUrl: "/profile.jpg",
  resumeUrl: "/hariharan-jayachandran-resume.pdf",
  featuredSkills: ["Java", "Spring Boot", "REST APIs", "MySQL", "Docker"],
  skillGroups: [
    {
      title: "Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript"],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "Hibernate",
        "REST APIs",
        "Microservices",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      title: "Databases & data",
      skills: ["DB2", "MySQL", "MongoDB", "SQL", "Query Optimization"],
    },
    {
      title: "Testing & quality",
      skills: ["JUnit", "Mockito", "Postman"],
    },
    {
      title: "Cloud & delivery",
      skills: ["AWS", "Docker", "Nginx", "Gradle", "Maven", "Git", "GitHub"],
    },
    {
      title: "Core practices",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Design",
        "Design Patterns",
        "System Design",
        "Agile",
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/hariharan_2604/",
        icon: Icons.leetcode,
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
      company: "Tata Consultancy Services",
      href: "https://www.tcs.com/",
      location: "Chennai, India",
      title: "Systems Engineer",
      logoUrl: "/tcs-logo-cropped.png",
      logoShape: "wide",
      start: "Aug 2025",
      end: "Aug 2026",
      description:
        "Contributed to backend services and REST APIs for a large-scale e-commerce platform using Java and Spring. Worked with Spring Data JPA/Hibernate and DB2 for persistence and query optimization, applied Spring Security for access control, and collaborated with QA and product teams in an Agile workflow.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "Hibernate",
        "DB2",
        "SQL",
        "Microservices",
        "Git",
      ],
    },
    {
      company: "Novac Technology Solutions",
      href: "https://www.novactech.com/",
      location: "Chennai, India",
      title: "Backend Development Intern",
      logoUrl: "/novac.svg",
      logoShape: "wide",
      start: "Aug 2023",
      end: "Dec 2023",
      description:
        "Worked on backend features with Express.js and MySQL, including query optimization, caching, and payload handling. Replaced Webpack with ESBuild to streamline bundling and CI/CD, and worked with Git and Nginx.",
      technologies: [
        "Express.js",
        "MySQL",
        "HTML",
        "CSS",
        "jQuery",
        "Git",
        "ESBuild",
        "Nginx",
      ],
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
      description:
        "Completed a Bachelor of Technology in Information Technology, building a foundation in software engineering, algorithms, databases, and system design.",
    },
  ],
  projects: [
    {
      title: "Post Invest Pro",
      href: "https://post-invest-pro-frontend.vercel.app/",
      dates: "2024",
      meta: "FinTech Platform",
      active: true,
      description:
        "Built an investment operations platform with agent authentication and workflows for customers, investment schemes, and receipts. The Next.js and React interface connects to a Node.js and Express API backed by Sequelize and MySQL.",
      technologies: [
        "Next.js",
        "React",
        "Sass",
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "JWT",
        "Redis",
        "Nginx",
      ],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/hariharan2604/PostInvest-Pro-Frontend",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/hariharan2604/PostInvest-Pro",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Resource Booking System",
      dates: "",
      meta: "Backend API",
      active: true,
      href: "https://github.com/hariharan2604/resource-booking-system",
      description:
        "Built a REST API for booking rooms, vehicles, and equipment. Implemented JWT authentication and role-based access control with Spring Security, profile-driven H2/MySQL persistence, conditional Redis caching, and typed configuration. The service also exposes API documentation and health/metrics endpoints.",
      technologies: [
        "Java 21",
        "Spring Boot 4",
        "Spring Security",
        "JWT",
        "H2 / MySQL",
        "JPA / Hibernate",
        "Redis",
        "JUnit",
        "Mockito",
        "Docker",
        "Gradle",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/resource-booking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Splitwise MVP API",
      dates: "2026",
      meta: "Backend API",
      active: true,
      href: "https://github.com/hariharan2604/splitwise",
      image: undefined,
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/splitwise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      description:
        "Built an expense-sharing API with Node.js, Express, Sequelize, and MySQL. Supports user and expense management, equal, exact, and percentage splits, date-range activity, and balances by counterparty and currency. Authentication is intentionally outside this MVP.",
      technologies: [
        "Node.js",
        "Express.js",
        "Sequelize",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      title: "Water & Power Monitor",
      dates: "",
      meta: "IoT Dashboard",
      active: true,
      href: "https://github.com/hariharan2604/Water_analysis_front",
      image: undefined,
      video: "",
      links: [
        {
          type: "Frontend",
          href: "https://github.com/hariharan2604/Water_analysis_front",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/hariharan2604/Water_analysis_backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      description:
        "Built a live dashboard for two homes that displays water-tank levels, instant power, pump status, and monthly electricity usage. The React interface receives sensor readings over WebSocket and fetches monthly usage from an Express and MongoDB API.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "WebSocket",
        "IoT",
      ],
    },
    {
      title: "AI Traffic Signal Control",
      dates: "2025",
      meta: "Computer Vision",
      href: "https://github.com/hariharan2604/AI-Based-Traffic-Control",
      active: true,
      description:
        "Built a video-driven traffic-control system using YOLO-based vehicle processing, MQTT for signal and emergency events, and WebSockets for live streams. The application coordinates video processing and signal cycling across configured camera feeds.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLOv12",
        "MQTT",
        "WebSocket",
        "TensorRT",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/AI-Based-Traffic-Control",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Smart Campus Hybrid Detection",
      dates: "2023",
      meta: "Smart Campus",
      href: "https://github.com/hariharan2604/Smart-Campus-Manager",
      active: true,
      description:
        "Built a computer-vision pipeline that combines YOLO segmentation with Faster R-CNN object detection on image and video inputs. The project uses Python, OpenCV, PyTorch, and TorchVision, with WebSocket support for streamed results.",
      technologies: [
        "Python",
        "OpenCV",
        "PyTorch",
        "TorchVision",
        "YOLO",
        "Faster R-CNN",
        "WebSocket",
        "TensorRT",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/Smart-Campus-Manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
