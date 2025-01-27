export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -7, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 12, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-8, -10, -9]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const techStackes = [
  {
    title: "JavaScript",
    icon: <img src="/TechStack/js.png" />,
    id: 1,
  },
  {
    title: "TypeScript",
    icon: <img src="/TechStack/TS.png" />,
    id: 2,
  },
  {
    title: "Java",
    icon: <img src="/TechStack/java.png"></img>,
    id: 3,
  },
  {
    title: "CSS3",
    icon: <img src="/TechStack/css.png"></img>,
    id: 4,
  },
  {
    title: "Tailwind Css",
    icon: <img src="/TechStack/tailwindCSS.png" />,
    id: 5,
  },
  {
    title: "Shadcn Ui",
    icon: <img src="/TechStack/shadcn.png" />,
    id: 6,
  },
  {
    title: "Redux",
    icon: <img src="/TechStack/redux.png"></img>,
    id: 7,
  },
  {
    title: "SQL",
    icon: <img src="/TechStack/SQL.png"></img>,
    id: 8,
  },
  {
    title: "MongoDB",
    icon: <img src="/TechStack/mongoDB.png" />,
    id: 9,
  },
  {
    title: "Express.js",
    icon: <img src="/TechStack/expressjs.png" />,
    id: 10,
  },
  {
    title: "React.js",
    icon: <img src="/TechStack/reactlogo.png" />,
    id: 11,
  },
  {
    title: "Node.js",
    icon: <img src="/TechStack/nodejs.png" />,
    id: 12,
  },
  {
    title: "Three.js",
    icon: <img src="/TechStack/threejs.png"></img>,
    id: 13,
  },
  {
    title: "Next.js",
    icon: <img src="/Techstack/nextjs.png"></img>,
    id: 14,
  },
];
