import { useState } from "react";
import "./styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="cyber-wrapper">

      {/* BACKGROUND LAYERS */}
      <div className="cyber-bg" />
      <div className="cyber-grid" />
      <div className="cyber-scanlines" />

      {/* CONTENT */}
      <div className="content-layer">

        {/* NAVBAR */}
        <nav className="cyber-navbar">
          <h5 className="cyber-logo">
            <span className="glitch" data-text="TCICS">TCICS</span>
            <span className="subtitle">_LEARNING</span>
          </h5>

          <div className="search-container">
            <input
              className="cyber-search"
              placeholder="SEARCH THE MATRIX..."
              type="text"
            />
          </div>

          <div className="nav-actions">
            <a className="nav-link" href="#">
              {/* <span className="icon">◉</span> MY LEARNING
            </a>
            <button className="cyber-btn primary">LOGIN</button>
            <button className="cyber-btn secondary">SIGN UP</button> */}
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-content">

            <div className="hero-left">
              <h1 className="hero-title">
                LEARNING THAT<br />
                <span className="glow-text">GETS YOU</span>
              </h1>

              <p className="hero-subtitle">
                Skills for your present and future career growth.
                <br />
                <span className="accent">// Enter the digital realm</span>
              </p>

              <div className="hero-search">
                <input
                  className="hero-input"
                  placeholder="What do you want to learn?"
                />
                <button className="hero-btn">
                  SEARCH →
                </button>
              </div>
            </div>

            <div className="hero-right">
              <div className="hologram-frame">
                <img
                  src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/7c1a2a0a-hero.jpg"
                  className="hero-image"
                  alt="hero"
                />
                <div className="frame-corner tl" />
                <div className="frame-corner tr" />
                <div className="frame-corner bl" />
                <div className="frame-corner br" />
              </div>
            </div>

          </div>
        </section>

        {/* CATEGORY */}
        <section className="category-section">
          <div className="category-grid">
            {["PYTHON", "WEB DEV", "JAVASCRIPT", "DATA SCIENCE", "AWS", "BLOCKCHAIN"].map(
              (cat, i) => (
                <div
                  key={cat}
                  className="cyber-chip"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {cat}
                </div>
              )
            )}
          </div>
        </section>

        {/* COURSES ROW 1 */}
        <section className="courses-section">
          <h4 className="section-title">
            <span className="title-bracket">[</span>
            STUDENTS ARE VIEWING
            <span className="title-bracket">]</span>
            <div className="title-underline" />
          </h4>

          <div className="course-scroll">
            {[1, 2, 3, 4, 5].map((id) => (
              <CyberCourseCard key={id} id={id} />
            ))}
          </div>
        </section>

        {/* COURSES ROW 2 */}
        <section className="courses-section">
          <h4 className="section-title">
            <span className="title-bracket">[</span>
            EXPAND YOUR CAREER
            <span className="title-bracket">]</span>
            <div className="title-underline" />
          </h4>

          <div className="course-scroll">
            {[6, 7, 8, 9, 10].map((id) => (
              <CyberCourseCard key={id} id={id} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

/* ================= COURSE CARD ================= */
function CyberCourseCard({ id }: { id: number }) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="cyber-card-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* CARD */}
      <div className="cyber-course-card">

        <div className="card-image-wrapper">
          <img
            src={`https://picsum.photos/300/160?random=${id}`}
            className="card-image"
            alt={`Course ${id}`}
          />
          <div className="image-overlay" />
        </div>

        <div className="card-content">
          <div className="card-tag">BESTSELLER</div>

          <h6 className="card-title">
            CYBER COURSE #{String(id).padStart(3, "0")}
          </h6>

          <p className="card-instructor">// Instructor_Name</p>

          <div className="card-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-text">4.8 (2.5K)</span>
          </div>

          <div className="card-price">
            <span className="currency">₱</span>19.99
          </div>
        </div>

        <div className="card-glow" />
      </div>

      {/* HOVER */}
      {hover && (
        <div className="hover-preview">
          <h6 className="preview-title">ADVANCED CYBERSECURITY</h6>

          <ul className="preview-features">
            <li>→ Advanced encryption techniques</li>
            <li>→ Network security protocols</li>
            <li>→ Real-world penetration testing</li>
            <li>→ Certification preparation</li>
          </ul>

          <button className="preview-btn">
            ADD TO CART +
          </button>
        </div>
      )}

    </div>
  );
}