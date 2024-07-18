import React, { useContext, createContext, useState, useEffect } from 'react';
import { proyectosList } from '../../lib/proyectos';

export const ProyectosContext = createContext();

export function ProyectosContextProvider({ children }) {


    const [proyectos] = useState(proyectosList);
    const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
    const [noMatches, setNoMatches] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        React: false,
        Javascript: false,
        Next: false,
        TailwindCss: false,
        NodeJS: false,
        SQL: false,
        MongoDB: false,
        Typescript: false
    })
    const handleFilter = (id) => {
        setSelectedFilters(prev => {
            const newFilters = {
                ...prev,
                [id]: !prev[id]
            };

            const filteredProjects = filterAndSetProyectosFiltrados(proyectos, newFilters);
            setProyectosFiltrados(filteredProjects);

            return newFilters;
        });

        const filterAndSetProyectosFiltrados = (proyectos, selectedFilters) => {
            const filteredProjects = proyectos.filter(proyecto => {
                const tecnologias = proyecto.tecnologias;
                return Object.keys(selectedFilters).every(filtro => {
                    return !selectedFilters[filtro] || tecnologias.includes(filtro);
                });
            });

            return filteredProjects;
        };
        const atLeastOneFilterActive = Object.values(selectedFilters).some(filter => filter);
        const noMatches = atLeastOneFilterActive && proyectosFiltrados.length === 0;
        setNoMatches(noMatches);
    };

    console.log(proyectos)
    return (
        <ProyectosContext.Provider value={{ proyectos, selectedFilters, setSelectedFilters, handleFilter, proyectosFiltrados , noMatches}} >
            {children}
        </ProyectosContext.Provider>
    );
}

export function useProyectosContext() {
    return useContext(ProyectosContext);
}
