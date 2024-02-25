import React from "react"
import ChristSmiling from "../../images/christ-smiling-square.webp"
import ChristGethsemane from "../../images/christ-garden-square.webp"
import MoroniWriting from "../../images/moroni-writing-square.webp"
import ChristHealing from "../../images/jesus-heals-square.webp"
import LehiTree from "../../images/lehi-tree-of-life-square.webp"

function ScriptureMemorize() {
  return (
    <section className="p-4 lg:p-8 text-blue-950">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col rounded-md shadow-sm lg:flex-row align-middle">
          <img src={LehiTree} alt="" className="w-1/3 h-auto" />
          <div className="flex flex-col justify-center flex-1 px-28 py-6">
            <span className="text-2xl uppercase">February</span>
            <h3 className="text-5xl font-bold">2 Nephi 31:20</h3>
            <p className="my-6 text-xl">
              Wherefore, ye must press forward with a steadfastness in Christ, having a perfect
              brightness of hope, and a love of God and of all men. Wherefore, if ye shall press
              forward, feasting upon the word of Christ, and endure to the end, behold, thus saith
              the Father: Ye shall have eternal life.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse align-middle">
          <img src={ChristHealing} alt="" className="w-1/3 h-auto" />
          <div className="flex flex-col justify-center flex-1 px-28 py-6">
            <span className="text-2xl uppercase">March</span>
            <h3 className="text-5xl font-bold">Mosiah 3:19</h3>
            <p className="my-6 text-xl">
              For the natural man is an enemy to God, and has been from the fall of Adam, and will
              be, forever and ever, unless he yields to the enticings of the Holy Spirit, and
              putteth off the natural man and becometh a saint through the atonement of Christ the
              Lord, and becometh as a child, submissive, meek, humble, patient, full of love,
              willing to submit to all things which the Lord seeth fit to inflict upon him, even as
              a child doth submit to his father.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row align-middle">
          <img src={ChristGethsemane} alt="" className="w-1/3 h-auto" />
          <div className="flex flex-col justify-center flex-1 px-28 py-6">
            <span className="text-2xl uppercase">April</span>
            <h3 className="text-5xl font-bold">Helaman 5: 9</h3>
            <p className="my-6 text-xl">
              O remember, remember, my sons, the words which king Benjamin spake unto his people;
              yea, remember that there is no other way nor means whereby man can be saved, only
              through the atoning blood of Jesus Christ, who shall come; yea, remember that he
              cometh to redeem the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse align-middle">
          <img src={ChristSmiling} alt="" className="w-1/3 h-auto" />
          <div className="flex flex-col justify-center flex-1 px-28 py-6">
            <span className="text-2xl uppercase">April</span>
            <h3 className="text-5xl font-bold">Helaman 5:12</h3>
            <p className="my-6 text-xl">
              And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is
              Christ, the Son of God, that ye must build your foundation; that when the devil shall
              send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail
              and his mighty storm shall beat upon you, it shall have no power over you to drag you
              down to the gulf of misery and endless wo, because of the rock upon which ye are
              built, which is a sure foundation, a foundation whereon if men build they cannot
              fall.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row align-middle">
          <img src={MoroniWriting} alt="" className="w-1/3 h-auto" />
          <div className="flex flex-col justify-center flex-1 px-28 py-6">
            <span className="text-2xl uppercase">May</span>
            <h3 className="text-5xl font-bold">Moroni 10:3-5</h3>
            <p className="my-2 text-xl">
              Behold, I would exhort you that when ye shall read these things, if it be wisdom in
              God that ye should read them, that ye would remember how merciful the Lord hath been
              unto the children of men, from the creation of Adam even down until the time that ye
              shall receive these things, and ponder it in your hearts.
            </p>
            <p className="my-2 text-xl">
              And when ye shall receive these things, I would exhort you that ye would ask God, the
              Eternal Father, in the name of Christ, if these things are not true; and if ye shall
              ask with a sincere heart, with real intent, having faith in Christ, he will manifest
              the truth of it unto you, by the power of the Holy Ghost.
            </p>
            <p className="my-2 text-xl">
              And by the power of the Holy Ghost ye may know the truth of all things.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScriptureMemorize
