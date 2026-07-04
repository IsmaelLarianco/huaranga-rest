import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import infoData from "../data/info-restaurante.json";
import type { InfoRestaurante } from "../types/InfoRestaurante";

const info = infoData as InfoRestaurante;

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-white pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Columna 1: Logo */}
        <div>
          <img className="h-40" src="public/images/logo-completo.png"></img>
        </div>

        {/* Columna 2: Mapa del sitio */}
        <div>
          <h3 className=" text-stone-800 font-semibold mb-4">Mapa del Sitio</h3>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><Link to="/" className="w-10 h-10 text-stone-500 hover:text-red-500 transition">Inicio</Link></li>
            <li><Link to="/sobre-nosotros"w-10 h-10 className="text-stone-500 hover:text-red-500 transition">Sobre Nosotros</Link></li>
            <li><Link to="/menu" className="w-10 h-10 text-stone-500 hover:text-red-500 transition">Nuestra Carta</Link></li>
          </ul>
        </div>
{/* Columna 3: Redes sociales */}
<div>
  <h3 className=" text-stone-800 text-lg font-semibold mb-4">Síguenos</h3>
  <div className="flex flex-col gap-4">
    <a href="https://www.facebook.com/share/1DBbfQpzJ9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 text-stone-500 hover:text-orange-700 transition"
    >
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900">
        <FaFacebookF size={16} />
      </span>
      Facebook
    </a>
    <a
      href="https://www.instagram.com/restaurantehuaranga"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-stone-500 hover:text-orange-700 transition"
    >
    
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900">
        <FaInstagram size={18} />
      </span>
      Instagram
    </a>
    <a
      href="https://wa.me/51951188164?text=Hola%2C%20quiero%20hacer%20una%20reserva"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-stone-500 hover:text-orange-700 transition"
    >
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 ">
        <FaWhatsapp size={16} />
      </span>
      +51 951 188 164
    </a>
  </div>
</div>
        
        
      </div>

      {/* Línea inferior */}
      <div className="max-w-6xl mx-auto border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-xs">
        &copy; {new Date().getFullYear()} {info.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}