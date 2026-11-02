
function ProjectDialog({ project, dialogRef }) {
  if (!project) {
    return null
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
    >
      <div className="project-dialog__content">

        <button
          className="project-dialog__close"
          type="button"
          onClick={closeDialog}
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <p className="project-dialog__category">
          {project.category}
        </p>

        <h2 id="project-dialog-title">
          {project.title}
        </h2>

        {project.image && (
          <img
            className="project-dialog__image"
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            decoding="async"
          />
        )}

        <h3>Contexte</h3>
        <p>{project.context}</p>

        <h3>Objectifs</h3>
        <ul>
          {project.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>

        <h3>Technologies</h3>
        <ul className="project-dialog__technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
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

        {project.github && (
          <a
            className="project-dialog__github"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le code sur GitHub ↗
          </a>
        )}

      </div>
    </dialog>
  )
}

export default ProjectDialog
