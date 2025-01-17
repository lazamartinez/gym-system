export const navigationLinks = [
    {
      href: "/biblioteca",
      label: "Biblioteca de Ejercicios",
    },
    {
      img: "/icons/usuario.svg",
      selectedImg: "/icons/usuario-seleccionado.svg",
      href: "/mi-perfil",
      label: "Mi Perfil",
    },
  ];
  
  export const adminSideBarLinks = [
    {
      img: "/icons/admin/inicio.svg",
      route: "/admin",
      text: "Inicio",
    },
    {
      img: "/icons/admin/usuarios.svg",
      route: "/admin/usuarios",
      text: "Todos los Usuarios",
    },
    {
      img: "/icons/admin/ejercicios.svg",
      route: "/admin/ejercicios",
      text: "Todos los Ejercicios",
    },
    {
      img: "/icons/admin/solicitudes.svg",
      route: "/admin/solicitudes-ejercicios",
      text: "Solicitudes de Ejercicios",
    },
    {
      img: "/icons/admin/cuentas.svg",
      route: "/admin/solicitudes-cuentas",
      text: "Solicitudes de Cuentas",
    },
  ];
  
  export const FIELD_NAMES = {
    fullName: "Nombre completo",
    email: "Correo electrónico",
    fitnessGoal: "Objetivo de entrenamiento",
    password: "Contraseña",
    uploadPicture: "Subir foto de perfil",
  };
  
  export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    fitnessGoal: "text",
    password: "password",
  };
  
  export const sampleWorkouts = [
    {
      id: 1,
      title: "Biblioteca de Entrenamientos para Principiantes",
      instructor: "Juan Pérez",
      category: "Fuerza / Cardio",
      rating: 4.8,
      total_sessions: 20,
      avaible_sessions: 10,
      description:
        "Una serie de rutinas ideales para quienes están iniciando en el mundo del fitness. Mezcla ejercicios de fuerza y cardio para construir resistencia y tonificar músculos.",
      color: "#1c1f40",
      cover: "https://m.media-amazon.com/images/I/61CDIPwYytL._SL1293_.jpg",
      video: "/video-ejemplo.mp4",
      summary:
        "Esta biblioteca incluye rutinas diseñadas para ayudarte a empezar a entrenar de forma efectiva y segura.",
    },
    {
      id: 2,
      title: "Hábitos Atómicos para Entrenamiento Consistente",
      instructor: "Laura García",
      category: "Motivación / Hábitos",
      rating: 4.9,
      total_sessions: 15,
      avaible_sessions: 12,
      description:
        "Rutinas que te enseñan a construir hábitos sólidos para mantener una constancia en tu entrenamiento físico.",
      color: "#fffdf6",
      cover: "https://m.media-amazon.com/images/I/61CDIPwYytL._SL1293_.jpg",
      video: "/video-habitos.mp4",
      summary:
        "Una guía práctica para crear un estilo de vida saludable a través de pequeños cambios diarios.",
    },
    {
      id: 3,
      title: "Entrenamiento Funcional para Todo el Cuerpo",
      instructor: "Carlos López",
      category: "Funcional / Resistencia",
      rating: 4.7,
      total_sessions: 25,
      avaible_sessions: 15,
      description:
        "Una rutina que trabaja todo el cuerpo, enfocándose en movimientos funcionales para mejorar tu desempeño diario.",
      color: "#f8e036",
      cover: "https://m.media-amazon.com/images/I/61CDIPwYytL._SL1293_.jpg",
      video: "/video-funcional.mp4",
      summary:
        "Optimiza tu fuerza y movilidad con este plan diseñado para fortalecer los músculos clave.",
    },
    {
      id: 4,
      title: "Entrenamiento Avanzado: Fuerza y Potencia",
      instructor: "Sofía Torres",
      category: "Avanzado / Pesas",
      rating: 4.8,
      total_sessions: 30,
      avaible_sessions: 25,
      description:
        "Diseñado para atletas avanzados, este plan utiliza pesas y equipos avanzados para maximizar la fuerza y la potencia.",
      color: "#ed6322",
      cover: "https://m.media-amazon.com/images/I/61CDIPwYytL._SL1293_.jpg",
      video: "/video-avanzado.mp4",
      summary:
        "Lleva tu fuerza al siguiente nivel con este plan avanzado enfocado en resultados.",
    },
  ];
  