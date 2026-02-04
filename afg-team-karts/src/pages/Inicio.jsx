import { useState, useEffect } from 'react'
import PilotoCard from '../components/PilotoCard'
import PatrocinadorCard from '../components/PatrocinadorCard'
import './Inicio.css'


const Inicio = () => {
  const [pilotosPrincipales, setPilotosPrincipales] = useState([])
  const [pilotosNovatos, setPilotosNovatos] = useState([])
  const [patrocinadores, setPatrocinadores] = useState([])
  const [entrenador, setEntrenador] = useState(null)
  const [directorTecnico, setDirectorTecnico] = useState(null)

  useEffect(() => {
    // Datos de pilotos principales
    setPilotosPrincipales([
      {
        id: 1,
        nombre: "Fernando Ferreira",
        edad: 28,
        titulo: "Campeón Nacional 2023",
        foto: "fer.jpeg",
        logros: [
          "Campeón Nacional de Karts 2023",
          "3er lugar Copa Internacional 2022",
          "Récord de vuelta en Autódromo Paraguay"
        ],
        descripcion: "Piloto con más de 10 años de experiencia en competencias nacionales e internacionales. Especialista en pistas técnicas."
      },
      {
        id: 2,
        nombre: "Jose Ferreira",
        edad: 25,
        titulo: "Subcampeona Continental",
        foto: "jose.jpeg",
          logros: [
            "Subcampeona Continental 2023",
           "Mejor Piloto Femenina 2022",
            "5 victorias en temporada 2023"
          ],
        descripcion: "Una de las pilotos más prometedoras del continente, conocida por su agresividad controlada y precisión en curvas."
      }
    ])

    // Datos de pilotos novatos (Jr's)
    setPilotosNovatos([
      {
        id: 3,
        nombre: "William Arce",
        edad: 19,
        titulo: "Promesa del Karting",
        foto: "wil1.jpeg",
        logros: [
          "Campeón Juvenil Nacional 2023",
          "Revelación del Año 2022",
          "2 victorias en categoría junior"
        ],
        descripcion: "Joven talento que demostró habilidades excepcionales desde su debut. Futura estrella del automovilismo."
      },
      {
        id: 4,
        nombre: "Manuel Godoy",
        edad: 17,
        titulo: "Novata Destacada 2023",
        foto: "manu1.jpeg",
        logros: [
          "Mejor Novata 2023",
          "3 podios en su primera temporada",
          "Premio al Espíritu Deportivo"
        ],
        descripcion: "Pilota con gran potencial, demostrando madurez y técnica por encima de su experiencia."
      }
    ])

    // Datos de patrocinadores
    setPatrocinadores([
      {
        id: 1,
        nombre: "SpeedMax Motors",
        categoria: "Motores y Repuestos",
        logo: "patrocinador1.png",
        descripcion: "Proveedor oficial de motores y repuestos de alta performance para el equipo."
      },
      {
        id: 2,
        nombre: "Neumaticos Rápidos",
        categoria: "Neumáticos",
        logo: "patrocinador2.png",
        descripcion: "Proveedor exclusivo de neumáticos de competencia para todas las categorías."
      },
      {
        id: 3,
        nombre: "Energy Drink Turbo",
        categoria: "Bebida Energética",
        logo: "patrocinador3.png",
        descripcion: "Partner oficial de hidratación y energía para nuestros pilotos."
      },
      {
        id: 4,
        nombre: "TechGear Racing",
        categoria: "Equipamiento",
        logo: "patrocinador4.png",
        descripcion: "Proveedor de equipamiento de seguridad y tecnología de carrera."
      }
    ])

    // Datos del entrenador
    setEntrenador({
      nombre: "Fernando Ferreria",
      foto: "entrenador.png",  // ← .jpeg minúsculas
      descripcion: "Entrenador con 15 años de experiencia en desarrollo de pilotos. Ex-piloto profesional con múltiples títulos nacionales."
    })

    // Datos del director técnico
    setDirectorTecnico({
      nombre: "Fernando Javier Ferreira",
      foto: "director.png",
      descripcion: "Ingeniero mecánico especializado en automovilismo. Director técnico del equipo desde su fundación."
    })
  }, [])

  return (
    <div className="inicio">
      {/* Mensaje del equipo */}
      <section className="mensaje-equipo">
        <h2 className="section-title">Nuestro Mensaje</h2>
        <div className="mensaje-content">
          <p className="mensaje-text">
            En AFG Team, no solo competimos; forjamos campeones. Nuestra pasión por la velocidad 
            se combina con un compromiso inquebrantable con la excelencia técnica y el desarrollo humano.
          </p>
          <div className="mision-vision">
            <div className="mision">
              <h3>Misión</h3>
              <p>Ser el equipo referente de karts en Paraguay, desarrollando talentos locales para competencias internacionales.</p>
            </div>
            <div className="vision">
              <h3>Visión</h3>
              <p>Formar pilotos profesionales que representen a Paraguay en el automovilismo mundial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué corremos */}
      <section className="porque-corremos">
        <h2 className="section-title">¿Por Qué Corremos?</h2>
        <div className="razones">
          <div className="razon">
            <div className="razon-icon">🏁</div>
            <h3>Pasión por la Competencia</h3>
            <p>Amamos el deporte motor y la adrenalina de la competencia limpia.</p>
          </div>
          <div className="razon">
            <div className="razon-icon">🌟</div>
            <h3>Desarrollo de Talentos</h3>
            <p>Creemos en el potencial paraguayo y trabajamos para desarrollarlo.</p>
          </div>
          <div className="razon">
            <div className="razon-icon">🤝</div>
            <h3>Trabajo en Equipo</h3>
            <p>Sabemos que detrás de un gran piloto hay un gran equipo.</p>
          </div>
          <div className="razon">
            <div className="razon-icon">🇵🇾</div>
            <h3>Orgullo Nacional</h3>
            <p>Representamos a Paraguay en cada competencia nacional e internacional.</p>
          </div>
        </div>
      </section>

      {/* Pilotos principales */}
      <section className="pilotos-principales">
        <h2 className="section-title">Pilotos Principales</h2>
        <div className="pilotos-grid">
          {pilotosPrincipales.map(piloto => (
            <PilotoCard key={piloto.id} piloto={piloto} tipo="principal" />
          ))}
        </div>
      </section>

      {/* Pilotos novatos */}
      <section className="pilotos-novatos">
        <h2 className="section-title">Pilotos Novatos (Jr's)</h2>
        <div className="pilotos-grid">
          {pilotosNovatos.map(piloto => (
            <PilotoCard key={piloto.id} piloto={piloto} tipo="novato" />
          ))}
        </div>
      </section>

      {/* Staff técnico */}
      <section className="staff-tecnico">
        <h2 className="section-title">Nuestro Staff</h2>
        <div className="staff-grid">
          <div className="staff-card">
            <div className="staff-img-container">
              <img src={`/equipo/${entrenador?.foto}`} alt={entrenador?.nombre} />
            </div>
            <div className="staff-info">
              <h3>{entrenador?.nombre}</h3>
              <p className="staff-rol">Entrenador Official</p>
              <p>{entrenador?.descripcion}</p>
            </div>
          </div>
          <div className="staff-card">
            <div className="staff-img-container">
              <img src={`/equipo/${directorTecnico?.foto}`} alt={directorTecnico?.nombre} />
            </div>
            <div className="staff-info">
              <h3>{directorTecnico?.nombre}</h3>
              <p className="staff-rol">Director Ejecutivo</p>
              <p>{directorTecnico?.descripcion}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patrocinadores */}
      <section className="patrocinadores">
        <h2 className="section-title">Nuestros Patrocinadores</h2>
        <div className="patrocinadores-grid">
          {patrocinadores.map(patrocinador => (
            <PatrocinadorCard key={patrocinador.id} patrocinador={patrocinador} />
          ))}.

🏆

        </div>
      </section>
    </div>
  )
}

export default Inicio