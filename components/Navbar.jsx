import Link from 'next/link'
import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { RiEyeCloseLine, RiEye2Line } from 'react-icons/ri'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav className="mx-auto flex items-center justify-between pb-3 px-5 border-b border-gray-600">
            <h1 className="text-lg">FARINY SABTU</h1>
            
            <Link href="https://github.com/farinys">
                <a target="_blank" rel="noreferrer" className="hover:text-[#6fffff] transition duration-200">
                    <SiGithub size={24} />
                </a>
            </Link>
            {/*
            <button onClick={() => setOpenMenu(!openMenu)} className="relative">
                {openMenu 
                    ? <RiEye2Line size={24} /> 
                    : <RiEyeCloseLine size={24} />
                }
            </button>
            */}
        </nav>
    )
}
