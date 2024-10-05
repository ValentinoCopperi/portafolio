import React, { useContext, createContext, useState, useEffect } from 'react';

export const IdiomaContext = createContext();

export function IdiomaContextProvider({ children }) {
    const [idioma, setIdioma] = useState(() => {
        const savedMode = localStorage.getItem('idioma');
        return savedMode !== null ? 'SP' : 'EN';
    });

    useEffect(() => {
        localStorage.setItem('idioma', idioma);
    }, [idioma]);

    const handleIdioma = () => {
        setIdioma(prevMode => prevMode === 'EN' ? 'SP' : 'EN');
    };

    return (
        <IdiomaContext.Provider value={{ idioma, handleIdioma }}>
            {children}
        </IdiomaContext.Provider>
    );
}

export function useIdiomaContext() {
    return useContext(IdiomaContext);
}
