import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const N3 = (props) => {
  return (
    <Layout title="Réseau(x)">
      <Photo
        src="/photos/network/hotel_dieu-1-quentin_chevrier.jpg"
        alt="Hotel Dieu - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#bcc6ce"
        color2="#ebe6e5"
        color3="#e6e8ea"
      />
      <Section className="justify-end">
        <Caption
          theme="Réseau(x)"
          description="Hotel Dieu"
          nextUrl="/themes/network/"
          prevUrl="/themes/network/2"
        />
      </Section>
    </Layout>
  );
};

export default N3;
