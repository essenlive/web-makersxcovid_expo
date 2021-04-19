import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const Urgency = (props) => {
  return (
    <Layout title="Urgence">
      <Photo
        src="/photos/urgency/homemakers-1-quentin_chevrier.jpg"
        alt="Homemakers - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#d0c3b3"
        color2="#e8ebed"
        color3="#e6ceb8"
        dark
      />
      <Section>
        <Caption
          theme="Urgence"
          description="Face à la propagation hors de contrôle de l’épidémie et le nombre de cas positifs au coronavirus se multipliant, le président de la République annonce le 16 mars 2020 un confinement strict applicable sur tout le territoire. La mauvaise gestion et la pénurie de matériel sanitaire poussent les makers à réagir dans l'urgence : ils partagent et testent des plans de valves, de masques FFP2 imprimés en 3D, de visières, qu’ils produisent de plus en plus rapidement."
          nextUrl="/themes/urgency/1"
          prevUrl="/themes/urgency/6"
        />
      </Section>
    </Layout>
  );
};

export default Urgency;
