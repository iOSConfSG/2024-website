import classname from 'classnames'
import Image from 'next/image'
import type { LegacySchedule } from 'src/data/schedule'
import type { RawSchedule, RawSpeaker } from '../types/schedule'
// import speakers from 'src/data/speakers'

type ConfDay = 'iosconfsg24.day1' | 'iosconfsg24.day2'

type Props = {
  schedule?: LegacySchedule[]
  // tab: 'day1' | 'day2'
  day: ConfDay
  showSpeakerBioHandler: (name: string) => void
  scheduleDynamic: RawSchedule[]
}

function ScheduleTable(props: Props) {
  const { schedule, day, showSpeakerBioHandler, scheduleDynamic } = props

  const classnameFor = (index: number) => {
    return classname('hover:bg-orange-100', {
      'bg-gray-100': index % 2 === 0,
      'bg-white': index % 2 === 0
    })
  }

  return (
    <table
      className="table-auto w-full divide-ydivide-gray-200"
      data-testid={day}
    >
      <tbody className="bg-white divide-y divide-x divide-gray-200">
        {scheduleDynamic &&
          scheduleDynamic.map((talk, index) => {
            const speaker: RawSpeaker | undefined =
              talk.speakers.length > 0 ? talk.speakers[0] : undefined
            if (!speaker) {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="px-1 sm:px-6 py-3 whitespace-normal">
                    {talk.start_at}
                  </td>
                  <td
                    className="px-1 sm:px-6 py-3 whitespace-normal"
                    colSpan={2}
                  >
                    {talk.title}
                  </td>
                </tr>
              )
            } else {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="px-1 sm:px-6 py-3 whitespace-normal align-top">
                    {talk.start_at}
                  </td>
                  <td className="w-1/4  px-1 sm:px-6 py-3 whitespace-normal align-top">
                    <div className="min-w-0 flex flex-col sm:flex-row items-center">
                      <div className="flex-shrink-0">
                        <Image
                          alt="speaker"
                          className="h-16 w-16 rounded-full"
                          src={speaker?.image_url || ''}
                          //src={`/images/speakers/${talk.speaker_image}.jpg`}
                          unoptimized
                          width={64}
                          height={64}
                          onClick={() => showSpeakerBioHandler(speaker?.name)}
                        />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                        <button
                          className="font-medium text-left text-orange-600 my-0 underline"
                          onClick={() => showSpeakerBioHandler(speaker?.name)}
                        >
                          {speaker.name}
                        </button>
                        <p className="text-sm text-gray-600">
                          {speaker.company}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-3/4 px-1 sm:pr-6 py-3 whitespace-normal align-top">
                    <div>
                      <h3 className="font-medium text-orange-600 my-0">
                        {talk.title}
                      </h3>
                      <p className="whitespace-pre-line">
                        {talk.talk_description}
                      </p>
                    </div>
                  </td>
                </tr>
              )
            }
          })}
      </tbody>
    </table>
  )
}

export default ScheduleTable
