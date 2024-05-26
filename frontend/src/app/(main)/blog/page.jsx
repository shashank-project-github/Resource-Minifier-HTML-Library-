import React from 'react'

const page = () => {
  return (
    <>

      <div className="bg-white py-6 sm:py-8 lg:py-12 mt-28">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Blog
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as placeholder
              text. It shares some characteristics of a real written text but is
              random or otherwise generated.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    New trends in Tech
                  </a>
                </h2>
                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text.
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Brock Wegner"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Mike Lane</span>
                      <span className="block text-sm text-gray-400">
                        July 19, 2021
                      </span>
                    </div>
                  </div>
                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Working with legacy stacks
                  </a>
                </h2>
                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text.
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by peter bucks"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Jane Jackobs</span>
                      <span className="block text-sm text-gray-400">
                        April 07, 2021
                      </span>
                    </div>
                  </div>
                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>
                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text.
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Jassir Jonis"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Tylor Grey</span>
                      <span className="block text-sm text-gray-400">
                        March 15, 2021
                      </span>
                    </div>
                  </div>
                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="#"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>
                <p className="mb-8 text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real written
                  text.
                </p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                        loading="lazy"
                        alt="Photo by Aiony Haust"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <span className="block text-indigo-500">Ann Park</span>
                      <span className="block text-sm text-gray-400">
                        January 27, 2021
                      </span>
                    </div>
                  </div>
                  <span className="rounded border px-2 py-1 text-sm text-gray-500">
                    Article
                  </span>
                </div>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>





      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions.
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What can i expect at my first consultation?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What are your opening house?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Do i need a referral?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Is the cost of the appoinment covered by private health insurance?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What is your cancellation policy?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
            <div>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  What are the parking and public transport options?
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                  placeat, consequatur eveniet veritatis quos dignissimos beatae
                  dolores exercitationem laboriosam officia magnam atque blanditiis
                  illum doloremque magni ex corrupti tempora quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>



  )
}

export default page