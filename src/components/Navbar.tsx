"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
    const [isclick, setClick] = useState(false);
    const clicked = () => {
        setClick(!isclick);
    }
    return (
        <div
            className='ease-in duration-300 fixed top-0 right-0 left-0 z-10'>
            <div className={isclick
                ? ' absolute top-0 right-0 left-0 bottom-0 bg-black/40 '
                : ' fixed top-0 right-0 left-0 bottom-0 hidden bg-transparent'} />
            <div className=" flex-between p-4 px-7 z-0 w-full bg-navbar">

                <Link href={'/'}>
                    <div className='hero__image'>
                        <Image src="/img/totlogo.png" alt='logo' fill
                            className='object-container' />
                    </div>
                </Link>


                <div className='hidden md:flex md:justify-end md:items-center'>

                    <ul className='md:flex font-semibold space-x-7'>
                        <li >
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className=''>
                            <Link href={'/EPL'}>Premier league</Link>
                        </li>
                        <li className=''>
                            <Link href={'/laliga'}>Laliga</Link>
                        </li>
                        <li className=''>
                            <Link href={'/L1'}>League 1</Link>
                        </li>
                    </ul>
                </div>


                <div className={isclick
                    ? 'navbar_card_onclick '
                    : 'navbar_card_hide hidden'} >
                    <div className={!isclick
                        ? 'md:hidden fixed top-4 right-4 flex  ease-in duration-300'
                        : 'md:hidden absolute top-4 left-[-30px]  ease-in duration-700'} onClick={clicked} >
                        {!isclick
                            ? <Bars3Icon className='h-7 w-7 p-1 outline-0.5 z-10 bg-small-nav rounded-l-md ' />
                            : <XMarkIcon className='h-7 w-7 outline-0.5 bg-small-nav rounded-l-md ' />
                        }
                    </div>
                    <ul className='space-y-4 flex flex-col w-full mt-4 mr-1'>
                        <li className="flex justify-center pt-4 pr-2 font-semibold">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='flex justify-center pt-4 pr-2 font-semibold'>
                            <Link href={'/EPL'}>Premier league</Link>
                        </li>
                        <li className='flex justify-center pt-4 pr-2 font-semibold'>
                            <Link href={'/laliga'}>Laliga</Link>
                        </li>
                        <li className='flex justify-center pt-4 pr-2 font-semibold'>
                            <Link href={'/L1'}>League 1</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Navbar