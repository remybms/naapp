import Hamburger from './hamburger'
import Link from 'next/link'
import { IoLogoDiscord } from 'react-icons/io5'

export default function Header(){


    return (
        <>
        <div className="hidden tablet:flex bg-gradient-to-r from-blue to-violet w-full text-white h-24 items-center justify-around">
            <Link href="/"><img src="/img/LOGO_BLANC.png" className=" mt-4 h-12" /></Link>
            <div className='flex pc:space-x-10 tablet:space-x-5 items-center'>
                <Link href="/">Accueil</Link>
                <Link href="/neuroatypie">La neuroatypie</Link>
                <Link href="/community">La communauté</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="https://discord.gg/wcRW6wfNq6" target="blank"><IoLogoDiscord size={42} /></Link>
            </div>
        </div>
        <div className="flex tablet:hidden bg-gradient-to-r from-blue to-violet w-screen h-24 items-center justify-between">
            <Link href="/"><img src="/img/LOGO_BLANC.png" className=" mt-4 ml-4 h-12" /></Link>
            <Hamburger />
        </div>
        </>
    )
}
