import {
  faReact,
  faHtml5,
  faCss3,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import reduxIcon from '../assets/redux_icon.svg'
import jsIcon from '../assets/js.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SkillsProps = {
  tech: string
}

const Skills = ({ tech }: SkillsProps) => {
  const getIcons = () => {
    switch (tech) {
      case 'HTML5':
        return <FontAwesomeIcon icon={faHtml5} className='logo-icon' />
        break
      case 'CSS3':
        return <FontAwesomeIcon icon={faCss3} className='logo-icon' />
        break
      case 'Javascript':
        return <img src={jsIcon} alt='logo Javascript' className='logo-img' />
        break
      case 'Sass':
        return <FontAwesomeIcon icon={faSass} className='logo-icon' />
      case 'Redux':
        return <img src={reduxIcon} alt='logo Redux' className='logo-img' />
        break
      case 'React':
        return <FontAwesomeIcon icon={faReact} className='logo-icon' />
        break
      default:
        return (
          <div>
            <p className='skills-no-code'>{tech}</p>
          </div>
        )
    }
  }
  return <div>{getIcons()}</div>
}

export default Skills
