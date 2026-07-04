import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-8 bg-black/30 backdrop-blur-md text-white z-50">
      <Link to="/"> <img src="/images/logo.png" alt="Logo Huaranga" className="h-12 w-auto [filter:brightness(0)_invert(1)]"/>
      </Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="titulo hover:text-orange-700 transition ">Inicio</Link></li>
        <li><Link to="/sobre-nosotros" className=" titulo hover:text-orange-700 transition">Sobre Nosotros</Link></li>
        <li><Link to="/menu" className="titulo hover:text-orange-700 transition">Menú</Link></li>
        <li><Link to="https://wa.me/51951188164?text=Hola%2C%20quiero%20hacer%20una%20reserva" className="titulo hover:text-orange-700 transition">Contactanos</Link></li>
      </ul> 
    </nav>
  );
}