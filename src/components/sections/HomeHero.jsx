import React from "react"
import MormonMoroni from "../../images/mormon-moroni.png"

function HomeHero() {
  return (
    <section
      className="flex flex-col items-center bg-center bg-no-repeat justify-center bg-cover bg-fixed min-h-64"
      style={{ backgroundImage: `url(${MormonMoroni})` }}>
      <div className="px-4 mx-auto max-w-screen-md lg:max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Moroni’s Promise
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
          Relive adventures from the Book of Mormon and forge lasting friendships through exciting
          tribe activities, immersive re-enactments, and inspired self-discovery.
        </p>
        <button class="bg-cyan-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          June 5-8, 2024
        </button>
      </div>
    </section>
  )
}

export default HomeHero
