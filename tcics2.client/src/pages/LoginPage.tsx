import React, { useState } from "react";
import { API_URL } from "../config/api";
import "bootstrap/dist/css/bootstrap.min.css";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage({
  onLogin,
}: {
  onLogin: () => void;
}) {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      console.log("Login success:", data);

      // ✅ IMPORTANT: trigger React login state instead of redirect
      onLogin();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold">Welcome Back</h3>
          <p className="text-muted">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-100"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p
          className="text-center text-muted mt-3 mb-0"
          style={{ fontSize: "0.85rem" }}
        >
          © 2026 TCICS System
        </p>
      </div>
    </div>
  );
}