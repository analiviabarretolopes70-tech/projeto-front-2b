'use client'; 
import Link from 'next/link'
import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const menu = ['/', '/sobre', '/contato'];
    const [srcMenu, setSrcMenu] = useState('/icons/open.svg');

    return (
        <div> 
            <button type='button' onClick={() => setSrcMenu(srcMenu === '/icons/open.svg' ? '/icons/close.svg' : '/icons/open.svg')}>
            <Image src={srcMenu} width={30} height={30} alt='menu' />
            </button>

            { 
                srcMenu === '/icons/close.svg' && 

        <header>
            <nav>
                <ul>
                    <li><Link href={menu[0]}>Home</Link></li>
                    <li><Link href={menu[1]}>Sobre</Link></li>
                    <li><Link href={menu[2]}>Contato</Link></li>
                </ul>
            </nav>
        </header>
            }
        </div>
    )
}