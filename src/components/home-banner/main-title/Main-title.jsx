import React from 'react'
import WordRotate from './Text-rotate'
import ShimmerButton from './Main-button'
import './button.css'
import { useModeContext } from '../../../context/mode/Mode'
import classNames from 'classnames';
import '../../../input.css'
import 'animate.css';
export default function MainTitle() {
  const {mode} = useModeContext()

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

  return (
    <div className='w-full text-center md:text-left animate__animated animate__bounceInLeft'>
        <div className='text-white text-4xl '>
            <div>
                <h1 className={classNames({'text-dark': mode })}>¡Hola! soy <span className='text-[#9353D3] font-bold underline' >Valentino Copperi</span></h1>
            </div>
            <div className='py-2'>
                <h1 className={classNames({'text-dark': mode })}>Estudiante para desarollador <WordRotate  words={["Frontend","Backend","Full Stack"]}/></h1>
            </div>
        </div>
        <p className={classNames('text-gray-300 font-light py-3 px-3 ',{'text-dark': mode })}>Estudiante de tecnicatura de desarollo de aplicaciones</p>

        <ShimmerButton onClick={downloadCv} id='sobremi' children='Descargar CV' className='text-button'/>
    </div>
  )
}
