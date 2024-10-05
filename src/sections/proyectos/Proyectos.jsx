import classNames from 'classnames'
import React from 'react'
import { useModeContext } from '../../context/mode/Mode'
import ProyectosList from '../../components/proyectos/ProyectosList'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'
export default function Proyectos() {
    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext();

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
    return (
        <div id='proyectosScroll' className='w-[90%] md:w-[70%] mx-auto'>
            <div className='text-center'>
                <span className='text-[#bb87f3] font-semibold'>{texts[idioma].title}</span>

                <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>
                    {texts[idioma].subtitle}
                </h1>

            </div>
            <div>

                <ProyectosList />

            </div>
        </div>
    )
}
