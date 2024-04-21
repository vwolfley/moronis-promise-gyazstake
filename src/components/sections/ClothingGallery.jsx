import React from "react"
import Costume1 from "../../images/clothing/mp-costume1.webp"
import Costume7 from "../../images/clothing/mp-clothing-group.webp"
import Costume2 from "../../images/clothing/mp-group1.webp"
import Costume3 from "../../images/clothing/tunics.webp"

function ClothingGallery() {
  return (
    <section className="text-blue-950 body-font border-t container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={Costume1}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={Costume7}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block w-full rounded-lg object-cover object-center"
              src={Costume2}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
          <iframe className="block w-full h-full rounded-lg object-cover object-center" src="https://www.youtube.com/embed/YKTf1EJ5M5k?si=7DfbVzSQcU_nxnma" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClothingGallery
