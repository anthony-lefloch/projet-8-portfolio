function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__content">
        <p className="section__eyebrow">Contact</p>

        <h2>Échangeons sur un projet ou une opportunité</h2>

        <p>
          Vous pouvez me contacter par e-mail ou me retrouver sur mes différents
          profils en ligne.
        </p>

        <div className="contact-links">
          <a href="mailto:ton-email@example.com">
            E-mail
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact