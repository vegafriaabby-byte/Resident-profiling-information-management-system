"use client"

import { useState } from "react"
import "./SignUpPage.css"

const SignUpPage = ({ setCurrentPage }) => {
  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form-wrapper">
          <h2 className="signup-title">Create Your Account</h2>
          <p className="signup-subtitle">Enter your details below to create a new account.</p>

          <form className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={signupForm.fullName}
                onChange={(e) => setSignupForm({ ...signupForm, fullName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                value={signupForm.email}
                onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={signupForm.password}
                onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={signupForm.confirmPassword}
                onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
              />
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <button type="button" onClick={() => setCurrentPage("login")} className="link-btn">
                Back to Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
