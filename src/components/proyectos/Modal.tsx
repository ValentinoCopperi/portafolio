import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useModeContext } from '../../context/mode/Mode'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    project: any
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext()

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50   bg-opacity-50 flex items-center justify-center overflow-hidden"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className={`rounded-lg p-6  md:max-w-[90%] w-full max-h-[90vh] overflow-y-auto ${
                        mode ? 'bg-[#fbfcfc] text-gray-800' : 'bg-[#2a2a2a] text-gray-200'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">{project.nombre}</h2>
                        <button 
                            onClick={onClose} 
                            className={`text-gray-500 hover:text-gray-700 transition-colors ${
                                mode ? 'hover:bg-gray-200' : 'hover:bg-gray-700'
                            } rounded-full p-1`}
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                            src={`/proyectos/${project.img}`}
                            alt={project.nombre}
                            className="w-full h-auto object-center object-cover"
                        />
                    </div>
                    <p className="mb-4">{project.desc}</p>
                    <h3 className="text-xl font-semibold mb-2">{idioma === "SP" ? "Tecnologías:" : "Technologies:"}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tecnologias.map((tech: string, index: number) => (
                            <span key={index} className={`px-2 py-1 rounded-full text-sm ${
                                mode ? 'bg-violet-100 text-violet-800' : 'bg-violet-800 text-violet-100'
                            }`}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{idioma === "SP" ? "Detalles:" : "Details:"}</h3>
                    <ul className="list-disc pl-5 mb-4">
                        {project.detalles.map((detalle: any, index: number) => (
                            <li key={index}>
                                <strong>{detalle.titulo}:</strong> {detalle.descripcion}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block px-4 py-2 rounded-full text-white transition-colors ${
                            mode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-[#bb87f3] hover:bg-[#a76df0]'
                        }`}
                    >
                        {idioma === "SP" ? "Ver Proyecto" : "View Project"}
                    </a>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

