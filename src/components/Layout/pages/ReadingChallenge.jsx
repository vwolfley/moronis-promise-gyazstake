import ReadingHero from "../../sections/ReadingHero"
import NelsonQuote from "../../sections/NelsonQuote"
import ReadingInfoSection from "../../sections/ReadingInfoSection"
import ReadingList from "../../sections/ReadingList"
import ScottQuote from "../../sections/ScottQuote"

import ScriptureMemorize from "../../sections/ScriptureMemorize"



function ReadingChallenge() {
    return (
      <div tag="main-body" className="flex grow flex-col">
        <ReadingHero />
        <NelsonQuote />
        <ReadingInfoSection />
        <ReadingList />
        <ScottQuote />
        <ScriptureMemorize />
      </div>
    )
  }
  
  export default ReadingChallenge