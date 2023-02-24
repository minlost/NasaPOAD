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
      <div className="w-[50%] sm:w-[100%] sm:flex sm:justify-center sm:items-center sm:flex-col">
        <h1 className="text-center">Foto ze satelitu</h1>
        {isLoading && <Spinner />}

        <img
          src={url}
          alt="Picture of the day"
          width="0"
          height="0"
          sizes="100%"
          className="w-full h-auto sm:w-[90%]"
          onLoad={handleImageLoad}
        />
      </div>
    </>
  )
}
