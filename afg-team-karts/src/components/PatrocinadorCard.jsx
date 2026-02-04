import './PatrocinadorCard.css'

const PatrocinadorCard = ({ patrocinador }) => {
  return (
    <div className="patrocinador-card">
      <div className="patrocinador-img-container">
        <img 
          src={`/patrocinadores/${patrocinador.logo}`} 
          alt={patrocinador.nombre}
          className="patrocinador-img"
        />
      </div>
      <div className="patrocinador-info">
        <h3 className="patrocinador-nombre">{patrocinador.nombre}</h3>
        <p className="patrocinador-categoria">{patrocinador.categoria}</p>
        <p className="patrocinador-descripcion">{patrocinador.descripcion}</p>
      </div>
    </div>
  )
}

export default PatrocinadorCard