import { gql } from '@apollo/client'

export const SCHEDULE_SUB = gql`
  subscription GetSchedule($day: String!) {
    schedule(where: { activity: { _like: $day } }) {
      title
      speakers {
        name
        image_url
      }
      id
      talk_description
      talk_type
      start_at
      activity
    }
  }
`
