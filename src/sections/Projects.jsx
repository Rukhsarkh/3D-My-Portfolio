import React from "react";
import { motion } from "framer-motion";
import { frontendProjects } from "../constants/frontPro.jsx";
import { fullStackProjects } from "../constants/fullStackPro.jsx";
import { Eye, GitBranchIcon } from "lucide-react";

const Projects = () => {
  return (
    <section className="my-20 pt-5 px-4 sm:px-8 lg:px-16" id="projects">
      {/* Frontend Projects Section */}
      <div className="pb-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-center text-white my-10 border-2 border-white rounded-xl w-fit mx-auto p-4">
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              Frontend
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-blue-800">
              Projects({frontendProjects.length})
            </span>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {frontendProjects.map((item) => (
            <div
              className="max-lg:w-96 w-full border-2 p-2 m-2 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
                {item.id !== 2 && (
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex items-center text-blue-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Eye className="mr-1" />
                      <span>View</span>
                    </a>

                    <a
                      href={item.git}
                      target="_blank"
                      className="flex items-center text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <GitBranchIcon className="mr-1" />
                      <span>Source Code</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Stack & Data Science Projects Section */}
      <div className="pb-10">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-center text-white mt-10 border-2 border-white rounded-xl w-fit p-4 mx-auto">
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              Mern Full Stack
            </span>
            <p className="text-2xl sm:text-4xl font-bold text-blue-800">
              Projects ({fullStackProjects.length})
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {fullStackProjects.map((item) => (
            <div
              className="max-lg:w-96 w-full border-2 p-2 m-2 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex items-center text-blue-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Eye className="mr-1" />
                    <span>View</span>
                  </a>
                  <a
                    href={item.git}
                    target="_blank"
                    className="flex items-center text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <GitBranchIcon className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SAAS Projects Section (Commented Out) */}
      {/* <div className="pb-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="text-center text-white mt-10 border-2 border-white rounded-xl w-fit mx-auto p-4">
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              SAAS
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-blue-800">
              Projects
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-center">
          {SaasProjects.map((item) => (
            <div
              className="w-96 border-2 p-2 m-2 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              key={item.id}
            >
              <img src={item.image} alt={item.title} className="w-full rounded-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
