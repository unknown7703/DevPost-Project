import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Navbar() {
    return (
    <div className='flex flex-row justify-between bg-[#D4D4D4]  items-center'>
        <div className=''>
            <button type='submit' className='ml-[67px] tracking-widest text-[25px] py-[8px]'><Link to="/">B L O C K   S T A R T</Link></button>
        </div>
        <div className=''>
            <ul className='flex items-center'>
                <li className='px-8'><button className='hover:bg-[#5A5A5A] hover:text-white px-[10px] hover:rounded-[6px] hover:drop-shadow-xl'><Link to="/about">about</Link></button></li>
                <li className='px-8'><button className='hover:bg-[#5A5A5A] hover:text-white px-[10px] hover:rounded-[6px] hover:drop-shadow-xl'><Link to="/create">create campaign</Link></button></li>
                <li className='px-8'><button className='hover:bg-[#5A5A5A] hover:text-white px-[10px] hover:rounded-[6px] hover:drop-shadow-xl'>connect wallet</button></li>
                <li className='px-5'><FontAwesomeIcon icon={faBars} /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;