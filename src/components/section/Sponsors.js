import { SponsorsData } from "@/data"
import Image from "next/image"
import classname from "classnames"

export default function SponsorSection () {
  return (
    <div id="sponsors" className="bg-white mt-1">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="my-6 text-center text-4xl font-semibold text-black">
          Afterparty 🥳 Sponsor
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          {
            SponsorsData['afterparty'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-200 flex items-center", s.heightClass)}>
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
        <p className="text-center mt-6 text-4xl font-semibold text-black">
          Diamond 💎 Sponsor
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['diamond'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-150 flex items-center", s.heightClass)}>
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
        <p className="text-center mt-6 text-4xl font-semibold text-black">
          Gold ⭐️ Sponsor
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['gold'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-100 flex items-center", s.heightClass)}>
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
        <p className="text-center mt-6 text-4xl font-semibold text-black">
          Coffee ☕ Sponsor
        </p>
        <div className="my-0 lg:my-12 py-12 flex flex-row flex-wrap items-center justify-center gap-8 lg:mt-8">
          {
            SponsorsData['coffee'].map((s, index) => (
              <div key={index} className="relative">
                <div className={classname("col-span-1 bg-white w-100 flex items-center", s.heightClass)}>
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
