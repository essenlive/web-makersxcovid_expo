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

     <section className="text-gray-600 body-font w-screen">
        <img
          className="h-screen w-screen object-cover fixed top-0"
          src="/photos/home/simplonlab_textiles-1-quentin_chevrier.jpg"
          alt="SimplonLab - Crédit Photo : Quentin Chevrier"
        />
        <div className="relative mx-auto h-screen container py-2 flex items-center justify-center z-1">
         <Link href="/themes">
           <h1 className="text-xl">Découvrir les photos</h1>
          </Link>
       </div>
      </section>

      <Footer />
    </div>
  )
}
