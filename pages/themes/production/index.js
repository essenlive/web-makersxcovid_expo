import Layout from "@components/Layout";
import Section from "@components/Section";
import Photo from "@components/Photo";
import Caption from "@components/Caption";

const Production = (props) => {
  return (

    <Layout title="Production">
      <Photo
        src="/photos/production/mon_atelier_en_ville-1-quentin_chevrier.jpg"
        alt="Mon Atelier En Ville - Crédit Photo : Quentin Chevrier"
        name="Quentin Chevrier"
        color1="#e6a979"
        color2="#ece7ed"
        color3="#eda8a1"
        dark
      />
      <Section className="justify-end">
        <Caption
          theme="Production"
          description="En dialoguant avec les soignants, les makers identifient de nouveaux besoins. La production se répartit entre visières, surblouses et masques en tissu. Les quantités sont très importantes : en l’espace de deux jours, le collectif Makers Covid Paris a recensé, uniquement sur son réseau, plus de 20 000 demandes venant essentiellement de structures médicales, de libéraux et de centres d’accueil."
          nextUrl="/themes/production/1"
          prevUrl="/themes/production/6"
        />
      </Section>
    </Layout>
  );
};

export default Production;
