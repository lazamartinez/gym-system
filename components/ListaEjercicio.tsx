import React from "react";

const ListaEjercicio = () => {
    return (
        <section>
            <h2 className="font-bebas-neue text-4xl text-light-100">Ejercicios populares</h2>
        </section>
    )
};

interface ListaEjercicioProps {
    title: string;
    ejercicio: {
      id: number;
      title: string;
      instructor: string;
      category: string;
      rating: number;
      total_sessions: number;
      avaible_sessions: number;
      description: string;
      color: string;
      cover: string;
      video: string;
      summary: string;
    }[];
    containerClassName?: string; // Opcional
  }
  
export default ListaEjercicio;