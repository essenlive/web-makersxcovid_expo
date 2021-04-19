import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const N1 = (props) => {
  return (
    <Layout title="Réseau(x)">
      <Photo
        src="/photos/network/carton_plein-1-quentin_chevrier.jpg"
        alt="Carton Plein - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Réseau(x)"
          description="Carton Plein"
          nextUrl="/themes/network/2"
          prevUrl="/themes/network/"
          color1="#a5c2d6"
          color2="#f6f4fc"
          color3="#e7e3df"
        />
      </Section>
    </Layout>
  );
};

export default N1;
