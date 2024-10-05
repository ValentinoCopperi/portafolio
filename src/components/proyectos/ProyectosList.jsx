import React, { useEffect, useState } from 'react';
import { useModeContext } from '../../context/mode/Mode';
import classNames from 'classnames';
import { useIdiomaContext } from './../../context/idioma/Idioma-Context';
import { proyectosListEn, proyectosListSp } from '../../lib/proyectos.js';

export default function ProyectosList() {
    const { mode } = useModeContext();
    const { idioma } = useIdiomaContext();
    const [activeProject, setActiveProject] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [proyectos, setProyectos] = useState(proyectosListEn); // Inicializar el estado vacío

    // Selecciona la lista de proyectos según el idioma
    useEffect(() => {
        // Actualiza la lista de proyectos al cambiar el idioma
        setProyectos(idioma === 'SP' ? proyectosListSp : proyectosListEn);
    }, [idioma]);

    const handleProjectClick = (id) => {
        setActiveProject(activeProject === id ? null : id);
    };

    const handleLoadMore = () => {
        setVisibleProjects(prevVisible => prevVisible + 3);
    };

    return (
        <>
            <div className="flex flex-col space-y-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {proyectos.slice(0, visibleProjects).map((proyecto) => (
                    <article
                        key={proyecto.id}
                        className={classNames(
                            'group relative rounded-xl transition-all duration-500 ease-in-out',
                            'hover:shadow-2xl hover:scale-[1.02]',
                            'cursor-pointer h-[400px] sm:h-[500px] md:h-[600px]',
                            { 'bg-white text-gray-800': mode, 'bg-gray-800 text-white': !mode },
                            'border border-gray-200 dark:border-gray-700'
                        )}
                        onClick={() => handleProjectClick(proyecto.id)}
                    >
                        <div className="h-full w-full overflow-hidden">
                            <img
                                src={`/proyectos/${proyecto.img}`}
                                alt={proyecto.nombre}
                                loading="lazy"
                                className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{proyecto.nombre}</h2>
                                <p className="text-sm sm:text-base font-semibold text-blue-300 mb-1">{proyecto.stack}</p>
                                <p className="text-sm sm:text-base opacity-75">{proyecto.date}</p>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                "absolute overflow-auto inset-0 bg-black bg-opacity-90 text-white flex flex-col justify-start items-start p-6 transition-all duration-500 ease-in-out",
                                {
                                    "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100": !activeProject || activeProject !== proyecto.id,
                                    "translate-y-0 opacity-100": activeProject === proyecto.id
                                }
                            )}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-violet-400 font-bold mb-1">{proyecto.nombre}</h2>
                            <p className="text-sm sm:text-base font-semibold text-blue-300 mb-1">{proyecto.stack}</p>
                            <p className="text-sm sm:text-base mb-2">{proyecto.date}</p>
                            <p className="text-sm sm:text-base md:text-lg mb-4">{proyecto.desc}</p>

                            <div>
                                <h3 className='text-3xl font-semibold'>Detalles:</h3>
                                {proyecto.detalles.map((detalle, index) => (
                                    <div key={index}>
                                        <h4 className='py-2 text-2xl text-violet-600 font-semibold'>{detalle.titulo}</h4>
                                        {detalle.estrategia && <p>Estrategia: {detalle.estrategia}</p>}
                                        {detalle.guard && <p>Guard: {detalle.guard}</p>}
                                        <p>{detalle.descripcion}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">Tecnologías:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {proyecto.tecnologias.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-white bg-opacity-20 text-white text-xs sm:text-sm rounded-full transition-colors duration-300 hover:bg-opacity-30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={proyecto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-opacity-90 transition-colors duration-300 font-semibold text-sm sm:text-base"
                            >
                                Ver Proyecto
                            </a>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full opacity-0 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                            {window.innerWidth > 768 ? 'HOVER ME' : 'CLICK ME'}
                        </div>
                    </article>
                ))}
            </div>
            {visibleProjects < proyectos.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold text-sm sm:text-base"
                    >
                        Ver más
                    </button>
                </div>
            )}
        </>
    );
}
