import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'

import {
  UserCircleIcon,
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  LocationMarkerIcon,
  StarIcon
} from '@heroicons/react/outline'

const menuItems = [
  {
    id: "speakers",
    title: "Speakers",
    description: "iOS Conf SG 2024 Speakers",
    href: "/#speakers",
    icon: UserCircleIcon,
  },
  {
    id: "schedule",
    title: "Schedule",
    description: "iOS Conf SG 2024 Schedule",
    href: "/schedule",
    icon: ClockIcon,
  },
  {
    id: "sponsors",
    title: "Sponsors",
    description: "iOS Conf SG 2024 Sponsors",
    href: "/#sponsors",
    icon: HeartIcon,
  },
  {
    id: "venue",
    title: "Venue",
    description: "iOS Conf SG 2024 Venue",
    href: "/#venue",
    icon: LocationMarkerIcon,
  },
  {
    id: "organisers",
    title: "Organisers",
    description: "iOS Conf SG 2024 Organising Team",
    href: "/organisers",
    icon: UserGroupIcon,
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Frequently Asked Questions",
    href: "/faq",
    icon: QuestionMarkCircleIcon,
  },
]

export default function Header () {
  return (
    <header className="sticky w-full z-10 top-0">
      <Popover className="relative bg-black">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="cursor-pointer" legacyBehavior>
              <div className="flex flex-row items-center">
                <Image
                  src="/images/logo.png"
                  alt="iOS Conf Logo"
                  layout="intrinsic"
                  objectfit="cover"
                  className="h-8 w-auto sm:h-10 cursor-pointer"
                  height={64}
                  width={64}
                />
                <span className="align-middle text-xl text-orange-600">iOS Conf SG</span>
                <span className="sr-only">iOS Conf SG</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {
              menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-base font-medium text-slate-300 hover:text-orange-300">
                  {item.title}
                </a>

              ))
            }
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#tickets"
              target="_blank"
              rel="noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-amber-500 hover:to-orange-600"
            >
              Get Tickets
            </a>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row items-center">
                    <Image
                      src="/images/logo.png"
                      alt="iOS Conf Logo"
                      layout="intrinsic"
                      objectfit="cover"
                      className="h-8 w-auto sm:h-10"
                      height={48}
                      width={48}
                    />
                    <span className="align-middle text-xl text-orange-600">iOS Conf SG</span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {
                      menuItems.map((item) => (
                        <a
                          key={item.id}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.title}</div>
                        </a>
                      ))
                    }
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="mt-6">
                  <a
                    href="#tickets"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get My Ticket
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}