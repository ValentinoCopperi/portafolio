export const proyectosListSp = [
    {
        id : 7,
        date : "Feb 20 2024",
        nombre : "English Quiz App",
        stack : "Frontend",
        desc : "Aplicacion para aprender y mejorar ingles para niveles principiantes,intermedios y avanzados , con disintos topicos disponibles",
        img : "english.png",
        link : "https://english-app-alpha.vercel.app",
        tecnologias : ['Next JS' , 'TailwindCSS'],
        detalles : [
            {
                titulo : "Cookies",
                descripcion : "Se guarda el progeso de cada topico en cookies"
            }
        ]
    },
    {
        id: 3,
        date: 'Apr 23 2024',
        nombre: 'Task App',
        stack: 'Frontend',
        desc: 'Aplicación red social de tareas construida en Next.js y TypeScript. Permite a los usuarios gestionar sus tareas de manera eficiente, con una interfaz moderna y responsiva.',
        img: 'taskapp.png',
        link: "https://task-app-valentinocopperi.vercel.app/",
        tecnologias: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
        detalles: [
            {
                titulo: 'TailwindCSS',
                descripcion: 'La interfaz está diseñada utilizando TailwindCSS, proporcionando una experiencia de usuario fluida y atractiva.',
            },
            {
                titulo: 'MongoDB',
                descripcion: 'MongoDB se utiliza para almacenar información de tareas, garantizando una gestión eficiente de los datos.',
            },
            {
                titulo: 'Server Actions',
                descripcion: 'Se implementan Server Actions para manejar la lógica del lado del servidor y mejorar el rendimiento de la aplicación.',
            },
            {
                titulo: 'Paginación',
                descripcion: 'La aplicación incluye paginación para facilitar la navegación a través de una lista extensa de tareas.',
            },
            {
                titulo: 'Server Components',
                descripcion: 'Se utilizan Server Components para la renderización del lado del servidor, optimizando el tiempo de carga y mejorando la experiencia del usuario.',
            },
            {
                titulo: 'Client Components',
                descripcion: 'Los Client Components permiten interacciones dinámicas en el lado del cliente, mejorando la interactividad de la aplicación.',
            },
            {
                titulo: 'Generación Estática',
                descripcion: 'La generación estática se utiliza para prerenderizar páginas, mejorando el rendimiento y la SEO de la aplicación.',
            },
        ],
    },
    
    {
        id: 2,
        date: 'May 15 2024',
        nombre: 'Task Manager Pro',
        stack: 'Backend',
        desc: 'Aplicación avanzada de gestión de tareas con funcionalidades sociales. Incluye autenticación, CRUD de tareas, sistema de likes y comentarios, y notificaciones en tiempo real.',
        img: 'apinest.png',
        link: "https://github.com/ValentinoCopperi/NestJs-TaskApi",
        tecnologias: ['NestJS', 'TypeScript', 'MongoDB', 'WebSockets', 'JWT'],
        detalles: [
            {
                titulo: 'Autenticación',
                estrategia: 'JWT',
                guard: 'AuthGuard',
                descripcion: 'La aplicación utiliza JSON Web Tokens para la autenticación. Los usuarios deben iniciar sesión para recibir un token que les permitirá realizar operaciones en rutas protegidas. La estrategia de autenticación asegura que solo los usuarios válidos puedan acceder a las funciones de la aplicación.',
            },
            {
                titulo: 'CRUD',
                descripcion: 'Las operaciones CRUD están implementadas para las tareas, permitiendo a los usuarios crear nuevas tareas, leer (listar) sus tareas existentes, actualizar detalles de tareas y eliminar tareas que ya no son necesarias.',
            },
            {
                titulo: 'Sistema Social',
                descripcion: 'Los usuarios pueden dar "me gusta" y "comentarios" a las tareas de otros usuarios.',
            },
            {
                titulo: 'Notificaciones',
                descripcion: 'El sistema de notificaciones en tiempo real, implementado con WebSockets, informa a los usuarios sobre interacciones relevantes, como nuevos comentarios o likes en sus tareas, lo que mejora la colaboración y el compromiso en el trabajo en equipo.',
            },
        ],
    },

    {
        id: 1,
        date: 'Nov 20 2023',
        nombre: 'E-Commerce de Productos de Computadoras',
        stack: 'Full Stack',
        desc: 'Aplicación de e-commerce para la venta de productos de computadoras, construida con React, TailwindCSS, PostgreSQL y Express. Permite a los usuarios explorar, comprar y gestionar productos de manera eficiente.',
        img: 'skylevel.png',
        link: "https://sky-level-frontend-react.vercel.app/",
        tecnologias: ['React', 'TailwindCSS', 'PostgreSQL', 'Express'],
        detalles: [
            {
                titulo: 'Interfaz de Usuario',
                descripcion: 'La interfaz está diseñada con TailwindCSS, brindando una experiencia de usuario atractiva y responsiva.',
            },
            {
                titulo: 'Base de Datos',
                descripcion: 'PostgreSQL se utiliza para almacenar información sobre los productos y gestionar las transacciones de manera segura.',
            },
            {
                titulo: 'API REST',
                descripcion: 'Se implementa una API REST utilizando Express para manejar las operaciones de productos, como agregar, actualizar y eliminar.',
            },
            {
                titulo: 'Autenticación de Usuarios',
                descripcion: 'El sistema incluye autenticación de usuarios para asegurar que solo los usuarios registrados puedan realizar compras.',
            },
            {
                titulo: 'Carrito de Compras',
                descripcion: 'Los usuarios pueden agregar productos a su carrito y proceder al pago de manera sencilla.',
            },
            {
                titulo: 'Responsividad',
                descripcion: 'La aplicación está diseñada para ser completamente responsiva, adaptándose a diferentes tamaños de pantalla.',
            },
        ],
    },
    
];

export const proyectosListEn = [

    {
        id : 7,
        date : "Feb 20 2024",
        nombre : "English Quiz App",
        stack : "Frontend",
        desc : "App that will help you to learn and improve your English level",
        img : "english.png",
        link : "https://english-app-alpha.vercel.app",
        tecnologias : ['Next JS' , 'TailwindCSS'],
        detalles : [
            {
                titulo : "Cookies",
                descripcion : "The progress of each topic is saved in cookies."
            }
        ]
    },
    {
        id: 3,
        date: 'Apr 23 2024',
        nombre: 'Task App',
        stack: 'Frontend',
        desc: 'Task social media application built with Next.js and TypeScript. It allows users to efficiently manage their tasks with a modern and responsive interface.',
        img: 'taskapp.png',
        link: "https://task-app-valentinocopperi.vercel.app/",
        tecnologias: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
        detalles: [
            {
                titulo: 'TailwindCSS',
                descripcion: 'The interface is designed using TailwindCSS, providing a smooth and attractive user experience.',
            },
            {
                titulo: 'MongoDB',
                descripcion: 'MongoDB is used to store task data, ensuring efficient data management.',
            },
            {
                titulo: 'Server Actions',
                descripcion: 'Server Actions are implemented to handle server-side logic and improve the performance of the application.',
            },
            {
                titulo: 'Pagination',
                descripcion: 'The application includes pagination to facilitate navigation through an extensive list of tasks.',
            },
            {
                titulo: 'Server Components',
                descripcion: 'Server Components are used for server-side rendering, optimizing load times and improving the user experience.',
            },
            {
                titulo: 'Client Components',
                descripcion: 'Client Components allow dynamic client-side interactions, enhancing the app’s interactivity.',
            },
            {
                titulo: 'Static Generation',
                descripcion: 'Static generation is used to pre-render pages, improving the performance and SEO of the application.',
            },
        ],
    },
    {
        id: 2,
        date: 'May 15 2024',
        nombre: 'Task Manager Pro',
        stack: 'Backend',
        desc: 'Advanced task management application with social features. Includes authentication, task CRUD operations, a like and comment system, and real-time notifications.',
        img: 'apinest.png',
        link: "https://github.com/ValentinoCopperi/NestJs-TaskApi",
        tecnologias: ['NestJS', 'TypeScript', 'MongoDB', 'WebSockets', 'JWT'],
        detalles: [
            {
                titulo: 'Authentication',
                estrategia: 'JWT',
                guard: 'AuthGuard',
                descripcion: 'The application uses JSON Web Tokens for authentication. Users must log in to receive a token, which allows them to perform operations on protected routes. The authentication strategy ensures that only valid users can access the app’s features.',
            },
            {
                titulo: 'CRUD',
                descripcion: 'CRUD operations are implemented for tasks, allowing users to create new tasks, read (list) their existing tasks, update task details, and delete tasks that are no longer needed.',
            },
            {
                titulo: 'Social System',
                descripcion: 'Users can "like" and "comment" on tasks created by other users.',
            },
            {
                titulo: 'Notifications',
                descripcion: 'The real-time notification system, implemented with WebSockets, informs users about relevant interactions, such as new comments or likes on their tasks, enhancing collaboration and engagement in teamwork.',
            },
        ],
    },

    {
        id: 1,
        date: 'Nov 20 2023',
        nombre: 'E-Commerce of Computer Products',
        stack: 'Full Stack',
        desc: 'E-commerce application for selling computer products, built with React, TailwindCSS, PostgreSQL, and Express. Allows users to explore, purchase, and manage products efficiently.',
        img: 'skylevel.png',
        link: "https://sky-level-frontend-react.vercel.app/",
        tecnologias: ['React', 'TailwindCSS', 'PostgreSQL', 'Express'],
        detalles: [
            {
                titulo: 'User Interface',
                descripcion: 'The interface is designed using TailwindCSS, providing an attractive and responsive user experience.',
            },
            {
                titulo: 'Database',
                descripcion: 'PostgreSQL is used to store product information and manage transactions securely.',
            },
            {
                titulo: 'REST API',
                descripcion: 'A REST API is implemented using Express to handle product operations, such as adding, updating, and deleting.',
            },
            {
                titulo: 'User Authentication',
                descripcion: 'The system includes user authentication to ensure that only registered users can make purchases.',
            },
            {
                titulo: 'Shopping Cart',
                descripcion: 'Users can add products to their cart and proceed to checkout easily.',
            },
            {
                titulo: 'Responsiveness',
                descripcion: 'The application is designed to be fully responsive, adapting to different screen sizes.',
            },
        ],
    },
    
];
