import React from "react"
import ManReading from "../../images/man-reading-bofm.jpg"

function ReadingInfoSection() {
  return (
    <section className="text-blue-950 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-semibold">
            What’s is Moroni’s Promise?
          </h1>
          <h2 className="sm:text-2xl text-xl mb-4 font-medium">Read The Book of Mormon - Another Testament of Jesus Christ together as a family.</h2>
          <p className="mb-8 leading-relaxed">
          Moroni’s Promise is a 5-month journey allowing  you to experience the Book of Mormon-Another Testament of Jesus Christ in a way you’ve never experienced it before. It begins with a 5-month reading program of the Book of Mormon. This isn’t just any reading program. This is a program designed to help you not just read the Book of Mormon but study the Book of Mormon.
          </p>
          <p className="mb-8 leading-relaxed">
            Reading the entire Book of Mormon before June would be a wonderful accomplishment,
            however, the mandatory reading is set out below. We hope you will become familiar with
            these chapters and stories as part of your spiritual preparation for Moroni’s Promise!
            Happy reading!
          </p>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="phoenix temple"
            src={ManReading}
          />
        </div>
      </div>
    </section>
  )
}

export default ReadingInfoSection
