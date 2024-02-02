import ReadingHero from "../../sections/ReadingHero"
import NelsonQuote from "../../sections/NelsonQuote"
import ReadingInfoSection from "../../sections/ReadingInfoSection"
import ReadingList from "../../sections/ReadingList"
import ScottQuote from "../../sections/ScottQuote"



function ReadingChallenge() {
    return (
      <div tag="main-body" className="flex grow flex-col">
        <ReadingHero />
        <NelsonQuote />
        <ReadingInfoSection />
        <ReadingList />
        <ScottQuote />
      </div>
    )
  }
  
  export default ReadingChallenge