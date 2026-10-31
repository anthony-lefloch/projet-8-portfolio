
import heroImage from '../assets/Hero/hero-bureau-sauge.webp'

function Hero() {
  return (
    <section id="accueil">
      <div className="hero__content">
        <h1>Développeur web junior</h1>

        <p>
          Spécialisé en front-end React, avec des compétences en JavaScript,
          Node.js, Express et MongoDB.
        </p>

        <a href="#projets">Voir mes projets</a>
      </div>

      <div className="hero__visual">
        <img
          src={heroImage}
          alt="Espace de travail avec un ordinateur portable, une plante et un carnet"
        />
      </div>
    </section>
  )
}

export default Hero
