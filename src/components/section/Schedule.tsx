import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import { useSubscription } from '@apollo/client'
import { ScheduleData, SpeakersData } from '@/data'
import { Tabs, ScheduleTable, SpeakerBioModal } from '@/components'
import { SCHEDULE_SUB } from '../../gql/getSchedule'
import { formatDate } from '@/lib/formatTime'
import type { LegacySchedule } from '../../data/schedule'
import type { CombinedSchedule, RawSchedule } from '../types/schedule'

type Tab = 'day1' | 'day2'

const SG_TIMEZONE = 'Asia/Singapore'
const localTimezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone || SG_TIMEZONE

const Conference1 = ScheduleData.filter(
  (event) => event.activity === 'iosconfsg24.day1'
)
const Conference2 = ScheduleData.filter(
  (event) => event.activity === 'iosconfsg24.day2'
)
const sgConference1 = rezoneSchedule(Conference1, SG_TIMEZONE)
const sgConference2 = rezoneSchedule(Conference2, SG_TIMEZONE)

const schedule = {
  others: {
    iosconfsg: {
      day1: rezoneSchedule(Conference1, localTimezone),
      day2: rezoneSchedule(Conference2, localTimezone)
    }
  },
  sg: {
    iosconfsg: {
      day1: sgConference1,
      day2: sgConference2
    }
  }
}

function rezoneSchedule(schedule: any, timezone: string): RawSchedule {
  const rezoned = schedule.map((item: any) => {
    return {
      ...item,
      start_at: formatDate(item.start_at, timezone, localTimezone)
    }
  })
  return rezoned
}

function selectScheduleForTab(currentTab: string, timezone: string) {
  const location = timezone === SG_TIMEZONE ? 'sg' : 'others'
  const localeSchedule = schedule[location]

  return localeSchedule.iosconfsg[currentTab as Tab] as any
}

export default function ScheduleSection() {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [scheduleDynamic, setScheduleDynamic] = useState<
    CombinedSchedule | undefined
  >()

  const { data, loading } = useSubscription(SCHEDULE_SUB, {
    skip: typeof window == 'undefined',
    variables: { day: 'iosconfsg23.day1' }
  })

  console.log('data', data)

  useEffect(() => {
    if (typeof data !== 'undefined') {
      const correctedTimezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone || SG_TIMEZONE
      const newSchedule = {
        others: {
          iosconfsg: rezoneSchedule(data.schedule, correctedTimezone)
        },
        sg: {
          iosconfsg: rezoneSchedule(data.schedule, SG_TIMEZONE)
        }
      }
      setScheduleDynamic(newSchedule)
    }
  }, [data])

  const handleShowSpeaker = (name: string) => {
    const person = SpeakersData.filter(function (speaker) {
      return speaker.name === name
    })
    if (person && person.length > 0) {
      setSelectedSpeaker(person[0] as any)
      setShowBio(true)
    }
  }
  const handleCloseBio = () => setShowBio(false)

  return (
    <div id="schedule" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <ScheduleTabs
          showSpeakerBioHandler={handleShowSpeaker}
          currentTab="day1"
          scheduleData={scheduleDynamic}
        />
        <Transition
          show={showBio}
          appear={true}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <SpeakerBioModal
            speaker={selectedSpeaker}
            handleClose={handleCloseBio}
          />
        </Transition>
      </div>
    </div>
  )
}

type ScheduleTabsProps = {
  showSpeakerBioHandler: (name: string) => void
  currentTab: Tab
  scheduleData: unknown
}

function ScheduleTabs(props: ScheduleTabsProps) {
  const [currentTab, setCurrentTab] = useState<Tab>('day1')

  const [currentTimezone, setCurrentTimezone] = useState(SG_TIMEZONE)
  const localSchedule = selectScheduleForTab(currentTab, currentTimezone)

  useEffect(() => {
    // Prevent hydration errors
    if (typeof window !== 'undefined') {
      console.log(
        'check timezone',
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )
      setCurrentTimezone(localTimezone)
    }
  }, [])

  const selectedTab = (tab: Tab) => {
    setCurrentTab(tab)
  }

  const rerenderInSgTime = () => {
    setCurrentTimezone(SG_TIMEZONE)
    // setCurrentSchedule(sgScheduleForTab(currentTab))
  }
  const rerenderInLocalTime = () => {
    setCurrentTimezone(localTimezone)
  }

  return (
    <>
      <Tabs defaultSelected={'day1'} currentTab={selectedTab}>
        <Tabs.Tab labelKey="day1">18 January</Tabs.Tab>
        <Tabs.Tab labelKey="day2">19 January</Tabs.Tab>
      </Tabs>
      <p className="text-sm mx-4 mx-0 my-4">
        Times below are shown in your local time zone{' '}
        <strong>{localTimezone}</strong>.
        {localTimezone !== SG_TIMEZONE && currentTimezone !== SG_TIMEZONE && (
          <a href="#" onClick={rerenderInSgTime}>
            {' '}
            Show in Singapore time
          </a>
        )}
        {currentTimezone === SG_TIMEZONE && localTimezone !== SG_TIMEZONE && (
          <a href="#" onClick={rerenderInLocalTime}>
            {' '}
            Show in my local time
          </a>
        )}
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ScheduleTable schedule={localSchedule} tab={currentTab} {...props} />
      </div>
      <p className="text-sm mx-4 sm:mx-0">
        Schedule may change without prior notice
      </p>
    </>
  )
}
