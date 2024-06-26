import React from "react"
import { Link } from "react-router-dom"
import BofMIcon from "../../images/icon-BofM.webp"
import LocationIcon from "../../images/icon-map.webp"
import FormsIcon from "../../images/icon-forms.webp"

function InfoSection() {
  return (
    <section className="bg-stone-100">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl text-blue-950 ">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <img
              className="object-cover object-center w-auto mb-8 lg:h-48 md:h-36 rounded-xl"
              src={BofMIcon}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl">
              Reading Challenge
            </h1>
            <p className="mx-auto text-base leading-relaxed">
              The whole family can participate in the Book of Mormon Reading Challenge leading up to
              Moroni’s Promise Youth Event June 5-8, 2024.
            </p>
            <div className="mt-4">
              <Link to="/reading-challenge" relative="path" className="inline-flex items-center mt-4 font-semibold text-blue-800 lg:mb-0 hover:text-neutral-600">
              Read More »
              </Link>
            </div>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-auto mb-8 lg:h-48 md:h-36 rounded-xl"
              src={LocationIcon}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl">
              Youth Event Location
            </h1>
            <p className="mx-auto text-base leading-relaxed">
              The 4-day Moroni’s Promise Youth Event will be held in Arizona the National Forest.
            </p>
            <div className="mt-4">
            <Link to="#" relative="path" className="inline-flex items-center mt-4 font-semibold text-blue-800 lg:mb-0 hover:text-neutral-600">
              Read More »
              </Link>
            </div>
          </div>
          <div className="p-6">
            <img
              className="object-cover object-center w-auto mb-8 lg:h-48 md:h-36 rounded-xl"
              src={FormsIcon}
              alt="blog"
            />
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl">
              Important Information
            </h1>
            <p className="mx-auto text-base leading-relaxed">
              Download all the latest versions of the forms and information to stay on track.
            </p>
            <div className="mt-4">
            <Link to="/Checklist" relative="path" className="inline-flex items-center mt-4 font-semibold text-blue-800 lg:mb-0 hover:text-neutral-600">
              Read More »
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
