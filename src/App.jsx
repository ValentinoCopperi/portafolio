import React from "react"
import TopMenu from "./components/ui/top-menu/TopMenu"
import HomeBanner from "./sections/home-banner/Home-Banner"
import SobreMi from "./sections/sobre-mi/SobreMi"
import './input.css'
import { useModeContext } from "./context/mode/Mode"
import classNames from "classnames"
import Proyectos from "./sections/proyectos/Proyectos"
import Certificaciones from "./sections/certificaciones/Certificaciones"
import Estudios from "./sections/estudios/Estudios"
function App() {
  const {mode} = useModeContext()
  return (
    <>
      <TopMenu/>
      <HomeBanner/>
      <div className={classNames('px-12',{'bg-light':mode,'bg-dark':!mode})}>
        <SobreMi/>
        <Proyectos/>
        <Certificaciones/>
        <Estudios/>
      </div>
    </>
  )
}

export default App
