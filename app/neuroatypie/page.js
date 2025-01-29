import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Neuroatypie() {
    return (
        <main className="flex flex-col min-h-screen justify-between items-center font-luciole bg-white text-black">
            <Header />
            <div className="flex flex-col items-center justify-center p-10 w-screen space-y-5">
                <h1 className="font-bold text-4xl pc:text-6xl">Les différents troubles neuroatypiques</h1>
                <div className="pc:px-96 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                </div>
                <div className="grid grid-cols-3 pc:grid-cols-5 text-gray-600">
                    <img src="/img/neuroatypie/warning.png" alt="attention" className="pc:size-40" />
                    <div className="col-span-2 pc:col-span-4 pc:place-content-center">
                        <div>Disclaimer :</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start space-y-4 px-14 pc:px-96 w-screen">
                    <h2 className="font-semibold text-2xl">Liste des troubles :</h2>
                    <Link href='#troublesdys' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">Les troubles Dys</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                    <Link href='#tdah' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">Le TDA/H</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                    <Link href='#tsa' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">Les TSA</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                    <Link href='#precointellect' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">La précocité intelectuelle</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                    <Link href='#hpe' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">Les HPE</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                    <Link href='#hypersensibilite' className="flex justify-between items-center">
                        <div className="border-b-2 border-black px-1">L'hypersensibilité</div>
                        <img src="/img/neuroatypie/sommaire.png" alt="flèche" width={30} />
                    </Link>
                </div>
                <div className="flex flex-col pc:flex-row pc:gap-5 items-center  justify-start space-y-3 w-2/3" id="troublesdys">
                    <img src="/img/neuroatypie/dys.png" alt="troubles dys" className="pc:size-1/4" />
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">Les troubles Dys</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pc:flex-row-reverse pc:gap-5 items-center space-y-3" id="tdah">
                    <img src="/img/neuroatypie/tdah.png" alt="TDA/H" className="pc:size-1/4" />
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">Le TDA/H</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pc:flex-row pc:gap-5 items-center space-y-3" id="tsa">
                    <img src="/img/neuroatypie/tsa.png" alt="le TSA" className="pc:size-1/4"/>
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">Les TSA</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pc:flex-row-reverse pc:gap-5 items-center space-y-3" id="precointellect">
                    <img src="/img/neuroatypie/preco_intellect.png" alt="La précocité intellectuelle" className="pc:size-1/4"/>
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">La précocité intellectuelle</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pc:flex-row pc:gap-5 items-center space-y-3" id="hpe">
                    <img src="/img/neuroatypie/hpe.png" alt="Les HPE" className="pc:size-1/4" />
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">Les HPE</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pc:flex-row-reverse pc:gap-5 items-center space-y-3" id="hypersensibilite">
                    <img src="/img/neuroatypie/hypersensibilite.png" alt="l'hypersensibilité" className="pc:size-1/4" />
                    <div className="flex flex-col items-center space-y-3">
                        <h2 className="font-semibold text-3xl">L'hypersensibilité</h2>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat ex ut justo gravida, ac commodo tortor consequat. Etiam gravida purus id neque auctor, eget sagittis sem fringilla. Maecenas justo diam, semper eget vulputate ut, vehicula in diam.
                        </div>
                        <div className="space-x-5">
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 1</Link>
                            <Link href="/" className="border-b-2 px-1 border-black">Lien 2</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}