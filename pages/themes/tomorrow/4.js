import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U4 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/hotel_dieu-1-quentin_chevrier.jpg"
        alt="Hotel Dieu - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#c9dbea"
        color2="#92c0f3"
        color3="#c1dff5"
      />
      <Section>
        <Caption
          theme="Demain"
          description="Hotel Dieu"
          nextUrl="/themes/tomorrow/"
          prevUrl="/themes/tomorrow/3"
        />
      </Section>
    </Layout>
  );
};

export default U4;
