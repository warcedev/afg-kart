import { useState, useEffect } from 'react'
import './Historia.css'

const Historia = () => {
  const [historia, setHistoria] = useState([])
  const [fundadores, setFundadores] = useState([])
  const [momentosDestacados, setMomentosDestacados] = useState([])

  useEffect(() => {
    // Historia del equipo
    setHistoria([
      {
        año: 2015,
        titulo: "Fundación del Equipo",
        descripcion: "AFG Team nació en Asunción, Paraguay, de la visión compartida de tres apasionados del automovilismo: Alejandro, Fernando y Gabriela. Con un solo kart comprado con grandes sacrificios, comenzaron a escribir su historia.",
        imagen: "/historia/fundacion.jpg",
        tipo: "fundacion"
      },
      {
        año: 2016,
        titulo: "Primera Competencia Oficial",
        descripcion: "Participación en el Campeonato Nacional de Karting. Aunque no lograron podios, la experiencia fue invaluable y sentó las bases para el futuro del equipo.",
        imagen: "/historia/primer-carrera.jpg",
        tipo: "competencia"
      },
      {
        año: 2018,
        titulo: "Primer Campeonato Nacional",
        descripcion: "Carlos Mendoza gana el primer campeonato nacional para AFG Team, marcando un hito histórico y validando el trabajo del equipo.",
        imagen: "/historia/primer-campeonato.jpg",
        tipo: "logro"
      },
      {
        año: 2020,
        titulo: "Expansión Internacional",
        descripcion: "Primera participación en competencias internacionales en Argentina y Brasil. El equipo demostró que podía competir al más alto nivel regional.",
        imagen: "/historia/internacional.jpg",
        tipo: "expansion"
      },
      {
        año: 2022,
        titulo: "Programa de Desarrollo Junior",
        descripcion: "Lanzamiento del programa para jóvenes talentos, descubriendo y formando a las futuras promesas del automovilismo paraguayo.",
        imagen: "/historia/junior-program.jpg",
        tipo: "desarrollo"
      },
      {
        año: 2023,
        titulo: "Consolidación y Dominio",
        descripcion: "Doblete histórico con Carlos y Ana logrando el 1-2 en el campeonato nacional. AFG Team se consolida como el equipo referente del karting paraguayo.",
        imagen: "/historia/doblete-2023.jpg",
        tipo: "logro"
      }
    ])

    // Fundadores del equipo
    setFundadores([
      {
        nombre: "Fernando Javier Ferreira",
        rol: "Co-Fundador & Director Ejecutivo",
        imagen: "/fundadores/director.png",
        historia: "Empresario y apasionado del automovilismo desde niño. Siempre soñó con crear un equipo paraguayo que compitiera internacionalmente. Su visión estratégica y capacidad de gestión han sido clave para el crecimiento del equipo.",
        frase: "No se trata solo de ganar carreras, se trata de formar campeones."
      },
      {
        nombre: "Fernando Ferreira",
        rol: "Co-Fundador & Director Deportivo",
        imagen: "/fundadores/entrenador.png",
        historia: "Ex-piloto profesional con 16 años de experiencia en competencias internacionales, donde logró mas de 14 victorias. Su carrera, que comenzó en el karting en 2010, le proporcionó un conocimiento técnico invaluable que ahora dedica a formar a las nuevas generaciones de pilotos tras su retirada.",
        frase: "La técnica sin pasión es mecánica, la pasión sin técnica es peligrosa."
      },
      {
        nombre: "Jose Ferreira",
        rol: "Co-Fundador & Director Comercial y Merchandising",
        imagen: "/fundadores/jose4.png",
        historia: "clave en la captación de patrocinios y el desarrollo de líneas de merchandising que han escalado la rentabilidad y presencia de la marca AFG Team.",
        frase: "Cada victoria en la pista es también una victoria de marca."
      },
      {
        nombre: "William arce",
        rol: "Co-Fundador & Director de Tecnologia y Marketing",
        imagen: "/fundadores/william3.png",
        historia: "Especialista en marketing deportivo con foco tecnológico (MBA), arquitecto de la presencia digital y las alianzas estratégicas del AFG Team en el mercado global.",
        frase: "Cada victoria en la pista es también una victoria de marca."
      }
    ])

    // Momentos destacados
    setMomentosDestacados([
      {
        titulo: "La Primera Victoria",
        fecha: "Marzo 2017",
        descripcion: "Primera victoria oficial del equipo en el Autódromo Nacional. Una carrera bajo la lluvia que demostró la capacidad del equipo en condiciones adversas.",
        impacto: "Esta victoria atrajo los primeros patrocinadores importantes."
      },
      {
        titulo: "Debut Internacional",
        fecha: "Octubre 2020",
        descripcion: "Primera participación en el Gran Premio de Buenos Aires. Aunque no terminaron en podio, compitieron de igual a igual con equipos establecidos.",
        impacto: "Demostró que el talento paraguayo podía competir internacionalmente."
      },
      {
        titulo: "Inauguración del Taller Propio",
        fecha: "Junio 2021",
        descripcion: "Apertura del taller técnico completamente equipado en Asunción. Un espacio de 500m² dedicado al desarrollo y mantenimiento de los karts.",
        impacto: "Mejoró significativamente la preparación técnica del equipo."
      },
      {
        titulo: "Alianza con Fabricante Internacional",
        fecha: "Enero 2023",
        descripcion: "Firma de alianza estratégica con un fabricante europeo de chasis de competición.",
        impacto: "Acceso a tecnología de punta y repuestos de alta calidad."
      }
    ])
  }, [])

  return (
    <div className="historia">
      {/* Hero Section */}
      <section className="hero-historia">
        <div className="hero-content">
          <h1 className="hero-title">Nuestra Historia</h1>
          <p className="hero-subtitle">De un sueño a una realidad que compite internacionalmente</p>
          <div className="hero-stats">
            {/* <div className="stat">
              <div className="stat-number">6</div>
              <div className="stat-label">Años de Historia</div>
            </div> */}
            <div className="stat">
              <div className="stat-number">16</div>
              <div className="stat-label">Títulos Nacionales</div>
            </div>
            {/* <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Pilotos Formados</div>
            </div> */}
            <div className="stat">
              <div className="stat-number">35+</div>
              <div className="stat-label">Competencias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      {/* <section className="linea-tiempo">
        <h2 className="section-title">Nuestra Trayectoria</h2>
        <div className="timeline-container">
          {historia.map((evento, index) => (
            <div key={index} className={`timeline-item ${evento.tipo}`}>
              <div className="timeline-year">{evento.año}</div>
              <div className="timeline-content">
                <h3>{evento.titulo}</h3>
                <p>{evento.descripcion}</p>
                <div className="timeline-imagen">
                  <div className="placeholder-historia">📸</div>
                  <p className="imagen-desc">Imagen histórica del equipo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Fundadores */}
      <section className="fundadores">
        <h2 className="section-title">Los Fundadores</h2>
        <p className="section-subtitle">Las mentes detrás del sueño AFG Team</p>
        
        <div className="fundadores-grid">
          {fundadores.map((fundador, index) => (
            <div key={index} className="fundador-card">
              <div className="fundador-img-container">
                {/* Cambia el placeholder por la imagen real */}
                <img 
                  src={fundador.imagen} 
                  alt={fundador.nombre}
                  className="fundador-img"
                  onError={(e) => {
                    // Si la imagen no se carga, muestra el placeholder
                    console.error(`Error cargando imagen: ${fundador.imagen}`);
                    e.target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'placeholder-fundador';
                    placeholder.innerHTML = '👤';
                    e.target.parentElement.appendChild(placeholder);
                  }}
                />
              </div>
              <div className="fundador-info">
                <h3>{fundador.nombre}</h3>
                <p className="fundador-rol">{fundador.rol}</p>
                <p className="fundador-historia">{fundador.historia}</p>
                <div className="fundador-frase">
                  <span className="comillas">"</span>
                  {fundador.frase}
                  <span className="comillas">"</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofía del Equipo */}
      <section className="filosofia">
        <h2 className="section-title">Nuestra Filosofía</h2>
        <div className="filosofia-content">
          <div className="filosofia-texto">
            <h3>Más que un equipo, una familia</h3>
            <p>
              En AFG Team creemos que el éxito en las pistas comienza con valores sólidos fuera de ellas. 
              Nuestra filosofía se basa en tres pilares fundamentales que nos han guiado desde el primer día.
            </p>
          </div>
          <div className="pilares">
            <div className="pilar">
              <div className="pilar-icon">🎯</div>
              <h4>Excelencia Técnica</h4>
              <p>Buscamos la perfección en cada detalle, desde la preparación del kart hasta la estrategia de carrera.</p>
            </div>
            <div className="pilar">
              <div className="pilar-icon">❤️</div>
              <h4>Pasión por el Deporte</h4>
              <p>Amamos lo que hacemos y transmitimos esa pasión a cada nuevo miembro del equipo.</p>
            </div>
            <div className="pilar">
              <div className="pilar-icon">🤝</div>
              <h4>Trabajo en Equipo</h4>
              <p>Creemos que detrás de un gran piloto hay un gran equipo trabajando en armonía.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos Destacados */}
      {/* <section className="momentos-destacados">
        <h2 className="section-title">Momentos que Marcaron Historia</h2>
        <div className="momentos-grid">
          {momentosDestacados.map((momento, index) => (
            <div key={index} className="momento-card">
              <div className="momento-fecha">{momento.fecha}</div>
              <h3>{momento.titulo}</h3>
              <p>{momento.descripcion}</p>
              <div className="momento-impacto">
                <strong>Impacto:</strong> {momento.impacto}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Visión a Futuro */}
      <section className="vision-futuro">
        <div className="vision-content">
          <h2 className="section-title">Mirando al Futuro</h2>
          <div className="vision-grid">
            <div className="vision-item">
              <h3>2027</h3>
              <p>Expansión a categorías superiores de automovilismo nacional.</p>
            </div>
            <div className="vision-item">
              <h3>2028</h3>
              <p>Participación estable en competencias sudamericanas.</p>
            </div>
            <div className="vision-item">
              <h3>2029</h3>
              <p>Formación del primer piloto paraguayo para competencias internacionales profesionales.</p>
            </div>
            <div className="vision-item">
              <h3>2032</h3>
              <p>Ser referente continental en formación de pilotos profesionales.</p>
            </div>
          </div>
        </div>
      </section>

            {/* Galería Histórica */}
        <section className="galeria-historica">
        <h2 className="section-title">Galería Histórica</h2>
        <div className="galeria-grid">
            <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia/javierferreira.jpeg" 
                alt="Monoplaza del director ejecutivo sr. Ferreira (1990)"
                className="galeria-img"
                onError={(e) => {
                    // Si la imagen no existe, muestra un placeholder
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">🏆</div>';
                }}
                />
            </div>
            <p>Monoplaza del director ejecutivo sr. Ferreira (1990)</p>
            </div>
            
            <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia/javierferreira2.jpg" 
                alt="Monoplaza del señor Ferreira (1990)"
                className="galeria-img"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">🚗</div>';
                }}
                />
            </div>
            <p>Monoplaza del señor Ferreira (1990)</p>
            </div>
            
            <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia/ferferreira3.jpeg" 
                alt="Equipo completo temporada 2023"
                className="galeria-img"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">👥</div>';
                }}
                />
            </div>
            <p>Trofeos del piloto principal y entrenador Fernando ferreira </p>
            </div>
            
            <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia/javierferreira1.jpg" 
                alt="Victoria bajo la lluvia (2022)"
                className="galeria-img"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">🏁</div>';
                }}
                />
            </div>
            <p>Preparacion de Kart sr Ferreira (2022)</p>
            </div>
            
            <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia/23.png" 
                alt="Inauguración del taller (2021)"
                className="galeria-img"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">🔧</div>';
                }}
                />
            </div>
            <p>Competencia Fernando Ferreira (2016)</p>
            </div>
            
            {/* <div className="galeria-item">
            <div className="galeria-img-container">
                <img 
                src="/historia-fotos/debut-internacional.jpg" 
                alt="Debut internacional en Argentina (2020)"
                className="galeria-img"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="placeholder-galeria">🌎</div>';
                }}
                />
            </div>
            <p>Debut internacional en Argentina (2020)</p>
            </div> */}
        </div>
        </section>
    </div>
  )
}

export default Historia