import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const N2 = (props) => {
  return (
    <Layout title="Réseau(x)">
      <Photo
        src="/photos/network/makerspace_volumes-1-quentin_chevrier.jpg"
        alt="Makerspace Volumes - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Réseau(x)"
          description="Makerspace Volumes"
          nextUrl="/themes/network/3"
          prevUrl="/themes/network/1"
        />
      </Section>
    </Layout>
  );
};

export default N2;
