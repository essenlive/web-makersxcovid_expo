import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>MakersCovid Paris | Expo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar/>

     <section className="text-gray-600 body-font absolute w-screen ">
        <img
          className="h-screen w-screen object-cover"
          src="/photos/home/simplonlab_textiles-1-quentin_chevrier.jpg"
          alt="SimplonLab - Crédit Photo : Quentin Chevrier"
        />
      </section>

      <Footer />
    </div>
  )
}
