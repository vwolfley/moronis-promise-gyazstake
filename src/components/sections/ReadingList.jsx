import React from "react"
import { GiFruitTree } from "react-icons/gi"
import { LuWaves } from "react-icons/lu"
import { FaPrayingHands } from "react-icons/fa"
import { RiFireLine } from "react-icons/ri"
import ReadingChallengeDoc from "../../docs/moronis-promise-reading-challenge.pdf"

function ReadingList() {
  return (
    <section className="text-center text-blue-950 bg-stone-100">
      <div className="relative items-center w-full px-5 py-12 mb-8 mt-8 mx-auto md:px-12 lg:px-24 max-w-7xl text-blue-950">
        <h2 className="mb-20 text-3xl font-bold">Book of Mormon - Reading Schedule</h2>

        <div className="grid lg:grid-cols-4 lg:gap-x-12">
          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-blue-50 shadow-md bg-blue-900">
                  <GiFruitTree className="h-7 w-7" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-3xl font-bold">February</h5>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Read</h4>
                <ul className="text-lg font-medium">
                  <li>1 Nephi 1</li>
                  <li>1 Nephi 8</li>
                  <li>1 Nephi 11</li>
                  <li>2 Nephi 9</li>
                </ul>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Memorize</h4>
                <p className="text-lg font-medium">2 Nephi 31:20</p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-blue-50 shadow-md bg-blue-900">
                  <LuWaves className="h-7 w-7" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-3xl font-bold">March</h5>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Read</h4>
                <ul className="text-lg font-medium">
                  <li className="">Mosiah 2-5</li>
                </ul>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Memorize</h4>
                <p className="text-lg font-medium">Mosiah 3:19</p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-blue-50 shadow-md bg-blue-900">
                  <FaPrayingHands className="h-7 w-7" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-3xl font-bold">April</h5>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Read</h4>
                <ul className="text-lg font-medium">
                  <li className="">Alma 5</li>
                  <li className="">Alma 7</li>
                  <li className="">Alma 32-34</li>
                </ul>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Memorize</h4>
                <p className="text-lg font-medium">Helaman 5:9</p>
                <p className="text-lg font-medium">Helaman 5:12</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-blue-50 shadow-md bg-blue-900">
                  <RiFireLine className="h-7 w-7" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-3xl font-bold">May</h5>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Read</h4>
                <ul className="text-lg font-medium">
                  <li className="">3 Nephi 11</li>
                  <li className="">3 Nephi 15-21</li>
                  <li className="">Moroni 10</li>
                </ul>
                <h4 className="mt-2 mb-1 text-2xl font-semibold text-slate-400">Memorize</h4>
                <p className="text-lg font-medium">Moroni 10:3-5</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mb-1 mt-8 text-xl font-bold">Print the reading schedule here!</h3>
        <button className="bg-blue-900 text-white text-lg font-bold py-4 px-8 border border-cyan-900 rounded shadow">
          <a
            href={ReadingChallengeDoc}
            target="_blank"
            rel="noreferrer">
            Reading Schedule
          </a>
        </button>
      </div>
    </section>
  )
}

export default ReadingList
