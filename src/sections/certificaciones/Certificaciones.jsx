import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useModeContext } from '../../context/mode/Mode'
import './certificaciones.css'
import { certificacionesEn , certificacionesSp } from '../../lib/certificaciones'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'
export default function Certificaciones() {
    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext();

    const [certificaciones,setCertificaciones] = useState([]);

    useEffect(()=>{
        setCertificaciones( idioma === "SP" ? certificacionesSp : certificacionesEn  )
    },[idioma]);



    return (
        <div id='certificacionesScroll' className='w-full md:w-[80%] py-14 mx-auto'>
            <div className='text-center'>
                <span className='text-[#bb87f3] font-semibold'> {idioma === "SP" ? "Certificaciones" : "Certifications" } </span>

                <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>
                {idioma === "SP" ? "Mis Certificaciones" : "My Certifications" }
                </h1>

            </div>

            <div className='w-full flex flex-col md:flex-row md:flex-wrap py-8'>
                {
                    certificaciones.map((cert) => {
                        return (
                            <a
                                key={cert.id}
                                href={cert.link}
                                target='_blank'
                                rel="noopener noreferrer" // Added for security
                                className={classNames(
                                    'w-[95%] md:w-auto lg:w-[30%]  mx-auto m-3 bg-[#fbfcfc] shadow-md flex flex-col items-center py-4 md:py-6 md:px-3 rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-xl',
                                    { 'light-proyecto-bg': mode, 'dark-proyecto-bg': !mode }
                                )}
                            >
                                <div className='w-full flex items-center'>
                                    <div className='w-1/3 px-3'>
                                        <img src={`/certificados/${cert.img}`} alt={cert.title} width={80} className='rounded-full' />
                                    </div>
                                    <div className='w-2/3'>
                                        <h5 className={classNames('text-[14px] font-normal', { 'text-violet-800': mode, 'text-[#bb87f3]': !mode })}>
                                            {cert.data}
                                        </h5>
                                        <h1 className={classNames('text-[22px] font-semibold', { 'text-black': mode, 'text-white': !mode })}>
                                            {cert.title}
                                        </h1>
                                        <h5 className={classNames('text-[14px] font-normal', { 'text-violet-800': mode, 'text-[#bb87f3]': !mode })}>
                                            {cert.place}
                                        </h5>
                                    </div>
                                </div>

                                {/* Utilidades Section */}
                                {cert.utilidades && (
                                    <div className='w-full px-4 mt-4'>
                                        <h2 className={classNames('text-[16px] font-semibold mb-2', { 'text-black': mode, 'text-white': !mode })}>
                                            {idioma === "SP" ? "Utilidades aprendidas: " : "Skills learned: " }
                                        </h2>
                                        <ul className='list-disc pl-4'>
                                            {cert.utilidades.map((utilidad, index) => (
                                                <li key={index} className={classNames('text-[14px] font-normal', { 'text-black': mode, 'text-white': !mode })}>
                                                    <strong>{utilidad.habilidad}:</strong> {utilidad.descripcion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </a>
                        );
                    })
                }
            </div>

        </div>
    )
}
