import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div style={{ backgroundColor: "#fff" }}>

      {/* TOP NAVBAR */}
      <nav
        className="navbar navbar-expand-lg border-bottom px-3"
        style={{ backgroundColor: "#a435f0" }}
      >
        <h5 className="fw-bold me-3 text-white mb-0">
          TCICS Learning
        </h5>

        <input
          className="form-control me-3 rounded-pill"
          placeholder="Search for anything"
          style={{ maxWidth: "500px" }}
        />

        <div className="ms-auto d-flex gap-3 align-items-center">
          <a className="text-white text-decoration-none" href="#">
            My Learning
          </a>
          <button className="btn btn-light btn-sm">Login</button>
          <button className="btn btn-dark btn-sm">Sign up</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="container-fluid py-5" style={{ background: "#f7f9fa" }}>
        <div className="row align-items-center">
          <div className="col-md-6 px-5">
            <h1 className="fw-bold">Learning that gets you</h1>
            <p className="text-muted">
              Skills for your present and future career growth.
            </p>

            <div className="input-group mt-3">
              <input className="form-control" placeholder="What do you want to learn?" />
              <button className="btn btn-dark">Search</button>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/7c1a2a0a-hero.jpg"
              className="img-fluid"
              style={{ maxHeight: "320px" }}
            />
          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="container py-3">
        <div className="d-flex gap-2 flex-wrap">
          {["Python", "Web Dev", "JavaScript", "Data Science", "AWS"].map(
            (cat) => (
              <span key={cat} className="badge bg-light text-dark border">
                {cat}
              </span>
            )
          )}
        </div>
      </div>

      {/* COURSES */}
      <div className="container py-3">
        <h4 className="fw-bold">Students are viewing</h4>

        <div className="d-flex gap-3 overflow-auto py-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <CourseCard key={item} id={item} />
          ))}
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="container py-3">
        <h4 className="fw-bold">Expand your career opportunities</h4>

        <div className="d-flex gap-3 overflow-auto py-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <CourseCard key={item + 10} id={item + 10} />
          ))}
        </div>
      </div>

    </div>
  );
}

/* =========================
   COURSE CARD WITH HOVER
========================= */
function CourseCard({ id }: { id: number }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="position-relative"
      style={{ minWidth: "220px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* MAIN CARD */}
      <div className="card border-0 shadow-sm">
        <img
          src={`https://picsum.photos/300/160?random=${id}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h6 className="fw-bold">Course Title {id}</h6>
          <p className="text-muted small mb-1">Instructor Name</p>
          <div className="fw-bold">
            ⭐ 4.6 <span className="text-muted">(1200)</span>
          </div>
          <div className="fw-bold">$19.99</div>
        </div>
      </div>

      {/* HOVER PREVIEW (UDemy style popup) */}
      {hover && (
        <div
          className="position-absolute bg-white shadow-lg p-3 rounded-3"
          style={{
            top: "0",
            left: "105%",
            width: "300px",
            zIndex: 999,
            animation: "fadeIn 0.15s ease-in-out",
          }}
        >
          <h6 className="fw-bold mb-1">Figma UI UX Design</h6>

          <span className="badge bg-primary me-1">Bestseller</span>
          <span className="badge bg-success">Premium</span>

          <p className="text-muted small mt-2 mb-1">
            Updated 2026 • 10 hours total
          </p>

          <ul className="small mb-2">
            <li>UX fundamentals</li>
            <li>Figma workflow</li>
            <li>Real project design</li>
          </ul>

          <button className="btn btn-dark w-100">
            Add to cart
          </button>
        </div>
      )}

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}