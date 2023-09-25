import React from "react"
import Image from "next/image"

const images = [
  "/images/iosconf2022.jpeg",
  "/images/iosconf2022-day1.jpeg",
  "/images/iosconf2022-workshop.jpg",
  "/images/iosconf2021-workshop.jpeg",
  "/images/iosconfsg-workshop.jpg",
]

export default function InfiniteCarousell (props) {

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {images.map((image, index) => (
          <li key={index}>
              <Image src={image} alt="iOS Conf SG photos" width={400} height={200}/>
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