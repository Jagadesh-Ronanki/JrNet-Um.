"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useActivePath } from '@/lib/helper';


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contacts', href: '/contacts', current: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const checkActivePath = useActivePath()

  return (
    <section className='sticky top-0 z-10 bg-black h-[79px] flex flex-row justify-between items-center pl-5 border-b-[0.1px] border-b-stone-900'>
      <button onClick={() => {setToggle(!toggle)}} className='relative'>
        <Image 
          alt="logo"
          src="/jr.svg"
          height={100}
          width={100}
          className={`z-10 transition-opacity scale-150 duration-500 absolute inset-0 ${toggle ? 'opacity-0' : 'opacity-100'}`}
          draggable={false}
        />
        <Image 
          alt="logo"
          src="/um.svg"
          height={100}
          width={100}
          className={`z-10 transition-opacity scale-150 duration-500 ${toggle ? 'opacity-100' : 'opacity-0'}`}
          draggable={false}
        />
      </button>
      <nav className="max-md:hidden grid grid-cols-3 divide-x-[0.1px] divide-stone-900 w-auto text-center h-full">
        {navigation.map((item, key) => (
          <Link href={item.href} key={item.name} className={`content-center px-12 ${checkActivePath(item.href) ? 'active' : 'text-stone-400'} ${key == 0 ? 'border-l-[0.1px] border-l-stone-900' : ''}`}>
              {item.name}
          </Link>
        ))}
      </nav>
      <button
        data-collapse-toggle="navbar-default"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden mr-3"
        onClick={() => setIsOpen(!isOpen)} // Toggle the nav visibility on click
      >
        <span className="sr-only">Open main menu</span>
        {/* Icon for menu */}
        {!isOpen ? (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20 cursor-pointer">
          <rect width="16" height="2" fill="currentColor"></rect>
          <rect x="7" y="7" width="9" height="2" fill="currentColor"></rect>
          <rect y="14" width="16" height="2" fill="currentColor"></rect>
        </svg>) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20 cursor-pointer">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12117 0.706956C1.73064 0.316431 1.09748 0.316431 0.706955 0.706956C0.316431 1.09748 0.316432 1.73065 0.706956 2.12117L6.58408 7.99829L0.707352 13.875C0.316827 14.2655 0.316827 14.8987 0.707351 15.2892C1.09788 15.6798 1.73104 15.6798 2.12156 15.2892L7.99829 9.41251L13.875 15.2892C14.2655 15.6798 14.8987 15.6798 15.2892 15.2892C15.6798 14.8987 15.6798 14.2655 15.2892 13.875L9.4125 7.99829L15.2896 2.12117C15.6802 1.73065 15.6802 1.09748 15.2896 0.706956C14.8991 0.316431 14.2659 0.316431 13.8754 0.706956L7.99829 6.58408L2.12117 0.706956Z" fill="currentColor">
            </path>
          </svg>
        )}
      </button>
      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute top-full right-0 left-0 md:hidden pt-[1px]">
          <div className="backdrop-blur-lg bg-black space-y-1 divide-y-[0.1px] divide-stone-900 border-b-[0.1px] border-b-stone-900">
            {navigation.map((item, key) => (
              <Link href={item.href} onClick={() => {setIsOpen(false)}} key={item.name} className={`block text-center rounded-md text-base p-5 ${checkActivePath(item.href) ? 'active' : 'text-stone-400'}`}>
                  {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
