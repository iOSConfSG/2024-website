import Image from 'next/image'

export default function HeroJunior () {
  return (
    <div className="relative">
      <div className="mx-auto">
        <div className="relative sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src="/images/iosconf2024-junior.gif"
              layout="fill"
              alt="iOS Conference Singapore"
              unoptimized={true}
            />
          </div>
          <div className="relative px-4 pb-16 pt-24 md:pt-64 md:pb-24 sm:px-6 lg:py-96 lg:px-8">
            <div className="mt-10 max-w-sm mx-auto max-w-none flex flex-row justify-center">
              <div className="mx-auto inline-grid">
                <a
                  href="https://ti.to/ios-conf-sg/2024junior"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-opacity-100 sm:px-8"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}