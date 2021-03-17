import Layout from '@components/Layout'
import Section from "@components/Section";

export default function About() {
  return (
    <Layout title="A propos">
      <Section>
        <h2 className="text-xl uppercase font-black mb-8">Le réseau des makers</h2>
        <div className="flex items-center sm:flex-row flex-col">
          <div className="text-base md:pr-2 md:w-1/2">
            Le réseau Makers x Covid, composé de 25 lieux, tiers-lieux et
            fablabs actifs de l'Ile-de-France a rassemblé pendant cette période
            de crise sanitaire plus de 300 volontaires et une cinquantaine de
            Factory@Home (bénévoles travaillant depuis chez eux, en impression
            3D, assemblage ou couture). Le collectif s'est rassemblé afin de
            produire de façon distribuée et livrer du matériel pour les
            soignants et les structures nécessiteuses. Le contexte d’urgence et
            les outils à disposition dans ces espaces de production auront
            clairement accéléré l’engouement de cette mobilisation. Dans le même
            temps, celle-ci aura été un catalyseur pour l’ensemble du mouvement
            : un contexte d’urgence, une envie d’aider, un élan de solidarité et
            des moyens et espaces à portée de main sont les sources principales
            du développement du mouvement Makers x Covid.
          </div>
          <div className="text-base md:pl-2 md:w-1/2 ">
            Quentin Chevrier, photographe indépendant proche du milieu makers,
            s’est porté volontaire début avril 2020 auprès de Volumes pour aider
            à la fabrication de matériel de protection. Après quelques jours
            d’assemblage de visières, se rendant compte que personne ne
            documentait visuellement cette initiative d’ampleur, il se fait
            remplacer chez Volumes par quelques amis et part en reportage. Des
            ateliers mobilisés aux hôpitaux dans le besoin, en passant par les
            bénévoles confinés et les livreurs à vélo, il couvre une grande
            partie de cet élan de solidarité en un mois et demi.
          </div>
        </div>
      </Section>
    </Layout>
  );
}
