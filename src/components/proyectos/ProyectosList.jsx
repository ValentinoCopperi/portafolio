'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BookOpen, Brain, Pencil, VolumeX } from 'lucide-react'
import Modal from './Modal'
import { useModeContext } from '../../context/mode/Mode'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'
import { proyectosListEn, proyectosListSp } from '../../lib/proyectos'


export default function ProyectosList({ filter , handleResetFilters}) {

    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext()
    const [visibleProjects, setVisibleProjects] = useState(100)
    const [proyectos, setProyectos] = useState(proyectosListEn)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)


    useEffect(() => {
        setProyectos(idioma === 'SP' ? proyectosListSp : proyectosListEn)
    }, [idioma])



    const getFilteredProjects = () => {

        if (!filter || filter.length === 0) return proyectos;

        return proyectos.filter((proyecto) =>
            filter.every((language) => proyecto.tecnologias.includes(language))
        );

    }

    const handleProjectClick = (project) => {
        setSelectedProject(project)
        setModalOpen(true)
    }

    const handleLoadMore = () => {
        setVisibleProjects(prevVisible => prevVisible + 3)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto py-8 px-4 sm:px-6 lg:px-8"
        >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <AnimatePresence>
                    {getFilteredProjects().length === 0 ?

                        <div
                            className="col-span-3 flex flex-col items-center justify-center text-white py-20"
                        >
                            <motion.h1
                                className="text-2xl font-bold mb-4 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {idioma === "SP" ? "No se encontraron proyectos" : "No products found"}
                            </motion.h1>
                            <motion.p
                                className="text-sm text-gray-400 text-center mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                {idioma === "SP"
                                    ? "Intenta ajustar los filtros o recargar la página."
                                    : "Try adjusting the filters or reloading the page."}
                            </motion.p>
                            <motion.button
                                className={`px-6 py-3 rounded-full shadow-md text-white bg-violet-700 ${mode ? "hover:bg-violet-600" : "hover:bg-violet-800"}`}
                                onClick={handleResetFilters} // Función para reiniciar filtros
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 0px 15px rgba(123, 58, 237, 0.5)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {idioma === "SP" ? "Restablecer Filtros" : "Reset Filters"}
                            </motion.button>
                        </div>

                        :
                        getFilteredProjects().slice(0, visibleProjects).map((proyecto, index) => (
                            <motion.article
                                key={proyecto.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.1 }}
                                className={`bg-[#fbfcfc] shadow-md rounded-lg overflow-hidden transition-all duration-300 ${mode ? 'light-proyecto-bg' : 'dark-proyecto-bg'
                                    }`}
                                whileHover={{
                                    scale: 1.01,
                                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: mode ? '#f0f0f0' : '#2a2a2a',
                                }}
                            >
                                <div className='aspect-video w-full overflow-hidden'>
                                    <motion.img
                                        src={`/proyectos/${proyecto.img}`}
                                        alt={proyecto.nombre}
                                        className='w-full h-full object-cover object-center'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className='p-4 relative'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <motion.h2
                                            className={`text-xl font-bold ${mode ? 'text-black' : 'text-white'}`}
                                            animate={{ y: [0, -2, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            {proyecto.nombre}
                                        </motion.h2>
                                        <motion.span
                                            className={`text-xs font-medium text-nowrap px-2 py-1 rounded-full ${mode ? 'bg-violet-200 text-violet-300' : 'bg-violet-800 text-violet-200'
                                                }`}
                                        >
                                            {proyecto.stack}
                                        </motion.span>
                                    </div>
                                    <p className={`text-sm mb-4 line-clamp-3 ${mode ? 'text-gray-700' : 'text-gray-300'}`}>
                                        {proyecto.desc}
                                    </p>
                                    <div className='mb-4'>
                                        <h3 className={`text-sm font-semibold mb-2 ${mode ? 'text-black' : 'text-white'}`}>
                                            {idioma === "SP" ? "Tecnologías:" : "Technologies:"}
                                        </h3>
                                        <div className='flex flex-wrap gap-2'>
                                            {proyecto.tecnologias.map((tech, index) => (
                                                <motion.span
                                                    key={index}
                                                    className='px-2 py-1 bg-[#8246c6b5]  text-white rounded-full text-xs'
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4'>
                                        <motion.button
                                            onClick={() => handleProjectClick(proyecto)}
                                            className={`w-full sm:w-auto px-4 py-2 rounded-full text-white text-sm shadow-sm shadow-violet-500 ${mode ? 'bg-violet-700' : 'bg-[#9f55f2]'
                                                }`}
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: '0px 0px 15px rgba(123, 58, 237, 0.5)',
                                                backgroundColor: mode ? '#6d28d9' : '#7c3aed'
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {idioma === "SP" ? "Leer más" : "Read more"}
                                        </motion.button>
                                        <motion.a
                                            href={proyecto.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full sm:w-auto px-4 py-2 rounded-full flex items-center justify-center text-white text-sm ${mode ? 'bg-violet-700' : 'bg-[#9f55f2]'
                                                }`}
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: '0px 0px 15px rgba(123, 58, 237, 0.5)',
                                                backgroundColor: mode ? '#6d28d9' : '#7c3aed'
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="mr-1">{idioma === "SP" ? "Ver Proyecto" : "View Project"}</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                </AnimatePresence>
            </div>

            {visibleProjects < proyectos.length && (
                <div className="flex justify-center mt-8">
                    <motion.button
                        onClick={handleLoadMore}
                        className={`px-6 py-2 rounded-full transition-colors duration-300 font-semibold text-sm ${mode ? 'bg-violet-700 text-white' : 'bg-[#9f55f2] text-white'
                            }`}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0px 0px 15px rgba(123, 58, 237, 0.5)',
                            backgroundColor: mode ? '#6d28d9' : '#7c3aed'
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            scale: [1, 1.05, 1],
                            transition: { duration: 2, repeat: Infinity }
                        }}
                    >
                        {idioma === "SP" ? "Ver más" : "Load More"}
                    </motion.button>
                </div>
            )}

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                project={selectedProject}
            />
        </motion.div>
    )
}

