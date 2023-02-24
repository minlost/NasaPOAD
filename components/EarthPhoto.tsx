"use client"

import React, { useState } from "react"

type PictureOfADayProps = {
  url: string
}

export default function EarthPhoto({ url }: PictureOfADayProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <div className="w-[50%] sm:w-[100%] sm:flex sm:justify-center sm:items-center sm:flex-col">
        <h1 className="text-center">Foto ze satelitu</h1>
        {isLoading && (
          <div className="flex justify-center items-center h-48">
            <h3>"ted loaduju"</h3>
          </div>
        )}

        <img
          src={url}
          alt="Picture of the day"
          width="0"
          height="0"
          sizes="100%"
          className="w-full h-auto sm:w-[90%]"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  )
}
