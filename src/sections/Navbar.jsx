import { useState } from "react";
import { navLinks } from '../constants/index'

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {
        navLinks.map(({ id, name, href }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
          </li>
        ))
      }
    </ul>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((previsOpen) => !previsOpen);

  return (
    <header className="bg-black/90 top-0 right-0 left-0 z-50 fixed">
      <div className='max-w-7xl mx-auto'>
        <div className="flex items-center justify-between py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Rukhsar Khan
          </a>

          <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            <img src={isOpen ? "assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6"></img>
          </button>

          <nav className="sm:flex hidden">
            <NavItems/>
          </nav>
        </div>
      </div>

      {/* //mobile nav */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5 ">
          <NavItems/>
        </nav>
      </div>
    </header>
  )
}

export default Navbar; 