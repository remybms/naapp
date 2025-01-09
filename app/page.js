import Footer from "../components/footer";
import Header from "../components/header"
import Link from "next/link";
import { FaDiscord, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col font-luciole min-h-screen justify-between items-center bg-white text-black">
      <Header />
      <div className="flex flex-col font-normal shadow-2xl border-4 border-black rounded-2xl mx-5 text-justify my-10">
        <img src="/img/IMG_7227.png" alt="présentation de naapp" className="w-full h-48 object-cover" />

        <div className="m-4">
          <h1 className="font-bold text-4xl my-2">NAAPP</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia. Praesent sollicitudin vulputate ex, ut pulvinar est euismod eu. Nullam diam metus, iaculis sit amet sollicitudin ut, porta sed lorem. Cras faucibus neque sit amet neque faucibus, posuere facilisis ex lobortis. Aliquam velit diam, mollis ut semper eget, egestas vitae tortor. Quisque ac rhoncus lectus. Morbi sit amet lobortis sem.
        </div>
        <Link href="/neuroatypie" className="bg-black text-white p-8 rounded-b-lg">En savoir plus sur la neuroatypie &gt;</Link>
      </div>
      <Link href="#discord"><img src="/img/fleche.png" width="200" /></Link>
      <div className="flex text-center flex-col m-4 space-y-4">
        <div className="font-bold text-4xl">Nouveau serveur Discord</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia. Praesent sollicitudin vulputate ex, ut pulvinar est euismod eu. Nullam diam metus, iaculis sit amet sollicitudin ut, porta sed lorem. Cras faucibus neque sit amet neque faucibus, posuere facilisis ex lobortis. Aliquam velit diam, mollis ut semper eget, egestas vitae tortor. Quisque ac rhoncus lectus. Morbi sit amet lobortis sem.
        </div>
        <Link href="https://discord.gg/wcRW6wfNq6" className="p-1 border-4 border-violet text-white font-bold hover:animate-zoomIn rounded-full" id="discord">
          <div className="flex items-center bg-violet hover:bg-white rounded-full p-4 space-x-2 justify-center  hover:text-violet">
            <FaDiscord size={42} />
            <div>
              REJOIGNEZ NOTRE SERVEUR !
            </div>
            </div>
        </Link>
      </div>
      <div className="flex flex-col m-4 space-y-4 text-center">
        <div className="font-bold text-4xl">Notre podcast</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque at tellus consequat feugiat sit amet id quam. Cras gravida dui ut nisi ullamcorper, vel imperdiet sapien lacinia. Praesent sollicitudin vulputate ex, ut pulvinar est euismod eu. Nullam diam metus, iaculis sit amet sollicitudin ut, porta sed lorem. Cras faucibus neque sit amet neque faucibus, posuere facilisis ex lobortis. Aliquam velit diam, mollis ut semper eget, egestas vitae tortor. Quisque ac rhoncus lectus. Morbi sit amet lobortis sem.
        </div>
        <Link href="https://www.youtube.com/@naapp_app" className="p-1 bg-gradient-to-r from-[#CB0000] from-60% to-[#AF81DF] text-red-500 font-bold hover:animate-zoomIn rounded-full" id="discord">
          <div className="flex items-center bg-white hover:bg-red-500 rounded-full p-4 space-x-2 justify-center  hover:text-white ">
            <FaYoutube size={42} />
            <div>
              VISIONNEZ NOTRE PODCAST !
            </div>
            </div>
        </Link>
        <Link href="https://open.spotify.com/user/31kn2za6r6axcgwtfsjmav5seoce?si=0550a34ac9254720" className="p-1 bg-gradient-to-r from-[#1DB954] from-60% to-[#8EA8F6] text-green-500 font-bold hover:animate-zoomIn rounded-full" id="discord">
          <div className="flex items-center bg-white hover:bg-green-500 rounded-full p-4 space-x-2 justify-center  hover:text-white">
            <FaSpotify size={42} />
            <div>
              ÉCOUTEZ NOTRE PODCAST !
            </div>
            </div>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
