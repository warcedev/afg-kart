import './Navigation.css'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca', label: 'Acerca de Nosotros' },
    { id: 'historia', label: 'Acerca de Nuestra Historia' }, // ← Nueva pestaña
    { id: 'desarrollo', label: 'Pilotos en Desarrollo' },
    { id: 'contacto', label: 'Contáctanos' },
  ]

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
