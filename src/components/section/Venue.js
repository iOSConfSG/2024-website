
import Image from 'next/image';

export default function VenueSection () {
  return (
    <div id="venue" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-4xl font-semibold text-black">
          Venue
        </p>
        <div className="mt-12 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense gap-12 lg:gap-12">
          <div className="max-w-xl">
            <h4 className="text-left font-semibold">SingPost Auditorium</h4>
            Level 5, 10 Eunos Road 8, Singapore Post Centre<br/>
            Singapore - 408600<br/>
            Next to Paya Lebar MRT Station
            <div className="relative h-4/6">
            <Image
              fill
              className="mt-8 w-full shadow-xl ring-1 ring-black ring-opacity-5"
              src="/images/singpost-auditorium.jpeg"
              alt="SingPost Auditorium"
              />
              </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-start-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.529974514071!2d103.8836639086914!3d1.3165989010852905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19d772eeca0b%3A0x87ceaa7082d263d9!2sSingPost%20Centre!5e0!3m2!1sen!2ssg!4v1698242423690!5m2!1sen!2ssg" width={"100%"} height={500} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
      </div>
    </div>
  )
}
