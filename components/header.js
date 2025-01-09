import Hamburger from './hamburger'
import Link from 'next/link'

export default function Header(){
    return (
        <>
        <div className="hidden tablet:flex">
            header
        </div>
        <div className="flex tablet:hidden bg-gradient-to-r from-blue to-violet w-screen h-24 items-center justify-between">
            <Link href="/"><img src="/img/LOGO_BLANC.png" className=" mt-4 ml-4 h-12" /></Link>
            <Hamburger />
        </div>
        </>
    )
}