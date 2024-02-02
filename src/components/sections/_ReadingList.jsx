import React from "react"
import { GiFruitTree } from "react-icons/gi";
import { LuWaves } from "react-icons/lu";
import { FaPrayingHands } from "react-icons/fa";
import { RiFireLine } from "react-icons/ri";


function ReadingList() {
  return (
    <section class="mb-3">
      <h2 class="mb-12 text-center text-3xl font-bold">Book of Mormon - Reading Schedule</h2>

      <div class="flex flex-wrap items-center">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
          <div
            class="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" class="w-full" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                <div class="flex h-full items-center justify-center">
                  <div class="px-6 py-12 text-center text-white md:px-12">
                    <h3 class="mb-6 text-2xl font-bold uppercase">
                      The future is
                      <u class="text-[hsl(210,12%,80%)]">now</u>
                    </h3>
                    <p class="text-[hsl(210,12%,80%)]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia laboriosam
                      error consequuntur fugit, doloribus rerum, iure nesciunt amet quidem veniam
                      cupiditate hic fugiat dolore aperiam quisquam libero earum quibusdam?
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </div>
            </a>
          </div>
        </div>

        <div class="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12 text-blue-950">
          <div class="mb-12 flex">
            <div class="shrink-0">
              <div class="rounded-md bg-blue-800 p-4 shadow-lg">
                <GiFruitTree class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="ml-4 grow">
              <p class="mb-1 font-bold">February</p>
              <ul>
                <li class="">1 Nephi 1-19</li>
              </ul>
            </div>
          </div>

          <div class="mb-12 flex">
            <div class="shrink-0">
              <div class="rounded-md bg-blue-800 p-4 shadow-lg">
                <LuWaves class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="ml-4 grow">
              <p class="mb-1 font-bold">March</p>
              <ul>
                <li class="">Mosiah 1-6</li>
                <li class="">Mosiah 11-17</li>
              </ul>
            </div>
          </div>

          <div class="mb-12 flex">
            <div class="shrink-0">
              <div class="rounded-md bg-blue-800 p-4 shadow-lg">
                <FaPrayingHands class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="ml-4 grow">
              <p class="mb-1 font-bold">April</p>
              <p class="text-neutral-500 dark:text-neutral-300">
                Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae hic
                voluptatibus dolores exercitationem? Facilis debitis aspernatur amet nisi iure
                eveniet facere?
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="shrink-0">
              <div class="rounded-md bg-blue-800 p-4 shadow-lg">
                <RiFireLine class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="ml-4 grow">
              <p class="mb-1 font-bold">May</p>
              <p class="text-neutral-500 dark:text-neutral-300">
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
