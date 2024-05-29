import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'
import { bingDailyImg, hitokoto } from '@/app/api/hello/route'
import Link from 'next/link'
import { format, subDays } from 'date-fns'

const bing = 'https://cn.bing.com'

export default async function Hero() {
  let hitokotoRes = await hitokoto()
  let bingDailyImgRes = await bingDailyImg()
  let { url, title, copyrightlink } = bingDailyImgRes?.images?.[0] || {}
  url = bing + url
  copyrightlink += `&filters=HpDate:"${format(subDays(new Date(), 1), 'yyyyMMdd')}_1600"`

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
                {hitokotoRes && '「 ' + hitokotoRes.hitokoto + ' 」' + '—— ' + hitokotoRes.from}
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
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          <div>
            <div
              className="relative mb-8 flex justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <Image src={url} width={768} height={432} alt={'thumbnail'} priority />
              </div>
              <button className="group absolute top-full flex -translate-y-1/2 transform items-center rounded-full bg-white p-4 font-medium shadow-lg">
                <Link href={copyrightlink} target="_blank" className="flex">
                  <svg
                    className="h-6 w-6 shrink-0 fill-current text-gray-400 group-hover:text-blue-600"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                    <path d="M10 17l6-5-6-5z" />
                  </svg>
                  <span className="ml-3">{title}</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
