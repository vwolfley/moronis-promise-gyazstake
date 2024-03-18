import ClothingHero from "../../sections/ClothingHero"
import JacobQuote from "../../sections/JacobQuote"
import ClothingSection from "../../sections/ClothingSection"
import ClothingGallery from "../../sections/ClothingGallery"
import ClothingOverview from "../../sections/ClothingOverview"

function Clothing() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <ClothingHero />
      <JacobQuote />
      <ClothingSection />
      <ClothingGallery />
      <ClothingOverview />
    </div>
  )
}

export default Clothing
