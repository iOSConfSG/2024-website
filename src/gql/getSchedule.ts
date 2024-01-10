import { gql } from '@apollo/client'

export const SCHEDULE_SUB = gql`
  subscription GetSchedule($day: String!) {
    schedule(where: { activity: { _like: $day } }) {
      title
      speakers {
        name
        image_url
        company
        id
        talk_id
        short_bio
        linkedin
      }
      id
      talk_description
      talk_type
      start_at
      activity
    }
  }
`
