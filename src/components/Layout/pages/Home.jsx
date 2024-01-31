import HomeHero from "../../sections/HomeHero"
import WhatSection from "../../sections/WhatSection"
import BensonQuote from "../../sections/BensonQuote"
import WhatToExpect from "../../sections/WhatToExpect"
import InfoSection from "../../sections/InfoSection"
import MoroniQuote from "../../sections/MoroniQuote"


function Home() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <HomeHero />
      <MoroniQuote />
      <WhatSection />
      <BensonQuote />
      <WhatToExpect />
      <InfoSection />
    </div>
  )
}

export default Home
