import React from 'react';

const AppBar = () => {
    return (
        <header className=' h-20 bg-yellow flex justify-between'>
            <img alt="Logo Star Wars" src="./../public/star-wars.svg" className='w-24 mx-5'/>
            <nav className='flex items-center'>
                <ul className='flex pr-9 font-normal text-md text-[#fff]'>
                    <a><li className='pr-2 font-'>Home</li></a>
                    <a><li className='pr-2'>Contact</li></a>
                    <a><li className='pr-2'>Favorites</li></a>
                </ul>
            </nav>
            
        </header>
    );
}

export default AppBar;
