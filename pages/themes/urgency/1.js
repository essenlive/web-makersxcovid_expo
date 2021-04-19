import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U1 = (props) => {
  return (
    <Layout title="Urgence">
      <Photo
        src="/photos/urgency/draft_ateliers-1-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#a8c0cd"
        color2="#e9bbad"
        color3="#5ea164"
      />
      <Section>
        <Caption
          theme="Urgence"
          description="Atelier Draft"
          nextUrl="/themes/urgency/2"
          prevUrl="/themes/urgency"
        />
      </Section>
    </Layout>
  );
};

export default U1;
