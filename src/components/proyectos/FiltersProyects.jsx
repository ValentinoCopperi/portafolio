import classNames from 'classnames'
import React, { useState } from 'react'
import { useProyectosContext } from '../../context/proyectos/Proyectos'
const filters = [
    'react',
    'next',
    'tailwind',
    'node',
    'sql',
    'mongodb',
    'typescript',
]
export default function FiltersProyects() {

    const {selectedFilters,setSelectedFilters,handleFilter} = useProyectosContext()
    return (
        <>

            
            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.React, 'bg-[#bb87f3]': !selectedFilters.React })}
                id='React'
                onClick={(e) => handleFilter(e.target.id)}
            >
                React JS
            </button>

            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.Next, 'bg-[#bb87f3]': !selectedFilters.Next })}
                id='Next'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Next JS
            </button>

            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.TailwindCss, 'bg-[#bb87f3]': !selectedFilters.TailwindCss })}
                id='TailwindCss'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Tailwind CSS
            </button>

            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.NodeJS, 'bg-[#bb87f3]': !selectedFilters.NodeJS })}
                id='NodeJS'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Node JS
            </button>

            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.Typescript, 'bg-[#bb87f3]': !selectedFilters.Typescript })}
                id='Typescript'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Typescript
            </button>

            <button
                className={classNames('p-2 m-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.SQL, 'bg-[#bb87f3]': !selectedFilters.SQL })}
                id='SQL'
                onClick={(e) => handleFilter(e.target.id)}
            >
                SQL
            </button>

            <button
                className={classNames('p-2 mx-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.MongoDB, 'bg-[#bb87f3]': !selectedFilters.MongoDB })}
                id='MongoDB'
                onClick={(e) => handleFilter(e.target.id)}
            >
                MongoDB
            </button>
            <button
                className={classNames('p-2 mx-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.Javascript, 'bg-[#bb87f3]': !selectedFilters.Javascript })}
                id='Javascript'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Javascript
            </button>
            <button
                className={classNames('p-2 mx-1 rounded-full text-white font-semibold', { 'bg-[#5d15ab]': selectedFilters.Firebase, 'bg-[#bb87f3]': !selectedFilters.Firebase })}
                id='Firebase'
                onClick={(e) => handleFilter(e.target.id)}
            >
                Firebase
            </button>
        </>
    )
}
