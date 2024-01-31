import React from "react"
import BofMIcon from "../../images/icon-BofM.png"
import LocationIcon from "../../images/icon-map.png"
import FormsIcon from "../../images/icon-forms.png"

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
              Moroni’s Quest Youth Event June 5-8, 2024.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                title="read more">
                {" "}
                Read More »{" "}
              </a>
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
              The 4-day Moroni’s Quest Youth Event will be held in Arizona the National Forest.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                title="read more">
                {" "}
                Read More »{" "}
              </a>
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
              <a
                href="#"
                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                title="read more">
                {" "}
                Read More »{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
