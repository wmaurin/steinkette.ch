import { Gallery } from '../components';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';
import g11 from '../assets/g11.jpg';
import g12 from '../assets/g12.jpg';
import g13 from '../assets/g13.jpg';
import g14 from '../assets/g14.jpg';
import g15 from '../assets/g15.jpg';
import g16 from '../assets/g16.jpg';
import g17 from '../assets/g17.jpg';
import g18 from '../assets/g18.jpg';
import g19 from '../assets/g19.jpg';
import g20 from '../assets/g20.jpg';
import g21 from '../assets/g21.jpg';
import g22 from '../assets/g22.jpg';
import g23 from '../assets/g23.jpg';
import g24 from '../assets/g24.jpg';
import g25 from '../assets/g25.jpg';

const images = [
  { src: g1, alt: 'Steinkette 1' },
  { src: g2, alt: 'Steinkette 2' },
  { src: g3, alt: 'Steinkette 3' },
  { src: g4, alt: 'Steinkette 4' },
  { src: g5, alt: 'Steinkette 5' },
  { src: g6, alt: 'Steinkette 6' },
  { src: g7, alt: 'Steinkette 7' },
  { src: g8, alt: 'Steinkette 8' },
  { src: g9, alt: 'Steinkette 9' },
  { src: g10, alt: 'Steinkette 10' },
  { src: g11, alt: 'Steinkette 11' },
  { src: g12, alt: 'Steinkette 12' },
  { src: g13, alt: 'Steinkette 13' },
  { src: g14, alt: 'Steinkette 14' },
  { src: g15, alt: 'Steinkette 15' },
  { src: g16, alt: 'Steinkette 16' },
  { src: g17, alt: 'Steinkette 17' },
  { src: g18, alt: 'Steinkette 18' },
  { src: g19, alt: 'Steinkette 19' },
  { src: g20, alt: 'Steinkette 20' },
  { src: g21, alt: 'Steinkette 21' },
  { src: g22, alt: 'Steinkette 22' },
  { src: g23, alt: 'Steinkette 23' },
  { src: g24, alt: 'Steinkette 24' },
  { src: g25, alt: 'Steinkette 25' },
];

function Galerie() {
  return (
    <Gallery
      header="Galerie"
      center={true}
      images={images}
      columns={3}
    />
  );
}

export default Galerie;
