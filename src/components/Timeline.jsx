
const timeline = [
  {
    title: 'Mon parcours professionnel',
    description:
      "Issu d'une formation commerciale, j'ai créé une micro-entreprise de e-commerce sur Amazon. Cette expérience m'a permis de développer mon autonomie, mon sens de l'organisation et ma rigueur. J'ai ensuite travaillé comme assistant administratif en intérim, une expérience qui m'a permis de renforcer ces qualités et de développer ma polyvalence.",
  },
  {
    title: 'Ma reconversion dans le développement web',
    description:
      "En 2026, j'ai choisi de me reconvertir dans le développement web en suivant la formation Développeur Web d'OpenClassrooms. À travers différents projets concrets, j'ai développé des compétences en front-end et en back-end, tout en apprenant à utiliser des outils et des méthodes de travail professionnels.",
  },
  {
    title: 'Mon objectif professionnel',
    description:
      "Aujourd'hui, je souhaite intégrer une équipe en tant que développeur web junior afin de mettre en pratique mes compétences, continuer à progresser et contribuer à la réalisation de projets web utiles et de qualité.",
  },
]

function Timeline() {
  return (
    <section id="parcours" className="section section--alt">
      <div className="section__content">
        <p className="section__eyebrow">Parcours</p>

        <h2>Mon parcours</h2>

        <div className="timeline">
          {timeline.map((item) => (
            <article className="timeline__item" key={item.title}>
              <div className="timeline__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
