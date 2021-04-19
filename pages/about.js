import Layout from '@components/Layout'
import Section from "@components/Section";

export default function About() {
  return (
    <Layout title="A propos">
      <Section className="xl:container mx-auto justify-center">
        <h2 className="text-xxl uppercase font-black mb-8">Le réseau des makers</h2>
        <div className="flex items-start md:flex-row flex-col">
          <div className="text-base md:pr-2 md:w-1/2">
            <div className="mb-6">
              Ce site a vocation à documenter et archiver la mobilisation du réseau<a className={"font-bold bg-gray-200 hover:bg-gray-200"} href="https://makerscovid.netlify.app"> MakersCovid.paris </a>pendant la crise Covid-19. Composé de 25 lieux, tiers-lieux et fablabs actifs de l'Ile-de-France, plus de 300 volontaires se sont mobilisés aussi bien dans les labs que de leur domicile. Le collectif s'est rassemblé afin de produire de façon distribuée et livrer du matériel pour les soignants et les structures nécessiteuses. Le contexte d’urgence et les outils à disposition dans ces espaces de production auront clairement accéléré l’engouement de cette mobilisation. Dans le même temps, celle-ci aura été un catalyseur pour l’ensemble du mouvement.
            </div>
            <div className="mb-6 grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-6  gap-4 place-items-center">
              <a className="p-2 hover:bg-gray-200" href="https://www.polytechnique.edu/en/fab-lab" target="_blank" rel="noopener noreferrer">
                <img alt="FabLab Ecole Polytechnique" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/%C3%89cole_polytechnique_signature.svg/1200px-%C3%89cole_polytechnique_signature.svg.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://www.homemakers.fr" target="_blank" rel="noopener noreferrer">
                <img alt="Homemakers" src="https://www.homemakers.fr/wp-content/uploads/2017/07/cropped-FOND_HOMEMAKERS_512_512-01.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://www.ltdln.com/" target="_blank" rel="noopener noreferrer">
                <img alt="La Tête dans les Nuages" src="https://static1.squarespace.com/static/5a65d076bff200b621e3bea9/t/5b3b42b0352f53759501f1a7/1585836694137/?format=1500w" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://ensad.fr/" target="_blank" rel="noopener noreferrer">
                <img alt="ENSAD" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/EnsAD_logo.jpg" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://www.atelierdesamis.fr/" target="_blank" rel="noopener noreferrer">
                <img alt="Atelier des Amis" src="https://i.etsystatic.com/isla/3bcf3c/15987980/isla_fullxfull.15987980_6tmp58g7.jpg?version=0" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://ateliers-draft.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Draft Ateliers" src="https://ateliers-draft.com/img/logo_black.svg?pyarbj" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://monatelierenville.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Mon Atelier en Ville" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.animation-figurine-decor.com%2Fwp-content%2Fuploads%2F2019%2F07%2Flogo-atelier-de-bricolage-mon-atelier-en-ville-Paris.png&amp;f=1&amp;nofb=1" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://fablab.simplon.co/" target="_blank" rel="noopener noreferrer">
                <img alt="SimplonLab" src="https://i0.wp.com/fablab.simplon.co/wp-content/uploads/2018/01/cropped-g531.png?fit=196%2C135" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://www.latreso.fr/" target="_blank" rel="noopener noreferrer">
                <img alt="La Tréso/Les Fabriqueurs" src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1934057/343576_881285.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="www.robobox.fr" target="_blank" rel="noopener noreferrer">
                <img alt="Robobox" src="https://images.squarespace-cdn.com/content/5cdbff732170dd000194c333/1585001161697-QQX64GNAJZRN08I0E4SF/Logo_500x500_couleur_fondblanc.png?content-type=image%2Fpng" />
              </a>
              <a className="p-2 hover:bg-gray-200 text-xs text-center	" href="https://cyrzbib.net/2020/03/30/bibliomakers-vs-covid19/" target="_blank" rel="noopener noreferrer">Médiathèque Duras
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://fablab-laverriere.org/" target="_blank" rel="noopener noreferrer">
                <img alt="FabLab La Verrière" src="https://fablab-laverriere.org/wp-content/uploads/2019/05/cropped-logo.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://www.ressourcerie-la-mine.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Fablab - La ressourcerie la mine" src="http://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1098398/av9ayu3zjtk6tksuttcw.jpg" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://woma.fr" target="_blank" rel="noopener noreferrer">
                <img alt="WoMa" src="https://i1.wp.com/store.fabcity.paris/wp-content/uploads/2018/06/Logo-WoMa@2x.png?ssl=1" /></a>
              <a className="p-2 hover:bg-gray-200" href="https://www.ensci.com/" target="_blank" rel="noopener noreferrer">
                <img alt="ENSCI- Les Ateliers" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Logo_ensci.svg/800px-Logo_ensci.svg.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://volumesparis.org/" target="_blank" rel="noopener noreferrer">
                <img alt="Volumes" src="https://hallesciviques.org/wp-content/uploads/2019/11/logo-volumes.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="http://yaplusk.org/hyper/" target="_blank" rel="noopener noreferrer">
                <img alt="Ya+k" src="http://yaplusk.org/wp-content/uploads/2016/11/GIF-introduction-YAK.ORG-feat-CHIFUMI-NEW.jpg" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://www.efabrik.fr" target="_blank" rel="noopener noreferrer">
                <img alt="FabLab Science Ouverte / E-FABRIK'" src="https://www.grandeecolenumerique.fr/sites/default/files/148069000000307130.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://arslonga.fr/" target="_blank" rel="noopener noreferrer">
                <img alt="Ars Longa / Cocoricut" src="http://www.arslonga.fr/wp-content/uploads/2021/01/AL250_250.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://mako.paris/" target="_blank" rel="noopener noreferrer">
                <img alt="MAKO" src="https://mako.paris//ressources/themes/900K-Theme/dist/images/mako.logo.png" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://epsaa.fr" target="_blank" rel="noopener noreferrer">
                <img alt="EPSAA" src="https://lh3.googleusercontent.com/vdbK1Pbs-W3ENyOCOc-VCF1I3HtFTjeXEkRTvY2Q4LHE9OyLexNU09VArtDe8omPVhF7_KwXj6dmtvstV56khJ1QGMVm5wCM8iTdEZ25BSoPj0s" />
              </a>
              <a className="p-2 hover:bg-gray-200" href="https://villettemakerz.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Villette Makerz" src="https://villettemakerz.com/wordpress/wp-content/uploads/2019/10/cropped-Logo_Villette-Makerz_noir-2.png" />
              </a>
            </div>
          </div>
          <div className="text-base md:pl-2 md:w-1/2 ">
            <div className="mb-6">
              <h3 className="text-l uppercase font-black mb-2">Calendrier de l'exposition</h3>
              L'exposition a été conçue de manière distribuée et a pour objectif de se déplacer de lab en lab au long de l'année. Pour pouvoir visiter l'exposition en personne, voici le calendrier de l'exposition :
              <ul className={"mb-4"}>
                <li><span className={"font-bold"}>Octobre 2020</span>- La Tréso</li>
                <li><span className={"font-bold"}>Janvier 2021</span>- SimplonLab</li>
                <li><span className={"font-bold"}>Mai 2021</span>- Médiathèque Marguerite Duras</li>
                <li><span className={"font-bold"}>Juin 2021</span>- La Mine</li>
                <li><span className={"font-bold"}>Aout 2021</span>- Homemakers </li>
                <li><span className={"font-bold"}>October 2021</span>- Volumes</li>
                <li><span className={"font-bold"}>Janvier 2021</span>- WoMa</li>
              </ul>
              Si vous êtes interréssés à héberger l'exposition, vous pouvez nous contacter en envoyant un mail à l'adresse : <a className={"font-bold bg-gray-200 hover:bg-gray-200"} href="mailto://hello@woma.fr"> hello@woma.fr </a>
            </div>
            <div className="mb-4">
              <h3 className="text-l uppercase font-black mb-2">Remerciements</h3>
              <a className={"font-bold bg-gray-200 hover:bg-gray-200"} href="http://quentinchevrier.com"> Quentin Chevrier </a>, photographe indépendant proche du milieu makers, qui s’est porté volontaire début avril 2020 auprès de Volumes pour aider à la fabrication de matériel de protection. Après quelques jours d’assemblage de visières, se rendant compte que personne ne documentait visuellement cette initiative d’ampleur, il se fait remplacer chez Volumes par quelques amis et part en reportage. Des ateliers mobilisés aux hôpitaux dans le besoin, en passant par les bénévoles confinés et les livreurs à vélo, il couvre une grande partie de cet élan de solidarité en un mois et demi.
            </div>
            <div className="mb-4">
              Et le reste de l'équipe qui a rendue cette exposition et documentation possible. <span className={"font-bold bg-gray-200"}>Zélie Chomez</span>, qui a coordonée l'ensemble du travail de curation et documentation. <span className={"font-bold bg-gray-200"}>Louise Baranger-Léonard</span> qui a pensé et conçu ce site. <span className={"font-bold bg-gray-200"}>Emma Cariot</span> et <span className={"font-bold bg-gray-200"}>Quentin Perchais</span> qui ont developpé ce site.
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
