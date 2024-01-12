import { PageTitle, Header, Footer, Schedule } from '@/components'
import { ApolloWrapper } from '@/lib/ApolloWrapper'

export default function SchedulePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative">
          <PageTitle title="Schedule" />
          <ApolloWrapper>
            <Schedule />
          </ApolloWrapper>
        </div>
      </main>
      <Footer />
    </div>
  )
}
