"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroVideo() {
  return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Sorteos Sodre",
        link: "#",
        thumbnail:
          "/sodre-captura.mp4",
      },
  {
    title: "Inventario MEC",
    link: "#",
    thumbnail:
      "/video-inventarioequipos.mp4",
  },
  {
    title: "Repositorio de archivos",
    link: "#",
    thumbnail:
      "/captura-rda.mp4",
  },
  {
    title: "Social Unity",
    link: "#",
    thumbnail:
      "/mecs.png",
  },
  {
    title: "Where We Eat",
    link: "#",
    thumbnail:
      "/wwe-video.mp4",
  },
  {
    title: "Inventario MEC",
    link: "#",
    thumbnail:
      "/video-inventarioequipos.mp4",
  },
  {
    title: "Repositorio de archivos",
    link: "#",
    thumbnail:
      "/captura-rda.mp4",
  },

  {
    title: "Where We Eat",
    link: "#",
    thumbnail:
      "/wwe-video.mp4",
  },
];
