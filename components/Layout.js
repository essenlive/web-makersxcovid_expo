import NavigationBar from "@components/NavigationBar";
import Head from "next/head";

const Layout = (props) => {
    return (
      <div>
        <Head>
          <title>MakersCovid Paris | {props.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar />

        <section className="text-black body-font">
          {props.children}
        </section>

      </div>
    );
}

export default Layout