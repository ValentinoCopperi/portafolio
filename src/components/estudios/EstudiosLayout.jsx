import React, { useState } from 'react';
import { estudios } from './../../lib/estudios';
import classNames from 'classnames';
import { useModeContext } from '../../context/mode/Mode';

export default function EstudiosLayout() {

    const{mode} = useModeContext()
    // Estado para controlar la cantidad de elementos mostrados
    const [visibleCount, setVisibleCount] = useState(4);
    
    // Función para mostrar más elementos
    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    // Función para mostrar menos elementos
    const showLess = () => {
        setVisibleCount(prevCount => (prevCount > 4 ? prevCount - 4 : 4));
    };

    return (
        <div>
            {estudios.slice(0, visibleCount).map((item) => (
                <article key={item.id} >
                    <div className="ps-2 my-2 first:mt-0">
                        <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                            {item.title}
                        </h3>
                    </div>

                    <div className={classNames("flex gap-x-3 relative group rounded-lg",{"hover:bg-black/10":mode,"hover:bg-white/10":!mode})}>
                        <a className="absolute inset-0 z-[1]" href="#"></a>

                        <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 dark:group-hover:after:bg-neutral-600">
                            <div className="relative z-10 size-7 flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:group-hover:border-neutral-600"></div>
                            </div>
                        </div>

                        <div className="grow p-2 pb-8">
                            <h3 className={classNames("flex gap-x-1.5 font-bold",{"text-black":mode,"text-white":!mode})}>
                                {item.title}
                            </h3>
                            <p className={classNames("mt-1 text-sm text-left text-wrap",{"text-gray-600":mode,"text-neutral-400":!mode})}>
                                {item.desc}
                            </p>
                            <div className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs flex-wrap rounded-lg border border-transparent text-gray-500  disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400">
                                {item.conocimientos.map((con, index) => (
                                    <p key={index} className={classNames({"text-violet-700":mode,"text-violet-400":!mode})}>{con}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            ))}

            <div className="mt-4">
                {visibleCount < estudios.length && (
                    <button
                        onClick={showMore}
                        className="px-4 py-2 text-white bg-violet-600 rounded hover:bg-violet-700 "
                    >
                        Ver más
                    </button>
                )}

                {visibleCount > 4 && (
                    <button
                        onClick={showLess}
                        className="px-4 py-2 ml-2 text-white bg-gray-500 rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800"
                    >
                        Ver menos
                    </button>
                )}
            </div>
        </div>
    );
}
