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
          <h2 className="text-xl font-semibold leading-7 text-indigo-600">📢 Bummer News</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
             iOS Conf SG Junior Edition 2024 Cancelled
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Not the news we wanted to share, but the iOS Conf SG 2024 Junior Edition is officially canceled. Turns out the excitement level wasn&apos;t as high as we hoped. We didn&apos;t want to throw a snooze-fest, you know? For those who were ready to rock with us, apologies for the letdown. Refund info is coming your way soon. Let&apos;s regroup, recharge, and look forward to cooler things down the road!
          </p>
        </div>
      </div>
    </div>
  )
}