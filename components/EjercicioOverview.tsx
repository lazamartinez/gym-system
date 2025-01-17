import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import EjercicioCover from "./EjercicioCover";

const EjercicioOverview = ({
  title,
  instructor,
  category,
  rating,
  total_sessions,
  avaible_sessions,
  description,
  color,
  cover,
}: ejercicio) => {
  return (
    <section className="EjercicioOverview">
      <div className="flex flex-1 flex-col gap-5">
        <div className="relative flex flex-1 justify-center">
          <div className="relative">
            <EjercicioCover
              variant="wide"
              className="w-full h-64 object-cover"
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
        <h1 className="font-semibold text-5xl text-light-300">{title}</h1>

        <div className="ejercicio-info">
          <p className="font-semibold text-light-100">
            Por{" "}
            <span className="font-semibold text-light-200">{instructor}</span>
          </p>

          <p className="font-semibold text-light-100">
            Categoria:{" "}
            <span className="font-semibold text-light-200">{category}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="logo" width={22} height={22} />
            <p className="font-semibold text-light-100">{rating}</p>
          </div>
        </div>

        <div className="ejercicio-copias">
          <p className="font-semibold text-light-100">
            Sesiones totales: <span>{total_sessions}</span>
          </p>

          <p className="font-semibold text-light-100">
            Sesiones disponibles: <span>{avaible_sessions}</span>
          </p>
        </div>

        <p className="ejercicio-description font-light text-1xl text-light-300">
          {description}
        </p>

        <Button className="ejercicio-overview_btn">
          <Image
            src="/icons/gym-fitness.svg"
            alt="ejercicio"
            width={25}
            height={25}
          />
          <p className="font-bebas-neue text-xl text-dark-100">Acceder</p>
        </Button>
      </div>

      {/* <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <EjercicioCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
        </div>
      </div> */}
    </section>
  );
};

export default EjercicioOverview;
