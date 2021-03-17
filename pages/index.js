import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative h-full" >
      <Head>
        <title>MakersCovid Paris | Expo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>

     <section className="text-black body-font">
        <img
          className="h-screen w-screen object-cover fixed top-0"
          src="/photos/home/simplonlab_textiles-1-quentin_chevrier.jpg"
          alt="SimplonLab - Crédit Photo : Quentin Chevrier"
        />
        <div className="relative mx-auto h-80 container py-2 flex items-center justify-center z-1">
          <Link href="/themes">
              <button className="inline-flex cursor-pointer items-center border-4 py-1 px-3 focus:outline-none hover:bg-grey-300 border-black text-base mt-4 md:mt-0 font-bold">
                  Découvrir les photos
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  className="w-4 h-4 ml-1" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
          </Link>
       </div>
      </section>

      <Footer />
    </div>
  )
}
