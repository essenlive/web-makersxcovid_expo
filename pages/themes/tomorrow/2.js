import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U2 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/ghu-1-quentin_chevrier.jpg"
        alt="GHU - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#6f94c4"
        color2="#e8f0fb"
        color3="#878b8d"
      />
      <Section className="justify-end">
        <Caption
          theme="Demain"
          description="GHU"
          nextUrl="/themes/tomorrow/3"
          prevUrl="/themes/tomorrow/1"
        />
      </Section>
    </Layout>
  );
};

export default U2;
