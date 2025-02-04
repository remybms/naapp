import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Neuroatypie() {
    return (
        <main className="flex flex-col min-h-screen justify-between items-center font-luciole bg-white text-black">
            <Header />
            <div className="flex flex-col items-center justify-center p-10 w-screen space-y-5 mb-10">
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
                <div className="flex flex-col justify-start space-y-4 px-14 pc:px-96 pb-10 w-screen">
                    <h2 className="font-bold text-2xl">Liste des troubles :</h2>
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
                <div className="space-y-16">
                    <div className="flex flex-col tablet:flex-row space-y-3" id="troublesdys">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex items-center pc:w-2/3 tablet:w-screen tablet:px-10 tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/dys.png" alt="troubles dys" className="tablet:w-[15rem] tablet:m-4" />
                            <div className="flex flex-col space-y-1">
                                <h2 className="font-bold text-3xl pb-2">Les troubles Dys</h2>
                                <div className="text-justify">
                                    <span className="font-bold">Dysléxie</span> : Difficultés dans l’apprentissage de la lecture
                                </div>
                                <div className="text-justify">
                                    <span className="font-bold">Dysorthographie</span> : Difficultés dans l’apprentissage de l’écriture (Orthographe)
                                </div>
                                <div className="text-justify">
                                    <span className="font-bold">Dyscalculie</span> : Difficultés dans l’apprentissage numérique/du calcul/des maths
                                </div>
                                <div className="text-justify">
                                    <span className="font-bold">Dysgraphie</span> : Difficultés dans l’apprentissage de l’écriture (éxécution)
                                </div>
                                <div className="text-justify">
                                    <span className="font-bold">Dyspraxie</span> : Difficultés dans l’apprentissage de la motricité fine/coordination
                                </div>
                                <div className="text-justify">
                                    <span className="font-bold">Dysphasie</span> : Difficultés dans l’apprentissage de la parole/le langage
                                </div>
                                <div className="space-x-5 pt-2">
                                    <Link href="https://www.ffdys.com/" className="border-b-2 px-1 border-black" target="blank">En savoir plus</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-end space-y-3" id="tdah">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex tablet:flex-row-reverse items-center pc:w-2/3 tablet:px-10 tablet:w-screen tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/tdah.png" alt="TDA/H" className="tablet:w-[15rem] tablet:m-2" />
                            <div className="flex flex-col items-end space-y-3">
                                <h2 className="font-bold text-3xl">Le TDA/H</h2>
                                <div className="text-justify">
                                    Le <span className="font-bold">Trouble Déficit de l’Attention avec ou sans Hyperactivité (TDAH)</span> est un trouble neurodéveloppemental qui affecte la régulation de l’attention, l’impulsivité et, dans certains cas, l’hyperactivité. Les personnes avec un TDAH peuvent rencontrer des difficultés à maintenir leur attention sur des tâches peu stimulantes, mais elles possèdent aussi des <span className="font-bold">atouts uniques</span> : créativité, capacité d’adaptation, pensée rapide et hyperfocalisation sur des sujets passionnants. Le TDAH est présent <span className="font-bold">à tout âge</span>, et bien qu’il soit souvent associé à l’enfance, il peut aussi impacter la vie adulte, notamment dans le travail et la gestion du quotidien.
                                </div>
                                <div className="space-x-5">
                                    <Link href="https://www.tdah-france.fr/" className="border-b-2 px-1 border-black" target="blank">En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row space-y-3" id="tsa">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex items-center pc:w-2/3 tablet:px-10 tablet:w-screen tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/tsa.png" alt="le TSA" className="tablet:w-[15rem] tablet:m-2" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="font-bold text-3xl">Les TSA</h2>
                                <div className="text-justify">
                                    Le <span className="font-bold">Trouble du Spectre de l’Autisme (TSA)</span> est un trouble neurodéveloppemental qui affecte la communication, les interactions sociales et la perception sensorielle. Il se manifeste de manière très variée selon les individus, d’où la notion de spectre.
                                </div>
                                <div className="text-justify">
                                    Les personnes autistes peuvent avoir une manière différente de comprendre les codes sociaux, des intérêts spécifiques intenses et une sensibilité sensorielle particulière. Leur fonctionnement unique est une force, mais l’adaptation à un environnement non inclusif peut être un défi. L’autisme n’est ni une maladie ni un handicap intellectuel systématique.
                                </div>
                                <div className="space-x-5">
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 1</Link>
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 2</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end space-y-3" id="precointellect">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex tablet:flex-row-reverse items-center pc:w-2/3 tablet:w-screen tablet:px-10 tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/preco_intellect.png" alt="La précocité intellectuelle" className="tablet:w-[15rem] tablet:m-2" />
                            <div className="flex flex-col items-end space-y-3">
                                <h2 className="font-bold text-3xl">La précocité intellectuelle</h2>
                                <div className="text-justify">
                                    <span className="font-bold">La précocité intellectuelle</span>, aussi appelée <span className="font-bold">Haut Potentiel Intellectuel (HPI)</span>, désigne un fonctionnement cognitif atypique caractérisé par une intelligence supérieure à la moyenne. Selon le QI mesuré, on distingue le <span className="font-bold">HPI (≥130)</span>, le <span className="font-bold">Très Haut Potentiel Intellectuel (THPI) (≥145)</span> et le <span className="font-bold">Très Très Haut Potentiel Intellectuel (TTHPI) (≥160)</span>
                                </div>
                                <div className="space-x-5">
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 1</Link>
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 2</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row space-y-3" id="hpe">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex items-center pc:w-2/3 tablet:w-screen tablet:px-10 tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/hpe.png" alt="Les HPE" className="tablet:w-[15rem] tablet:m-2" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="font-bold text-3xl">Les HPE</h2>
                                <div className="text-justify">
                                    <span className="font-bold">Le Haut Potentiel Émotionnel (HPE)</span>, se caractérise par une intelligence émotionnelle développée, une grande empathie et une sensibilité accrue aux émotions, tant les siennes que celles des autres.                                </div>
                                <div className="text-justify">
                                    Cette richesse émotionnelle est une force pour la communication, la créativité et les relations humaines, mais peut aussi être un défi lorsqu’elle entraîne une surcharge émotionnelle ou une difficulté à poser des limites.                                </div>
                                <div className="space-x-5">
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 1</Link>
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 2</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pc:flex-row-reverse items-end space-y-3" id="hypersensibilite">
                        <img src="/img/neuroatypie/fond.png" alt="Image de fond" className="absolute pc:w-2/3 tablet:w-screen h-[28rem] hidden tablet:flex" />
                        <div className="z-10 tablet:flex tablet:flex-row-reverse items-center pc:w-2/3 tablet:w-screen tablet:px-10 tablet:h-[28rem] space-y-5 tablet:space-y-0">
                            <img src="/img/neuroatypie/hypersensibilite.png" alt="l'hypersensibilité" className="tablet:w-[15rem] tablet:m-2" />
                            <div className="flex flex-col items-end space-y-3">
                                <h2 className="font-bold text-3xl">L'hypersensibilité</h2>
                                <div className="text-justify">
                                    <span className="font-bold">L’hypersensibilité émotionnelle et sensorielle</span> est une intensification des perceptions et des émotions. Elle peut se traduire par une réactivité accrue aux bruits, aux lumières, aux textures, aux odeurs ou même aux sensations corporelles, mais aussi par des émotions plus intenses et difficiles à réguler.
                                </div>
                                <div className="text-justify">
                                    Les personnes hypersensibles perçoivent leur environnement avec une grande acuité, ce qui peut être une force (créativité, empathie, sens du détail), mais aussi un défi dans un monde souvent trop stimulant.
                                </div>
                                <div className="space-x-5">
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 1</Link>
                                    <Link href="/" className="border-b-2 px-1 border-black" target="blank">Lien 2</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}