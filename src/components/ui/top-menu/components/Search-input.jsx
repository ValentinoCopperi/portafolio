import { useState } from "react";

export default function SearchInput() {
    const links = ["Sobre mi", "Proyectos", "Estudios", "Certificaciones", "Contacto"];
    const [query, setQuery] = useState("");
    const [matchQuery, setMatchQuery] = useState([]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);

        // Filtrar los enlaces que contienen la consulta de búsqueda
        const filteredLinks = links.filter(link => link.toLowerCase().includes(searchQuery));

        // Actualizar el estado con los enlaces que coinciden
        setMatchQuery(searchQuery.length === 0 ? [] : filteredLinks);
    };

    const scroll = (e) => {
        const target = e.target.id
        const targetSection = document.getElementById(`${target}Scroll`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    const id = {
        "Sobre mi": "sobremi",
        "Proyectos": "proyectos",
        "Certificaciones": "certificaciones",
        "Estudios": "estudios",
        "Contacto": "contacto"
    }

    return (
        <div className="max-w-md hidden sm:block relative">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                    value={query}
                    className="w-1/2 sm:w-full py-2 pl-12 text-gray-200 rounded-md outline-none bg-[#52525B] focus:border"
                />
            </div>

            <div className="absolute w-full  top-10 right-0 bg-black overflow-auto">
                {matchQuery.length > 0 && (
                    matchQuery.map((item, idx) => (
                        <p key={idx} id={id[item]} onClick={scroll} className="cursor-pointer p-2 border-b border-gray-200">{item}</p>
                    ))
                )}
            </div>
        </div>
    );
}
