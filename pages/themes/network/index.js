import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const Network = (props) => {
  return (
    <Layout title="Réseau(x)">
      <Photo
        src="/photos/network/pitiee_salpetriere-1-quentin_chevrier.jpg"
        alt="La Pitié Salpetrière - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#81a6bc"
        color2="#c6d9e7"
        color3="#e2f2fe"
      />
      <Section className="justify-end">
        <Caption
          theme="Réseau(x)"
          description="En quelques jours, le réseau s’organise : il faut trouver les matériaux, centraliser les demandes et répartir la production entre les lieux. Associations, fablabs, tiers-lieux, entreprises, médiathèques ou encore écoles : ces espaces aux profils très différents forment un réseau de réseaux dont la solidarité est le pivot."
          nextUrl="/themes/network/1"
          prevUrl="/themes/network/3"
        />
      </Section>
    </Layout>
  );
};

export default Network;
