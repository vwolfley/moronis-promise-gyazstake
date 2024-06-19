import React from "react"
import PhotoGallery from "./PhotoGallery"


function PhotoGallerySection() {
  return (
    <section className="bg-white text-blue-950">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Moroni's Promise Photo Gallery</h2>
      <PhotoGallery />
      </div>
    </section>
  )
}
export default PhotoGallerySection

