import { useEffect, useState } from "react";

import { BurgerButton } from "./BurgerButton";



export const NavBar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setIsOpen(false)
      }, [])
    
    
    return (
        <header className="w-full px-7 sm:px-8 py-4 sm:py-6 bg-black">
        <nav className="grid">
          <div className="flex justify-between items-center">          
            <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className={`w-full pl-4 col-span-2 pt-3 sm:flex ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                  <li className={`text-white text-semibold text-lg py-2 `}>
                    <a className="block w-full" href="#">Home</a>
                  </li>
                  <li className={`text-white text-semibold text-lg py-2 `}><a href="#skills">Skills</a></li>
                <li className={`text-white text-semibold text-lg py-2 `}><a href="#projects">Proyectos</a></li>
                 <li className={`text-white text-semibold text-lg py-2  `}><a href="#contact">Contacto</a></li>
              
            </ul>
          </div>
        </nav>
      </header>
     
    )
}
