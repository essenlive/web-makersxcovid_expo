import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U3 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/homemakers-2-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Production"
          description="Atelier Draft"
          nextUrl="/themes/production/4"
          prevUrl="/themes/production/2"
        />
      </Section>
    </Layout>
  );
};

export default U3;
