import heroImage from '../assets/Hero/hero-bureau-sauge.webp'

function Hero() {
  return (
    <section id="accueil">
      <div className="hero__content">
        <h1>Développeur web full-stack junior</h1>
        <p>
          Spécialisé en front-end React, avec des compétences en JavaScript,
          Node.js, Express et MongoDB.
        </p>
        <a href="#projets">Voir mes projets</a>
      </div>

      <div className="hero__visual">
        <img
          src={heroImage}
          alt=""
        />
      </div>
    </section>
  )
}

export default Hero