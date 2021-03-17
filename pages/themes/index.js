import Head from 'next/head'
import NavigationBar from '@components/NavigationBar'
import Footer from '@components/Footer'
import Link from 'next/link'

const Themes = (props) => {
    return (
        <div className="" >
            <Head>
                <title>MakersCovid Paris | Thèmes </title>
            </Head>

            <NavigationBar />

            <section className="text-black body-font">
                <div className="min-h-screen w-screen object-cover top-0 fixed z-0">
                    <div className="h-screen w-screen bg-white bg-opacity-25 top-0 absolute z-10"></div>
                    <img
                        className="h-screen w-screen object-cover top-0 absolute"
                        src="/photos/home/draft_ateliers-1-quentin_chevrier.jpg"
                        alt="Draft Ateliers - Crédit Photo : Quentin Chevrier"
                        />

                </div>
                <div className="container mx-auto p-4    flex flex-wrap justify-items-stretch items-stretch relative z-1">
                        <div className="xl:w-1/2 md:w-1/2 flex-grow">
                        <Link href="/themes/urgency">
                            <div className="
                            flex
                            flex-col
                            justify-between	
                            hover:bg-white
                            cursor-pointer
                            md:border-l-8 
                            md:border-t-8 
                            md:border-r-4 
                            md:border-b-4 
                            border-8 border-black p-6
                            h-full">
                                <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2 uppercase">Urgence</h2>
                                <p className="leading-relaxed font-medium text-sm">
                                    “Il y’a eu une espèce de mouvement de foule qui a bien pris. En fait c’est plein de théories qu’on a pu mettre en pratique, globalement tous ensemble.”<br/>
                                    Soumaya, Ars Longa, cf. annexe 13
                                </p>
                                    <a className="mt-4 text-black font-black inline-flex items-center">Voir les photos
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                            </div>
                        </Link>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 flex-grow">
                            <Link href="/themes/network">
                            <div className="
                            flex
                            flex-col
                            justify-between	
                            hover:bg-white
                            cursor-pointer
                            md:border-l-4 
                            md:border-t-8 
                            md:border-r-8 
                            md:border-b-4 
                            border-l-8 
                            border-t-0 
                            border-r-8 
                            border-b-8 
                            border-black p-6
                            h-full">
                                <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2 uppercase">Réseau(x)</h2>
                                <p className="leading-relaxed font-medium text-sm">
                                    “Ces initiatives-là ont permis de montrer à quoi sert un fablab : un lieu, des machines, et une communauté. On a pu produire et redistribuer à un moment où la puissance publique n’avait pas la faculté de faire le lien avec le territoire comme ça.”<br/>
                                    Grégoire, La Tréso/Les Fabriqueurs, cf. annexe 11
                                </p>
                                    <a className="mt-4 text-black font-black inline-flex items-center">Voir les photos
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                            </div>
                                </Link>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 flex-grow">
                            <Link href="/themes/production">
                            <div className="
                            flex
                            flex-col
                            justify-between	    
                            hover:bg-white
                            cursor-pointer
                                md:border-l-8 
                                md:border-t-4 
                                md:border-r-4 
                                md:border-b-8 
                                border-l-8 
                                border-t-0 
                                border-r-8 
                                border-b-8 
                                border-black p-6
                                    h-full"> 
                                <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2 uppercase">Production</h2>
                                <p className="leading-relaxed font-medium text-sm">“On a fédéré un réseau de makers, des fablabs, des écoles, des laboratoires, des industriels auprès de qui on organisait notre production. Il y’avait plusieurs modèles de visières, on a essayé de chercher les infos pour savoir quel était le modèle le plus intéressant, le plus viable, aussi bien auprès des makers que pour les hôpitaux.”<br/>
                                Aurélien, Initiative 3D, cf. annexe 12</p>
                                    <a className="mt-4 text-black font-black inline-flex items-center">Voir les photos
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                            </div>
                                </Link>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 flex-grow">
                            <Link href="/themes/tomorrow">
                              <div className="
                              flex
                              flex-col
                              justify-between	    
                            hover:bg-white
                            cursor-pointer
                                md:border-l-4 
                                md:border-t-4 
                                md:border-r-8 
                                md:border-b-8 
                                border-l-8 
                                border-t-0 
                                border-r-8 
                                border-b-8 
                                border-black p-6
                                    h-full"> 
                                <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2 uppercase">Demain</h2>
                                <p className="leading-relaxed font-medium text-sm">“Je trouve que ce qui s’est passé a mis en avant l’utilité de ces lieux qui se situent entre espaces publics, espaces privés, espaces professionnels… Et que ça avait un réel intérêt. Ça a vraiment développé cet aspect du faire ensemble et de faire communauté. C’est pour moi d’ailleurs l’enjeu prioritaire des tiers-lieux. “<br/>
                                Michaël, Volumes, cf. annexe 15</p>
                                    <a className="mt-4 text-black font-black inline-flex items-center">Voir les photos
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </Link>
                        </div>

                </div>
            </section>

            <Footer />
        </div>

    )
}



export default Themes