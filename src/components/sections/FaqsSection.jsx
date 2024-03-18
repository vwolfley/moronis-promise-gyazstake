import React from "react"
import { FaRegQuestionCircle } from "react-icons/fa"
import MoroniTravels from "../../images/moroni_travels.webp"

function FaqsSection() {
  return (
    <section className="bg-white text-blue-950">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="w-full space-y-12 lg:w-1/2 ">
            <div>
              <h1 className="text-2xl font-semibold lg:text-3xl ">Frequently asked questions</h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
              </div>
            </div>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize ">
                  Where is Moroni’s Promise being held?
                </h1>
                <p className="mt-3 text-slate-500 ">The event is being held in Show Low Arizona.</p>
              </div>
            </section>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semiboldcapitalize ">Do I need to register?</h1>
                <p className="mt-3 text-slate-500 ">
                  Yes, all youth and adults need to register. Registration forms are on the website:
                </p>
                <p className="mt-3 text-slate-500 ">
                  The Medical forms need to be filled out, printed, signed and turned into your Camp
                  Director. Please include allergies on the form.
                </p>
              </div>
            </section>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize ">What do I wear?</h1>

                <p className="mt-3 text-slate-500 ">
                  A packing list is on the website and you will be provided two Tunics to wear over
                  your clothes. More details are on the website under “clothing.”
                </p>
              </div>
            </section>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize ">Do I need to bring food?</h1>

                <p className="mt-3 text-slate-500 ">
                  If you have allergies other than gluten free, you will need to provide your own
                  meals, otherwise all meals will be provided. A menu with a list of ingredients
                  will be posted on the website, so check back. Youth need a water bottle and may
                  bring snacks if desired. Youth will need to bring a sack lunch for the first day.
                </p>
              </div>
            </section>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize ">Will I be camping?</h1>

                <p className="mt-3 text-slate-500 ">
                Yes. Prepare to bring a tent and sleeping bag. You may buddy up with another youth.
                </p>
              </div>
            </section>

            <section className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-yellow-300 bg-blue-900 rounded-xl md:mx-4">
                <FaRegQuestionCircle size="1.5em" />
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-xl font-semibold capitalize ">Will there be showers and restrooms?</h1>

                <p className="mt-3 text-slate-500 ">
                Hand washing stations will be provided for personal hygiene needs, and hair washing if needed. Port-a-Potty’s will be provided.
                </p>
              </div>
            </section>


          </div>

          <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src={MoroniTravels}
              alt="Moroni Travels"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-200 " />
      </div>
    </section>
  )
}

export default FaqsSection
