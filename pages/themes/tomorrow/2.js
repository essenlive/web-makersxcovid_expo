import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U2 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/ghu-1-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Demain"
          description="Atelier Draft"
          nextUrl="/themes/tomorrow/3"
          prevUrl="/themes/tomorrow/1"
        />
      </Section>
    </Layout>
  );
};

export default U2;
