import Head from 'next/head'
import NavigationBar from '@components/NavigationBar'
import Footer from '@components/Footer'

const Themes = (props) => {
    return (
        <div className="" >
            <Head>
                <title>MakersCovid Paris | Thèmes </title>
            </Head>

            <NavigationBar />

            <section className="text-gray-600 body-font w-full w-screen absolute top-0 m-0">
                <img
                    className="h-screen w-screen object-cover fixed z-0"
                    src="/photos/home/draft_ateliers-1-quentin_chevrier.jpg"
                    alt="Draft Ateliers - Crédit Photo : Quentin Chevrier"
                />
                <div className="container-md my-12 flex flex-wrap absolute z-1">
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border bg-white border-gray-200 p-6 rounded-lg">
                            <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2">Urgence</h2>
                                <p className="leading-relaxed text-base">
                                    “Il y’a eu une espèce de mouvement de foule qui a bien pris. En fait c’est plein de théories qu’on a pu mettre en pratique, globalement tous ensemble.”<br/>
                                    Soumaya, Ars Longa, cf. annexe 13
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border bg-white border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg font-black text-gray-900 font-medium title-font mb-2">Production</h2>
                                <p className="leading-relaxed text-base">
                                    “Ces initiatives-là ont permis de montrer à quoi sert un fablab : un lieu, des machines, et une communauté. On a pu produire et redistribuer à un moment où la puissance publique n’avait pas la faculté de faire le lien avec le territoire comme ça.”<br/>
                                    Grégoire, La Tréso/Les Fabriqueurs, cf. annexe 11
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg"> 
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/2 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>

                </div>
            </section>

            <Footer />
        </div>

    )
}



export default Themes