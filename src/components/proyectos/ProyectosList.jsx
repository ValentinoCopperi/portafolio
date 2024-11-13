import React, { useEffect, useState } from 'react';
import { useModeContext } from '../../context/mode/Mode';
import classNames from 'classnames';
import { useIdiomaContext } from './../../context/idioma/Idioma-Context';
import { proyectosListEn, proyectosListSp } from '../../lib/proyectos.js';
import { ArrowRight, BookOpen, Brain, Pencil, VolumeX } from 'lucide-react';

export default function ProyectosList() {
    const { mode } = useModeContext();
    const { idioma } = useIdiomaContext();
    const [activeProject, setActiveProject] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState(2);
    const [proyectos, setProyectos] = useState(proyectosListEn); // Inicializar el estado vacío

    // Selecciona la lista de proyectos según el idioma
    useEffect(() => {
        // Actualiza la lista de proyectos al cambiar el idioma
        setProyectos(idioma === 'SP' ? proyectosListSp : proyectosListEn);
    }, [idioma]);

    const getIcon = (stack) => {
        switch (stack.toLowerCase()) {
            case 'frontend':
                return <BookOpen className="w-8 h-8" />;
            case 'backend':
                return <Brain className="w-8 h-8" />;
            case 'full stack':
                return <Pencil className="w-8 h-8" />;
            default:
                return <VolumeX className="w-8 h-8" />;
        }
    };

    const handleProjectClick = (id) => {
        setActiveProject(activeProject === id ? null : id);
    };

    const handleLoadMore = () => {
        setVisibleProjects(prevVisible => prevVisible + 3);
    };

    return (
        <div>

            <div className='space-y-16'>
                {proyectos.slice(0, visibleProjects).map((proyecto) => (
                    <article
                        key={proyecto.id}
                        className={classNames(
                            'bg-[#fbfcfc] shadow-lg w-3/4 mx-auto rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl',
                            { 'light-proyecto-bg': mode, 'dark-proyecto-bg': !mode }
                        )}
                    >
                        <div className='aspect-video w-full overflow-hidden'>
                            <img
                                src={`/proyectos/${proyecto.img}`}
                                alt={proyecto.nombre}
                                className='w-full h-full object-cover object-center'
                            />
                        </div>
                        <div className='p-6 md:p-8'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className={classNames('text-3xl font-bold', { 'text-black': mode, 'text-white': !mode })}>
                                    {proyecto.nombre}
                                </h2>
                                <span className={classNames('text-sm font-medium px-3 py-1 rounded-full', { 'bg-violet-100 text-violet-800': mode, 'bg-violet-800 text-violet-100': !mode })}>
                                    {proyecto.stack}
                                </span>
                            </div>
                            <p className={classNames('text-lg mb-6', { 'text-gray-700': mode, 'text-gray-300': !mode })}>
                                {proyecto.desc}
                            </p>
                            <div className='mb-6'>
                                <h3 className={classNames('text-xl font-semibold mb-2', { 'text-black': mode, 'text-white': !mode })}>
                                    {idioma === "SP" ? "Tecnologías:" : "Technologies:"}
                                </h3>
                                <div className='flex flex-wrap gap-2'>
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className='px-3 py-1 bg-[#bb87f3] text-white rounded-full text-sm'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='mb-6'>
                                <h3 className={classNames('text-xl font-semibold mb-2', { 'text-black': mode, 'text-white': !mode })}>
                                    {idioma === "SP" ? "Detalles:" : "Details:"}
                                </h3>
                                <ul className='list-disc pl-5 space-y-2'>
                                    {proyecto.detalles.map((detalle, index) => (
                                        <li key={index} className={classNames('text-base', { 'text-gray-700': mode, 'text-gray-300': !mode })}>
                                            <strong>{detalle.titulo}:</strong> {detalle.descripcion}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-end'>
                                <a
                                    href={proyecto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classNames(
                                        'px-6 py-2 rounded-full flex items-center justify-center transition-colors duration-300 text-white',
                                        { 'bg-violet-600 hover:bg-violet-700': mode, 'bg-[#bb87f3] hover:bg-[#a76df0]': !mode }
                                    )}
                                >
                                    {idioma === "SP" ? "Ver Proyecto" : "View Project"}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>



            {visibleProjects < proyectos.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className={classNames(
                            'px-8 py-4 rounded-full transition-colors duration-300 font-semibold text-xl sm:text-base',
                            { 'bg-violet-600 hover:bg-violet-700 text-white': mode, 'bg-[#bb87f3] hover:bg-[#a76df0] text-white': !mode }
                        )}
                    >
                        {idioma === "SP" ? "Ver más" : "Load More"}
                    </button>
                </div>
            )}

        </div>
    );
}
