function ProjectDialog({ project, dialogRef }) {
  if (!project) {
    return null
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <dialog className="project-dialog" ref={dialogRef}>
      <div className="project-dialog__content">
        <button
          className="project-dialog__close"
          type="button"
          onClick={closeDialog}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <p className="project-dialog__category">{project.category}</p>

        <h2>{project.title}</h2>

        <h3>Contexte</h3>
        <p>{project.context}</p>

        <h3>Objectifs</h3>
        <ul>
          {project.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>

        <h3>Technologies</h3>
        <ul>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <h3>Compétences développées</h3>
        <ul>
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h3>Améliorations possibles</h3>
        <p>{project.improvements}</p>
      </div>
    </dialog>
  )
}

export default ProjectDialog