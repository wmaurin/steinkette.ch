import { Link } from 'react-router-dom';
import { Gallery, Hero, Section } from '../components';
import logo from '../assets/logo.png';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';

function Home() {
  return (
    <>
      <Hero
        image={logo}
        description="Schmuck mit ungeschliffenen Steinen, gesammelt an den Ufern von Flüssen und Meere"
      />

      <Section header="Über mich">
        <p>
          Ich stelle Steinschmuck aus farbigen Kieselsteinen her. Alle Steine
          sind naturbelassen und unbehandelt. Jedes Schmuckstück ist einmalig
          und damit ein Unikat.
        </p>

        <p>
          Meine Schätze in allen Farben finde ich vor allem an Meeresstränden
          auf griechischen Inseln oder an Ufern von Flüssen in der Schweiz.
          Stundenlang bin ich jeweils auf der Suche. Später reihe ich die Steine
          mit viel Geduld und langer Hand aneinander, bis aus den ursprünglich
          unauffälligen Kieseln ein einzigartiges Schmuckstück entsteht. Dankbar
          bin ich der ruhigen Hand meines Partners, der es mit Hilfe eines
          Diamantbohrers vermag die Löcher zu bohren. Diese kreative Tätigkeit
          und was daraus entsteht erfüllt mich mit Glück und Freude.
        </p>
      </Section>

      <Gallery
        images={[
          { src: home1, alt: 'Steinschmuck' },
          { src: home2, alt: 'Steinschmuck' },
          { src: home3, alt: 'Steinschmuck' },
        ]}
      />

      <Section>
        <p>
          Einige meiner Ketten findest Du in der <Link to="/gallerie">Galerie</Link>, wenn Du die ganze
          Auswahl sehen möchtest besuchst Du mich am besten an einem meiner
          Märkte:
        </p>
      </Section>
    </>
  );
}

export default Home;
