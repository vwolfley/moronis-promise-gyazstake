import AudioSection from "../../sections/AudioFile"
import PhotoGallerySection from "../../sections/PhotoGallerySection"

function EventPhotos() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <AudioSection />
      <PhotoGallerySection />
    </div>
  )
}

export default EventPhotos
