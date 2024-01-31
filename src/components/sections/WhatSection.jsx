import React from "react"
import Temple from "../../images/phoenix-temple-lds.jpg"

function WhatSection() {
  return (
    <section className="text-blue-950 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          What’s is Moroni’s Quest?
          </h1>
          <p className="mb-8 leading-relaxed">
          Moroni’s Quest includes a stake-wide Book of Mormon Reading Challenge and concludes with a 4-day Youth Event in Arizona held June 5-8, 2024. All youth ages 14-18 are invited to participate in this life-changing experience!
          </p>
          <p className="mb-8 leading-relaxed">
          Moroni’s Quest is an immersive four-day experience that invites youth to develop a deeper testimony of the Book of Mormon and build a stronger relationship with Jesus Christ as they listen to King Benjamin preach, serve the Lamanites with Ammon, teach with Alma and Amulek, battle with Mormon and Moroni, and many others. Our faith and testimonies of the Book of Mormon and the Saviour will be strengthened as we experience the Book of Mormon in a brand-new way together. Prepare yourself to come along on this amazing adventure in Summer 2024.
          </p>
         
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="phoenix temple"
            src={Temple}
          />
        </div>
      </div>
    </section>
  )
}

export default WhatSection
