import { log } from "console"
import Image from "next/image"
import React from "react"

type PictureOfADayProps = {
  url: string
}

export default function EarthPhoto({ url }: PictureOfADayProps) {
  return (
    <>
      <div className=" relative w-3/4 md:w-3/5  lg:w-3/6 ">
        <h1 className="text-center	">Picture Of A Day</h1>
        <Image
          src={url}
          alt="Picture of the day"
          width="0"
          height="0"
          sizes="100%"
          className="w-full h-auto"
          quality={100}
        />
        <div></div>
      </div>
    </>
  )
}
