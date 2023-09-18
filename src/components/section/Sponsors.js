import { SponsorsData } from "@/data"
import Image from "next/image"
import classname from "classnames"

export default function SponsorSection () {
  return (
    <div id="sponsorship" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center mt-6 text-4xl font-semibold text-black">
          Gold ⭐️ Sponsors
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['gold'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-80 flex items-center", s.heightClass)}>
                    <a href={s.imageHref} target="_blank" rel="noreferrer">
                      <Image
                        src={s.imageUrl}
                        alt={s.name}
                        width={s.width}
                        height={s.height}
                      />
                    </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
