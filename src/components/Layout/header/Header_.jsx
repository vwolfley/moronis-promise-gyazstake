import React, { useState } from "react"
import MoroniLogo from "../../../images/moroni-small.png"

function Header() {
  // State to manage the navbar's visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Toggle function to handle the navbar's display
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-6">
      <div className="flex items-center flex-shrink-0 text-blue-50 mr-6">
        <img src={MoroniLogo} alt="Moroni's Quest Logo" className="h-auto w-8" />
        <span className="font-semibold text-4xl tracking-tight">Moroni's Quest</span>
      </div>
      <div className="block lg:hidden">
        <button
          id="hamburger-button"
          type="button"
          onClick={toggleMobileMenu}
          aria-controls="navbar-mobile-menu"
          aria-expanded="false"
          className="flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm font-bold lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Checklist
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Calendar
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Location
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Reading Challenge
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Clothing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400 mr-4">
            Important Info
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-50 hover:text-yellow-400">
            FAQ's
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  )
}

export default Header
