import Head from "next/head";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer";
import Link from "next/link";

const Production = (props) => {
  return (
    <div className="">
      <Head>
        <title>MakersCovid Paris | Production </title>
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
        <div className="min-h-screen w-screen object-cover top-0 fixed z-0"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Production;
