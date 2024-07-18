import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './top-menu.css'
import AnimatedGradientText from './components/Animated-button';
import SearchInput from './components/Search-input';
import { DarkMode, GitHub, LanguageOutlined, LinkedIn ,LightMode} from '@mui/icons-material';
import { useModeContext } from '../../../context/mode/Mode';
import '../../../input.css'
import classNames from 'classnames';
export default function TopMenu() {
  const {mode,handleMode} = useModeContext()

  return (
    <div className='fixed top-0 right-0 w-full z-20 blur-backdrop' >
      <div  className={classNames('flex justify-center items-center py-3 px-4 border-b border-gray-400',{'bg-top-banner-light' : mode , 'bg-top-banner-dark' : !mode})}>
        <RocketLaunchIcon className='text-violet-400' />
        <p className='text-animation  mx-2 text-center sm:mx-4'>Contactame ahora para empezar a trabajar juntos!</p>
        <AnimatedGradientText children='Contactame' className='text-animation-button' />
      </div>
      <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-between sm:px-9 text-white'>
        <div className='flex mx-auto md:m-0 py-2'>
          <img src="/v-color.svg" className='hidden sm:block sm:mr-1 ' alt="" width={30}/>
          <h5 className={classNames('hidden md:flex text-nowrap sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode , 'text-light': !mode })}>
            Sobre mi
          </h5>
          <h5 className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode , 'text-light': !mode })}>
            Proyectos
          </h5>
          <h5 className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode , 'text-light': !mode })}>Certificiones</h5>
          <h5 className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode , 'text-light': !mode })}>Estudios</h5>
          <h5 className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode , 'text-light': !mode })}>Contacto</h5>
        </div>

        <div className='flex items-center justify-around py-2'>
          <img src="/v-color.svg" className='block sm:hidden sm:mr-1' alt="" width={30}/>
          <GitHub className={classNames('mx-1 cursor-pointer',{ 'text-dark': mode , 'text-light': !mode })} />
          <LinkedIn  className={classNames('mx-1 cursor-pointer',{ 'text-dark': mode , 'text-light': !mode })} />
          {
            mode ?
            <DarkMode  className={classNames('mx-1 cursor-pointer',{ 'text-dark': mode , 'text-light': !mode })} onClick={handleMode} />
            :
            <LightMode  className={classNames('mx-1 cursor-pointer',{ 'text-dark': mode , 'text-light': !mode })} onClick={handleMode} />
          }
          <SearchInput />
        </div>
      </div>
    </div>
  )
}
