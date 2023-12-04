import projects from '../data.json'
import Skills from './Skills'

const SkillsSection = () => {
  const allSkills: string[] = [
    ...new Set(projects.flatMap((project) => project.tech)),
  ]
  return (
    <div id='skills'>
      <h2 className='title'>COMPETENCES</h2>
      <div className='skills'>
        {allSkills.map((skill, id) => {
          return <Skills key={id} tech={skill} />
        })}
      </div>
    </div>
  )
}

export default SkillsSection
