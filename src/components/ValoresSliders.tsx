import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Valor } from "../types/InfoRestaurante";

interface ValoresSliderProps {
  valores: Valor[];
}

export default function ValoresSlider({ valores }: ValoresSliderProps) {
  const [indice, setIndice] = useState(0);

  const siguiente = () => setIndice((prev) => (prev + 1) % valores.length);
  const anterior = () => setIndice((prev) => (prev - 1 + valores.length) % valores.length);

  const valor = valores[indice];

  return (
    <div className="relative w-full">

      {/* Tarjeta del valor activo */}
      <div className="bg-stone-800/40 rounded-2xl p-10 border border-orange-700/50 min-h-[220px] flex flex-col justify-center">
        <h4 className="font-display font-bold text-2xl text-white mb-4">
          {valor.titulo}
        </h4>
        <p className="text-orange-100 leading-relaxed">
          {valor.descripcion}
        </p>
      </div>

      {/* Flechas */}
      <button
        onClick={anterior}
        className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white text-stone-900 shadow-md hover:bg-orange-600 hover:text-white transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={siguiente}
        className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white text-stone-900 shadow-md hover:bg-orange-600 hover:text-white transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* Puntos indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {valores.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`h-2.5 rounded-full transition ${
              i === indice ? "bg-orange-500 w-6" : "bg-orange-900/50 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}