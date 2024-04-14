import React from "react"
import MoroniWriting from "../../images/writing-on-plates.webp"

function CheckListHero() {
  return (
    <section
      className="flex flex-col items-center bg-center bg-no-repeat justify-center bg-cover bg-fixed min-h-64"
      style={{ backgroundImage: `url(${MoroniWriting})` }}>
      <div className="px-4 mx-auto max-w-screen-md lg:max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Checklist Information
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
          Important documents and information for the 2024 Moroni's Promise Youth Conference.
        </p>
        <button className="bg-cyan-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          June 5-8, 2024
        </button>
      </div>
    </section>
  )
}

export default CheckListHero
