import React from 'react'
import WordRotate from './Text-rotate'
import ShimmerButton from './Main-button'
import './button.css'
import { useModeContext } from '../../../context/mode/Mode'
import classNames from 'classnames';
import '../../../input.css'
import 'animate.css';
import { useIdiomaContext } from '../../../context/idioma/Idioma-Context'
export default function MainTitle() {
  const { mode } = useModeContext()
  const { idioma } = useIdiomaContext();
  const downloadCv = () => {
    const pdfUrl = '/CV-VALENTINO-COPPERI.pdf';  // Ruta relativa desde la carpeta pública

    // Crear un elemento <a>
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Establecer el atributo download para forzar la descarga
    link.setAttribute('download', 'CV-VALENTINO-COPPERI.pdf');

    // Agregar el elemento <a> al documento
    document.body.appendChild(link);

    // Simular un clic en el enlace
    link.click();

    // Eliminar el enlace del documento
    document.body.removeChild(link);
  }

  const texts = {
    'SP': {
      greeting: '¡Hola! Soy',
      developer: 'Desarrollador',
      description: 'Desarrollador con experiencia en tecnologías modernas para la creación de aplicaciones.',
      downloadCv: 'Descargar CV'
    },
    'EN': {
      greeting: 'Hello! I am',
      developer: 'Developer',
      description: 'Developer with experience in modern technologies for building applications.',
      downloadCv: 'Download CV'
    }
  };

  return (
    <div className='w-full text-center md:text-left animate__animated animate__bounceInLeft'>
      <div className='text-white text-4xl '>
        <div>
          <h1 className={classNames({ 'text-dark': mode })}>
            {texts[idioma]?.greeting || texts['ES'].greeting} <span className='text-[#9353D3] font-bold underline'>Valentino Copperi</span>
          </h1>
        </div>
        <div className='py-2'>
          <h1 className={classNames({ 'text-dark': mode })}>
            {texts[idioma]?.developer || texts['ES'].developer} <WordRotate words={["Frontend", "Backend", "Full Stack"]} />
          </h1>
        </div>
      </div>
      <p className={classNames('text-gray-300 font-light py-3 px-3', { 'text-dark': mode })}>
        {texts[idioma]?.description || texts['ES'].description}
      </p>

      <ShimmerButton onClick={downloadCv} id='sobremi' children={texts[idioma]?.downloadCv || texts['ES'].downloadCv} className='text-button' />
    </div>
  )
}
