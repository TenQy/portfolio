const kangeequest = import.meta.glob('../assets/images/projects/kangeequest/*.webp')
const miNuevoHogar = import.meta.glob('../assets/images/projects/mi-nuevo-hogar/*.webp')
const vie = import.meta.glob('../assets/images/projects/vie/*.webp')

const toImages = (glob) => Object.values(glob)

export const projects = [
  {
    id: 'kangeequest',
    name: 'KangeeQuest',
    status: 'completed',
    featured: true,
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Gemini API', 'MySQL'],
    category: ['web', 'ai'],
    github: null,
    preview: 'https://kangeequest.infinityfree.me',
    images: toImages(kangeequest),

    es: {
      shortDescription: 'Simulador de entrevistas técnicas impulsado por IA que analiza y evalúa las respuestas del usuario en tiempo real.',
      fullDescription: 'KangeeQuest es una plataforma web para prepararse a entrevistas técnicas de forma interactiva. El usuario responde abiertamente a preguntas de escenarios reales, y un modelo de Gemini analiza cada respuesta proporcionando retroalimentación detallada sobre calidad, precisión y claridad.',
      features: [
        {
          name: 'Análisis con IA',
          description: 'Gemini evalúa cada respuesta abierta y genera retroalimentación detallada sobre calidad, precisión y claridad.'
        },
        {
          name: 'Progresión y gamificación',
          description: 'El usuario acumula experiencia, mantiene rachas y sube de nivel. Completar una entrevista desbloquea versiones más difíciles de la misma.'
        },
        {
          name: 'Panel de administración',
          description: 'Dashboard con métricas clave (usuarios, entrevistas, score promedio, uso de Gemini) y CRUD completo para gestionar entrevistas: crear, editar preguntas, activar, desactivar o eliminar.'
        }
      ],
      futureImprovements: [
        {
          name: 'Modelo de Gemini Pro',
          description: 'Migrar a un modelo de pago para eliminar el límite diario de requests y reducir errores de disponibilidad.'
        },
        {
          name: 'Planes de suscripción',
          description: 'Ofrecer planes premium con mayor cantidad de usos diarios y acceso a entrevistas exclusivas.'
        },
        {
          name: 'Más categorías de entrevista',
          description: 'Expandir más allá de programación y bases de datos para cubrir otras áreas técnicas, distintas carreras y entrevistas conductuales o creativas.'
        }
      ],
      learnings: 'Este proyecto fue clave para entender la integración de modelos de lenguaje en aplicaciones web tradicionales: desde el diseño de prompts efectivos hasta el manejo de los límites y comportamientos del modelo gratuito de Gemini en producción.',
    },

    en: {
      shortDescription: 'AI-powered technical interview simulator that analyzes and evaluates user responses in real time.',
      fullDescription: 'KangeeQuest is a web platform to practice technical interviews in an interactive way. The user responds openly to real-world scenario questions, and a Gemini model analyzes each response providing detailed feedback on quality, accuracy and clarity.',
      features: [
        {
          name: 'AI Analysis',
          description: 'Gemini evaluates each open response and generates detailed feedback on quality, accuracy and clarity.'
        },
        {
          name: 'Progression & Gamification',
          description: 'Users accumulate experience, maintain streaks and level up. Completing an interview unlocks harder versions of the same one.'
        },
        {
          name: 'Admin Panel',
          description: 'Dashboard with key metrics (users, interviews, average score, Gemini usage) and full CRUD to manage interviews: create, edit questions, activate, deactivate or delete.'
        }
      ],
      futureImprovements: [
        {
          name: 'Gemini Pro Model',
          description: 'Migrate to a paid model to remove the daily request limit and reduce availability errors.'
        },
        {
          name: 'Subscription Plans',
          description: 'Offer premium plans with higher daily usage limits and access to exclusive interviews.'
        },
        {
          name: 'More Interview Categories',
          description: 'Expand beyond programming and databases to cover other technical areas, different fields and behavioral or creative interviews.'
        }
      ],
      learnings: 'This project was key to understanding the integration of language models in traditional web applications: from designing effective prompts to handling the limits and behaviors of the free Gemini model in production.',
    },
  },

  {
    id: 'mi-nuevo-hogar',
    name: 'Mi Nuevo Hogar',
    status: 'completed',
    featured: true,
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    category: ['web'],
    github: 'https://github.com/TenQy/mi-nuevo-hogar',
    preview: 'https://minuevohogar.infinityfree.me',
    images: toImages(miNuevoHogar),

    es: {
      shortDescription: 'Plataforma web para la gestión de adopciones de mascotas, permitiendo a los refugios publicar animales disponibles y a los usuarios buscar, solicitar y donar.',
      fullDescription: 'Mi Nuevo Hogar es una plataforma web orientada a facilitar todo el proceso de adopción de perros y gatos. Los usuarios pueden explorar animales disponibles en distintos refugios, enviar solicitudes de adopción, dar en adopción a sus mascotas y realizar donaciones simuladas. El sitio fue desarrollado como proyecto académico con un enfoque serio: con redes sociales y publicaciones reales.',
      features: [
        {
          name: 'Geolocalización de refugios',
          description: 'Al dar en adopción, el sitio detecta la ubicación del usuario y calcula el refugio más cercano con distancia en tiempo real. También permite comparar la distancia a otros refugios disponibles.'
        },
        {
          name: 'Donaciones simuladas',
          description: 'Sistema de donaciones con cuatro métodos de pago: tarjeta, PayPal, transferencia bancaria y efectivo vía OXXO Pay con generación de código de barras e impresión de referencia.'
        },
        {
          name: 'Panel de administración',
          description: 'Dashboard completo con métricas del sitio, gestión de animales, solicitudes de adopción y dar en adopción, CRUD de refugios e historias de éxito, panel de finanzas y gestión de administradores.'
        },
        {
          name: 'Flujo de solicitudes',
          description: 'Los administradores pueden revisar, filtrar y responder solicitudes. Al aceptar una solicitud de dar en adopción, el sistema redirige directamente al formulario de creación del animal con los datos prellenados.'
        }
      ],
      futureImprovements: [
        {
          name: 'Pagos reales',
          description: 'Integrar pasarelas de pago reales como Stripe o MercadoPago para procesar donaciones de forma efectiva.'
        },
        {
          name: 'Notificaciones',
          description: 'Enviar correos automáticos al usuario cuando su solicitud cambie de estado, para mantenerlo informado sin que tenga que revisar el sitio.'
        }
      ],
      learnings: 'Este proyecto fue donde más aprendí sobre diseño de interfaces y UX — iteré el diseño múltiples veces y consulté a docentes especializados para estructurar tanta información sin abrumar al usuario. También consolidé conocimientos en el manejo completo de bases de datos: desde la conexión hasta operaciones CRUD en tiempo real dentro del sitio.',
    },

    en: {
      shortDescription: 'Web platform for managing pet adoptions, allowing shelters to list available animals and users to search, apply and donate.',
      fullDescription: 'Mi Nuevo Hogar is a web platform designed to streamline the entire adoption process for dogs and cats. Users can browse animals across different shelters, submit adoption requests, surrender their own pets and make simulated donations. The site was developed as an academic project taken seriously — with social media presence and real outreach.',
      features: [
        {
          name: 'Shelter geolocation',
          description: 'When surrendering a pet, the site detects the user\'s location and calculates the nearest shelter with real-time distance. Other shelters can also be compared.'
        },
        {
          name: 'Simulated donations',
          description: 'Donation system with four payment methods: card, PayPal, bank transfer and cash via OXXO Pay with barcode generation and printable reference.'
        },
        {
          name: 'Admin panel',
          description: 'Full dashboard with site metrics, animal management, adoption and surrender requests, shelter and success story CRUD, finance panel and admin account management.'
        },
        {
          name: 'Request workflow',
          description: 'Admins can review, filter and respond to requests. When a surrender request is approved, the system redirects directly to the animal creation form with pre-filled data.'
        }
      ],
      futureImprovements: [
        {
          name: 'Real payments',
          description: 'Integrate real payment gateways like Stripe or MercadoPago to process donations effectively.'
        },
        {
          name: 'Notifications',
          description: 'Send automatic emails to users when their request status changes, keeping them informed without having to check the site.'
        }
      ],
      learnings: 'This project is where I learned the most about interface design and UX — I iterated the design multiple times and consulted specialized teachers to organize a large amount of information without overwhelming the user. I also solidified my knowledge of full database management: from connection setup to real-time CRUD operations throughout the site.',
    },
  },

  {
    id: 'vie',
    name: 'Vie',
    status: 'prototype',
    featured: true,
    technologies: ['React Native', 'Expo', 'Typescript'],
    category: ['mobile'],
    github: null,
    preview: null,
    images: toImages(vie),

    es: {
      shortDescription: 'Aplicación móvil personal para organizar rutinas de ejercicio, actividades diarias, tareas y proyectos, con notificaciones automáticas y seguimiento visual del progreso.',
      fullDescription: 'Vie es una app móvil que desarrollé para cubrir mis propias necesidades de organización. Centraliza en un solo lugar el seguimiento de ejercicio, actividades diarias, tareas pendientes y proyectos personales. Toda la información se almacena localmente con SQLite, sin necesidad de cuenta ni conexión a internet. Es un proyecto propio que uso actualmente en mi día a día.',
      features: [
        {
          name: 'Dashboard',
          description: 'Vista general con estadísticas de todos los módulos: historial de entrenamientos por día, progreso de actividades diarias, tareas para hoy y pendientes, y el proyecto con mayor avance mostrando categoría, título, barra de progreso y objetivos completados.'
        },
        {
          name: 'Rutinas de ejercicio',
          description: 'Crea tu propia rutina asignando ejercicios a cada día de la semana. Al iniciar, una pantalla dedicada te guía ejercicio por ejercicio con timer de descanso que funciona en segundo plano y manda notificación al terminar. Al completar la rutina, el día se marca automáticamente en el dashboard.'
        },
        {
          name: 'Proyectos',
          description: 'Organiza proyectos por categorías personalizadas y define objetivos dentro de cada uno. El porcentaje de avance se calcula automáticamente según los objetivos completados, y el proyecto más avanzado se muestra destacado en el dashboard.'
        },
        {
          name: 'Notificaciones locales',
          description: 'Sistema de notificaciones sin conexión a internet: avisa cuando inicia una actividad del horario y cuando termina el descanso entre series, incluso con la app cerrada.'
        }
      ],
      futureImprovements: [
        {
          name: 'Sincronización en la nube',
          description: 'Añadir respaldo y sincronización de datos para no perder la información al cambiar de dispositivo.'
        },
        {
          name: 'Estadísticas ampliadas',
          description: 'Incluir gráficas de progreso a lo largo del tiempo para ejercicios, actividades y proyectos, no solo el estado actual.'
        }
      ],
      learnings: 'El mayor reto técnico fue implementar las notificaciones locales — lograr que los timers funcionaran en segundo plano y que las alertas se programaran correctamente por día y hora me llevó bastante tiempo. Aunque no fue un proyecto enfocado en UI, terminé aprendiendo bastante sobre el diseño en móvil al ser mi primer proyecto para este enfoque.',
    },

    en: {
      shortDescription: 'Personal mobile app to organize workout routines, daily activities, tasks and projects, with automatic notifications and visual progress tracking.',
      fullDescription: 'Vie is a mobile app I built to cover my own organization needs. It centralizes workout tracking, daily activities, pending tasks and personal projects all in one place. All data is stored locally with SQLite, no account or internet connection required. It is a personal project I actively use in my day to day life.',
      features: [
        {
          name: 'Dashboard',
          description: 'Overview with stats from all modules: daily workout history, activity progress, today\'s tasks and pending ones, and the most advanced project showing its category, title, progress bar and completed goals.'
        },
        {
          name: 'Workout Routines',
          description: 'Build your own routine by assigning exercises to each day of the week. When started, a dedicated screen guides you through each exercise with a rest timer that runs in the background and sends a notification when it ends. Completing the routine automatically marks that day on the dashboard.'
        },
        {
          name: 'Projects',
          description: 'Organize projects under custom categories and define goals within each one. Completion percentage is calculated automatically based on completed goals, and the most advanced project is highlighted on the dashboard.'
        },
        {
          name: 'Local Notifications',
          description: 'Notification system that works without an internet connection: alerts you when a scheduled activity starts and when the rest period between sets ends, even if the app is closed.'
        }
      ],
      futureImprovements: [
        {
          name: 'Cloud Sync',
          description: 'Add data backup and synchronization to avoid losing information when switching devices.'
        },
        {
          name: 'Expanded Stats',
          description: 'Include progress charts over time for workouts, activities and projects, not just the current status.'
        }
      ],
      learnings: 'The biggest technical challenge was implementing local notifications — getting the timers to run in the background and scheduling alerts correctly by day and time took quite a while. Although UI was not the main focus, I ended up learning a lot about mobile design since it was my first project built for that platform.',
    },
  },
]