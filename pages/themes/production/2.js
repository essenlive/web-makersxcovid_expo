import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U2 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/homemakers-1-quentin_chevrier.jpg"
        alt="Homemakers - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Production"
          description="Homemakers"
          nextUrl="/themes/production/3"
          prevUrl="/themes/production/1"
        />
      </Section>
    </Layout>
  );
};

export default U2;
