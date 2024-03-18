import React from "react"
import Group from "../../images/clothing/mp-costume1.webp"
import Costume2 from "../../images/clothing/mp-costume2.webp"
import Costume3 from "../../images/clothing/mp-costume3.webp"
import Costume4 from "../../images/clothing/mp-costume4.webp"
import Costume5 from "../../images/clothing/mp-costume5.webp"
import Costume6 from "../../images/clothing/mp-costume6.webp"
import CheckMarkSVG from "../Buttons/checkmark-svg"
import Satchel from "../../docs/mp-satchel.pdf"
import Tunic from "../../docs/mp-tunic.pdf"

function ClothingOverview() {
  return (
    <section className="text-blue-950 body-font">
      <div className="container mx-auto flex px-5 pt-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Costume requirements for Moroni’s Promise
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Please review the Moroni’s Promise Clothing Guidelines for more details and ideas.
            Attendees may work with their Ward Clothing Representative to help prepare their
            clothing.
          </p>
          <h2 className="mb-6 text-2xl font-medium">Brief Overview of Clothing Requirements:</h2>
          <h3 className="mb-4 text-xl font-semibold">COSTUMES NEED TO BE MODEST AT ALL TIMES</h3>
          <ul className="flex flex-col  space-y-6 list-inside">
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Tunics: </span>Tunics should be 2-3 inches below the
                knee, have a capped sleeve or longer and be a tunic, dress, or shirt/skirt combo for
                both young men and young women. They should be large enough to be worn over regular
                clothing (t-shirts, knee-length shorts or pants), loose enough to allow for movement
                and lightweight due to the expected hot weather.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Shoes: </span>Two pairs of comfortable closed toe shoes.
                No sandals or flip-flops.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Shorts: </span>Knee length shorts should be worn under
                all Nephite attire at all times. You should bring at least two pairs of shorts.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Shirts: </span>T-Shirts should be worn under tunics or
                other types of tops that are open on the sides or neckline. It is recommended that
                you bring at least two t-shirts.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <span className="font-bold">Satchel: </span>Satchels should be approximately 10 x 12
              inches with an over-the-shoulder strap.
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Head gear: </span>Head gear including hats and scarves
                are allowed and strongly encouraged to protect you from the sun. You may wear a
                headband (around the forehead and tied in the back) or a “shepherd’s” head covering
                to protect against the sun. Ball caps, toques, knit caps,etc WILL NOT be allowed.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Embellishments: </span>Have fun accessorizing your
                costume with trims, buttons, sashes, tie belts headbands, armbands, ankle and calf
                ornaments, belts, drapes, vests, shoulder shawls, collars, and jewelry contrasting
                materials, etc., can all be added to make your apparel unique, but remember that you
                are trying to look like the inhabitants at the time of the Book of Mormon!
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Restrictions: </span>No camis/tank tops, short shorts,
                flip flops, open toed shoes, personal jewelry, modern fabrics, including pink
                leopard, floral prints, camo, neon, etc. In addition, skin/face painting or
                temporary tattoos will not be allowed.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Note: </span>Please review the Requirements and ideas
                for Nephite Apparel for Moroni’s Promise downloadable document for full details on
                requirements and restrictions.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Ideas: </span>Search PINTEREST: “Moroni’s Quest
                Clothing” for additional ideas.
              </p>
            </li>
            <li className="flex text-xl">
              <CheckMarkSVG />
              <p>
                <span className="font-bold">Ideas: </span>Patterns that can be used McCalls #2339,
                or Simplicity #5446
              </p>
            </li>
          </ul>

          <p className="mb-8 leading-relaxed"></p>
        </div>
        <div className="flex flex-col gap-2">
          <img className="rounded w-auto h-96" alt="" src={Costume6} loading="lazy" />
          <img className="rounded w-auto h-96" alt="" src={Costume3} loading="lazy" />
          <img className="rounded w-auto h-96" alt="" src={Costume5} loading="lazy" />
        </div>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col pt-4 pb-8 px-8 justify-center gap-4">
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          <a href={Satchel} target="_blank" rel="noreferrer">
            Download Satchel Instructions
          </a>
        </button>
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          <a href={Tunic} target="_blank" rel="noreferrer">
            Download Tunic Instructions
          </a>
        </button>
      </div>
    </section>
  )
}

export default ClothingOverview
