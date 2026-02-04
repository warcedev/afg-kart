import './MiembroEquipo.css'

const MiembroEquipo = ({ miembro, lado }) => {
  return (
    <div className={`miembro-equipo ${lado}`}>
      <div className="miembro-img-container">
        <img 
          src={`/equipo/${miembro.foto}`} 
          alt={miembro.nombre}
          className="miembro-img"
        />
      </div>
      <div className="miembro-info">
        <h3 className="miembro-nombre">{miembro.nombre}</h3>
        <p className="miembro-rol">{miembro.rol}</p>
        <p className="miembro-descripcion">{miembro.descripcion}</p>
        <p className="miembro-experiencia">{miembro.experiencia}</p>
      </div>
    </div>
  )
}

export default MiembroEquipo