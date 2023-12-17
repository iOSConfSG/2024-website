import {
  Header,
  HeroJunior,
  Footer,
  LogoCloud,
  Slideshow,
  Speakers,
  Sponsors,
  Tickets,
  Sponsorship,
  InfiniteCarousell,
  VenueJunior,
  JuniorInfo
} from "@/components"
import Script from "next/script"

export default function JuniorLayout() {
  return (
    <div className="bg-white">
      <Header />
      <Script src='https://js.tito.io/v2' strategy="lazyOnload"></Script>

      <main>
        {/* Hero section */}
        <HeroJunior heroImage={"/images/iosconf2024-junior.gif"} hasSpeakers={false} />
        <JuniorInfo />
        <Tickets ticketSlug="ios-conf-sg/2024junior"/>
        <VenueJunior />
      </main>
      <Footer />
    </div>
  )
}
