import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U2 = (props) => {
  return (
    <Layout title="Urgence">
      <Photo
        src="/photos/urgency/woma-1-quentin_chevrier.jpg"
        alt="WoMa - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Urgence"
          description="WoMa"
          prevUrl="/themes/urgency/1"
          nextUrl="/themes/urgency/3"
        />
      </Section>
    </Layout>
  );
};

export default U2;
