import React from "react"
import BofMrap from "../../images/eventPhotos/bookofmormon-rap.mp3"
import TowerPic from "../../images/eventPhotos/IMG_3011.jpg"

function AudioSection() {
  return (
    <section className="bg-white text-blue-950">
      <div className="container flex px-6 py-10 mx-auto justify-center">
        <div className="bg-blue-100 w-full max-w-[768px] flex justify-start items-center p-8 relative max-h-40 shadow-sm rounded-md">
          <img
            src={TowerPic}
            className="rounded-xl w-32"
          />
          <div className="flex flex-col">
          <p className="pl-9 text-2xl font-semibold grow">
            Book of Mormon Camp Rap
            <br />
            <span className="text-lg font-normal">Jaxson Garvery & Cy Buchburger</span>
          </p>
          <audio controls className="w-full mt-4 pl-9">
            <source src={BofMrap} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          </div>
          
        </div>
      </div>
    </section>
  )
}
export default AudioSection
