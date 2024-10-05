import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import classNames from 'classnames';
import EmailLink from '../../components/sobre-mi/EmailLink';
import { useModeContext } from './../../context/mode/Mode';
import { useIdiomaContext } from '../../context/idioma/Idioma-Context';
import { Language, Speaker } from '@mui/icons-material';
import { LanguagesIcon } from 'lucide-react';

export default function SobreMi() {
  const { mode } = useModeContext();
  const { idioma } = useIdiomaContext();

  
  const texts = {
    'SP': {
      intro: 'Intro',
      aboutMe: 'Sobre mí',
      greeting: 'Actualmente estoy en mi segundo año de la Tecnicatura en Programación y he estado trabajando con lenguajes como TypeScript y Java. Tengo experiencia desarrollando APIs con frameworks como Nest y Express, y construyendo interfaces de usuario con React y Next.js.',
      seeking: 'Estoy en busca de nuevas oportunidades laborales para aplicar mis conocimientos y crecer profesionalmente en el desarrollo de software.',
      name: 'Nombre',
      country: 'País',
      argentina: 'Argentina'
    },
    'EN': {
      intro: 'Intro',
      aboutMe: 'About Me',
      greeting: 'I am currently in my second year of a Technical Degree in Programming and have been working with languages like TypeScript and Java. I have experience building APIs with frameworks such as Nest and Express, and creating user interfaces with React and Next.js.',
      seeking: 'I am looking for new job opportunities to apply my skills and grow professionally in software development.',
      name: 'Name',
      country: 'Country',
      argentina: 'Argentina'
    }
  };

  return (
    <div id='sobremiScroll' className='grid grid-cols-1 w-full py-24 mx-auto md:w-[60%]'>
      <div className='col-span-1 text-white text-center w-full'>
        <span className='text-[#bb87f3] font-semibold'>{texts[idioma]?.intro}</span>
        <h1 className={classNames('text-5xl py-2 pb-8 font-semibold', { 'text-black': mode, 'text-white': !mode })}>
          {texts[idioma]?.aboutMe}
        </h1>
        <p className={classNames({ 'text-black': mode, 'text-white': !mode })}>
          {texts[idioma]?.greeting}
        </p>
        <p className={classNames('py-3', { 'text-black': mode, 'text-white': !mode })}>
          {texts[idioma]?.seeking}
        </p>
        <p className={classNames('py-3', { 'text-black': mode, 'text-white': !mode })}>
          {texts[idioma]?.education}
        </p>
        <div className={classNames('py-6 flex flex-col text-xl justify-center items-center md:flex-row', { 'text-black': mode, 'text-white': !mode })}>
          <div className='flex'>
            <div className='flex'>
              <PersonIcon className='text-[#bb87f3]' />
              <p className='ml-1'>{texts[idioma].name}</p>
            </div>
            <span className='mx-3'>:</span>
            <p>Valentino Copperi</p>
          </div>
          <EmailLink email="valencope100@gmail.com" />
          <div className='flex'>
            <div className='flex'>
              <FlagIcon className='text-[#bb87f3]' />
              <p className='ml-1'>{texts[idioma]?.country}</p>
            </div>
            <span className='mx-2'>:</span>
            <p>{texts[idioma]?.argentina}</p>
          </div>
          <div className='flex mx-2 my-1'>
            <div className='flex'>
              <LanguagesIcon className='text-[#bb87f3]' />
              <p className='ml-1'>English</p>
            </div>
            <span className='mx-2'>:</span>
            <p>B2 Level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
