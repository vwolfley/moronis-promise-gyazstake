import React from "react"
import TitleOfLiberty from "../../images/title-of-liberty.jpg"
import CodeOfConduct from "../../docs/Moronis-Promise-Conduct.pdf"

function CodeConductDocuments() {
  return (
    <section className="text-blue-950 body-font bg-blue-50">
      <div className="container px-5 py-12 mx-auto">
        <section className="mb-4">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-wrap items-center">
              <div className="basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src={TitleOfLiberty}
                  alt="Title of Liberty"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-4 text-2xl font-bold">
                    Moroni's Promise Code of Conduct Personal Agreement
                  </h2>

                  <p className="mb-4">
                    All who prepare well (read and study the Book of Mormon), participate fully
                    prior and during activity with a positive attitude, and give of themselves
                    willingly, will gain:
                  </p>
                  <ul className="mb-4 px-6 list-disc list-outside font-semibold">
                    <li>A strengthened testimony of the Savior, Jesus Christ</li>
                    <li>A Strengthened testimony of the Book of Mormon</li>
                    <li>
                      A realization that answers can be found to today’s challenges in the Book of
                      Mormon
                    </li>
                    <li>
                      Strengthened relationships with youth and leaders at the ward and stake levels
                    </li>
                  </ul>
                  <p className="mb-4">
                    Participants at Moroni’s Promise 2024 are expected to follow all standards
                    outlined in the For the Strength of Youth: A Guide for Making Choices.
                  </p>
                  <ol className="list-decimal list-outside font-semibold mb-8 pb-8 px-6">
                    <li>
                      I promise to “fully participate” in the 2024 Goodyear Stake Moroni’s Promise.
                    </li>
                    <li>I commit to attending from Wednesday, June 5th to Saturday, June 8th</li>
                    <li>
                      I accept full responsibility for all risks inherent in this activity and
                      accept full responsibility for my actions under all conditions and commit to
                      act responsibly.
                    </li>
                    <li>I commit to leaving all electronics behind when we start the challenge.</li>
                    <li>
                      I promise to abide by the standards found in “For the Strength of Youth”,
                      including honor, integrity, and abstinence, from alcohol, tobacco and harmful
                      drugs, including all forms of vaping.
                    </li>
                    <li>
                      I accept full responsibility for any medical and related expenses incurred by
                      reason of my participation in this challenge that exceed coverage by
                      insurance.
                    </li>
                    <li>
                      As consideration for my opportunity to participate, I release and hold
                      harmless Goodyear Arizona Stake and their representatives from any and all
                      liability for injury or other claim arising from participation in the
                      Challenge.
                    </li>
                  </ol>
                  <a
                    className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow"
                    href={CodeOfConduct}
                    target="_blank"
                    rel="noreferrer">
                    Code of Conduct
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

export default CodeConductDocuments
