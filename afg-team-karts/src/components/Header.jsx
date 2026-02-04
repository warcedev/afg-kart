import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-border">
              <img 
                src="/escudo.png" 
                alt="Escudo AFG Team" 
                className="logo-img"
              />
            </div>
          </div>
          <div className="logo-text">
            <h1 className="team-name">AFG TEAM</h1>
            <p className="team-tagline">Velocidad, Pasión y Excelencia</p>
          </div>
        </div>
        <div className="header-slogan">
          <p>Compitiendo en las pistas más exigentes de Paraguay</p>
        </div>
      </div>
    </header>
  )
}

export default Header