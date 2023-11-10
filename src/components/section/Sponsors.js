import { SponsorsData } from "@/data"
import Image from "next/image"
import classname from "classnames"

export default function SponsorSection () {
  return (
    <div id="sponsors" className="bg-white mt-1">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="my-6 text-center text-4xl font-semibold text-black">
          Afterparty 🥳 Sponsors
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          {
            SponsorsData['afterparty'].map((s, index) => (
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
      <hr></hr>
      <br/>
    </div>
  )
}
