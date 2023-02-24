"use client"

import React, { useState } from "react"
import EarthPhoto from "../../components/EarthPhoto"
import Image from "next/image"
import Geocode from "react-geocode"
import GeoTracker from "@/components/GeoTracker"
import Spinner from "../utilities/Spinner"
import GeneratedPic from "@/components/GeneratedPic"
import { CiSatellite1 } from "react-icons/ci"

type ImageProps = {
  url: string
}

function page() {
  //***States***
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState<{ lat: string; log: string }>({
    lat: "",
    log: "",
  })
  const [geoPossition, setGeoPossition] = useState<{
    lat: string
    log: string
    townAdress: string
  }>({ lat: "", log: "", townAdress: "" })
  //***Functions***
  function setIt(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        lat: e,
      }
    })
  }
  function setIt2(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        log: e,
      }
    })
  }
  //***Fetch NASA satelite image***
  async function generatePic() {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=${stats.log}&lat=${stats.lat}&date=2014-02-01&dim=0.15&api_key=qZyaHXJU6aSyiz1G5Xjy8Xzwcu4TaiHc8NgShKkb`
      )
      const data = await res.json()
      setUrl(data.url)
    } catch (error) {}
    setLoading(false)
  }
  return (
    <div className="min-h-[87vh]">
      <div className="flex flex-col justify-center items-center w-[100%] text-center">
        <h1 className="text-white text-[40px] m-auto top-[10vh] mt-7 ">
          Tvoje město satelitem
        </h1>
        <CiSatellite1 className="text-[160px] text-center text-white" />
      </div>

      <main className="w-full flex justify-evenly text-white items-center sm:flex-col">
        <div className="max-w-[50vw] min-w-[50vw] sm:max-w-[85%] sm:min-w-[85%] items-center justify-center flex">
          <div className="max-w-[50%] min-w-[50%] sm:max-w-[85%] sm:min-w-[85%] ">
            <GeoTracker
              setGeoPossition={setGeoPossition}
              geoPossition={geoPossition}
              setStats={setStats}
            />
            <GeneratedPic
              setIt={setIt}
              setIt2={setIt2}
              stats={stats}
              generatePic={generatePic}
              url={url}
              loading={loading}
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col max-w-[50vw] min-w-[50vw] sm:max-w-[85%] sm:min-w-[85%]">
          {url === "" ? "Čekám na vaše data" : <EarthPhoto url={url} />}

          {loading ? <Spinner /> : null}
        </div>
      </main>
    </div>
  )
}

export default page
