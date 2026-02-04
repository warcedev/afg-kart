import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Inicio from './pages/Inicio'
import AcercaDeNosotros from './pages/AcercaDeNosotros'
import Historia from './pages/Historia' // ← Importar nueva página
import PilotosDesarrollo from './pages/PilotosDesarrollo'
import Contacto from './pages/Contacto'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('inicio')

  const renderPage = () => {
    switch(currentPage) {
      case 'inicio':
        return <Inicio />
      case 'acerca':
        return <AcercaDeNosotros />
      case 'historia':  // ← Agregar nuevo caso
        return <Historia />
      case 'desarrollo':
        return <PilotosDesarrollo />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <div className="app">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-afg">AFG</div>
            <div className="team-name">TEAM</div>
          </div>
          <div className="footer-info">
            <p>© 2024 AFG Team - Competencia de Karts</p>
            <p>Asunción, Paraguay</p>
          </div>
          <div className="footer-social">
            <p>Síguenos en redes sociales</p>
            <div className="social-icons">
              <span className="social-icon">📷</span>
              <span className="social-icon">📘</span>
              <span className="social-icon">▶️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App