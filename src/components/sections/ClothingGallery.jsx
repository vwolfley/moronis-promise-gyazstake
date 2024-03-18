import React from "react"
import Costume1 from "../../images/clothing/mp-costume1.webp"
import Costume7 from "../../images/clothing/mp-clothing-group.webp"


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
      
      </div>
    </section>
  )
}

export default ClothingGallery
