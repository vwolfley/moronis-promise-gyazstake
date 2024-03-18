import React from "react"
import Group from "../../images/clothing/mp-costume1.webp"
import Costume1 from "../../images/clothing/mp-costume2.webp"
import Costume2 from "../../images/clothing/mp-costume3.webp"
import Costume3 from "../../images/clothing/mp-costume4.webp"
import Costume4 from "../../images/clothing/mp-costume5.webp"
import Satchel from "../../docs/mp-satchel.pdf"
import Tunic from "../../docs/mp-tunic.pdf"

function WhatSection() {
  return (
    <section className="text-blue-950 body-font">
      <div className="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Dressing Back in Time
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            All youth and leaders participating in the Moroni’s Promise Youth Event will be required
            to dress in period clothing. This includes youth, tribe leaders, camp directors,
            bishops, and any others who visit the camp. Each person attending the event will need
            two outfits and a satchel. Clothing should be simple and inexpensive.
          </p>

          <h2 className="mb-2 text-2xl font-semibold">Keep them simple and Fun!</h2>
          <ul className="space-y-6 list-inside">
            <li className="flex items-center text-xl">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Pick earthy tones (tan, brown, olive green, etc) for colors. The costumes will get
              dirty! Avoid bright & neon colors. Basic stripes are ok.
            </li>
            <li className="flex items-center text-xl">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Think simple for your fabrics!
            </li>
            <li className="flex items-center text-xl">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Use fabric markers & paint to create patterns or borders on the edge of the tunic to
              add individual touches.
            </li>
            <li className="flex items-center text-xl">
              <svg
                className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              A basic costume is a two-sided tunic with a triangle neck cut out.
            </li>
          </ul>

          <p className="mb-8 leading-relaxed"></p>
        </div>
        <div className="lg:max-w-lg lg:w-full w-5/6">
          <img className="rounded" alt="" src={Costume1} />
        </div>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col pt-4 pb-8 px-8 justify-center gap-4">
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          <a href={Satchel} target="_blank" rel="noreferrer">
            Download Satchel Instructions
          </a>
        </button>
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          <a href={Tunic} target="_blank" rel="noreferrer">
            Download Tunic Instructions
          </a>
        </button>
      </div>
    </section>
  )
}

export default WhatSection
