import Footer from "../../components/footer";
import Header from "../../components/header";
import { FaYoutube, FaSpotify } from "react-icons/fa";
import Link from "next/link";

export default function Community() {
    return (
        <main className="flex flex-col min-h-screen justify-between items-center bg-white text-black">
            <Header />
            <div className="flex flex-col pc:flex-row justify-between w-full p-5 mt-5 pc:px-[15%] space-x-5">
                <img src="/img/community/PochettePodcast.png" alt="pochette de notre podcast" className="pc:w-2/5 tablet:w-1/2 self-center" />
                <div className="flex flex-col space-y-3 pc:w-1/2 tablet:px-5 text-center">
                    <h2 className="text-4xl font-bold">
                        Notre podcast : Éclairer la neurodiversité
                    </h2>
                    <div className="text-xl text-gray-600">
                        La neuroatypie, c’est quoi exactement ? Quels sont les différents profils concernés ? Comment se manifeste-t-elle au quotidien ? Dans cette vidéo, nous vous proposons une introduction claire et accessible pour mieux comprendre la diversité des fonctionnements neurologiques. Que vous soyez directement concerné(e), proche aidant ou simplement curieux(se), ce contenu vous aidera à déconstruire certaines idées reçues et à adopter un regard plus éclairé sur la neurodiversité.
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Link href="https://www.youtube.com/@naapp_app" target="blank" className="p-1 bg-gradient-to-r from-[#CB0000] from-60% to-[#AF81DF] text-red-500 font-bold hover:animate-zoomIn rounded-full w-full tablet:w-2/3 pc:w-full" >
                            <div className="flex items-center bg-white hover:bg-red-500 rounded-full p-4 space-x-2 justify-center  hover:text-white ">
                                <FaYoutube size={42} />
                                <div>
                                    VISIONNEZ NOTRE PODCAST !
                                </div>
                            </div>
                        </Link>
                        <Link href="https://open.spotify.com/user/31kn2za6r6axcgwtfsjmav5seoce?si=0550a34ac9254720" target="blank" className="p-1 bg-gradient-to-r from-[#1DB954] from-60% to-[#8EA8F6] text-green-500 font-bold hover:animate-zoomIn rounded-full w-full tablet:w-2/3 pc:w-full" id="discord">
                            <div className="flex items-center bg-white hover:bg-green-500 rounded-full p-4 space-x-2 justify-center  hover:text-white">
                                <FaSpotify size={42} />
                                <div>
                                    ÉCOUTEZ NOTRE PODCAST !
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pc:flex-row-reverse justify-between w-full p-5 space-x-5 pc:px-[14%]">
                <div className="pc:w-1/2 flex justify-center">
                    <img src="/img/community/Podcast.png" alt="podcast" className="w-9/10" />
                </div>
                <div className="flex flex-col pc:w-1/2 space-y-8 justify-center">
                    <h2 className="text-4xl font-bold">
                        Venez nous partager votre histoire !
                    </h2>
                    <div className="text-xl text-gray-600">
                        La neurodiversité est riche en expériences uniques. Chaque parcours compte, et nous voulons donner la parole à celles et ceux qui vivent la neuroatypie au quotidien. Que vous soyez concerné(e), proche aidant ou professionnel, votre témoignage peut aider à sensibiliser et inspirer d’autres personnes.
                    </div>
                    <Link href="" className="border-b-2 border-black px-1 w-fit">Lien vers notre Google Form !</Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}