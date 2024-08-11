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

import Photo14 from "../../images/eventPhotos/family_7779.jpg"
import Photo15 from "../../images/eventPhotos/family_7782.jpg"
import Photo16 from "../../images/eventPhotos/family_7802.jpg"
import Photo17 from "../../images/eventPhotos/family_7784.jpg"
import Photo18 from "../../images/eventPhotos/family_7808.jpg"
import Photo19 from "../../images/eventPhotos/family_7811.jpg"
import Photo20 from "../../images/eventPhotos/family_7817.jpg"
import Photo21 from "../../images/eventPhotos/family_7831.jpg"
import Photo22 from "../../images/eventPhotos/family_7838.jpg"
import Photo23 from "../../images/eventPhotos/family_7845.jpg"
import Photo24 from "../../images/eventPhotos/family_7849.jpg"
import Photo25 from "../../images/eventPhotos/group_7888.jpg"
import Photo26 from "../../images/eventPhotos/group_7892.jpg"

import Photo27 from "../../images/eventPhotos/IMG_0605.jpg"
import Photo28 from "../../images/eventPhotos/IMG_0609.jpg"
import Photo29 from "../../images/eventPhotos/IMG_0610.jpg"
import Photo30 from "../../images/eventPhotos/IMG_2410.jpg"
import Photo31 from "../../images/eventPhotos/IMG_2414.jpg"
import Photo32 from "../../images/eventPhotos/IMG_2443.jpg"
import Photo33 from "../../images/eventPhotos/IMG_2476.jpg"
import Photo34 from "../../images/eventPhotos/IMG_2478.jpg"
import Photo35 from "../../images/eventPhotos/IMG_2482.jpg"
import Photo36 from "../../images/eventPhotos/IMG_2490.jpeg"
import Photo37 from "../../images/eventPhotos/IMG_2503.jpeg"
import Photo38 from "../../images/eventPhotos/IMG_2518.jpeg"
import Photo39 from "../../images/eventPhotos/IMG_2524.jpeg"
import Photo40 from "../../images/eventPhotos/IMG_2528.jpeg"


const photos = [
  { src: Photo1, width: 800, height: 600, loading: "lazy" },
  { src: Photo2, width: 800, height: 600, loading: "lazy" },
  { src: Photo3, width: 800, height: 600, loading: "lazy" },
  { src: Photo4, width: 800, height: 600, loading: "lazy" },
  { src: Photo5, width: 800, height: 600, loading: "lazy" },
  { src: Photo6, width: 800, height: 600, loading: "lazy" },
  { src: Photo7, width: 800, height: 600, loading: "lazy" },
  { src: Photo8, width: 800, height: 600, loading: "lazy" },
  { src: Photo9, width: 800, height: 600, loading: "lazy" },
  { src: Photo10, width: 800, height: 600, loading: "lazy" },
  { src: Photo11, width: 800, height: 600, loading: "lazy" },
  { src: Photo12, width: 800, height: 600, loading: "lazy" },
  { src: Photo13, width: 800, height: 600, loading: "lazy" },
  { src: Photo14, width: 800, height: 800, loading: "lazy" },
  { src: Photo15, width: 800, height: 800, loading: "lazy" },
  { src: Photo16, width: 800, height: 800, loading: "lazy" },
  { src: Photo17, width: 800, height: 800, loading: "lazy" },
  { src: Photo18, width: 800, height: 800, loading: "lazy" },
  { src: Photo19, width: 800, height: 800, loading: "lazy" },
  { src: Photo20, width: 800, height: 800, loading: "lazy" },
  { src: Photo21, width: 800, height: 800, loading: "lazy" },
  { src: Photo22, width: 800, height: 800, loading: "lazy" },
  { src: Photo23, width: 800, height: 800, loading: "lazy" },
  { src: Photo24, width: 800, height: 800, loading: "lazy" },
  { src: Photo25, width: 1000, height: 800, loading: "lazy" },
  { src: Photo26, width: 1000, height: 800, loading: "lazy" },
  { src: Photo27, width: 800, height: 600, loading: "lazy" },
  { src: Photo28, width: 800, height: 600, loading: "lazy" },
  { src: Photo29, width: 800, height: 600, loading: "lazy" },
  { src: Photo30, width: 800, height: 600, loading: "lazy" },
  { src: Photo31, width: 800, height: 600, loading: "lazy" },
  { src: Photo32, width: 800, height: 600, loading: "lazy" },
  { src: Photo33, width: 800, height: 600, loading: "lazy" },
  { src: Photo34, width: 800, height: 600, loading: "lazy" },
  { src: Photo35, width: 800, height: 600, loading: "lazy" },
  { src: Photo36, width: 800, height: 600, loading: "lazy" },
  { src: Photo37, width: 800, height: 600, loading: "lazy" },
  { src: Photo38, width: 800, height: 600, loading: "lazy" },
  { src: Photo39, width: 800, height: 600, loading: "lazy" },
  { src: Photo40, width: 800, height: 600, loading: "lazy" },
]

function PhotoGallery() {
  return <PhotoAlbum layout="rows" photos={photos} />
}
export default PhotoGallery
