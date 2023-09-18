
import { PageTitle, Header, Footer, SpeakerBioItem } from "@/components"
import { OrganiserData } from "@/data"

export default function Organisers () {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div className="relative">
          <PageTitle title="About Us" />
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>
            Picture this: a bunch of tech enthusiasts who adore iOS and get an adrenaline rush from crafting Swift apps. We practically dream in code. 😄 <br/><br/>
            Why, you ask? Because Apple's tech playground for developers is like Willy Wonka's Chocolate Factory for us. It's pure magic. 🍏✨<br/><br/>
            We've got this crazy idea that if we sprinkle a little bit of this magic on all our iOS pals, we can cook up some seriously cool, mind-blowing apps. And so, back in 2015, we birthed iOS Conf SG.<br/><br/>
            Fast forward to today, and guess what? Our little gathering has become the Godzilla of iOS developer conferences in Southeast Asia. 🦖📱<br/>

            Join us on this epic adventure, where we turn iOS dreams into reality, one Swift app at a time. 🌟😁 #iOSConfSG
            </p> <br/>

            <p>You may contact us:</p>
            <ul>
                <li>
                  Vina Melody, <a href="mailto:vina&#64;iosconf.sg">vina@iosconf.sg</a>
                </li>
                <li>
                  Subhransu Behera, <a href="mailto:subh&#64;iosconf.sg">subh@iosconf.sg</a>
                </li>
                <li>
                  Melvin Tan, <a href="mailto:melvin&#64;iosconf.sg">melvin@iosconf.sg</a>
                </li>
              </ul>
            <br />
            <p>Oh, and by the way, in the world of paperwork and officialdom, we've got a fancy title: <strong>IOS CONF SG PTE. LTD.</strong> <br/>
            Yep, that's the grown-up name for the crew behind the iOS Conf SG shindig. 🤓📋 #BehindTheCurtain</p>
          </div>
        </div>
        <section id="team" className="w-full text-center py-12 bg-gradient-to-r from-stone-100 to-slate-200">
          <h2 className="inline-block p-3 mb-4 text-3xl text-orange-500">
            Organising Team & Volunteers
          </h2>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
            <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              {
                OrganiserData.map((organiser, index) => {
                  return (
                    <li key={index}>
                      <SpeakerBioItem speaker={organiser} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
