import {
  HeartIcon,
  DeviceMobileIcon,
  UserGroupIcon,
  TicketIcon
} from '@heroicons/react/outline'

const schedule = [
  "🕙 10:00 AM - Welcome Address",
  "🕥 10:15 AM - Panel Discussion with Past Winners",
  "🕚 11:15 AM - Mastering Effective Storytelling",
  "🕦 11:35 AM - Short Lunch Break, Prepare for Demonstration",
  "🕛 12:00 PM - App Presentations (Fortune favours the brave. We will open the stage for anyone who wishes to present their app and get feedback. It's only possible to allow some people to give so that we can deep-dive into the feedback session.)",  
  "🕐 1:00 PM  - Feedback from Prominent Speakers",
  "🕑 2:00 PM - Closing Address - Charting Your Path Forward"
]

export default function JuniorInfo () {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">🌟 Join Us at iOS Conf SG Junior 📱✨</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Gateway to Success in<br/>Apple&apos;s Swift Student Challenge
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Are you a student aspiring to ace <a href="https://www.apple.com/sg/newsroom/2023/11/apples-swift-student-challenge-to-open-in-2024-with-new-category/" target="_blank" rel="noreferrer">Apple&apos;s Swift Student Challenge</a>?<br/>Get ready to amplify your chances of success at iOS Conf SG Junior.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is a non-profit event, and we aim to use all the earnings from the ticket sale for the event. 🚀📲✨
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="text-base leading-7 text-gray-600">We designed this event to equip you with the guidance and insights needed to shine in the upcoming challenge.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <DeviceMobileIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="text-base leading-7 text-gray-600">From now until January 20th, you will refine your app ideas, create prototypes, and present them before a welcoming audience, gaining invaluable feedback to fine-tune your creations.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="text-base leading-7 text-gray-600">Remember, this event is just the beginning of your journey as an app developer. Lean on the supportive iOS developer community in Singapore as you progress.</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <TicketIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="text-base leading-7 text-gray-600">Limited seats are available. Secure your spot today and gear up for an inspiring experience that will set you on the path to success. Parents need to purchase a separate ticket.</dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <p className="mt-6 text-lg leading-8 text-gray-600">
          With the 2024 Apple Swift Student Challenge on the horizon, our agenda is packed with practical sessions tailored to elevate your skills:
          </p>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <tbody className="divide-y divide-gray-200">
                    {schedule.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {item}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}