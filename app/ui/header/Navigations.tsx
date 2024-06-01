import React from 'react'
import Image from 'next/image'
import { navItems } from '@/app/lib/navItems'

const Navigations = () => {
  return (
    <nav className='w-[662.59px] '>
        <ul className='flex justify-between items-center'>
            {navItems.map((items, index) => (
                <li key={index} 
                className={`flex items-center gap-2 ${index == 1 ? 'bg-[#01F0D0] rounded-[41px] py-[11px] px-[16px]' : 'bg-none'}`}>

                    <Image src={items.icon} 
                    alt='icons' 
                    width={0}
                    height={0}
                    style={{width:'auto', height: "17" }}
                    />
                    

                    <p className='uppercase text-[#072635] text-sm font-bold font-manrope leading-[19px] '>{items.title}</p>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navigations