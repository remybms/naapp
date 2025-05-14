import Footer from "../components/footer";
import Header from "../components/header"
import Link from "next/link";
import { FaDiscord, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
      <main className="flex flex-col font-luciole min-h-screen justify-between items-center bg-white text-black">

        <Header />
        <div className="flex flex-col tablet:flex-col-reverse items-center">
          <div className="grid grid-cols-1 pc:grid-cols-2 font-normal shadow-2xl border-4 border-black rounded-2xl mx-5 text-justify my-10 pc:mx-[15%]" id="presentation">
            <img src="/img/IMG_7227.png" alt="présentation de naapp" className="w-full" />

            <div className="m-4 pc:space-y-12">
              <h1 className="font-bold text-4xl pc:text-5xl my-2">NAAPP</h1>
              <div className="pc:text-xl">
                NAAPP est un projet dédié à la sensibilisation et à l’échange autour de la neurodiversité. Que vous soyez concerné(e), proche aidant ou simplement non-sensibilisé, découvrez nos contenus et ressources pour mieux comprendre les fonctionnements neuroatypiques et déconstruire les idées reçues.
              </div>
            </div>
            <Link href="/neuroatypie" className="bg-black text-white p-8 rounded-b-lg pc:col-span-2">En savoir plus sur la neuroatypie &gt;</Link>
          </div>
          <Link href="#discord" className="flex tablet:hidden"><img src="/img/fleche.png" width="200" /></Link>
          <Link href="#presentation" className="hidden tablet:flex"><img src="/img/fleche.png" width="300" /></Link>
          <div className="tablet:grid tablet:grid-cols-3 tablet:items-center tablet:mt-10 pc:ml-[15%]" id="discord">
            <div className="flex text-center tablet:text-start tablet:items-start flex-col m-4 space-y-4 items-center col-span-2">
              <div className="font-bold text-4xl pc:text-5xl">Nouveau serveur Discord</div>
              <div className="pc:text-xl">
                Vous souhaitez échanger avec d’autres personnes neuroatypiques, poser vos questions ou simplement partager votre expérience ? Notre serveur Discord est un espace bienveillant où vous pourrez discuter, découvrir des ressources et participer à nos événements en ligne.
              </div>
              <Link href="https://discord.gg/wcRW6wfNq6" target="blank" className="p-1 border-4 border-violet text-white font-bold hover:animate-zoomIn rounded-full w-full tablet:w-3/4 pc:w-1/2">
                <div className="flex items-center bg-violet hover:bg-white rounded-full p-3 tablet:p-4 space-x-2 justify-center  hover:text-violet">
                  <FaDiscord size={42} />
                  <div>
                    REJOIGNEZ NOTRE SERVEUR !
                  </div>
                </div>
              </Link>
            </div>
            <img src="/img/femme.png" alt="femme" className="hidden tablet:flex row-span-2" />
          </div>

        </div>
        <div className="grid tablet:grid-cols-2 grid-cols-1 items-center justify-items-center pc:mx-[15%]">
          <img src="/img/podcast.png" alt="podcast" width={500} />
          <div className="flex flex-col m-4 space-y-4 items-center text-center">
            <div className="font-bold text-4xl">Notre podcast</div>
            <div>
              Notre podcast met en lumière la neurodiversité à travers des témoignages, des interviews de l’entourage et des discussions autour des défis et des forces des personnes neuroatypiques. Un nouvel épisode chaque mois, disponible sur toutes les plateformes d’écoute !
            </div>
            <Link href="https://www.youtube.com/@naapp_app" target="blank" className="p-1 bg-gradient-to-r from-[#CB0000] from-60% to-[#AF81DF] text-red-500 font-bold hover:animate-zoomIn rounded-full w-full pc:w-2/3">
              <div className="flex items-center bg-white hover:bg-red-500 rounded-full p-4 space-x-2 justify-center  hover:text-white ">
                <FaYoutube size={42} />
                <div>
                  VISIONNEZ NOTRE PODCAST !
                </div>
              </div>
            </Link>
            <Link href="https://open.spotify.com/show/4qopnaYij29LqKlJSeL6XS?si=V0hxyyVhS3KQeQlGkA3VlA&nd=1&dlsi=6d73097237084146" target="blank" className="p-1 bg-gradient-to-r from-[#1DB954] from-60% to-[#8EA8F6] text-green-500 font-bold hover:animate-zoomIn rounded-full w-full pc:w-2/3" id="discord">
              <div className="flex items-center bg-white hover:bg-green-500 rounded-full p-4 space-x-2 justify-center  hover:text-white">
                <FaSpotify size={42} />
                <div>
                  ÉCOUTEZ NOTRE PODCAST !
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </main>
  );
}
