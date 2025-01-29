import { FaYoutube, FaLinkedinIn, FaInstagram, FaSpotify, FaDiscord } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="hidden tablet:grid grid-cols-5 gap-4 p-4 text-gray-500 my-10 border-t-2 border-gray-500">
                <div className="col-span-2">
                    <img src="/img/LOGO_PRINCIPAL.png" className="w-1/2" />
                    <div className="text-gray-500 w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia.
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-2xl text-black">Company</h2>
                    <Link href="/neuroatypie">La neuroatypie</Link>
                    <Link href="/community">Communauté</Link>
                    <Link href="/community">L'actualité</Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-2xl text-black">Contact</h2>
                    <Link href="/faq">Aide / FAQ</Link>
                    <Link href="mailto:naapp.contact@gmail.com">Nous contacter</Link>
                    <Link href="/community/#formulaire">Témoigner</Link>
                </div>
                <div className="flex flex-col justify-around space-y-4">
                    <h2 className="font-bold text-2xl text-black">Réseaux Sociaux</h2>
                    <Link href="https://www.youtube.com/@naapp_app" target="blank" >Youtube</Link>
                    <Link href="https://www.linkedin.com/company/naapp/" target="blank" >LinkedIn</Link>
                    <Link href="https://www.instagram.com/naapp_app/" target="blank" >Instagram</Link>
                    <Link href="https://open.spotify.com/user/31kn2za6r6axcgwtfsjmav5seoce?si=0550a34ac9254720" target="blank" >Spotify</Link>
                    <Link href="https://discord.gg/wcRW6wfNq6" target="blank" >Discord</Link>
                </div>
            </div>
            <div className="flex flex-col tablet:hidden p-4 space-y-2">
                <img src="/img/LOGO_PRINCIPAL.png" className="w-1/2" />
                <div className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia.
                </div>
                <div className="flex justify-around text-white border-y-2 border-gray-500 py-4">
                    <Link href="https://www.youtube.com/@naapp_app" target="blank" className="bg-black rounded-xl p-2"><FaYoutube size={42} /></Link>
                    <Link href="https://www.linkedin.com/company/naapp/" target="blank" className="bg-black rounded-xl p-2"><FaLinkedinIn size={42} /></Link>
                    <Link href="https://www.instagram.com/naapp_app/" target="blank" className="bg-black rounded-xl p-2"><FaInstagram size={42} /></Link>
                    <Link href="https://open.spotify.com/user/31kn2za6r6axcgwtfsjmav5seoce?si=0550a34ac9254720" className="bg-black rounded-xl p-2"><FaSpotify size={42} /></Link>
                    <Link href="https://discord.gg/wcRW6wfNq6" target="blank" className="bg-black rounded-xl p-2"><FaDiscord size={42} /></Link>
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