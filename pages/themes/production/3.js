import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U3 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/homemakers-2-quentin_chevrier.jpg"
        alt="Homemakers - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#d1c1c7"
        color2="#f3c0ab"
        color3="#e1dde3"
        dark
      />
      <Section>
        <Caption
          theme="Production"
          description="Homemakers"
          nextUrl="/themes/production/4"
          prevUrl="/themes/production/2"
        />
      </Section>
    </Layout>
  );
};

export default U3;
