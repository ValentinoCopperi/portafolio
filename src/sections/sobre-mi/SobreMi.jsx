import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FlagIcon from '@mui/icons-material/Flag';
import { EmailOutlined } from '@mui/icons-material';
import { useModeContext } from './../../context/mode/Mode';
import classNames from 'classnames';
export default function SobreMi() {
  const {mode} = useModeContext()
  return (
    <div id='sobremiScroll' className=' grid grid-cols-1 sm:grid-cols-2  w-full py-24 gap-x-28'>
      <div className='hidden col-span-1 md:flex justify-end items-center'>
        <img src="/profile_pic.png" alt="Profile picture" className={classNames('w-[90%] sm:w-[70%] rounded-xl',{'bg-[#dededeef]':mode,'bg-[#0c010def]':!mode})} style={{ boxShadow: ' 10px 10px 15px rgba(0, 0, 0, 0.5)' }} />
      </div>
      <div className='col-span-1 text-white text-center md:text-left w-full md:w-[65%]'>
        <span className='text-[#bb87f3] font-semibold'>Intro</span>
        <h1 className={classNames('text-5xl py-2 pb-8 font-semibold',{'text-black':mode,'text-white':!mode})}>Sobre mi</h1>
        <p className={classNames({'text-black':mode,'text-white':!mode})}>¡Hola! Mi nombre es Valentino . Actualmenteestudio en la Universidad Nacional del Centro de la Provincia de Buenos Aires, donde estoy cursando segundo año de la tecnicatura en Desarrollo de Aplicaciones Informáticas.</p>
        <p className={classNames('py-3',{'text-black':mode,'text-white':!mode})}> Mi formación académica me ha brindado una sólida base teórica. He tomado numerosos cursos y he aprendido de forma autodidacta, enfocado en la creación de aplicaciones con tecnologías modernas.</p>
        <div className={classNames('py-6',{'text-black':mode,'text-white':!mode})}>
          <div className='flex'>
            <div className='flex'>
              <PersonIcon className='text-[#bb87f3]' />
              <p className='ml-1'>Nombre</p>
            </div>
            <span className='mx-2'>:</span>
            <p>Valentino Copperi</p>
          </div>
          <div className='flex py-2'>
            <div className='flex'>
              <EmailOutlined className='text-[#bb87f3]' />
              <p className='ml-1'>Email</p>
            </div>
            <span className='mx-2'>:</span>
            <p>valencope100@gmail.com</p>
          </div>
          <div className='flex'>
            <div className='flex'>
              <FlagIcon className='text-[#bb87f3]' />
              <p className='ml-1'>Pais</p>
            </div>
            <span className='mx-2'>:</span>
            <p>Argentina</p>
          </div>
          
        </div>
      </div>
      <div className='col-span-1 flex justify-center items-center sm:hidden'>
        <img src="/profile_pic.png" alt="Profile picture"  className={classNames('w-[90%] sm:w-[70%] rounded-xl',{'bg-[#dededeef]':mode,'bg-[#0c010def]':!mode})} style={{ boxShadow: ' 10px 10px 15px rgba(0, 0, 0, 0.5)' }} />
      </div>
    </div>
  )
}
