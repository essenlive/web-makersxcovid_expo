import NavigationBar from "@components/NavigationBar";
import Head from "next/head";

const Layout = (props) => {
    return (
      <div>
        <Head>
          <title>MakersCovid Paris | {JSON.stringify(props.title) }</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <NavigationBar />

        <section className="text-black body-font">
          {props.children}
        </section>

      </div>
    );
}

export default Layout