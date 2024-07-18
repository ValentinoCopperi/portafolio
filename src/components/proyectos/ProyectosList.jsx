import React, { useEffect, useState } from 'react'
import { proyectosList } from '../../lib/proyectos.js'
import './proyect-list.css'
import { useModeContext } from '../../context/mode/Mode'
import classNames from 'classnames'
import { useProyectosContext } from '../../context/proyectos/Proyectos.jsx'
export default function ProyectosList() {
    const { mode } = useModeContext()
    const {proyectos,proyectosFiltrados,noMatches} = useProyectosContext()
    console.log(noMatches)
    if(noMatches) {
        return <h1 className='text-white text-center text-2xl py-12'>No hay proyectos encontrados</h1>
    }
   
    return (
        <>
            {
                proyectos
                .filter((proy) => {
                    return proyectosFiltrados.length > 0 ? (
                        proyectosFiltrados.some(proyFiltr => proyFiltr.id === proy.id)
                    )
                    :  proyectos
                   
                })
                .map((proyecto) => {
                    return (
                        <article key={proyecto.id} className={classNames('group  relative -mx-4 sm:-mx-8  rounded-3xl mt-10  shadow-xl  hover:py-1 transition-all border border-transparent   sm:gap-8 sm:flex  duration-300',{'light-proyecto-bg':mode,'dark-proyecto-bg':!mode})}>
                            <div className="sm:w-1/3 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                                <a href={proyecto.link} target="_blank">
                                    <img
                                        src={`/proyectos/${proyecto.img}`}
                                        alt={proyecto.nombre}
                                        loading="lazy"
                                        width="1000"
                                        height="667"
                                        className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </a>
                            </div>

                            <div className="sm:p-2 sm:pl-0 sm:w-2/3 text-center md:text-left">
                                <span className="mt-4 mb-2 inline-block font-medium text-gray-400  sm:mt-0">{proyecto.date}</span>
                                <h1 className={classNames('text-2xl font-semibold',{'text-violet-800':mode,'text-[#bb87f3]':!mode})}>
                                    {proyecto.nombre}
                                </h1>
                                <p className="mt-6 text-white font-extralight ">
                                    {proyecto.desc}
                                </p>
                                <p className='py-3 underline font-semibold text-white'>
                                    <a href={proyecto.link} target="_blank">Ir al sitio</a>
                                </p>

                                <div className="flex-col md:flex-row  gap-2 max-[600px]:p-2">
                                    {
                                        proyecto.tecnologias.map((tecn) => {
                                            return (
                                                <a href="#" target="_blank" className={classNames(' px-3 py-1 rounded-full text-sm font-semibold transition duration-300 hover:border-transparent  hover:bg-[#5d15ab] hover:text-white',{'text-violet-800 border-violet-800':mode,'text-[#bb87f3] border-[#bb87f3] ':!mode})}>
                                                    {tecn}
                                                </a>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}
