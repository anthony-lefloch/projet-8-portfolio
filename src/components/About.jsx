
import aboutImage from '../assets/about/illustration-a-propos-version-1.webp'

function About() {
  return (
    <section id="apropos" className="section section--about">
      <div className="section__content about">
        <div className="about__content">
          <p className="section__eyebrow">À propos</p>

          <h2>
            Un parcours en reconversion, orienté développement web
          </h2>

          <p>
            Je me forme au développement web avec OpenClassrooms afin
            de construire des applications modernes, accessibles
            et maintenables.
          </p>

          <p>
            J’ai travaillé sur des projets front-end et back-end qui
            m’ont permis de progresser en React, JavaScript, Node.js,
            Express, MongoDB, accessibilité, SEO et optimisation
            des performances.
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
