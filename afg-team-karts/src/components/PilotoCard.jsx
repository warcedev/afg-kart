import './PilotoCard.css'

const PilotoCard = ({ piloto, tipo }) => {
  const colorClass = tipo === 'principal' ? 'principal' : 'novato'
  
  return (
    <div className={`piloto-card ${colorClass}`}>
      <div className="piloto-img-container">
        <img 
          src={`/pilotos/${piloto.foto}`} 
          alt={piloto.nombre}
          className="piloto-img"
        />
      </div>
      <div className="piloto-info">
        <h3 className="piloto-nombre">{piloto.nombre}</h3>
        <p className="piloto-edad">{piloto.edad} años</p>
        <p className="piloto-titulo">{piloto.titulo}</p>
        <div className="piloto-logros">
          <h4>Logros Destacados:</h4>
          <ul>
            {piloto.logros.map((logro, index) => (
              <li key={index}>{logro}</li>
            ))}
          </ul>
        </div>
        <p className="piloto-descripcion">{piloto.descripcion}</p>
      </div>
    </div>
  )
}

export default PilotoCard