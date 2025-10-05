'use client';

import Link from 'next/link'
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaBug } from "react-icons/fa";

const NavBar = () => {
    const currentPath = usePathname();
    console.log("currentPath",currentPath);
    const links = [
        {label : 'Dashboard' , href : '/'},
        {label : 'Issues' , href : '/issues'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
            <Link 
                key={link.href} 
                href={link.href} 
                className={`${link.href === currentPath ? 'text-zinc-900' :'text-zinc-500'} hover:text-zinc-800 transition-colors`}>
                {link.label}
            </Link>)}
           
        </ul>
    </nav>
  )
}
// className='text-zinc-500 hover:text-zinc-800 transition-colors'
export default NavBar
