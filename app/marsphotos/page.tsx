"use client"

import React, { useState } from "react"
import EarthPhoto from "../../components/EarthPhoto"
import Image from "next/image"

type ImageProps = {
  url: string
}

// async function getDataOfPicture(): Promise<ImageProps> {
//   const data = await fetch(
//     `https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=${process.env.API_KEY}`
//   )
//   return data.json()
// }

function page() {
  //   const data = await getDataOfPicture()
  const [stats, setStats] = useState<{ lon: string; lat: string }>({
    lon: "",
    lat: "",
  })
  const [url, setUrl] = useState("")

  function setIt(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        lon: e,
      }
    })
    console.log(stats)
  }
  function setIt2(e: string) {
    setStats((prevState) => {
      return {
        ...prevState,
        lat: e,
      }
    })
    console.log(stats)
  }

  async function generatePic() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${stats.lon}&lat=${stats.lat}&date=2014-02-01&dim=0.15&api_key=qZyaHXJU6aSyiz1G5Xjy8Xzwcu4TaiHc8NgShKkb`
    )
    const data = await res.json()
    setUrl(data.url)
  }
  return (
    <main className=" text-white w-full h-screen   flex justify-center items-center">
      <div className=" flex flex-col">
        <h2>Lon</h2>
        <input
          className="m-1  text-black"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIt(e.target.value)
          }
        />
        <h2>Lat</h2>
        <input
          className="m-1  text-black"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIt2(e.target.value)
          }
        />
        <button className="m-1 bg-black" onClick={generatePic}>
          Send
        </button>
      </div>
      <div className=" relative w-3/4 md:w-3/5  lg:w-3/6 ">
        {url === "" ? "Waiting for your data" : <EarthPhoto url={url} />}
      </div>
    </main>
  )
}

export default page
