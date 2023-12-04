import Card from './Card'
import projects from '../data.json'
import Skills from './Skills'
import { useState } from 'react'

const Projects = () => {
  const languageSkills = ['React', 'Javascript', 'HTML5']
  const [categorySelected, setCategorySelected] = useState(projects)

  const filteredCategory = (techno: string) => {
    const newTech = projects?.filter((project) => {
      return project.tech.includes(techno)
    })
    setCategorySelected(newTech)
  }

  const filteredOthersSkills = () => {
    const test = projects?.filter((project) => {
      const otherSkills =
        project.tech.includes('Test') ||
        project.tech.includes('SEO') ||
        project.tech.includes('Gestion projet')
      return otherSkills
    })
    setCategorySelected(test)
  }

  return (
    <div className='projects-container' id='projects'>
      <h2 className='title'>PROJETS</h2>
      <div className='projects-filter'>
        {languageSkills.map((skill, id) => (
          <button
            key={id}
            className='btn'
            onClick={() => filteredCategory(skill)}
          >
            {skill}
          </button>
        ))}
        <button className='btn' onClick={filteredOthersSkills}>
          Autres
        </button>
        <button className='btn' onClick={() => setCategorySelected(projects)}>
          Tous
        </button>
      </div>
      <div className='projects'>
        {categorySelected.map((project) => {
          return (
            <div key={project.id} className='projects-section'>
              <Card src={project.image} alt={project.name} linkGithub={project.github} linkSite={project.demo}/>
              <div className='projects-section-description'>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className='logo-wrapper'>
                  {project.tech.map((techno: string, id: number) => {
                    return <Skills key={id} tech={techno} />
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
