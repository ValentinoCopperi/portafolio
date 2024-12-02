import React from 'react'
import './home-banner.css'
import MainTitle from '../../components/home-banner/main-title/Main-title'
import IconCloud from '../../components/home-banner/main-icons/MainIcon'
import { useModeContext } from './../../context/mode/Mode';
import { motion } from 'framer-motion';
const icons = [
    "typescript",
    "java",
    "react",
    "express",
    "nextdotjs",
    "amazonaws",
    "postgresql",
    "firebase",
    "docker",
    "github",
    "nestjs",
    "mysql",
    "mongodb",
    "tailwindcss",
    "spring",
    "redux",
];



export default function HomeBanner() {
    const { mode } = useModeContext()
    return (
        <div
            id='homeScroll'
            className='relative h-screen'
        >
            <div
                className={`${mode ? 'background-light' : 'background-black'} absolute grid grid-cols-1 md:grid-cols-2 px-3 pt-[26vh] h-full w-full`}
                style={{
                    backgroundImage: 'url(/looper-pattern.svg)',
                    backgroundAttachment: 'scroll',
                    backgroundPosition: 'center'
                }}
               
            >
                <div className='col-span-1 mx-auto flex items-center'>
                    <MainTitle />
                </div>
                <div className='col-span-1 mx-auto hidden md:flex md:items-start md:justify-start'>
                    <IconCloud iconSlugs={icons} />
                </div>
            </div>
        </div>
    )
}
