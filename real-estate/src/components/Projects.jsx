import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion";

const Projects = () => {

    return (
        <motion.div 
        initial={{opacity: 0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
        className=' container mx-auto py-4 pt-50 px-6 md:px-20 lg:px-32 w-full  ' id='Projects'>
            <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className=' underline underline-offset-4 under font-light'>Complated</span></h1>
            <p className=' text-center to-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
        
            {/*----------------- Project Slider container----------- */}

            <div className='  flex w-full'  >
                <div className='flex w-full overflow-x-auto  overflow-hidden h-auto scrol'>
                    {projectsData.map((Project, index) => (
                        <div key={index} className=' relative min-w-[250px]  m-[20px] flex-wrap '>
                            <img src={Project.image} alt={Project.title} className='' /> 
                            <div className=' absolute left-0 right-0 bottom-[-30px] flex justify-center '>
                                <div className=' inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className=' text-xl font-semibold text-gray-800'>{Project.title}</h2>
                                    <p className=' text-gray-500 text-sm'>{Project.price}<span className=' px-1'>|</span>{Project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
