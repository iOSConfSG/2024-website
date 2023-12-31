import { PageTitle, Header, Footer, Schedule } from "@/components"
import { ApolloWrapper } from "../lib/ApolloWrapper"

// Adding Apollo Client wrapper only for Schedule page, and not at Root Layout

export default function SchedulePage () {
  return (
    <div className="bg-white">
      <Header />
        <ApolloWrapper>
          <main>
            <div className="relative">
              <PageTitle title="Schedule"/>
              <Schedule />          
            </div>
          </main>
        </ApolloWrapper>
      <Footer />
    </div>
  )
}
