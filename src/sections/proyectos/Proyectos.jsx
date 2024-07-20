import classNames from 'classnames'
import React from 'react'
import { useModeContext } from '../../context/mode/Mode'
import FiltersProyects from '../../components/proyectos/FiltersProyects'
import ProyectosList from '../../components/proyectos/ProyectosList'
export default function Proyectos() {
    const { mode } = useModeContext()
    return (
        <div id='proyectosScroll' className='w-[90%] md:w-[70%] mx-auto text-center sm:text-left'>
            <div>
                <span className='text-[#bb87f3] font-semibold'>Proyectos</span>

                <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>Mis Proyectos</h1>
                <div >
                    <FiltersProyects />
                </div>
            </div>
            <div>

                <ProyectosList/>

            </div>
        </div>
    )
}
