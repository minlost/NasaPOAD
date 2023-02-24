"use client"

import React, { useState } from "react"
import EarthPhoto from "../../components/EarthPhoto"
import Image from "next/image"
import Geocode from "react-geocode"
import GeoTracker from "@/components/GeoTracker"
import Spinner from "../utilities/spinner"

type ImageProps = {
  url: string
}

function page() {
  //   const data = await getDataOfPicture()
  const [stats, setStats] = useState<{ lat: string; log: string }>({
    lat: "",
    log: "",
  })
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const [geoPossition, setGeoPossition] = useState<{
    lat: string
    log: string
    townAdress: string
  }>({ lat: "", log: "", townAdress: "" })

  function setIt(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        lat: e,
      }
    })
    console.log(stats)
  }
  function setIt2(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        log: e,
      }
    })
    console.log(stats)
  }

  async function generatePic() {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${stats.log}&lat=${stats.lat}&date=2014-02-01&dim=0.15&api_key=qZyaHXJU6aSyiz1G5Xjy8Xzwcu4TaiHc8NgShKkb`
      )
      const data = await res.json()
      setUrl(data.url)
      console.log(data.url)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }
  return (
    <>
      <div className="flex justify-center items-center w-[100%] text-center">
        <h1 className="text-white text-[40px] m-auto top-[10vh] ">
          Tvoje město satelitem
        </h1>
      </div>

      <main className=" text-white w-full h-screen gap-[100px] sm:gap-[15px]  flex sm:flex-col items-center">
        <div className=" w-[50%] flex flex-col">
          <div className="flex flex-col justify-center items-center ">
            <GeoTracker
              setGeoPossition={setGeoPossition}
              geoPossition={geoPossition}
              setStats={setStats}
            />
            <h2>Zeměpisná šířka</h2>
            <input
              className="m-1  text-black"
              type="text"
              value={stats.lat}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIt(e.target.value)
              }
            />

            <h2>Zeměpisná délka</h2>
            <input
              className="m-1  text-black"
              type="text"
              value={stats.log}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIt2(e.target.value)
              }
            />
            <button className="m-1 bg-black" onClick={generatePic}>
              Vygeneruj fotku
            </button>
          </div>
        </div>
        <div className=" w-[50%] sm:w-[100%] text-center">
          {url === "" ? "Čekám na vaše data" : <EarthPhoto url={url} />}

          {loading ? <Spinner /> : null}
        </div>
      </main>
    </>
  )
}

export default page
