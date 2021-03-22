import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U4 = (props) => {
  return (
    <Layout title="Urgence">
      <Photo
        src="/photos/urgency/neuro_pitie_salpetriere-2-quentin_chevrier.jpg"
        alt="Pitie salpetrière - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        />
      <Section>
        <Caption
          theme="Urgence"
          description="La Pitié Salpetrière"
          prevUrl="/themes/urgency/3"
          nextUrl="/themes/urgency"
        />
      </Section>
    </Layout>
  );
};

export default U4;
