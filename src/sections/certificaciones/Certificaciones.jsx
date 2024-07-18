import classNames from 'classnames'
import React from 'react'
import { useModeContext } from '../../context/mode/Mode'
import { certificaciones } from '../../lib/certificaciones'
import './certificaciones.css'
export default function Certificaciones() {
    const { mode } = useModeContext()
    return (
        <div className='w-[90%] md:w-[80%] py-10 mx-auto text-center sm:text-left'>
            <div>
                <span className='text-[#bb87f3] font-semibold'>Certificaciones</span>

                <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>Mis Certificados</h1>

            </div>

            <div className='w-full flex flex-col md:flex-row md:flex-wrap py-8'>
                {
                    certificaciones.map((cert) => {
                        return <a key={cert.id} href={cert.link} target='_blank' className={classNames('w-[95%]  md:w-auto lg:w-[30%]   md:hover:w-[31%] mx-auto m-3 bg-[#fbfcfc] shadow-md flex items-center py-4 md:py-6 md:px-3 rounded-2xl transition-all duration-500 cursor-pointer hover:w-[98%] hover:shadow-xl',{'light-proyecto-bg':mode , 'dark-proyecto-bg':!mode})}>
                            <div className='w-1/3 px-3'>
                                <img src={`/certificados/${cert.img}`} alt={cert.title} width={80} className='rounded-full' />
                            </div>
                            <div className='w-2/3'>
                                <h5 className={classNames('text-[14px] font-normal',{'text-violet-800':mode,'text-[#bb87f3]':!mode})}>{cert.data}</h5>
                                <h1 className={classNames('text-[22px] font-semibold',{'text-black':mode,'text-[#b431e8]':!mode})}>{cert.title}</h1>
                                <h5 className={classNames('text-[14px] font-normal',{'text-violet-800':mode,'text-[#bb87f3]':!mode})}>{cert.place}</h5>
                            </div>
                        </a>
                    })
                }


            </div>

        </div>
    )
}
