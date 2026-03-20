export type CardItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  level: string;
};

export const cards: CardItem[] = [
  {
    id: 1,
    icon: "💻",
    title: "HTML desde cero",
    description: "Aprende la estructura basica de una pagina web con etiquetas semanticas.",
    level: "Basico",
  },
  {
    id: 2,
    icon: "🎨",
    title: "CSS moderno",
    description: "Domina flexbox, grid, variables y estilos responsivos.",
    level: "Basico",
  },
  {
    id: 3,
    icon: "⚙️",
    title: "JavaScript esencial",
    description: "Comprende variables, funciones, condicionales y ciclos para la web.",
    level: "Intermedio",
  },
  {
    id: 4,
    icon: "⚛️",
    title: "React fundamentos",
    description: "Construye interfaces reutilizables con componentes, props y estado.",
    level: "Intermedio",
  },
  {
    id: 5,
    icon: "🧭",
    title: "React Router",
    description: "Navega entre vistas y organiza tus rutas en aplicaciones SPA.",
    level: "Intermedio",
  },
  {
    id: 6,
    icon: "📦",
    title: "Vite para proyectos",
    description: "Configura entornos de desarrollo rapidos para apps frontend.",
    level: "Basico",
  },
  {
    id: 7,
    icon: "🧠",
    title: "TypeScript inicial",
    description: "Agrega tipado estatico para escribir codigo mas seguro y mantenible.",
    level: "Intermedio",
  },
  {
    id: 8,
    icon: "🔌",
    title: "Consumo de APIs",
    description: "Conecta tu app con servicios externos usando fetch y async/await.",
    level: "Intermedio",
  },
  {
    id: 9,
    icon: "🗂️",
    title: "Manejo de estados",
    description: "Organiza datos compartidos entre componentes de forma clara.",
    level: "Intermedio",
  },
  {
    id: 10,
    icon: "🧪",
    title: "Testing frontend",
    description: "Aprende bases para probar componentes y flujos de usuario.",
    level: "Avanzado",
  },
  {
    id: 11,
    icon: "📱",
    title: "Responsive design",
    description: "Crea interfaces que se adapten correctamente a movil y desktop.",
    level: "Basico",
  },
  {
    id: 12,
    icon: "♿",
    title: "Accesibilidad web",
    description: "Mejora la experiencia para todas las personas con buenas practicas.",
    level: "Intermedio",
  },
  {
    id: 13,
    icon: "🚀",
    title: "Optimizacion web",
    description: "Reduce tiempos de carga y mejora el rendimiento de tus vistas.",
    level: "Avanzado",
  },
  {
    id: 14,
    icon: "🔒",
    title: "Seguridad frontend",
    description: "Conoce riesgos comunes y como proteger mejor tus aplicaciones.",
    level: "Avanzado",
  },
  {
    id: 15,
    icon: "🌐",
    title: "Deploy de proyectos",
    description: "Publica tus aplicaciones y entiende el flujo basico de despliegue.",
    level: "Intermedio",
  },
];
