import React from "react";
import { motion } from "framer-motion";
import { frontendProjects} from "../constants/frontPro.jsx";
import { fullStackProjects } from "../constants/fullStackPro.jsx";
import { SaasProjects } from  "../constants/SaasPro.jsx";
export default function DialogBasicOne() {
  return (
    <section className='mt-20 border-2'>

      <div className="border-b border-white pb-5">
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
            frontendProjects.map(({id, Project}) => 
              (
                <React.Fragment key={id}>
                  {Project}
                </React.Fragment>
              )
            )
          }
        </div>
      </div>

      <div className="border-b border-white pb-5"> 
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
            fullStackProjects.map(({id, Project}) =>
              (
                <React.Fragment key={id}>
                  {Project}
                </React.Fragment>
              )
          )
          }
        </div>
      </div>

      <div className="border-b border-white pb-5">
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
            SaasProjects.map(({id, Project}) => 
              (
                <React.Fragment key={id}>
                  {Project}
                </React.Fragment>
              )
            )
          }
        </div>
      </div>

    </section>
  );
}
