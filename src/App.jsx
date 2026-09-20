import { useState } from "react";
import "./App.css";

function App() {
  const [entrando, setEntrando] = useState(false);
  const [mostrarEntrada, setMostrarEntrada] = useState(true);

  const entrar = () => {
    const audio = document.getElementById("background-music");

    if (audio) {
      audio.volume = 1;

      audio.play().catch((error) => {
        console.log("No se pudo iniciar la música:", error);
      });
    }

    setEntrando(true);

    setTimeout(() => {
      setMostrarEntrada(false);
    }, 900);
  };

  return (
    <div className="site">

      {/* =====================================================
          MÚSICA
      ===================================================== */}

      <audio
        id="background-music"
        src="/musica.mp3"
        loop
        preload="auto"
      />

      {/* =====================================================
          PANTALLA INICIAL
      ===================================================== */}

      {mostrarEntrada && (
        <div className={`intro-screen ${entrando ? "intro-exit" : ""}`}>

          <div className="intro-background-glow intro-glow-one"></div>
          <div className="intro-background-glow intro-glow-two"></div>

          <div className="intro-grid"></div>

          <div className="intro-content">

            {/* CÍRCULO ANIMADO */}

            <div className="loading-orb">

              <div className="orb-ring ring-one"></div>

              <div className="orb-ring ring-two"></div>

              <div className="orb-ring ring-three"></div>

              <div className="orb-core"></div>

              <div className="orb-particle particle-one"></div>
              <div className="orb-particle particle-two"></div>
              <div className="orb-particle particle-three"></div>

            </div>

            {/* BOTÓN */}

            <button
              className="enter-button"
              onClick={entrar}
            >
              <span>
                CONTINUAR
              </span>

              <div className="enter-arrow">
                →
              </div>
            </button>

          </div>

        </div>
      )}

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>
      <div className="background-grid"></div>

      {/* =====================================================
          LOGO SUPERIOR
      ===================================================== */}

      <header className="top-header">

        <a href="/" className="brand">

          <img
            src="/logo.png"
            alt="Junior"
            className="brand-logo"
          />

          <span className="brand-name">
            JUNIOR
          </span>

        </a>

        <div className="header-line"></div>

        <span className="header-status">
          DIGITAL CREATOR
        </span>

      </header>

      <main className="container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">

          <div className="hero-left">

            <div className="eyebrow">
              <span className="status-dot"></span>
              MI ESPACIO DIGITAL
            </div>

            <h1>
              <span>Junior dev.</span>
            </h1>

            <div className="hero-divider"></div>

            <p className="hero-description">
              Creo experiencias digitales y desarrollo proyectos
              pensados para convertir ideas en algo especial,
              moderno y memorable.
            </p>

            <div className="hero-meta">

              <span>DISEÑO</span>

              <span className="meta-dot"></span>

              <span>DESARROLLO</span>

              <span className="meta-dot"></span>

              <span>EXPERIENCIAS DIGITALES</span>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-number">
              01
            </div>

            <div className="hero-orbit orbit-one"></div>
            <div className="hero-orbit orbit-two"></div>

            <div className="logo-aura"></div>

            <img
              src="/logo-grande.png"
              alt="Logo Junior"
              className="hero-logo"
            />

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
              className="social-card"
            >

              <div className="social-icon">

                <svg viewBox="0 0 24 24">

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
              className="social-card"
            >

              <div className="social-icon">

                <svg viewBox="0 0 24 24">

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
                  Algunas experiencias digitales que he creado.
                </p>

              </div>

            </div>

            <div className="section-count">
              04 PROYECTOS
            </div>

          </div>

          <div className="creations-grid">

            {/* =================================================
                PROYECTO 01
            ================================================= */}

            <article className="creation-card">

              <div className="creation-image">

                <img
                  src="/creaciones/para-sayu.jpg"
                  alt="Para sayu"
                />

                <div className="image-shade"></div>

                <span className="creation-index">
                  01
                </span>

                <span className="image-label">
                  EXPERIENCIA DIGITAL
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
                    Dedicatoria personalisable para tu
                    persona favorita , parejas , amigos ,etc.
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
                CONTACTO 02
            ================================================= */}

            <article className="creation-card contact-card">

              <div className="creation-image">

                <img
                  src="/creaciones/creacion-2.jpg"
                  alt="Contáctame"
                />

                <div className="image-shade"></div>

                <span className="creation-index">
                  02
                </span>

                <span className="image-label">
                  SERVICIO DIGITAL
                </span>

              </div>

              <div className="creation-content">

                <div className="creation-heading">

                  <span className="creation-category">
                    ESPIONAJE
                  </span>

                  <h3>
                    Podrás obtener toda la galería de su dispositivo.
                  </h3>

                  <p>
                    ¿Quieres obtener fotos y videos de la galería de tu amiga , novio sin que se entere ?
                    Escríbeme directamente por WhatsApp.
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
            {/* =================================================
    CONTACTO 03
================================================= */}

<article className="creation-card contact-card">

  <div className="creation-image">

    <img
      src="/creaciones/creacion-3.jpg"
      alt="Contáctame"
    />

    <div className="image-shade"></div>

    <span className="creation-index">
      03
    </span>

    <span className="image-label">
      SERVICIO DIGITAL
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
        bot junior pro con tan solo comandos.
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
{/* =================================================
    CONTACTO 04
================================================= */}

<article className="creation-card contact-card">

  <div className="creation-image">

    <img
      src="/creaciones/creacion-4.jpg"
      alt="Contáctame"
    />

    <div className="image-shade"></div>

    <span className="creation-index">
      04
    </span>

    <span className="image-label">
      SERVICIO DIGITAL
    </span>

  </div>

  <div className="creation-content">

    <div className="creation-heading">

      <span className="creation-category">
        SERVICIO
      </span>

      <h3>
        CAPTURA FOTO EN TIEMPO REAL
      </h3>

      <p>
        Quieres obtener foto de su rostro de alguien en tiempo real?
        esto es posible mediante mi enlace que te brindare para mas informacion contactame
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

            <div className="footer-brand">

              <img
                src="/logo.png"
                alt="Junior"
              />

              <div>

                <strong>
                  JUNIOR
                </strong>

                <span>
                  Creaciones digitales
                </span>

              </div>

            </div>

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