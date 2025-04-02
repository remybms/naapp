"use client"

import { slide as Menu } from 'react-burger-menu'
import { IoReorderThree, IoLogoDiscord } from 'react-icons/io5'
import { ImCross } from "react-icons/im";
import Link from 'next/link';

function Hamburger() {
    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '42px',
            height: '42px',
            right: '0.5rem',
            top: '1.7rem',
            color: '#FFFFFF'
        },
        bmMenuWrap: {
            width: '75%',
            height: '100%',
            marginTop: '5%',
            paddingTop: '10%',
            paddingLeft: '5%',
            backgroundColor: '#86AAFD',
            color: '#000000',
            borderTopLeftRadius: '1.5rem',
        },
        bmCrossButton: {
            height: '30px',
            width: '30px',
            right: '1rem',
            top: '1rem',
        },
        bmCross: {
            background: '#86AAFD',
        },
    }
    return (
        <div>
            <Menu customBurgerIcon={<IoReorderThree size={42} />} styles={styles} customCrossIcon={<ImCross size={30} />} right>
                <Link href="/" className='mb-3 w-fit'>Accueil</Link>
                <Link href="/community" className='mb-3 w-fit'>Communauté</Link>
                <Link href="/faq" className='mb-3 w-fit'>FAQ</Link>
                <Link href="/neuroatypie" className='mb-3 w-fit'>Liste des neuroatypies</Link>
                <Link href="https://discord.gg/wcRW6wfNq6" target="blank" className='w-fit'><IoLogoDiscord size={42} /></Link>
            </Menu>
        </div>
    )
}
export default Hamburger