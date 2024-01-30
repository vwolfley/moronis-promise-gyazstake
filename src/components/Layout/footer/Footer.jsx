import React from "react"
import Facebook from "../../../images/social/facebook-logo.png"
import X from "../../../images/social/x-logo-white.png"
import Instagram from "../../../images/social/instagram-logo-white.png"
import YouTube from "../../../images/social/youtube-logo-red.png"

export default function App() {
  return (
    <footer className="bg-cyan-900 text-center lg:text-left">
      <div className="container p-6 text-cyan-50">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium uppercase">Goodyear Arizona Stake</h5>

            <address className="mb-4">
              425 South Estrella Parkway
              <br />
              Goodyear, Arizona 85338
              <br />
              <a
                href="https://local.churchofjesuschrist.org/en/us/az/goodyear/425-south-estrella-parkway?utm_source=gmb&utm_medium=yext"
                className="underline text-yellow-400 hover:text-yellow-200 visited:text-purple-400">
                Goodyear Stake
              </a>
            </address>
          </div>

          <div className="flex mb-6 md:mb-0 items-center justify-end gap-x-4">
            <a href="https://www.facebook.com/ChurchofJesusChrist/" role="button">
              <img src={Facebook} alt="Facebook Logo" width="25" height="25" />
            </a>
            <a href="https://twitter.com/Ch_JesusChrist" role="button">
              <img src={X} alt="X or Twitter Logo" width="25" height="25" />
            </a>
            <a href="https://www.instagram.com/churchofjesuschrist/" role="button">
              <img src={Instagram} alt="Instagram Logo" width="25" height="25" />
            </a>
            <a href="https://www.youtube.com/churchofjesuschrist" role="button">
              <img src={YouTube} alt="Youtube Logo" width="25" height="25" />
            </a>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-cyan-900 p-4 text-center text-cyan-50 text-xs">
        <p>
          This is not an official website of The Church of Jesus Christ of Latter-day Saints. For
          the official Church website, please visit{" "}
          <a
            href="https://www.churchofjesuschrist.org/"
            className="underline text-yellow-400 hover:text-yellow-200 visited:text-purple-400">
            churchofjesuschrist.org
          </a>
        </p>
        <p>Goodyear Arizona Stake © 2024 Copyright</p>
      </div>
    </footer>
  )
}
