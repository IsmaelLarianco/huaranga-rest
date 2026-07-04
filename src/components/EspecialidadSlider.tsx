import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import menuData from "../data/menu.json";
import type { Plato } from "../types/Plato";

const menu = menuData as Plato[];

// Filtramos solo los platos con id del 13 al 17
const especialidades = menu.filter((plato) => plato.id >= 13 && plato.id < 17);

export default function EspecialidadSlider() {
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % especialidades.length);
  };

  const anterior = () => {
    setIndice((prev) => (prev - 1 + especialidades.length) % especialidades.length);
  };

  const plato = especialidades[indice];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Imagen */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
        <img
          src={plato.imagen}
          alt={plato.nombre}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Texto sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-display text-2xl font-bold mb-2">{plato.nombre}</h3>
          <p className="text-sm text-stone-200 leading-relaxed">{plato.descripcion}</p>
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={anterior}
        className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-700 hover:text-white transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={siguiente}
        className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-700 hover:text-white transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores (puntos) */}
      <div className="flex justify-center gap-2 mt-5">
        {especialidades.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`h-2.5 rounded-full transition ${
              i === indice ? "bg-orange-700 w-6" : "bg-stone-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}