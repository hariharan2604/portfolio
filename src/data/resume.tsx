import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hariharan Jayachandran",
  initials: "HJ",
  url: "https://hariharanj.vercel.app/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Java backend engineer building secure, scalable microservices and REST APIs with Spring Boot, Spring Data, and SQL.",
  summary:
    "Java backend engineer with experience building and maintaining enterprise-grade microservices and REST APIs for large-scale e-commerce systems. Strong in Java, Spring Boot, Spring MVC, Spring Data JPA/Hibernate, Spring Security, SQL, and DB2/MySQL. Improved API performance and build efficiency through query optimization, caching, payload improvements, and streamlined bundling. Experienced with Docker, AWS, Git, API testing, and Agile delivery.",
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
        "Designed and developed enterprise backend systems for a large-scale e-commerce client, contributing to 4–6 microservices and REST APIs. Built high-throughput services with Java, Spring Boot, Spring MVC, and Spring Data JPA/Hibernate; implemented persistence using DB2 and optimized SQL queries. Applied Spring Security for authentication and access control, and collaborated with QA, analysts, and product owners in Agile ceremonies. Used Git and established engineering practices to maintain production applications.",
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
        "Improved API response times by 40% through SQL query optimization, caching, and efficient payload handling, contributing to a 25% increase in user satisfaction. Replaced Webpack with ESBuild, reducing bundling time by 80% and accelerating CI/CD execution. Developed and maintained backend functionality with Express.js and MySQL, working with Git and Nginx.",
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
        "Bachelor of Technology in Information Technology. Graduated with a CGPA of 8.76/10, building a foundation in software engineering, algorithms, databases, and system design.",
    },
  ],
  projects: [
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
        "Built an expense-sharing API with Node.js, Express, Sequelize, and MySQL. Supports equal, exact, and percentage expense splits, expense activity over date ranges, and per-currency balances.",
      technologies: [
        "Node.js",
        "Express",
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
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "WebSocket",
        "IoT",
      ],
    },
    {
      title: "Resource Booking System",
      dates: "",
      meta: "Backend API",
      active: true,
      href: "https://github.com/hariharan2604/resource-booking-system",
      image: undefined,
      video: "",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/resource-booking-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      description:
        "Built a resource-booking backend with Java 21 and Spring Boot 4, exposing REST APIs to manage users, resources, and bookings. Added JWT authentication and role-based access control with Spring Security, layered controllers, services, and repositories, and MySQL persistence using Spring Data JPA/Hibernate. Added JUnit and Mockito tests for booking validation, and containerized the service with Docker.",
      technologies: [
        "Java 21",
        "Spring Boot 4",
        "Spring Security",
        "JWT",
        "MySQL",
        "JPA / Hibernate",
        "JUnit",
        "Mockito",
        "Docker",
        "Gradle",
      ],
    },
    {
      title: "AI-based Traffic Control System",
      dates: "2025",
      meta: "Computer Vision",
      href: "https://github.com/hariharan2604/AI-Based-Traffic-Control",
      active: true,
      description:
        "Built a computer-vision prototype that detects real-time vehicle density with Python, OpenCV, and YOLO to adjust traffic signals. Added MQTT-based emergency-vehicle notifications.",
      technologies: [
        "Python",
        "OpenCV",
        "YOLO",
        "MQTT",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/AI-Based-Traffic-Control",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/traffic.webp",
      video: "",
    },
    {
      title: "Post Invest Pro",
      href: "https://post-invest-pro-frontend.vercel.app/",
      dates: "2024",
      meta: "FinTech Platform",
      active: true,
      description:
        "Built an AI-powered investment platform for 500+ agents and brokers, combining portfolio tracking and analytics. Automated data analysis and predictive insights, improving processing efficiency by 30%, with an interactive Next.js dashboard.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Sequelize",
        "TailwindCSS",
        "Node.js",
        "Nginx",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/hariharan2604/PostInvest-Pro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/investment.webp",
      video: "",
    },

    {
      title: "Smart Campus Management Dashboard",
      dates: "2023",
      meta: "Smart Campus",
      href: "https://github.com/hariharan2604/Smart-Campus-Manager",
      active: true,
      description:
        "Created a smart-campus dashboard using Next.js, Python, and OpenCV to monitor resources and support allocation decisions, improving resource-allocation efficiency by 20%.",
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
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/campus_manager.webp",
      video: "",
    },
  ],
} as const;
