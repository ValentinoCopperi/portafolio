import React, { useState } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './top-menu.css'
import AnimatedGradientText from './components/Animated-button';
import SearchInput from './components/Search-input';
import { DarkMode, GitHub, LinkedIn, LightMode } from '@mui/icons-material';
import { useModeContext } from '../../../context/mode/Mode';
import Flag from 'react-world-flags'
import '../../../input.css'
import classNames from 'classnames';
import { useIdiomaContext } from '../../../context/idioma/Idioma-Context';

export default function TopMenu() {
  const { mode, handleMode } = useModeContext();

  const { idioma, handleIdioma } = useIdiomaContext(); // 'es' for Spanish, 'en' for English

  const scroll = (e) => {
    const target = e.target.id;
    const targetSection = document.getElementById(`${target}Scroll`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Texts in both idiomas
  const texts = {
    'SP': {
      contactMe: 'Contactame ahora para empezar a trabajar juntos!',
      aboutMe: 'Sobre mí',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      studies: 'Estudios',
      contactMeBtn: 'Contactame'
    },
    'EN': {
      contactMe: 'Contact me now to start working together!',
      aboutMe: 'About Me',
      projects: 'Projects',
      certifications: 'Certifications',
      studies: 'Studies',
      contactMeBtn: 'Contact me'
    }
  };

  return (
    <div className='fixed top-0 right-0 w-full z-20 blur-backdrop'>
      <div className={classNames('flex justify-center items-center py-3 px-4 border-b border-gray-400', { 'bg-top-banner-light': mode, 'bg-top-banner-dark': !mode })}>
        <RocketLaunchIcon className='text-violet-400' />
        <p className='text-animation  mx-2 text-center sm:mx-4'>{texts[idioma].contactMeBtn}</p>
        <AnimatedGradientText children={texts[idioma].contactMeBtn} className='text-animation-button' />
      </div>
      <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-between sm:px-9 text-white'>
        <div className='flex mx-auto md:m-0 py-2'>
          <img onClick={scroll} id='home' src="/v-color.svg" className='cursor-pointer hidden sm:block sm:mr-1 ' alt="" width={30} />
          <h5 onClick={scroll} id='sobremi' className={classNames('flex text-nowrap sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode, 'text-light': !mode })}>
            {texts[idioma].aboutMe}
          </h5>
          <h5 onClick={scroll} id='proyectos' className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode, 'text-light': !mode })}>
            {texts[idioma].projects}
          </h5>
          <h5 onClick={scroll} id='certificaciones' className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode, 'text-light': !mode })}>
            {texts[idioma].certifications}
          </h5>
          <h5 onClick={scroll} id='estudios' className={classNames('mx-1 sm:mx-2 antialiased font-medium cursor-pointer', { 'text-dark': mode, 'text-light': !mode })}>
            {texts[idioma].studies}
          </h5>
        </div>

        <div className='flex items-center justify-around py-2'>
          <img onClick={scroll} id='home' src="/v-color.svg" className='cursor-pointer block sm:hidden sm:mr-1' alt="" width={30} />
          <a target='_blank' href="https://github.com/ValentinoCopperi">
            <GitHub className={classNames('mx-1 cursor-pointer', { 'text-dark': mode, 'text-light': !mode })} />
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/valentinocopperi/">
            <LinkedIn className={classNames('mx-1 cursor-pointer', { 'text-dark': mode, 'text-light': !mode })} />
          </a>

          {
            mode ?
              <DarkMode className={classNames('mx-1 cursor-pointer', { 'text-dark': mode, 'text-light': !mode })} onClick={handleMode} />
              :
              <LightMode className={classNames('mx-1 cursor-pointer', { 'text-dark': mode, 'text-light': !mode })} onClick={handleMode} />
          }

          {/* idioma switcher */}
          <Flag
            title={idioma === 'SP' ? "Cambiar idioma" : "Change language"}
            code={idioma === 'SP' ? "ES" : "US"}
            width={25}
            onClick={handleIdioma}
            className='mx-2 cursor-pointer'
          >
          </Flag>

        </div>
      </div>
    </div>
  )
}
