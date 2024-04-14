import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp, MdLocationOn } from "react-icons/md";
import { CiLogin, CiLogout  } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Location from "./Location";


const Navbar = ({size, setShow}) => {
  const [nav, setNav] = useState(false);
  const [loc, setLoc] = useState(false);   
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to='/'>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-primaryhover">
          App de <span className="font-bold text-primary">Restaurante</span>
        </h1>
        </Link>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Buscar</p>
        </div>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full  text-[14px] m-1">        
          <button onClick={() => setLoc(!loc)} className="hidden lg:flex items-center bg-gray-200 rounded-full p-2 text-[15px] border-none">
          <MdLocationOn size={25} className="text-primary" /> Localidade
          </button>
        </div>

      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Procurar Comidas"
        />
      </div>

      <div className="flex justify-between items-center">
      <div className="p-1 ">
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" />
          <span>{size}</span>
        </button>    
        </div>

        
        
        {user?.displayName ? (
        <button onClick={handleSignOut}>Sair</button>
      ) : (
        <Link to='/signin'>
        <button className="bg-primary text-white hidden md:flex items-center py-2 rounded-full">
          <CiLogin size={20} className="mr-2" /> Login
        </button>
        </Link>)} 
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}


            {/* Menu Localidade */}
            <div
        className={
          loc
            ? "fixed rounded-lg top-20 left-100 w-[500px] h-100px bg-rose-50 z-10 duration-300"
            : "fixed rounded-lg top-20 left-[-100%] w-[500px] h-100px bg-rose-50 z-10 duration-300 "
        }
        
      >
        <AiOutlineClose
          onClick={() => setLoc(!loc)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-primaryhover ">
          <span className="font-bold">Endereço</span>
        </h2>
        <Location />
      </div>

      {/* Menu Lateral */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
        
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-primaryhover">
          App de <span className="font-bold">Refeição</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Pedidos
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favoritos
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Carteira
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Ajuda
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promoções
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Melhores
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Convidar Amigos
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
