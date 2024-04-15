import React, { useState } from "react"
import { NavLink, useMatch } from "react-router-dom"
import MoroniLogo from "../../../images/moroni-small.png"
import NavLinks from "./Links"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const links = NavLinks()

  return (
    <header className="sticky top-0 z-10 flex h-24 bg-blue-900 text-blue-50">
      <section className="flex items-center p-6 flex-1 justify-between">
        <div className="flex flex-row items-center gap-1 flex-shrink-0">
          <img className="h-auto w-8" src={MoroniLogo} alt="Moroni Logo" />
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl tracking-tight">Moroni's Promise</h1>
        </div>
        <div className="flex">
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
            onClick={toggleMobileMenu}>
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-yellow-400 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-yellow-400 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-yellow-400 after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav id="nav-menu" className="hidden space-x-2 text-xl w-full md:block lg:flex lg:items-center lg:w-auto" aria-label="nav-menu">
            <ul className="mt-0 flex flex-row items-center justify-center p-2 text-sm font-semibold md:space-x-2 lg:space-x-3 text-nowrap">
              {links.map((link, index) => {
                const match = useMatch(link.link)
                return (
                  <li key={index} className="text-center">
                    <NavLink
                      id={link.id}
                      to={link.link}
                      target={link.internal ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="flex rounded p-0 py-2 hover:text-yellow-400">
                      {link.name}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "animate-open-menu" : "hidden"
        } fixed w-48 top-0 mt-16 right-0 flex-col bg-blue-900 text-lg text-blue-50 md:hidden`}>
        <nav className="flex flex-col px-4 py-6" aria-label="mobile-menu">
          {links.map((link, index) => {
            return (
              <NavLink
                id={link.id}
                key={index}
                to={link.link}
                target={link.internal ? "_self" : "_blank"}
                rel="noreferrer"
                className="block rounded p-0 py-2 hover:text-yellow-400">
                {link.name}
              </NavLink>
            )
          })}
        </nav>
      </section>
    </header>
  )
}
