import { useState } from "react";
import menuData from "../data/menu.json";
import type { Plato } from "../types/Plato";

const menu = menuData as Plato[];

export default function Menu() {
  const categorias = Array.from(new Set(menu.map((p) => p.categoria)));
  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0]);

  const platosFiltrados = menu.filter((p) => p.categoria === categoriaActiva);

  return (
    <section className="relative min-h-screen py-32 px-4">

      {/* Imagen de fondo con blur */}
      <div
        className="fixed inset-0 bg-cover bg-center blur-sm scale-110 -z-20"
        style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
      />
      {/* Overlay oscuro sobre la imagen */}
      <div className="fixed inset-0 bg-black/50 -z-10" />

      {/* Tarjeta central con la info */}
      <div className="relative max-w-3xl mx-auto bg-amber-50 rounded-2xl shadow-2xl px-8 py-14 md:px-14 md:py-16">

        {/* Título */}
        <div className="mb-10">
          <h1 className="font-display text-5xl font-bold text-stone-900 border-b-4 border-stone-900 pb-4 inline-block uppercase tracking-wide">
            La Carta
          </h1>
        </div>

        {/* Pestañas de categorías */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-6 py-2.5 font-display font-semibold uppercase tracking-wide text-sm transition ${
                categoriaActiva === categoria
                  ? "bg-stone-900 text-white"
                  : "bg-transparent text-stone-800 border border-stone-400 hover:border-stone-900"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Lista de platos */}
        <div className="divide-y divide-stone-300">
          {platosFiltrados.map((plato) => (
            <div key={plato.id} className="py-6 flex justify-between items-start gap-6">
              <div>
                <h3 className="font-display text-lg font-bold text-stone-900 uppercase tracking-wide mb-1">
                  {plato.nombre}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {plato.descripcion}
                </p>
              </div>
              <span className="font-display font-bold text-orange-700 whitespace-nowrap text-lg">
                S/ {plato.precio}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}