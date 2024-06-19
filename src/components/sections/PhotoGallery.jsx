import React from "react"
import PhotoAlbum from "react-photo-album"
import Photo1 from "../../images/eventPhotos/IMG_0605.jpg"
import Photo2 from "../../images/eventPhotos/IMG_0609.jpg"
import Photo3 from "../../images/eventPhotos/IMG_0610.jpg"
import Photo4 from "../../images/eventPhotos/IMG_2999.jpg"
import Photo5 from "../../images/eventPhotos/IMG_3010.jpg"
import Photo6 from "../../images/eventPhotos/IMG_3011.jpg"
import Photo7 from "../../images/eventPhotos/IMG_3020.jpg"
import Photo8 from "../../images/eventPhotos/IMG_3029.jpg"
import Photo9 from "../../images/eventPhotos/IMG_7558.jpg"
import Photo10 from "../../images/eventPhotos/IMG_9542.jpg"
import Photo11 from "../../images/eventPhotos/IMG_9543.jpg"
import Photo12 from "../../images/eventPhotos/IMG_9544.jpg"
import Photo13 from "../../images/eventPhotos/IMG_9559.jpg"

const photos = [
  { src: Photo1, width: 800, height: 600 },
  { src: Photo2, width: 800, height: 600 },
  { src: Photo3, width: 800, height: 600 },
  { src: Photo4, width: 800, height: 600 },
  { src: Photo5, width: 800, height: 600 },
  { src: Photo6, width: 800, height: 600 },
  { src: Photo7, width: 800, height: 600 },
  { src: Photo8, width: 800, height: 600 },
  { src: Photo9, width: 800, height: 600 },
  { src: Photo10, width: 800, height: 600 },
  { src: Photo11, width: 800, height: 600 },
  { src: Photo12, width: 800, height: 600 },
  { src: Photo13, width: 800, height: 600 },
]

function PhotoGallery() {
  return <PhotoAlbum layout="rows" photos={photos} />
}
export default PhotoGallery
