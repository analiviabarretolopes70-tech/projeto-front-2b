import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {

    const menu = ['/', '/sobre', '/contato']
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href={menu[0]}>Home</Link></li>
                    <li><Link href={menu[1]}>Sobre</Link></li>
                    <li><Link href={menu[2]}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}