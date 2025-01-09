import { FaYoutube, FaLinkedinIn, FaInstagram, FaSpotify, FaDiscord } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="hidden tablet:flex">
                footer
            </div>
            <div className="flex flex-col tablet:hidden p-4 space-y-2">
                <img src="/img/LOGO_PRINCIPAL.png" className="w-1/2" />
                <div className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia.
                </div>
                <div className="flex justify-around text-white border-y-2 border-gray-500 py-4">
                    <Link href="" className="bg-black rounded-xl p-2"><FaYoutube size={42}/></Link>
                    <Link href="" className="bg-black rounded-xl p-2"><FaLinkedinIn size={42}/></Link>
                    <Link href="" className="bg-black rounded-xl p-2"><FaInstagram size={42}/></Link>
                    <Link href="" className="bg-black rounded-xl p-2"><FaSpotify size={42}/></Link>
                    <Link href="" className="bg-black rounded-xl p-2"><FaDiscord size={42}/></Link>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 text-gray-500">
                    <div className="flex flex-col space-y-2">
                        <h2 className="font-bold text-2xl text-black">Company</h2>
                        <Link href="/neuroatypie">La neuroatypie</Link>
                        <Link href="/community">Communauté</Link>            
                        <Link href="/community">L'actualité</Link>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h2 className="font-bold text-2xl text-black">Contact</h2>
                        <Link href="/faq">Aide / FAQ</Link>
                        <Link href="mailto:naapp.contact@gmail.com">Nous contacter</Link>
                        <Link href="/community/#formulaire">Témoigner</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}