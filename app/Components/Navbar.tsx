'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Rank, Profile2User, Information, MenuBoard } from 'iconsax-react';
import './Navbar.css';

export default function Navbar() {

    const pathname = usePathname()

    return (
        <nav className="navbar">
            <div className='navbar-links'>
                <Link href="/Home" className={`navbar-link ${pathname === '/Home' ? 'active' : ''}`}>
                    <img  className={`${pathname === '/Home' ? 'active' : 'noactive'}`}  src="./marke.svg" alt="" />
                    <p>Market</p>
                </Link>
                <Link href="/DailyTask" className={`navbar-link ${pathname === '/DailyTask' ? 'active' : ''}`}>
                    <img className={`${pathname === '/DailyTask' ? 'active' : 'noactive'}`} src="./ordenes.svg" alt="" />
                    <p>Ordenes</p>
                </Link>
                <Link href="/Referrals" className={`navbar-link ${pathname === '/Referrals' ? 'active' : ''}`}>
                    <img className={`${pathname === '/Referrals' ? 'active' : 'noactive'}`} src="./user.svg" alt="" />
                    <p>Perfil</p>
                </Link>
               
            </div>
        </nav>
    );
}
