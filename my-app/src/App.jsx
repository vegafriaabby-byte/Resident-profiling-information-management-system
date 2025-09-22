"use client"

import { useState } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import DirectoryPage from "./components/DirectoryPage"
import ProfilePage from "./components/ProfilePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedResident, setSelectedResident] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "residents":
        return <DirectoryPage setCurrentPage={setCurrentPage} setSelectedResident={setSelectedResident} />
      case "about":
        return <AboutPage />
      case "contact":
        return <ContactPage />
      case "profile":
        return <ProfilePage resident={selectedResident} />
      case "login":
        return <LoginPage setCurrentPage={setCurrentPage} />
      case "signup":
        return <SignUpPage setCurrentPage={setCurrentPage} />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
