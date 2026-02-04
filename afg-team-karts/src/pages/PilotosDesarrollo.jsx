import { useState, useEffect } from 'react'
import './PilotosDesarrollo.css'

const PilotosDesarrollo = () => {
  const [pilotoPromesa, setPilotoPromesa] = useState(null)
  const [proyeccion, setProyeccion] = useState('')

  useEffect(() => {
    // Datos de la piloto en desarrollo
    setPilotoPromesa({
      nombre: "Valentina Rojas",
      edad: 15,
      nacionalidad: "Paraguaya",
      foto: "piloto-desarrollo.jpg",
      categoriaActual: "Karting Junior",
      debut: "2024",
      proyeccionProfesional: "2027",
      descripcion: `
        Valentina descubrió su pasión por los karts a los 10 años, cuando acompañaba 
        a su padre a las pistas locales. A los 12, participó en su primera competencia 
        y sorprendió a todos al terminar en el podio. Su técnica limpia y su capacidad 
        para mantener la calma bajo presión llamaron inmediatamente la atención de 
        nuestros scouts.
        
        En 2023, se unió a nuestro programa de desarrollo junior y en solo un año 
        ha demostrado un progreso extraordinario. Sus puntos fuertes son su capacidad 
        de aprendizaje, su disciplina fuera de serie y una intuición natural para 
        las líneas de carrera.
        
        Nuestro plan para Valentina incluye una temporada completa en karting junior 
        en 2024, transición a categorías superiores en 2025-2026, y debut profesional 
        en 2027.
      `,
      logros: [
        "Campeona Nacional Cadete 2023",
        "Revelación del Año en Copa Junior",
        "3 podios en su primera temporada junior",
        "Mejor tiempo en pruebas de pretemporada 2024"
      ],
      caracteristicas: [
        "Capacidad de aprendizaje excepcional",
        "Excelente condición física",
        "Mentalidad ganadora",
        "Gran capacidad de adaptación a diferentes pistas"
      ]
    })

    setProyeccion(`
      Valentina representa el futuro de AFG Team y del automovilismo paraguayo. 
      Nuestro objetivo es prepararla integralmente para que en 2027 pueda competir 
      al más alto nivel nacional y comenzar su proyección internacional.
      
      El plan de desarrollo incluye:
      1. Entrenamiento técnico intensivo (2024-2025)
      2. Participación en competencias internacionales junior (2025-2026)
      3. Programa de preparación física y mental especializado
      4. Mentoría con nuestros pilotos principales
      5. Desarrollo de habilidades de comunicación y manejo de medios
      
      Creemos firmemente que Valentina tiene el potencial para convertirse en la 
      primera piloto paraguaya en competir a nivel continental en categorías profesionales.
    `)
  }, [])

  return (
    <div className="pilotos-desarrollo">
      {/* <section className="promesa-presentacion">
        <h2 className="section-title">Nuestra Promesa para 2027</h2>
        <div className="promesa-content">
          <div className="promesa-imagen">
            <div className="piloto-promesa-img">
              <div className="placeholder-promesa">🚺</div>
              <p className="foto-desc">Valentina Rojas - Futura estrella del karting</p>
            </div>
            <div className="promesa-datos">
              <h3>Datos Técnicos</h3>
              <ul>
                <li><strong>Edad:</strong> {pilotoPromesa?.edad} años</li>
                <li><strong>Nacionalidad:</strong> {pilotoPromesa?.nacionalidad}</li>
                <li><strong>Categoría Actual:</strong> {pilotoPromesa?.categoriaActual}</li>
                <li><strong>Debut AFG Team:</strong> {pilotoPromesa?.debut}</li>
                <li><strong>Proyección Profesional:</strong> {pilotoPromesa?.proyeccionProfesional}</li>
              </ul>
            </div>
          </div>
          <div className="promesa-info">
            <h3 className="promesa-nombre">{pilotoPromesa?.nombre}</h3>
            <div className="promesa-descripcion">
              <p>{pilotoPromesa?.descripcion}</p>
            </div>
            
            <div className="promesa-logros">
              <h4>Logros Destacados</h4>
              <ul>
                {pilotoPromesa?.logros.map((logro, index) => (
                  <li key={index}>{logro}</li>
                ))}
              </ul>
            </div>

            <div className="promesa-caracteristicas">
              <h4>Características Destacadas</h4>
              <div className="caracteristicas-grid">
                {pilotoPromesa?.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="caracteristica-card">
                    <div className="caracteristica-icon">⭐</div>
                    <p>{caracteristica}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="plan-desarrollo">
        <h2 className="section-title">Plan de Desarrollo 2024-2027</h2>
        <div className="plan-content">
          <div className="plan-proyeccion">
            <h3>Proyección Profesional</h3>
            <p>{proyeccion}</p>
          </div>
          
          <div className="plan-timeline">
            <h3>Línea de Tiempo</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-año">2024</div>
                <div className="timeline-desc">
                  <h4>Temporada Completa Junior</h4>
                  <p>Adaptación a competencias nacionales, desarrollo de habilidades básicas.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-año">2025</div>
                <div className="timeline-desc">
                  <h4>Transición a Categorías Superiores</h4>
                  <p>Primeras experiencias en karts más potentes, participación en torneos internacionales junior.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-año">2026</div>
                <div className="timeline-desc">
                  <h4>Preparación Profesional</h4>
                  <p>Entrenamiento especializado, mentoría con pilotos principales, desarrollo de marca personal.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-año">2027</div>
                <div className="timeline-desc">
                  <h4>Debut Profesional</h4>
                  <p>Debut en categorías profesionales nacionales, primeras experiencias en automovilismo mayor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="programa-desarrollo">
        <h2 className="section-title">Programa de Desarrollo AFG</h2>
        <div className="programa-info">
          <div className="programa-card">
            <h3>Objetivo del Programa</h3>
            <p>Identificar y desarrollar jóvenes talentos paraguayos para llevarlos al profesionalismo en 3-4 años.</p>
          </div>
          <div className="programa-card">
            <h3>Requisitos de Ingreso</h3>
            <ul>
              <li>Edad: 13-16 años</li>
              <li>Compromiso y disciplina demostrables</li>
              <li>Rendimiento académico satisfactorio</li>
              <li>Aprobación en pruebas técnicas y físicas</li>
            </ul>
          </div>
          <div className="programa-card">
            <h3>Beneficios para los Pilotos</h3>
            <ul>
              <li>Entrenamiento profesional gratuito</li>
              <li>Equipamiento completo</li>
              <li>Participación en competencias</li>
              <li>Apoyo educativo y nutricional</li>
            </ul>
          </div>
        </div>
        <div className="programa-cta">
          <p>¿Conoces a un joven talento? <a href="#contacto">Contáctanos</a> para evaluar su ingreso al programa.</p>
        </div>
      </section>
    </div>
  )
}

export default PilotosDesarrollo