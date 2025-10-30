import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Collar Luna Creciente",
    price: 89.99,
    image: "/minimalist-crescent-moon-gold-necklace-on-white-ba.jpg",
    category: "collares",
    description:
      "Elegante collar con diseño de luna creciente en oro de 14k. Una pieza minimalista que captura la esencia celestial.",
    inStock: true,
  },
  {
    id: "2",
    name: "Anillo Constelación",
    price: 129.99,
    image: "/delicate-constellation-ring-with-tiny-diamonds-on-.jpg",
    category: "anillos",
    description:
      "Anillo delicado con pequeños diamantes que forman una constelación única. Perfecto para quienes aman el cosmos.",
    inStock: true,
  },
  {
    id: "3",
    name: "Aretes Minimalistas",
    price: 69.99,
    image: "/elegant-minimalist-gold-drop-earrings-on-white-bac.jpg",
    category: "aretes",
    description: "Aretes de gota en oro con diseño minimalista. Elegancia atemporal para cualquier ocasión.",
    inStock: true,
  },
  {
    id: "4",
    name: "Pulsera Infinito",
    price: 79.99,
    image: "/sleek-infinity-symbol-bracelet-in-gold-on-white-ba.jpg",
    category: "pulseras",
    description:
      "Pulsera con símbolo de infinito en oro. Representa el amor eterno y las conexiones que trascienden el tiempo.",
    inStock: true,
  },
  {
    id: "5",
    name: "Collar Estrella Polar",
    price: 99.99,
    image: "/elegant-gold-north-star-necklace.jpg",
    category: "collares",
    description: "Collar con estrella polar en oro blanco. Guía tu camino con esta pieza celestial.",
    inStock: true,
  },
  {
    id: "6",
    name: "Anillo Solitario",
    price: 199.99,
    image: "/elegant-solitaire-diamond-ring.jpg",
    category: "anillos",
    description: "Anillo solitario con diamante de corte brillante. Clásico y elegante para momentos especiales.",
    inStock: true,
  },
  {
    id: "7",
    name: "Aretes Perla",
    price: 89.99,
    image: "/elegant-pearl-stud-earrings.jpg",
    category: "aretes",
    description: "Aretes de perla cultivada con montura en oro. Sofisticación natural.",
    inStock: true,
  },
  {
    id: "8",
    name: "Pulsera Cadena",
    price: 59.99,
    image: "/delicate-gold-chain-bracelet.jpg",
    category: "pulseras",
    description: "Pulsera de cadena delicada en oro. Perfecta para combinar con otras piezas.",
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
