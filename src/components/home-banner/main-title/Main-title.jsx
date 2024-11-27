import React, { useState } from 'react'
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

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const downloadCv = (idio) => {

    const pdfUrl = idio == "EN" ? '/cv-valentino-en-2024.pdf' : '/CV-VALENTINO-COPPERI.pdf';

    // Establecer el nombre del archivo de descarga según el idioma
    const downloadName = idio == "EN" ? 'cv-valentino-en-2024.pdf' : 'CV-VALENTINO-COPPERI.pdf';

    // Crear un elemento <a> para descargar el archivo
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Establecer el atributo 'download' para forzar la descarga con el nombre del archivo
    link.setAttribute('download', downloadName);

    // Agregar el elemento <a> al documento
    document.body.appendChild(link);

    // Simular un clic en el enlace para iniciar la descarga
    link.click();

    // Eliminar el enlace del documento después de la descarga
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
            {texts[idioma]?.greeting || texts['ES'].greeting}
            <span style={{
              color: '#A002FF',
              textShadow: '   0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
              marginLeft: '3px'
            }}
            >
              Valentino Copperi
            </span>
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

      <div className='w-1/2 mx-auto md:m-0' onMouseEnter={()=> setSubMenuOpen(true)} onMouseLeave={() => setSubMenuOpen(false)} >
        <ShimmerButton onClick={()=>downloadCv(idioma)} id='sobremi' children={texts[idioma]?.downloadCv || texts['ES'].downloadCv} className='text-button' />
        {subMenuOpen && (
        <div
          className="absolute p-2 bg-white rounded-md shadow-lg md:flex-col"
        >
          <button
            className="block text-black py-1 px-3 hover:bg-gray-200"
            onClick={() => downloadCv("SP")}
          >
            Español
          </button>
          <button
            className="block text-black py-1 px-3 hover:bg-gray-200"
            onClick={() => downloadCv("EN")}
          >
            English
          </button>
        </div>
      )}
      </div>

    </div>
  )
}
