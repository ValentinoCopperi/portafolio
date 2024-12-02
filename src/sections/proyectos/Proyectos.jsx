import classNames from 'classnames'
import React, { useState } from 'react'
import { useModeContext } from '../../context/mode/Mode'
import ProyectosList from '../../components/proyectos/ProyectosList'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'
import { FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiJsonwebtokens, Si500Px } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion'


const filters = ['NestJS', 'NextJS', 'TypeScript', 'React', 'TailwindCSS', 'MongoDB', 'NodeJS', 'WebSockets', 'PostgreSQL', 'JAVA'];


export default function Proyectos() {
    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext();

    const [filter, setFilter] = useState([]);

    const addFilter = (newElement) => {

        if (filter.includes(newElement)) {
            removeFilter(newElement);
            return;
        };

        setFilter((prev) => [...prev, newElement]);
    };

    const removeFilter = (elementToRemove) => {
        setFilter((prev) => prev.filter((item) => item !== elementToRemove));
    };

    const handleResetFilters = () => {
        setFilter([]);
    }

    const getClassname = (filterName) => {
        return filter.includes(filterName) ? "bg-violet-800 shadow-violet-800 shadow-md" : "bg-violet-500";
    };



    const getIconForTechnology = (technology) => {
        switch (technology.toLowerCase()) {
            case "nestjs":
                return <SiNestjs className="text-white" />;
            case "nextjs":
                return <SiNextdotjs className="text-white" />;
            case "typescript":
                return <SiTypescript className="text-white" />;
            case "react":
                return <FaReact className="text-white" />;
            case "tailwindcss":
                return <SiTailwindcss className="text-white" />;
            case "mongodb":
                return <SiMongodb className="text-white" />;
            case "nodejs":
                return <FaNodeJs className="text-white" />;
            case "jwt":
                return <SiJsonwebtokens className="text-white" />;
            case "websockets":
                return <Si500Px className="text-white" />;
            case "postgresql":
                return <SiPostgresql className="text-white" />;
            case "java":
                return <FaJava className="text-white font-bold " />;
            default:
                return <span className="w-6 h-6 bg-gray-500 rounded-full"></span>;
        }
    };

    const texts = {
        "SP": {
            title: "Proyectos",
            subtitle: "Mis Proyectos"
        },
        "EN": {
            title: "Projects",
            subtitle: "My Projects"
        }
    }

    console.log(filter)
    return (
        <div id='proyectosScroll' className='md:w-[90%] mx-auto'>
            <div className='text-center'>
                <span className='text-[#bb87f3] font-semibold'>{texts[idioma].title}</span>

                <h1 className={classNames('text-5xl py-2 pb-8  font-semibold', { 'text-black': mode, 'text-white': !mode })}>
                    {texts[idioma].subtitle}
                </h1>

            </div>
            <div>

                <div className="flex justify-center gap-3 py-4 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => addFilter(filter)}
                            className={`flex items-center gap-2  text-white   rounded-full px-4 py-2 shadow-md transition-all duration-300 ease-in-out 
                            hover:bg-violet-800 hover:shadow-violet-800 hover:shadow-md    
                            ${getClassname(filter)}`}

                        >
                            {/* Icon */}
                            <span className="w-6 h-4">{getIconForTechnology(filter)}</span>
                            {/* Text */}
                            <span className="text-sm font-medium">{filter}</span>
                        </button>
                    ))}
                </div>

                <ProyectosList filter={filter} handleResetFilters={handleResetFilters} />

            </div>
        </div>
    )
}
