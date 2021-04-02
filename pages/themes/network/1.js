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
        />
      </Section>
    </Layout>
  );
};

export default N1;
