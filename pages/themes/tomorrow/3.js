import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const U3 = (props) => {
  return (
    <Layout title="Demain">
      <Photo
        src="/photos/tomorrow/carton_plein_fred-1-quentin_chevrier.jpg"
        alt="Carton Plein - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#fffbf4"
        color2="#fc927f"
        color3="#d7c1b9"
      />
      <Section className="justify-end">
        <Caption
          theme="Demain"
          description="Carton Plein"
          nextUrl="/themes/tomorrow/4"
          prevUrl="/themes/tomorrow/2"
        />
      </Section>
    </Layout>
  );
};

export default U3;
