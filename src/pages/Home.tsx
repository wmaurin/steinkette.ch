import { Hero } from '../components';
import logo from '../assets/logo.png';

function Home() {
  return (
    <Hero
      image={logo}
      description="Schmuck mit ungeschliffenen Steinen, gesammelt an den Ufern von Flüssen und Meere"
    />
  );
}

export default Home;
