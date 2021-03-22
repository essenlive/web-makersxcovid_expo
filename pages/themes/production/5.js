import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U5 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/makers_maison-2-quentin_chevrier.jpg"
        alt="Atelier Draft - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Production"
          description="Atelier Draft"
          nextUrl="/themes/production/6"
          prevUrl="/themes/production/4"
        />
      </Section>
    </Layout>
  );
};

export default U5;
