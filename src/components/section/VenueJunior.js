
import Image from 'next/image';

export default function VenueJunior () {
  return (
    <div id="venue" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-4xl font-semibold text-black">
          Venue
        </p>
        <div className="mt-12 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense gap-12 lg:gap-12">
          <div className="max-w-xl">
            <h4 className="text-left font-semibold">Lyf Farrer Park</h4>
            2 Perumal Rd, #01-01<br/>
            Singapore - 218773<br/>
            Next to Farrer Park Station Exit G
            <div className="relative h-4/6">
            <Image
              fill
              className="mt-8 w-full shadow-xl ring-1 ring-black ring-opacity-5"
              src="/images/lyf-farrer-park.jpeg"
              alt="Lyf Farrer Park"
              />
              </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-start-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.08488884459!2d103.8556448!3d1.3126963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c5e8de8e23%3A0xed92ac1ca923d73a!2slyf%20Farrer%20Park%20Singapore!5e0!3m2!1sen!2ssg!4v1702815551392!5m2!1sen!2ssg" width={"100%"} height={500} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
      </div>
    </div>
  )
}
