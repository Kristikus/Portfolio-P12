import { Link } from 'react-scroll';
import dog from '../assets/funny-dog.webp';

const Presentation = () => {
  return (
    <div className='presentation-wrapper' id='presentation'>
      <div className='presentation-img'>
        <img loading='lazy' src={dog} alt='profile'></img>
      </div>
      <div className='presentation-text'>
        <h2>Bienvenue !</h2>
        <p>
          Vous avez besoin d'un site web moderne et dynamique ? Mes compétences
          en Javascript et React sont là pour vous ! Ayant découvert le
          développement web pendant un job d'été et curieuse d'en apprendre
          davantage, je me suis lancée dans une formation de développeur
          intégrateur web. Je suis également passée par une POEI développeur
          front-end pour approfondir mes compétences.
        </p>
        <Link
          activeClass='active'
          smooth
          spy
          to='contact'
          className='btn link'
          href=''
        >
          Contactez-moi
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
