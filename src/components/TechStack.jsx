import { useMediaQuery } from "react-responsive";
import { Dock, DockIcon, DockItem, DockLabel } from "./Dock.jsx";
import { Dock2, DockIcon2, DockItem2, DockLabel2 } from "./Dock2.jsx";
import React from "react";
import { TextEffect } from "./TextEffect.jsx";

const data = [
  {
    title: "JavaScript",
    icon: <img src="public/TechStack/js.png" />,
    id: "1",
  },
  {
    title: "TypeScript",
    icon: <img src="public/TechStack/TS.png" />,
    id: "4",
  },
  {
    title: "Java",
    icon: <img src="public/TechStack/java.png"></img>,
    id: "2",
  },
  {
    title: "CSS3",
    icon: <img src="public/TechStack/css.png"></img>,
    id: "2",
  },
  {
    title: "Tailwind Css",
    icon: <img src="public/TechStack/tailwindCSS.png" />,
    id: "3",
  },
  {
    title: "Shadcn Ui",
    icon: <img src="public/TechStack/shadcn.png" />,
    id: "5",
  },
  {
    title: "Redux",
    icon: <img src="public/TechStack/redux.png"></img>,
    id: "13",
  },
  {
    title: "SQL",
    icon: <img src="public/TechStack/SQL.png"></img>,
    id: "15"
  },
  {
    title: "MongoDB",
    icon: <img src="public/TechStack/mongoDB.png" />,
    id: "7",
  },
  {
    title: "Express.js",
    icon: <img src="public/TechStack/expressjs.png" />,
    id: "8",
  },
  {
    title: "React.js",
    icon: <img src="public/TechStack/reactlogo.png" />,
    id: "6",
  },
  {
    title: "Node.js",
    icon: <img src="public/TechStack/nodejs.png" />,
    id: "9",
  },
  {
    title: "Next.js",
    icon: <img src="public/Techstack/nextjs.png"></img>,
    id: "10",
  },
  {
    title: "NextAuth",
    icon: <img src="public/TechStack/nextAuth.png"></img>,
    id: "15"
  },
  {
    title: "Three.js",
    icon: <img src="public/TechStack/threejs.png"></img>,
    id: "11",
  },
  {
    title: "GSAP",
    icon: <img src="public/TechStack/gsap.jpg"></img>,
    id: "12",
  },
];

const MernStackDock = () => {
  return (
    <div className="absolute sm:bottom-1 bottom-20 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3 bg-blue-700 dark:bg-blue-700">
        {data.map((item, id) => (
          <DockItem
            key={id}
            className="aspect-square rounded-full bg-white shadow-lg"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

const TechStackGrid = () => {
  return (
      <div className="grid-container">
        <div className="flex flex-row flex-wrap justify-between gap-1">
          {data.map((item) => (
            <div key={item.id}>
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg hover:shadow-xl hover:scale-150 transition-transform duration-300 ease-in-out hover:cursor-pointer">
                {React.cloneElement(item.icon, {
                  className: "w-full h-full object-contain",
                  alt: item.title,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

const TechStack = () => {
  const isMobile = useMediaQuery({ query: "min-width: 832px" });
  const isTablet = useMediaQuery({
    query: ("min-width: 832px", "max-width: 1024px"),
  });

  return (
    <section className="w-full min-h-80 grid grid-wrap grid-cols-2 c-space p-2 gap-3 sm:mt-13 mt-10">
      <div className="max-h-full">
      <div className="grid-container">
          <p className="className='mx-auto text-white sm:text-5xl text-2xl font-medium hero_tag text-gray_gradient p-3 border-2 border-white rounded-md grid-subtext'">
            Tech Stack
          </p>

        
          {/* teach you through portfolio */}
          <div className="grid-container justify-between grid grid-rows-2 gap-2">
            <p className="grid-subtext text-justify">
             ❛❛ I worked with a variety of frameworks, and tools that
              allow me to build robust and scalable applications ❜❜
            </p>
            <p className="grid-subtext grid grid-rows-2 gap-4">
              <ul>As a <span className="span-class">Frontend</span> Dev ⟶
                <li>⟶  Working with 3-D Visuals Libraries</li>
                <li>⟶  Developing Engaging U - Interfaces</li>
                <li>⟶  Making Responsive & Pixel Perfect Ui's</li>
              </ul>

              <ul>As a <span className="span-class">Backend</span> Dev ⟶
                <li>⟶ Bridging gap b/w innovation & Application</li>
                <li>⟶ Levaraging Ai Toolings</li>
                <li>⟶ Building Scalable Solutions </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
        

        <TechStackGrid/>
    </section>
  );
};

export default TechStack;
