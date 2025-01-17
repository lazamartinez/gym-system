import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type EjerCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<EjerCoverVariant, string> = {
  extraSmall: "ejercicio-cover_extra_small",
  small: "ejercicio-cover_small",
  medium: "ejercicio-cover_medium",
  regular: "ejercicio-cover_regular",
  wide: "ejercicio-cover_wide",
};

interface Props {
  className?: string;
  variant?: EjerCoverVariant;
  coverColor: string;
  coverImage: string;
}

const EjercicioCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
       EJERCICIO SIDE SVG
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "90%", height: "90%" }}
      >
        <Image
          src={coverImage}
          alt="Ejercicio cover"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default EjercicioCover;
