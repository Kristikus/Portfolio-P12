import Card from './Card'
import projects from '../data.json'
import Skills from './Skills'
import { useState } from 'react'

const allSkills: string[] = [
  ...new Set(projects.flatMap((project) => project.tech)),
]

const Projects: React.FC = () => {
  const languageSkills = ['React', 'Javascript', 'HTML5']
  const [categorySelected, setCategorySelected] = useState(projects)

  const filteredCategory = (techno: string) => {
    const newTech = projects.filter((project) => {
      return project.tech.includes(techno)
    })
    setCategorySelected(newTech)
  }

  const filteredOthersSkills = () => {
    const test = projects.filter((project) => {
      const otherSkills =
        project.tech.includes('Test') ||
        project.tech.includes('SEO') ||
        project.tech.includes('Gestion projet')
      return otherSkills
    })
    setCategorySelected(test)
  }

  return (
    <div className='projects-container'>
      <h2 className='projects-title' id='projects'>
        PROJETS
      </h2>
      <div className='projects-filter'>
        {languageSkills.map((skill, id) => (
          <div key={id}>
            <button className='btn' onClick={() => filteredCategory(skill)}>
              {skill}
            </button>
          </div>
        ))}
        <button className='btn' onClick={filteredOthersSkills}>
          Others
        </button>
        <button className='btn' onClick={() => setCategorySelected(projects)}>
          All
        </button>
      </div>
      <div className='projects'>
        {categorySelected.map((project) => {
          return (
            <div key={project.id} className='projects-section'>
              <Card
                name={project.name}
                src={project.image}
                alt={project.name}
              />
              <div className='projects-section-description'>
                <div>
                  <p>{project.description}</p>
                </div>
                <div className='logo-wrapper'>
                  {project.tech.map((techno, id) => {
                    return <Skills key={id} tech={techno} />
                  })}
                </div>
              </div>
            </div>
          )
        })}
        <h2 className='projects-title' id='skills'>
          COMPETENCES
        </h2>
        <div className='projects-skills'>
          {allSkills.map((skill, id) => {
            return <Skills key={id} tech={skill} />
          })}
        </div>
        <h2 className='projects-title' id='skills'>
          CONTACT
        </h2>
      </div>
    </div>
  )
}

export default Projects
