import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import libraryImage from '@/images/library-image.jpeg'

export function Hero() {
  return (
    <div className="overflow-hidden bg-amber-950 dark:bg-black dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-10 mix-blend-multiply hue-rotate-[330deg] dark:hue-rotate-[340deg] dark:mix-blend-overlay"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-amber-100 via-white to-amber-100 dark:from-amber-200 dark:via-amber-100 dark:to-amber-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Create, Share, Collect, Earn
              </p>
              <p className="mt-3 text-2xl tracking-tight text-white dark:text-white">
                Library Protocol connects creators and collectors through decentralized content NFTs and innovative reward mechanisms.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/docs/mission">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64 opacity-10 mix-blend-multiply hue-rotate-[330deg] dark:hue-rotate-[340deg] dark:mix-blend-overlay"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44 opacity-10 mix-blend-multiply hue-rotate-[330deg] dark:hue-rotate-[340deg] dark:mix-blend-overlay"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-900 via-amber-800 to-amber-950 opacity-20 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-900 via-amber-800 to-amber-950 opacity-10" />
              <div className="relative block rounded-2xl bg-white/80 dark:bg-black/80 border border-amber-900/20 dark:border-amber-800/30 ring-1 ring-amber-900/20 dark:ring-amber-800/30 backdrop-blur overflow-hidden shadow-lg" style={{ aspectRatio: '16 / 9' }}>
                {/* Temporarily using existing image until we have a Library Protocol specific one */}
                <Image
                  src={libraryImage}
                  alt="Library Protocol"
                  fill
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}