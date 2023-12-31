
import Image from 'next/image';

export default function TicketSection ({ ticketSlug }) {
  return (
    <div className="relative bg-gray-900" id="tickets">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <Image
              fill={true}
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/images/tickets.jpeg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div id="tickets" className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Level up!
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Tickets
          </p>
          <tito-widget event={ticketSlug}></tito-widget>
        </div>
      </div>
    </div>
  )
}
