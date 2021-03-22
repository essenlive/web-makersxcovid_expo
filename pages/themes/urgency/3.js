import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U3 = (props) => {
  return (
    <Layout title="Urgence">
      <Photo
        src="/photos/urgency/neuro_pitie_salpetriere-1-quentin_chevrier.jpg"
        alt="Pitie salpetrière - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        />
      <Section>
        <Caption
          theme="Urgence"
          description="La Pitié Salpetrière"
          prevUrl="/themes/urgency/2"
          nextUrl="/themes/urgency/4"
        />
      </Section>
    </Layout>
  );
};

export default U3;
