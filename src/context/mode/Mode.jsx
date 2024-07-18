import React, { useContext, createContext, useState, useEffect } from 'react';

export const ModeContext = createContext();

export function ModeContextProvider({ children }) {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('mode');
        return savedMode !== null ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
    }, [mode]);

    const handleMode = () => {
        setMode(prevMode => !prevMode);
    };

    return (
        <ModeContext.Provider value={{ mode, handleMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export function useModeContext() {
    return useContext(ModeContext);
}
