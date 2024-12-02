import React, { useState } from 'react'
import WordRotate from './Text-rotate'
import ShimmerButton from './Main-button'
import './button.css'
import { useModeContext } from '../../../context/mode/Mode'
import classNames from 'classnames';
import '../../../input.css'
import 'animate.css';
import { useIdiomaContext } from '../../../context/idioma/Idioma-Context'
import { motion } from 'framer-motion'

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className='w-full text-center lg:text-left'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className='text-white text-4xl' variants={itemVariants}>
        <motion.div variants={itemVariants}>
          <h1 className={classNames({ 'text-dark': mode })}>
            {texts[idioma]?.greeting || texts['ES'].greeting}
            <motion.span
              style={{
                color: '#A002FF',
                textShadow: '0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
                marginLeft: '3px'
              }}
              animate={{
                textShadow: [
                  '0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
                  '0 0 4px blueviolet, 0 0 12px blueviolet, 0 0 24px blueviolet, 0 0 48px blueviolet',
                  '0 0 2px blueviolet, 0 0 10px blueviolet, 0 0 20px blueviolet, 0 0 40px blueviolet',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Valentino Copperi
            </motion.span>
          </h1>
        </motion.div>
        <motion.div className='py-2' variants={itemVariants}>
          <h1 className={classNames({ 'text-dark': mode })}>
            {texts[idioma]?.developer || texts['ES'].developer} <WordRotate words={["Frontend", "Backend", "Full Stack"]} />
          </h1>
        </motion.div>
      </motion.div>
      <motion.p
        className={classNames('text-gray-300 font-light py-3 px-3', { 'text-dark': mode })}
        variants={itemVariants}
      >
        {texts[idioma]?.description || texts['ES'].description}
      </motion.p>

      <motion.div
        className='w-1/2 mx-auto  lg:m-0'
        onMouseEnter={() => setSubMenuOpen(true)}
        onMouseLeave={() => setSubMenuOpen(false)}
        variants={itemVariants}
      >
        <ShimmerButton
          onClick={() => downloadCv(idioma)}
          id='sobremi'
          className='text-button'
        >
          {texts[idioma]?.downloadCv || texts['ES'].downloadCv}
        </ShimmerButton>
        {subMenuOpen && (
          <motion.div
            className="absolute p-2 bg-white rounded-md shadow-lg md:flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
