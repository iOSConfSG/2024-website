import React from "react"
import Image from "next/image"

const images = [
  "/images/moments/DSC00236.jpeg",
  "/images/moments/DSC00294.jpeg",
  "/images/moments/DSC00301.jpeg",
  "/images/moments/DSC00621.jpeg",
  "/images/moments/DSC00721.jpeg",
  "/images/moments/DSC00725.jpeg",
  "/images/moments/DSC00758.jpeg",
  "/images/moments/DSC00771.jpeg",
  "/images/moments/DSC00836.jpeg",
  "/images/moments/DSC00937.jpeg",
]

export default function InfiniteCarousell (props) {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden bg-black py-4">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((image, index) => (
          <li key={index}>
              <Image src={image} alt="iOS Conf SG photos" className="rounded" width={400} height={200}/>
          </li>

        ))
        }
      </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {images.map((image, index) => (
          <li key={index}>
              <Image src={image} alt="iOS Conf SG photos" width={400} height={200}/>
          </li>
        ))
        }
    </ul>  
</div>
  )
}