import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U6 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/woma-quentin_chevrier.jpg"
        alt="WoMa - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#b49877"
        color2="#d3c7bf"
        color3="#ccd7da"
      />
      <Section>
        <Caption
          theme="Production"
          description="WoMa"
          nextUrl="/themes/production/"
          prevUrl="/themes/production/5"
        />
      </Section>
    </Layout>
  );
};

export default U6;
