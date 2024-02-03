import React from "react"
import { GiFruitTree } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";
import { FaPrayingHands } from "react-icons/fa";
import { RiFireLine } from "react-icons/ri";


function ReadingList() {
  return (
    <section className="mb-3">
      <h2 className="mb-12 text-center text-3xl font-bold">Book of Mormon - Reading Schedule</h2>

      <div className="flex flex-wrap items-center">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" className="w-full" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-center justify-center">
                  <div className="px-6 py-12 text-center text-white md:px-12">
                    <h3 className="mb-6 text-2xl font-bold uppercase">
                      The future is
                      <u className="text-[hsl(210,12%,80%)]">now</u>
                    </h3>
                    <p className="text-[hsl(210,12%,80%)]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia laboriosam
                      error consequuntur fugit, doloribus rerum, iure nesciunt amet quidem veniam
                      cupiditate hic fugiat dolore aperiam quisquam libero earum quibusdam?
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 text-blue-950">
          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-800 p-4 shadow-lg">
                <GiFruitTree className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">February</p>
              <ul>
                <li className="">1 Nephi 1-19</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-800 p-4 shadow-lg">
                <LuWaves className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">March</p>
              <ul>
                <li className="">Mosiah 1-6</li>
                <li className="">Mosiah 11-17</li>
              </ul>
            </div>
          </div>

          <div className="mb-12 flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-800 p-4 shadow-lg">
                <FaPrayingHands className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">April</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
                voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi iure
                eveniet facere?
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="shrink-0">
              <div className="rounded-md bg-blue-800 p-4 shadow-lg">
                <RiFireLine className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">May</p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Illum doloremque ea, blanditiis sed dolor laborum praesentium maxime sint,
                consectetur atque ipsum ab adipisci ullam aspernatur odio soluta, quisquam dolore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadingList
