import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U1 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/mediatheque_marguerite_duras-1-quentin_chevrier.jpg"
        alt="Médiatheque Marguerite Duras - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
      />
      <Section>
        <Caption
          theme="Demain"
          description="Médiatheque Marguerite Duras"
          nextUrl="/themes/tomorrow/2"
          prevUrl="/themes/tomorrow"
          color1="#455f68"
          color2="#e8cfc3"
          color3="#fefefe"
        />
      </Section>
    </Layout>
  );
};

export default U1;
