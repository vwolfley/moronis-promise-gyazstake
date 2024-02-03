import React from "react"
import ReadingChallenge from "../../images/reading-challenge.webp"
import ReadingChallengeDoc from "../../docs/moronis-promise-reading-challenge.png"

function ReadingHero() {
  return (
    <section
      className="flex flex-col items-center bg-center bg-no-repeat justify-center bg-cover bg-fixed min-h-64"
      style={{ backgroundImage: `url(${ReadingChallenge})` }}>
      <div className="px-4 mx-auto max-w-screen-md lg:max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Reading Challenge
        </h1>
        <p className="mb-8 text-lg font-normal text-blue-50 lg:text-xl sm:px-16 lg:px-48">
        Join us for the Book of Mormon Reading Challenge!
        </p>
        <h3 className="mb-1 mt-6 text-xl font-bold text-blue-50">Print the reading schedule here!</h3>
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
        <a
            href={ReadingChallengeDoc}
            target="_blank"
            rel="noreferrer">
            Reading Schedule
          </a>
        </button>
        
      </div>
    </section>
  )
}

export default ReadingHero
