import { useRef, useState } from 'react'
import projects from '../data/projects.js'
import ProjectDialog from './ProjectDialog.jsx'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const dialogRef = useRef(null)

  const openProject = (project) => {
    setSelectedProject(project)

    requestAnimationFrame(() => {
      dialogRef.current?.showModal()
    })
  }

  return (
    <section id="projets" className="section">
      <div className="section__content">
        <p className="section__eyebrow">Projets</p>

        <h2>
          Mes projets de développement web front-end, back-end et qualité web
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img
                className="project-card__image"
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                loading="lazy"
                decoding="async"
              />

              <p className="project-card__category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openProject(project)}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                Découvrir le projet
              </button>
            </article>
          ))}
        </div>

        <ProjectDialog
          project={selectedProject}
          dialogRef={dialogRef}
        />
      </div>
    </section>
  )
}

export default Projects