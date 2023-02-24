"use client"

import Spinner from "@/app/utilities/Spinner"
import React, { useState } from "react"

type PictureOfADayProps = {
  url: string
}

export default function EarthPhoto({ url }: PictureOfADayProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <div className="max-w-[400px] min-w-[400px] sm:max-w-[85%] sm:min-w-[85%] ">
        <h1 className="text-center">Foto ze satelitu</h1>
        {isLoading && <Spinner />}
        <img
          src={url}
          alt="Picture of the day"
          width="0"
          height="0"
          sizes="100%"
          className="w-full sm:w-[120%]"
          onLoad={handleImageLoad}
        />
      </div>
    </>
  )
}
