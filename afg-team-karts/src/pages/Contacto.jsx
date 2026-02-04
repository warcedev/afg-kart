import { useState } from 'react'
import './Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    motivo: 'general'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      motivo: 'general'
    })
  }

  return (
    <div className="contacto">
      <section className="informacion-contacto">
        <h2 className="section-title">Contáctanos</h2>
        
        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>Teléfono / WhatsApp</h4>
                <p>+595 981 123 456</p>
                <a 
                  href="https://wa.me/595981123456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Enviar mensaje por WhatsApp
                </a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Correo Electrónico</h4>
                <p>contacto@afgteam.com.py</p>
                <p>info@afgteam.com.py</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Ubicación</h4>
                <p>Autódromo Nacional</p>
                <p>Av. del Karting 1234</p>
                <p>Asunción, Paraguay</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">▶️</div>
              <div className="info-content">
                <h4>Canal de YouTube</h4>
                <a 
                  href="https://youtube.com/@afgteam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="youtube-link"
                >
                  youtube.com/@afgteam
                </a>
                <p>Sigue nuestras carreras en vivo y highlights</p>
              </div>
            </div>
            
            <div className="horario-atencion">
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
              <p>Domingos: Solo días de competencia</p>
            </div>
          </div>
          
          <div className="contacto-formulario">
            <h3>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="form-contacto">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="motivo">Motivo de Contacto</label>
                <select
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                >
                  <option value="general">Consulta General</option>
                  <option value="patrocinio">Oportunidades de Patrocinio</option>
                  <option value="pruebas">Pruebas para Pilotos</option>
                  <option value="prensa">Contacto de Prensa</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-enviar">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <section className="mapa-ubicacion">
        <h3 className="section-title">Nuestra Ubicación</h3>
        <div className="mapa-container">
          <div className="mapa-placeholder">
            <div className="mapa-content">
              <div className="mapa-marker">📍</div>
              <p>Autódromo Nacional, Asunción</p>
              <p>Paraguay</p>
            </div>
          </div>
          <div className="mapa-info">
            <h4>Instalaciones AFG Team</h4>
            <ul>
              <li>Taller mecánico completamente equipado</li>
              <li>Sala de reuniones y análisis de datos</li>
              <li>Gimnasio para preparación física</li>
              <li>Área de simulación de carrera</li>
              <li>Estacionamiento para 8 karts</li>
            </ul>
            <p className="visita-info">Las visitas deben ser coordinadas con anticipación.</p>
          </div>
        </div>
      </section>
      
      <section className="redes-sociales">
        <h3 className="section-title">Síguenos en Redes Sociales</h3>
        <div className="redes-grid">
          <a href="#" className="red-social-card instagram">
            <div className="red-social-icon">📷</div>
            <h4>Instagram</h4>
            <p>@afgteam.py</p>
            <p>Fotos y videos detrás de cámaras</p>
          </a>
          
          <a href="#" className="red-social-card facebook">
            <div className="red-social-icon">📘</div>
            <h4>Facebook</h4>
            <p>AFG Team Oficial</p>
            <p>Noticias y actualizaciones</p>
          </a>
          
          <a href="#" className="red-social-card youtube">
            <div className="red-social-icon">▶️</div>
            <h4>YouTube</h4>
            <p>AFG Team Racing</p>
            <p>Carreras completas y highlights</p>
          </a>
          
          <a href="#" className="red-social-card twitter">
            <div className="red-social-icon">🐦</div>
            <h4>Twitter/X</h4>
            <p>@afgteam_racing</p>
            <p>Actualizaciones en tiempo real</p>
          </a>
        </div>
      </section>
      
      <section className="contacto-emergencia">
        <div className="emergencia-content">
          <div className="emergencia-icon">🚨</div>
          <div className="emergencia-info">
            <h4>Contacto de Emergencia (Solo días de competencia)</h4>
            <p>Teléfono: +595 981 999 888</p>
            <p>Disponible solo para urgencias relacionadas con competencias activas.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto