"use client"
import React, { useState, useEffect } from "react"

import { log } from "console"
import Image from "next/image"

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { GiCancel } from "react-icons/gi"
import { FaPlay } from "react-icons/fa"
import { AiOutlinePause } from "react-icons/ai"

type ImageProps = {
  url: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
}

type picProps = {
  arr: ImageProps[]
}

function PicturesOfADay({ arr }: picProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    setAudio(new Audio("/34723.mp3"))
    console.log("audio useeffected")
  }, [])

  const [active, setActive] = useState(false)
  const [titles, setTitles] = useState<string>()
  const [modUrl, setModUrl] = useState("")
  const [indexImg, setIndexImg] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function handleClick(tit: string) {
    setTitles(tit)
  }
  function handleExpand(modSrc: string, idx: number) {
    setActive(true)
    setModUrl(modSrc)
    setIndexImg(idx)
  }

  function playMusic() {
    console.log(audio)
    if (!isPlaying) {
      audio?.play()
      setIsPlaying(true)
    } else {
      audio?.pause()
      setIsPlaying(false)
    }
  }

  function handleMove(direction: string) {
    let ixNum = indexImg
    if (direction === "left") {
      if (ixNum < 10 && ixNum >= 0) {
        let ix = arr[indexImg + 1].url
        setIndexImg(indexImg + 1)
        setModUrl(ix)
      }
    }
    if (direction === "right") {
      if (ixNum <= 10 && ixNum > 0) {
        let ix = arr[indexImg - 1].url
        setIndexImg(indexImg - 1)
        setModUrl(ix)
      }
    }
  }

  return (
    <>
      <FaPlay
        onClick={() => playMusic()}
        className={`absolute top-[40px] right-[50px] text-[25px] ${
          isPlaying ? "opacity-90" : "opacity-50"
        } text-white cursor-pointer hover:opacity-80`}
      />

      <AiOutlinePause
        onClick={() => playMusic()}
        className={`absolute top-[35px] right-[15px] text-[35px] ${
          isPlaying ? "opacity-50" : "opacity-90"
        } text-white cursor-pointer hover:opacity-80`}
      />
      <button
        onClick={() => console.log(isPlaying, audio)}
        className="w-[100px] h-[100px]"
      >
        CLICK to CL
      </button>
      <button onClick={() => playMusic()} className="w-[100px] h-[100px]">
        CLICK to play
      </button>

      {arr.map((arr, index) => (
        <div
          key={index}
          className={`my-4 relative lg:my-0 ${
            titles === arr.title
              ? "w-[500px] lg:h-[500px] lg:w-[90%]"
              : "w-[100px]  lg:h-[50px] lg:w-[90%]"
          }  cursor-pointer ease-in-out duration-[900ms]  `}
          onClick={() => handleClick(arr.title)}
        >
          {titles === arr.title ? (
            <h2 className="absolute top-1 left-1">
              {arr.title} <br />
              {arr.date}
            </h2>
          ) : null}
          {titles === arr.title ? (
            <BsArrowsAngleExpand
              onClick={() => handleExpand(arr.url, index)}
              className=" ease-in-out duration-[1200ms]  absolute right-5 top-2 text-[30px] opacity-30 hover:opacity-80 "
            />
          ) : null}

          <h2 className="hidden absolute top-1 left-1 lg:block lg:opacity-20 ">
            {arr.title}
          </h2>

          {titles === arr.title ? (
            <p className=" ease-in-out delay-[200ms] duration-[1200ms] absolute bottom-0 left-1 text-[10px] opacity-0 hover:opacity-80 ;">
              {arr.explanation}
            </p>
          ) : null}

          <Image
            src={arr.url}
            alt="Picture of the day"
            width="100"
            height="100"
            sizes="100%"
            className={`${
              titles === arr.title
                ? "w-[100%] lg:h-[500px] "
                : "w-[100%] lg:w-[100%] lg:h-[50px]"
            } h-[500px] lg:h-[] object-cover ease-in-out duration-[900ms]`}
            quality={100}
          />
        </div>
      ))}

      <div
        className={`bg-black w-screen h-screen z-50 
        absolute top-0 right-0  ${
          active ? "opacity-50 block" : "opacity-0 hidden"
        } flex justify-center items-center`}
      />
      <img
        src={`${modUrl}`}
        className={` absolute
        w-[70%] h-[70%]  bg-black  z-50 top-[20vh] ${
          active ? `block object-contain` : "hidden"
        }`}
      />

      {active && (
        <AiOutlineArrowLeft
          onClick={() => handleMove("left")}
          className=" cursor-pointer text-white absolute top-[50%] left-[20%] text-[36px] z-[60] opacity-30 hover:opacity-80 ease-in-out duration-[300ms]"
        />
      )}
      {active && (
        <AiOutlineArrowRight
          onClick={() => handleMove("right")}
          className=" cursor-pointer text-white absolute top-[50%] right-[20%] text-[36px] z-[60] opacity-50 hover:opacity-80 ease-in-out duration-[300ms]"
        />
      )}
      {active && (
        <GiCancel
          className="text-white absolute top-[25%] right-[20%] text-[36px] z-[60] cursor-pointer  opacity-30 hover:opacity-80 ease-in-out duration-[300ms] "
          onClick={() => setActive(false)}
        />
      )}
    </>
  )
}

export default PicturesOfADay
