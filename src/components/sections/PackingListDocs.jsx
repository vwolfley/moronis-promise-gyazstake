import React from "react"
import NephiWife from "../../images/nephi-wife.webp"
import PackingList from "../../docs/Moroni-Promise-Packing-List.pdf"
import CheckBox from "../../images/svg/checkbox-checked.svg"

function PackingListDocs() {
  return (
    <section className="text-blue-950 body-font bg-blue-50">
      <div className="container px-5 py-12 mx-auto">
        <section className="mb-4 flex">
          <div className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <img
                  src={NephiWife}
                  alt="Nephis Wife"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg lg:w-8/12 xl:w-9/12"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-4 text-2xl font-bold">Packing List for Moroni’s Promise</h2>

                  <p className="mb-4">
                    Come dressed in one set of Quest clothing. Bring the following with you on the
                    trip up:
                  </p>
                  <ul className="mb-4 px-6 list-disc list-outside font-semibold">
                    <li>Water bottle</li>
                    <li>
                      Pack or wear shoes that are sturdy enough for hiking over uneven & rough
                      terrain. Good Quality hiking sandals are ideal.
                    </li>
                    <li>
                      Wear Headgear that matches Quest theme. See Costume. It will be most likely
                      very hot and this will help keep you cool. *No ball caps, toques, etc.
                    </li>
                    <li>Satchel - Will be provided</li>
                    <li>Bag with remainder of gear.</li>
                    <li>Bring a Sack Lunch</li>
                  </ul>
                  <p className="mb-4">
                  Your bag could be an appropriate sized hockey bag, camping pack or duffle bag. Try to get all items into one bag if possible. Clearly mark this bag with a tag showing name and ward.
                  </p>
                  <h3 className="mb-4 text-lg font-bold">Clothing & Equipment</h3>
                  <ul className="list-disc list-outside mb-4 px-6">
                    <li>2 sets of Quest clothing. (One to be worn on first day)</li>
                    <li>
                    3 T-shirts (no sleeveless, no neon colors) if costume requires for modesty
                    </li>
                    <li>2 pairs of modest shorts (knee length) to be worn under tunic, especially if outfit is close to knee level, as we do alot of ground sitting.</li>
                    <li>Matching belt for tunic if desired</li>
                    <li>Daily change of underwear and socks</li>
                    <li>Raincoat or poncho</li>
                    <li>Sturdy runners or hiking sandals</li>
                    <li>2nd pair of shoes (optional)</li>
                    <li>Modest pajamas or sweats for sleeping</li>
                    <li>Light jacket (in satchel if needed)</li>
                    <li>Sleeping bag, air mattress and blanket if needed</li>
                    <li>Pillow</li>
                    <li>Toothbrush and toothpaste</li>
                    <li>Wet Wipes (no showers)</li>
                    <li>Deodorant</li>
                    <li>Comb, brush, mirror</li>
                    <li>Sunscreen</li>
                    <li>Flashlight or HeadLamp</li>
                    <li>Insect spray</li>
                    <li>Feminine hygiene products</li>
                    <li>Personal medication (inhalers, allergies etc.)</li>
                    <li>Foldable camp chair (put name on this, it will be used at ward firesides)</li>
                  </ul>
                  <p className="mb-4 pb-4">Please label items, especially water bottle.</p>

                  <p className="mb-4 pb-4 font-semibold">No electronics will be allowed on site!  Please leave them at home.</p>
                  <a
                    className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow"
                    href={PackingList}
                    target="_blank"
                    rel="noreferrer">
                    Print Packing List
                  </a>
                </div>
              </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PackingListDocs
