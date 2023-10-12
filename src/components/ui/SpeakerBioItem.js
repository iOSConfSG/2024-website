import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import Image from 'next/image';

function SpeakerBioItem (props) {
  const { handleClick, speaker } = props

  const hasLinkedIn = (speaker && Object.prototype.hasOwnProperty.call(speaker, 'linkedin') && speaker.linkedin !== '')
  const hasXTwitter = (speaker && Object.prototype.hasOwnProperty.call(speaker, 'xTwitter') && speaker.xTwitter !== '')

  return (
    <div className="space-y-6">
      { speaker &&
        <>
          <div className="relative h-40 w-40 mx-auto">
            <Image alt="speaker" className="rounded-full xl:w-56 xl:h-56" fill={true} src={speaker.imageUrl} onClick={handleClick} />
          </div>
          <div className="space-y-2">
            <div className="flex-col justify-center text-lg leading-6 font-medium space-y-1">
              <h4 className="text-center text-gray-900">{speaker.name}</h4>
              <p className="text-orange-600 text-center">
                <a href={speaker.companyUrl} target="_blank" rel="noopener noreferrer">{speaker.company}</a>
              </p>
              <div className="flex justify-center">
              {hasXTwitter &&
                <Link href={`https://x.com/${speaker.xTwitter}`} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="1x" icon={faXTwitter} />
                  </a>
                </Link>
              }
              {hasLinkedIn &&
                <Link className="ml-1" href={`https://www.linkedin.com/in/${speaker.linkedin}`} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    &nbsp;<FontAwesomeIcon size="1x" icon={faLinkedin} />
                  </a>
                </Link>}
              </div>
              {
                speaker.shortBio &&
                <p className="text-sm text-center text-gray-800 font-light">{speaker.shortBio}</p>
              }
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default SpeakerBioItem
