import { useState } from "react";

function Navbar() {
const [isMenuClose, setIsMenuClose] = useState(true);
const Menu = [
  {lists : "HOME"},
  {lists : "DESTINATION"},
  {lists : "CREW"},
  {lists : "TECHNOLOGY"}
]
  const toggleMenu = () => {
    setIsMenuClose(!isMenuClose);
  };

  return (
    <div>
      <nav className="flex flex-row items-center pl-4 md:pl-8 lg:space-x-20 md:space-x-2 text-[#D0D6F9] pt-4 lg:pt-8">
        <img
          src="/assets/shared/Group 2.svg"
          alt="logo"
          className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
        />
        <div className="w-[400px] h-1  hidden lg:block"></div>
        <div className="flex-grow"></div>{" "}
        {/* This div will take up the remaining space */}
        <div className="md:hidden ">
         {isMenuClose ? <img
            src="/assets/shared/icon-hamburger-open.svg"
            alt="menu-icon"
            className="openHamburger cursor-pointer mr-4"
            onClick={toggleMenu} />
          :
          <div className=" menu-content bg-[#FFFFFF0A] backdrop-blur-lg fixed z-10 top-0  right-0 h-screen ">
          <div className="pl-44 pt-4">
<img src="/assets/shared/icon-hamburger-close.svg"
    alt="menu-icon"
    className="closeHamburger cursor-pointer"
    onClick={toggleMenu}/>
    </div>
        <ul className="menus  text-white flex flex-col space-y-6 pt-20  pl-8  pr-20 ">
       {Menu.map((list, index)=>(
        <li key={index} className="flex flex-row space-x-2 text-[16px] font-Barlow leading-5  cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105">
          <a className="flex flex-row  space-x-2 cursor-pointer">
            <span className="font-bold">0{index}</span>
             <p className="tracking-[2.7px]">{list.lists}</p>
            </a>
          </li>
       ))}
      </ul>
        </div>} 
         
          
        </div>
    
        <ul className="navbars hidden md:flex text-white md:text-sm  flex-row space-x-6  py-6 pr-8  md:bg-opacity-10 md:bg-[#FFFFFF0A] md:backdrop-blur-sm lg:backdrop-blur-lg lg:pl-20  lg:pr-40">
         {Menu.map((list, index)=>(
          <li key={index} className="flex flex-row space-x-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105">
            <a className="flex flex-row  space-x-2 cursor-pointer">
              <span className="hidden lg:block font-bold">0{index}</span>
               <p>{list.lists}</p>
              </a>
            </li>
         ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
