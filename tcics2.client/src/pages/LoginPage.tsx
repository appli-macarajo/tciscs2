import { useState, useEffect } from "react";
import { API_URL } from "../config/api";
import "./styles/LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
  const numBars = 50;

  // 🔥 React version of animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % numBars);
    }, 100);

    return () => clearInterval(interval);
  }, [numBars]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

   try {
  // ⏳ 3-second delay (simulate loading)
  await delay(3000);

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();
  console.log("Login success:", data);

  onLogin();
} catch (err: any) {
  setError(err.message);
} finally {
  setLoading(false);
}
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-container">
        
        {/* Animated Bars */}
        <div className="circle-container">
          {[...Array(numBars)].map((_, i) => (
            <div
              key={i}
              className={`bar ${i === activeIndex ? "active" : ""}`}
              style={{
                transform: `rotate(${(360 / numBars) * i}deg) translateY(-170px)`
              }}
            />
          ))}
        </div>

        {/* Login Box */}
        <div className="login-box">
          <h2 className="login-title neon-text">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group-custom">
              <input
                type="text"
                name="username"
                required
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
              />
              <span className="input-icon">👤</span>
            </div>

            <div className="input-group-custom">
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <span className="input-icon">🔒</span>
            </div>

            {error && <div className="text-danger text-center mb-2">{error}</div>}

            <button 
            type="submit"
  className="login-btn-custom"
  disabled={loading}>
    {loading ? "Signing In" : "Login"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}