import { useEffect, useRef, useState } from "react";
import "./App.css";

const base = import.meta.env.BASE_URL;

function App() {
  const [entrando, setEntrando] = useState(false);
  const [mostrarEntrada, setMostrarEntrada] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("page-ready");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const entrar = async () => {
    const audio = audioRef.current;

    if (audio) {
      try {
        audio.volume = 0.65;
        await audio.play();
      } catch (error) {
        console.log("La reproducción automática fue bloqueada:", error);
      }
    }

    setEntrando(true);

    setTimeout(() => {
      setMostrarEntrada(false);
    }, 900);
  };

  return (
    <div className="site" id="top">

      {/* =====================================================
          MÚSICA
      ===================================================== */}

      <audio
        ref={audioRef}
        id="background-music"
        src={`${base}musica.mp3`}
        loop
        preload="metadata"
      />

      {/* =====================================================
          PANTALLA DE ENTRADA
      ===================================================== */}

      {mostrarEntrada && (
        <div
          className={`intro-screen ${
            entrando ? "intro-exit" : ""
          }`}
          aria-label="Pantalla de bienvenida"
        >
          <div className="intro-noise" />

          <div className="intro-grid" />

          <div className="intro-background-glow intro-glow-one" />
          <div className="intro-background-glow intro-glow-two" />

          <div className="intro-light-line intro-light-line-one" />
          <div className="intro-light-line intro-light-line-two" />

          <div className="intro-content">

            <div className="intro-overline">
              <span />
              DIGITAL EXPERIENCE
              <span />
            </div>

            {/* ORBE */}

            <div className="loading-orb">

              <div className="orb-halo halo-one" />
              <div className="orb-halo halo-two" />

              <div className="orb-ring ring-one" />
              <div className="orb-ring ring-two" />
              <div className="orb-ring ring-three" />

              <div className="orb-energy energy-one" />
              <div className="orb-energy energy-two" />

              <div className="orb-core">
                <div className="orb-core-inner" />
              </div>

              <div className="orb-particle particle-one" />
              <div className="orb-particle particle-two" />
              <div className="orb-particle particle-three" />
              <div className="orb-particle particle-four" />
              <div className="orb-particle particle-five" />

            </div>

            <div className="intro-brand">
              <strong>JUNIOR</strong>
              <span>CREATIVE DIGITAL SPACE</span>
            </div>

            <button
              type="button"
              className="enter-button"
              onClick={entrar}
              aria-label="Entrar al portafolio"
            >
              <span>CONTINUAR</span>

              <span className="enter-arrow">
                →
              </span>
            </button>

            <div className="intro-footer">
              <span>DESIGN</span>
              <i />
              <span>CODE</span>
              <i />
              <span>CREATE</span>
            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          FONDO PRINCIPAL
      ===================================================== */}

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div className="background-grid" />

      <div className="ambient-light ambient-one" />
      <div className="ambient-light ambient-two" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="top-header">

        <a
          href="#top"
          className="brand"
          aria-label="Volver al inicio"
        >
          <img
            src={`${base}logo.png`}
            alt="Junior"
            className="brand-logo"
            width="35"
            height="35"
            fetchPriority="high"
          />

          <span className="brand-name">
            JUNIOR
          </span>
        </a>

        <div className="header-line" />

        <span className="header-status">
          DIGITAL CREATOR
        </span>

        <div className="header-indicator">
          <span />
          AVAILABLE
        </div>

      </header>

      <main className="container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          <div className="hero-left">

            <div className="eyebrow">
              <span className="status-dot" />
              MI ESPACIO DIGITAL
            </div>

            <div className="hero-title-wrap">

              <span className="hero-small-label">
                PORTFOLIO / 2026
              </span>

              <h1>
                <span>Junior</span>
                <em>dev.</em>
              </h1>

            </div>

            <div className="hero-divider">
              <span />
            </div>

            <p className="hero-description">
              Creo experiencias digitales y desarrollo proyectos
              pensados para convertir ideas en algo especial,
              moderno y memorable.
            </p>

            <div className="hero-meta">

              <span>DISEÑO</span>

              <span className="meta-dot" />

              <span>DESARROLLO</span>

              <span className="meta-dot" />

              <span>EXPERIENCIAS DIGITALES</span>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-number">
              01
            </div>

            <div className="hero-cross cross-one" />
            <div className="hero-cross cross-two" />

            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="logo-aura" />

            <div className="logo-frame">

              <div className="frame-corner corner-one" />
              <div className="frame-corner corner-two" />
              <div className="frame-corner corner-three" />
              <div className="frame-corner corner-four" />

              <img
                src={`${base}logo-grande.png`}
                alt="Logo Junior"
                className="hero-logo"
                width="330"
                height="330"
              />

            </div>

            <div className="hero-caption">
              <span>JUNIOR</span>
              <i />
              <span>DIGITAL CREATOR</span>
            </div>

          </div>

        </section>

        {/* =====================================================
            REDES
        ===================================================== */}

        <section
          className="social-section"
          id="redes"
        >

          <div className="section-top">

            <div className="section-marker">
              02
            </div>

            <div>

              <span className="section-label">
                CONECTA CONMIGO
              </span>

              <h2>
                Mis redes
              </h2>

            </div>

          </div>

          <div className="social-grid">

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/juniorx_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card instagram-card"
            >

              <div className="social-card-glow" />

              <div className="social-icon">

                <svg viewBox="0 0 24 24" aria-hidden="true">

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                  />

                </svg>

              </div>

              <div className="social-info">

                <span>
                  INSTAGRAM
                </span>

                <strong>
                  @juniorx_dev
                </strong>

                <small>
                  Ver perfil
                </small>

              </div>

              <span className="social-arrow">
                ↗
              </span>

            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/51955226777"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card whatsapp-card"
            >

              <div className="social-card-glow" />

              <div className="social-icon">

                <svg viewBox="0 0 24 24" aria-hidden="true">

                  <path
                    d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-3.6A8.5 8.5 0 1 1 20.5 11.5Z"
                  />

                  <path
                    d="M8.7 8.3c.2-.4.4-.4.7.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.4-.2-2.8-.9-4-2.1-1.2-1.2-1.9-2.6-2.1-4-.1-.5.1-1.1.4-1.5Z"
                  />

                </svg>

              </div>

              <div className="social-info">

                <span>
                  WHATSAPP
                </span>

                <strong>
                  Escríbeme directamente
                </strong>

                <small>
                  Contactar ahora
                </small>

              </div>

              <span className="social-arrow">
                ↗
              </span>

            </a>

          </div>

        </section>

        {/* =====================================================
            CREACIONES
        ===================================================== */}

        <section
          className="creations-section"
          id="creaciones"
        >

          <div className="section-intro">

            <div className="section-top">

              <div className="section-marker">
                03
              </div>

              <div>

                <span className="section-label">
                  PORTAFOLIO
                </span>

                <h2>
                  Mis creaciones
                </h2>

                <p className="section-description">
                  Una selección de experiencias digitales
                  creadas con diseño, código y creatividad.
                </p>

              </div>

            </div>

            <div className="section-count">
              02 PROYECTOS
            </div>

          </div>

          <div className="creations-grid">

            {/* =================================================
                PROYECTO 01
            ================================================= */}

            <article className="creation-card project-sayu">

              <div className="creation-card-top">

                <span>
                  PROJECT / 01
                </span>

                <span>
                  2026
                </span>

              </div>

              <div className="creation-image">

                <img
                  src={`${base}creaciones/para-sayu.jpg`}
                  alt="Proyecto Para Sayu"
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="600"
                />

                <div className="image-shade" />

                <div className="image-glow" />

                <span className="creation-index">
                  01
                </span>

                <span className="image-label">
                  EXPERIENCIA DIGITAL
                </span>

                <span className="image-status">
                  ● ONLINE
                </span>

              </div>

              <div className="creation-content">

                <div className="creation-heading">

                  <span className="creation-category">
                    DEDICATORIA
                  </span>

                  <h3>
                    Dedicatoria para alguien especial
                  </h3>

                  <p>
                    Dedicatoria personalizable para tu
                    persona favorita, parejas, amigos, etc.
                  </p>

                </div>

                <a
                  href="https://capilloisaias-max.github.io/galaxia-sayu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creation-button"
                >

                  <span>
                    Ver creación
                  </span>

                  <span className="button-arrow">
                    ↗
                  </span>

                </a>

              </div>

            </article>

            {/* =================================================
                PROYECTO 02
            ================================================= */}

            <article className="creation-card project-bot">

              <div className="creation-card-top">

                <span>
                  PROJECT / 02
                </span>

                <span>
                  2026
                </span>

              </div>

              <div className="creation-image">

                <img
                  src={`${base}creaciones/creacion-3.jpg`}
                  alt="Bot Junior Pro"
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="600"
                />

                <div className="image-shade" />

                <div className="image-glow" />

                <span className="creation-index">
                  02
                </span>

                <span className="image-label">
                  SERVICIO DIGITAL
                </span>

                <span className="image-status">
                  ● ACTIVE
                </span>

              </div>

              <div className="creation-content">

                <div className="creation-heading">

                  <span className="creation-category">
                    SERVICIO
                  </span>

                  <h3>
                    BOT JUNIOR PRO ADMINISTRA
                  </h3>

                  <p>
                    Administra tu grupo de WhatsApp con
                    Bot Junior Pro mediante comandos.
                  </p>

                </div>

                <a
                  href="https://wa.me/51955226777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creation-button"
                >

                  <span>
                    Contáctame
                  </span>

                  <span className="button-arrow">
                    ↗
                  </span>

                </a>

              </div>

            </article>

          </div>

        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer>

          <div className="footer-main">

            <a
              href="#top"
              className="footer-brand"
            >

              <img
                src={`${base}logo.png`}
                alt="Junior"
                width="34"
                height="34"
                loading="lazy"
              />

              <div>

                <strong>
                  JUNIOR
                </strong>

                <span>
                  Creaciones digitales
                </span>

              </div>

            </a>

            <div className="footer-socials">

              <a
                href="https://www.instagram.com/juniorx_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/51955226777"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 Junior
            </span>

            <span>
              DIGITAL CREATOR
            </span>

          </div>

        </footer>

      </main>

    </div>
  );
}

export default App;