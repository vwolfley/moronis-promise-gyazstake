import React from "react"
import Liahona from "../../images/liahona.webp"
import PhotoReleaseDoc from "../../docs/photo-participant-release.pdf"

function PhotoRelease() {
  return (
    <section className="text-blue-950 body-font border-t bg-blue-50">
      <div className="container px-5 py-12 mx-auto">
        <section className="text-center md:text-left">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
                <img
                  src={Liahona}
                  alt="Liahona"
                  className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-3xl font-bold">Photo Release Form</h2>
                  <p className="mb-6 pb-">
                    All participants should fill out and sign this form before they participate in the
                    activity. By signing the photo release form, participants and their guardians acknowledge and agree to the use of their images and videos in accordance with church policies.
                  </p>

                  <a
                    className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow"
                    href={PhotoReleaseDoc}
                    target="_blank"
                    rel="noreferrer">
                    Photo Release Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PhotoRelease
