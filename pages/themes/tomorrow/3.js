import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U3 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/carton_plein_fred-1-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Demain"
          description="Atelier Draft"
          nextUrl="/themes/tomorrow/4"
          prevUrl="/themes/tomorrow/2"
        />
      </Section>
    </Layout>
  );
};

export default U3;
