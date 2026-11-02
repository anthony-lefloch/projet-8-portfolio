import aboutImage from '../assets/about/illustration-a-propos-version-1.webp'

function About() {
  return (
    <section id="apropos" className="section section--about">
      <div className="section__content about">
        <div className="about__content">
          <p className="section__eyebrow">À propos</p>

          <h2>
            Développeur web full-stack junior en reconversion professionnelle
          </h2>

          <p>
            En reconversion professionnelle, je me forme au développement
            web avec OpenClassrooms. Mon objectif est de concevoir
            des applications web modernes, responsive, accessibles
            et maintenables.
          </p>

          <p>
            À travers mes projets de formation, j'ai développé
            des compétences en développement front-end avec HTML,
            CSS, JavaScript et React, ainsi qu'en développement
            back-end avec Node.js, Express et MongoDB.
            J'accorde également une attention particulière
            à l'accessibilité, au référencement naturel (SEO)
            et à l'optimisation des performances.
          </p>
        </div>

        <div className="about__visual">
          <img
            src={aboutImage}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default About