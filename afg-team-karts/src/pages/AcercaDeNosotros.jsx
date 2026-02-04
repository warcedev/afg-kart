import { useState, useEffect } from 'react'
import MiembroEquipo from '../components/MiembroEquipo'
import './AcercaDeNosotros.css'

const AcercaDeNosotros = () => {
  const [miembros, setMiembros] = useState([])
  const [historia, setHistoria] = useState('')

  useEffect(() => {
    // Historia del equipo
    setHistoria(`
      AFG Team nació en 2015 en Asunción, Paraguay, de la mano de tres apasionados 
      del automovilismo: Alejandro, Fernando y Gabriela (de cuyas iniciales proviene 
      nuestro nombre). Lo que comenzó como un pequeño proyecto entre amigos se ha 
      convertido en uno de los equipos más respetados del karting paraguayo.
      
      Nuestro primer kart fue comprado con grandes sacrificios, pero con aún mayores 
      sueños. A lo largo de los años, hemos crecido no solo en infraestructura, sino 
      también en experiencia y logros. Hoy contamos con 4 karts de competencia, un 
      taller completamente equipado y un equipo humano excepcional.
      
      Nuestra filosofía siempre ha sido clara: desarrollar talento paraguayo para 
      competir al más alto nivel, manteniendo siempre los valores del deporte, 
      la disciplina y el trabajo en equipo.
    `)

    // Datos de los miembros del equipo
    setMiembros([
      {
        id: 1,
        nombre: "Alejandro Martínez",
        rol: "Fundador & Director General",
        foto: "director.jpg",
        descripcion: "Empresario y apasionado del automovilismo desde niño. Con más de 20 años de experiencia en gestión deportiva.",
        experiencia: "Fundó AFG Team con la visión de crear un semillero de pilotos profesionales en Paraguay."
      },
      {
        id: 2,
        nombre: "Fernando Rojas",
        rol: "Co-Fundador & Director Deportivo",
        foto: "entrenador-perfil.jpg",
        descripcion: "Ex-piloto profesional con participación en competencias internacionales. Especialista en técnicas de conducción.",
        experiencia: "Compitió en categorías nacionales e internacionales durante 12 años antes de dedicarse a la formación."
      },
      {
        id: 3,
        nombre: "Gabriela Silva",
        rol: "Co-Fundadora & Directora de Marketing",
        foto: "piloto2.jpg",
        descripcion: "Profesional en marketing deportivo con especialización en patrocinios y desarrollo de marca.",
        experiencia: "Ha gestionado alianzas estratégicas con importantes marcas nacionales e internacionales."
      },
      {
        id: 4,
        nombre: "Roberto Álvarez",
        rol: "Entrenador Principal",
        foto: "entrenador.jpg",
        descripcion: "Licenciado en Educación Física con especialización en entrenamiento deportivo de alto rendimiento.",
        experiencia: "15 años entrenando pilotos de diversas categorías, con 8 campeones nacionales formados bajo su tutela."
      }
    ])
  }, [])

  return (
    <div className="acerca-de-nosotros">
      <section className="historia-equipo">
        <h2 className="section-title">Nuestra Historia</h2>
        <div className="historia-content">
          <div className="historia-texto">
            <p>{historia}</p>
          </div>
          <div className="historia-imagen">
            <div className="imagen-equipo">
              <div className="placeholder-imagen">🏆</div>
              <p className="imagen-desc">Primer campeonato ganado por AFG Team (2018)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="valores-equipo">
        <h2 className="section-title">Nuestros Valores</h2>
        <div className="valores-grid">
          <div className="valor-card">
            <h3>Excelencia</h3>
            <p>Buscamos la perfección en cada detalle, tanto en la pista como fuera de ella.</p>
          </div>
          <div className="valor-card">
            <h3>Pasión</h3>
            <p>Amamos lo que hacemos y eso se refleja en nuestro compromiso diario.</p>
          </div>
          <div className="valor-card">
            <h3>Respeto</h3>
            <p>Por los rivales, las reglas y el deporte en general.</p>
          </div>
          <div className="valor-card">
            <h3>Innovación</h3>
            <p>Constantemente buscamos nuevas formas de mejorar y ser más competitivos.</p>
          </div>
        </div>
      </section>

      <section className="miembros-equipo">
        <h2 className="section-title">Nuestro Equipo</h2>
        <div className="miembros-lista">
          {miembros.map((miembro, index) => (
            <MiembroEquipo 
              key={miembro.id} 
              miembro={miembro} 
              lado={index % 2 === 0 ? 'izquierda' : 'derecha'} 
            />
          ))}
        </div>
      </section>

      <section className="logros-equipo">
        <h2 className="section-title">Logros Destacados</h2>
        <div className="logros-timeline">
          <div className="logro-item">
            <div className="logro-año">2018</div>
            <div className="logro-desc">
              <h3>Primer Campeonato Nacional</h3>
              <p>Carlos Mendoza gana el primer campeonato nacional para AFG Team en la categoría profesional.</p>
            </div>
          </div>
          <div className="logro-item">
            <div className="logro-año">2020</div>
            <div className="logro-desc">
              <h3>Expansión Internacional</h3>
              <p>Primera participación en competencias internacionales en Argentina y Brasil.</p>
            </div>
          </div>
          <div className="logro-item">
            <div className="logro-año">2022</div>
            <div className="logro-desc">
              <h3>Programa de Desarrollo Junior</h3>
              <p>Lanzamiento exitoso del programa para jóvenes talentos, descubriendo a Luis y María.</p>
            </div>
          </div>
          <div className="logro-item">
            <div className="logro-año">2023</div>
            <div className="logro-desc">
              <h3>Doblete Nacional</h3>
              <p>Carlos y Ana logran el 1-2 en el campeonato nacional, consolidando el dominio del equipo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AcercaDeNosotros