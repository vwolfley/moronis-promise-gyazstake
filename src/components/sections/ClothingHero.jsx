import React from "react"
import ClothingNephites from "../../images/nephites-clothing.webp"


function ClothingHero() {
  return (
    <section
      className="flex flex-col items-center bg-center bg-no-repeat justify-center bg-cover bg-fixed min-h-64"
      style={{ backgroundImage: `url(${ClothingNephites})` }}>
      <div className="px-4 mx-auto max-w-screen-md lg:max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Moroni's Promise Clothing Guidelines
        </h1>
        <p className="mb-8 text-lg font-normal text-blue-50 lg:text-xl sm:px-16 lg:px-48">
        Join us dressing back in time!
        </p>
      </div>
    </section>
  )
}

export default ClothingHero
