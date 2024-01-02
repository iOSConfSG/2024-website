import { gql } from '@apollo/client'

export const SCHEDULE_SUB = gql`
  subscription GetSchedule {
    schedule(where: { activity: { _eq: "iosconfsg23.day1" } }) {
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
