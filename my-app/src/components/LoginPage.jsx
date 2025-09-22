"use client"

import { useState } from "react"
import "./LoginPage.css"

const LoginPage = ({ setCurrentPage }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-wrapper">
          <h2 className="login-title">Login to ResidentConnect</h2>
          <p className="login-subtitle">Enter your credentials to access your account.</p>

          <form className="login-form">
            <div className="form-group">
              <label>Email or Username</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="signup-link">
              Don't have an account?{" "}
              <button type="button" onClick={() => setCurrentPage("signup")} className="link-btn">
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
