'use client';
import React from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  const herosection = useRef();

  useGSAP(() => {
    var tl = gsap.timeline()

    tl.from(".hero-text", {
      scale: 0,
    })
    tl.from(".gettingbutton", {
      y: 5,
      yoyo: true,
      repeat: -1,
    })
    gsap.from(".gg", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#gallerysection",
        scrub: true,
        // markers: true,
        start: 'top 60%',
        end: 'bottom 60%',
      },
    });
    gsap.from(".ts", {
      y: -120,
      opacity: 0,
      scrollTrigger: {
        trigger: ".tm1",
        scrub: true,
        // markers: true,
        start: 'top 70%',
        end: 'bottom 70%',
      },
    });
    gsap.from(".hs", {
      scale: 1.6,
      scrollTrigger: {
        trigger: ".hs1",
        scrub: true,
        // markers: true,
        start: 'top 70%',
        end: 'bottom 70%',
      },
    });



  }, { scope: herosection })
  return (
    <div ref={herosection} className='overflow-hidden'>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40 main-section mt-20">
        <div className="relative z-10 section-2">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold  text-gray-900 sm:text-6xl hero-text">
              Resource Minifier
              <span className="text-blue-600"><br />HTML LIBRARY</span>
            </h1>
            <h2 className="mt-6 text-lg  text-gray-600 hero-text">
              Start developing with an open source library bring your ideas to life in no time. Resource minifier is an open source HTML Library designed to streamline and optimize your web development process.
            </h2>
          </div>
        </div>
      </section>
      <div className=" flex items-center justify-center gap-x-6 gettingbutton">
        <Link
          className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href="docs/components/introduction"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>







      {/* Galley section */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 gg z-20" >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8" id='gallerysection'>
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12" >
            Gallery
          </h2>
          <div className="flex items-start justify-between gap-8 sm:items-center mb-6">
            <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
              Explore our gallery showcasing the power of Resource Minifier. See how streamlined HTML can boost performance and enhance web efficiency.
            </p>
            <a
              href="/about"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Explore More
            </a>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {/* image - start */}
            <Link
              href="/docs/components/file-minifier"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="img/file-minifier.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                File Minifier
              </span>
            </Link>
            {/* image - end */}
            {/* image - start */}
            <Link
              href="/docs/components/image-compressor"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="img/img-com.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Image Compressor
              </span>
            </Link>
            {/* image - end */}
            {/* image - start */}
            <a
              href="/docs/components/video-compressor"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="img/video-com.jpg"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Video Compressor
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="/docs/components/image-lazy-loading"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="img/lazy-loading.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Image Lazy Loading
              </span>
            </a>
            {/* image - end */}
          </div>

        </div>
      </div>




      {/* team section */}
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800 ts z-2">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Development team</p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100 tm1">
              <img alt="" className="self-center flex-shrink-0 w-36 h-36 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="img/shashank.jpg" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Shashank Verma</p>
                <p>Frontend Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a rel="noopener noreferrer" href="#" target="_blank" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="https://github.com/shashank-project-github" target="_blank" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
              <img alt="" className="self-center flex-shrink-0 w-36 h-36 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="img/ajitesh.jpg" />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Ajitesh Kumar Dwivedi</p>
                <p>Backend Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a rel="noopener noreferrer" href="#" target="_blank" title="LinkedIn" className="dark:text-gray-50 hover:dark:text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="https://github.com/dajitesh" target="_blank" title="GitHub" className="dark:text-gray-50 hover:dark:text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>






      <div className="bg-white py-6 sm:py-8 lg:py-12 hs">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80 hs1">
            {/* image - start */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="img/help-center.jpg"
                loading="lazy"
                alt="contactus image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                Help center
              </h2>
              <p className="mb-8 max-w-md text-gray-600">
                If you can't find the answer you're looking for or need further assistance, don't hesitate to reach out to us. Our dedicated support team is here to help you!
              </p>
              <div className='flex gap-x-4'>
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Contact support
                  </Link>
                </div>
                <div className="mt-auto">
                  <Link
                    href="/feedback"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Give Feedback
                  </Link>
                </div>
              </div>
            </div>
            {/* content - end */}
          </div>
        </div>
      </div>





      {/* footer */}
      <footer className=" divide-y dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <img
                  className="h-12 w-auto"
                  src="img/logo.jpg"
                  alt=""
                />
              </div>
              <span className="self-center text-2xl font-semibold">Resource Minifier</span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="/features">Features</Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="/docs/components/introduction">Documentation</Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="/contact">Contact</Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 MinifyMasters. All rights reserved.</div>
      </footer>



    </div>
  )
}

export default Home
