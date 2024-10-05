import React from 'react'
import { useModeContext } from '../../context/mode/Mode'
import classNames from 'classnames'
import EstudiosLayout from '../../components/estudios/EstudiosLayout'
import { useIdiomaContext } from '../../context/idioma/Idioma-Context'

export default function Estudios() {
    const { mode } = useModeContext()
    const { idioma } = useIdiomaContext();
    return (
        <div id='estudiosScroll' className='w-full md:w-[80%] py-10 mx-auto text-center sm:text-left'>
            <div>
                <span className='text-[#bb87f3] font-semibold'> Skills </span>

                <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>Skills</h1>

            </div>

            <EstudiosLayout/>

        </div>
    )
}
