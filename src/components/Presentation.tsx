import dog from '../assets/funny-dog.png'

const Presentation = () => {
  return (
    <div className='presentation-wrapper'>
      <div className='presentation-img'>
        <img src={dog}></img>
      </div>
      <div className='presentation-text'>
        <h2>Bienvenue !</h2>
        <p>
          Vous avez besoin d'un site web moderne et dynamique ?
          Mes compétences en Javascript et React sont là pour vous !
          Ayant découvert le développement web pendant un job d'été et curieuse
          d'en apprendre davantage, je me suis lancée dans une formation de
          développeur intégrateur web.
        </p>
        <button className='btn'>Contactez-moi</button>
      </div>
    </div>
  )
}

export default Presentation
