export type RawSchedule = {
  activity: string
  id: number
  speakers: Speaker[]
  start_at: string
  talk_description: string
  talk_type: string
  title: string
  __typename: string
}

export type RawSpeaker = {
  image_url: string | null
  name: string
  __typename: string
}

export type ScheduleTimeZone = {
  iosconfig: RawSchedule[]
}

export type CombinedSchedule = {
  others: ScheduleTimeZone
  sg: ScheduleTimeZone
}
