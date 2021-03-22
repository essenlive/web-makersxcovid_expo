import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U1 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/draft_ateliers-1-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Production"
          description="Atelier Draft"
          nextUrl="/themes/production/2"
          prevUrl="/themes/production"
        />
      </Section>
    </Layout>
  );
};

export default U1;
