import React from 'react';


function Navbar() {
    return (
    <div className='flex px-10'>
        <div className='w-1/2'>
            <button type='submit'>BLOCK START</button>
        </div>
        <div className='w-1/2'>
            <ul className='list-none flex justify-between items-center '>
                <li>about</li>
                <li>create campaign</li>
                <li>connect wallet</li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;