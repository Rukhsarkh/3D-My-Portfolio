import React from "react";
import { motion } from "framer-motion";
import { frontendProjects} from "../constants/frontPro.jsx";
import { fullStackProjects } from "../constants/fullStackPro.jsx";
import { SaasProjects } from  "../constants/SaasPro.jsx";
import { DotIcon, EarthIcon, Eye, GitBranchIcon, View, ViewIcon } from "lucide-react";
export default function DialogBasicOne() {
  return (
    <section className='my-20 pt-5' id="projects">

      <div className="pb-5">
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity:1 }} transition={{ ease: 'easeOut', duration: 0.9 }} viewport={{amount: 0.3}}>
        <div className='text-center text-white my-10 border-2 border-white rounded-xl w-fit mx-auto p-4'>
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              Frontend
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-blue-800">
              Projects
            </span>
        </div>
        </motion.div>

        <div className='flex flex-wrap justify-center gap-5 mt-10'>
          {
            frontendProjects.map((item) => 
              (
                <div className="w-96 h-80 rounded-3xl border-2 p-2 m-2 text-white" key={item.id} id="project">
                  <img src={item.image} className="rounded-3xl"/>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                  <div className="inline-flex justify-center items-cente gap-4">
                    <div className="inline-flex items-center gap-1">
                    <Eye className="text-blue-300"/>
                    <a href={item.link} target="_blank">View</a>
                    </div>
                  <div className="inline-flex items-center gap-1">
                  <GitBranchIcon className="text-emerald-500"/>
                  <a href={item.git} target="blank">Source code</a>
                  </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>

      <div className="pb-5"> 
      <motion.div initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} whileInView={{ x: 0, opacity: 1 }} viewport={{amount: 0.3}}>
        <div className='text-center text-white mt-10 border-2 border-white rounded-xl w-fit p-4 mx-auto'>
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              Mern / Next full stack &
            </span>
            <p className="text-2xl sm:text-4xl font-bold text-blue-800">
              Data Science Projects
            </p>
        </div>
      </motion.div>
      
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {
            fullStackProjects.map((item) =>
              (
                <div className="w-96 h-80 rounded-3xl border-2 p-2 m-2" key={item.id} id="project">
                  <img src={item.image} className="object-cover rounded-3xl"/>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              )
          )
          }
        </div>
      </div>

      <div className="pb-5">
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity:1 }} transition={{ ease: 'easeOut', duration: 0.9 }} viewport={{amount: 0.3}}>
        <div className='text-center text-white mt-10 border-2 border-white rounded-xl w-fit mx-auto p-4'>
            <span className="text-xl sm:text-3xl font-bold text-justify tracking-wide p-2 uppercase">
              SAAS
            </span>
            <span className="text-2xl sm:text-4xl font-bold text-blue-800">
              Projects
            </span>
        </div>
        </motion.div>

        <div className='flex flex-wrap justify-center gap-5 mt-10'>
          {
            SaasProjects.map((item) => 
              (
                <div className="w-96 h-80 rounded-3xl border-2 p-2 m-2" key={item.id} id="project">
                  <img src={item.image} className="object-cover rounded-3xl"/>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              )
            )
          }
        </div>
      </div>

    </section>
  );
}
