import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import { hitokoto } from '@/app/api/hello/route'

export default async function Hero() {
  const data = await hitokoto()

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-1 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-4 text-5xl font-extrabold leading-tighter tracking-tighter md:text-6xl"
              data-aos="zoom-y-out"
            >
              FX Dev
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Hi There
              </span>
              👋
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">
                {'「 ' + data.hitokoto + ' 」' + '—— ' + data.from}
              </p>
              <div className="mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                <ul className="-m-2.5 mb-0 flex flex-wrap justify-center">
                  <li className="group relative m-2.5 flex items-center justify-center">
                    <Image
                      src="/images/html.svg"
                      alt="HTML badge"
                      title="HTML"
                      width="44"
                      height="44"
                      priority
                    />
                    <div className="tooltip pointer-events-none -mb-1 opacity-0 group-hover:opacity-100">
                      HTML
                    </div>
                  </li>
                  <li className="group relative m-2.5 flex items-center justify-center">
                    <Image
                      src="/images/react.svg"
                      alt="React badge"
                      title="React"
                      width="44"
                      height="44"
                      priority
                    />
                    <div className="tooltip pointer-events-none -mb-1 opacity-0 group-hover:opacity-100">
                      React
                    </div>
                  </li>
                  <li className="group relative m-2.5 flex items-center justify-center">
                    {' '}
                    <Image
                      src="/images/next-js.svg"
                      alt="Next.js badge"
                      title="Next.js"
                      width="44"
                      height="44"
                      priority
                    />
                    <div className="tooltip pointer-events-none -mb-1 opacity-0 group-hover:opacity-100">
                      Next.js
                    </div>
                  </li>
                  <li className="group relative m-2.5 flex items-center justify-center">
                    {' '}
                    <Image
                      src="/images/vue.svg"
                      alt="Vue.js badge"
                      title="Vue.js"
                      width="44"
                      height="44"
                      priority
                    />
                    <div className="tooltip pointer-events-none -mb-1 opacity-0 group-hover:opacity-100">
                      Vue
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  )
}
