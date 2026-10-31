import { useState } from 'react'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="header__inner">
        <button
          className="menu-toggle"
          type="button"
          aria-controls="navigation-principale"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span>{menuOpen ? 'Fermer' : 'Menu'}</span>
        </button>

        <nav
          id="navigation-principale"
          aria-label="Navigation principale"
          className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header