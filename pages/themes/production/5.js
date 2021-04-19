import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U5 = (props) => {
  return (
    <Layout title="Production">
      <Photo
        src="/photos/production/makers_maison-2-quentin_chevrier.jpg"
        alt="Factory @ Home - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#b6b9be"
        color2="#0070b0"
        color3="#bfbbb7"
      />
      <Section className="justify-end">
        <Caption
          theme="Production"
          description="Factory @ Home"
          nextUrl="/themes/production/6"
          prevUrl="/themes/production/4"
        />
      </Section>
    </Layout>
  );
};

export default U5;
