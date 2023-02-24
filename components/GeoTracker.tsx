"use client"
import { type } from "os"
import React, { useState } from "react"

type GeoTrackerProps = {
  setGeoPossition: React.Dispatch<
    React.SetStateAction<{ lat: string; log: string; townAdress: string }>
  >
  geoPossition: { lat: string; log: string; townAdress: string }
  setStats: React.Dispatch<React.SetStateAction<{ lat: string; log: string }>>
}

function GeoTracker({
  setGeoPossition,
  geoPossition,
  setStats,
}: GeoTrackerProps) {
  const [place, setPlace] = useState("")
  const [loading, setLoading] = useState(false)

  async function getLatLng(place: string) {
    setLoading(true)

    const cityName = place
    const apiKey = "def862a95c71423baa2e4d5aeb01cda3"
    const endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}`

    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      const latitude: string = data.results[0].geometry.lat
      const longitude: string = data.results[0].geometry.lng
      const townName: string = data.results[0].formatted
      setGeoPossition({ lat: latitude, log: longitude, townAdress: townName })
      setStats({ lat: latitude, log: longitude })
      console.log(`Longitude: ${longitude}`)
      console.log(townName)
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <>
      <div className="mt-4 flex flex-col">
        <h3 className="">Zvolte vaše město</h3>
        <input
          className="bg-white text-black	"
          type="text"
          onChange={(e) => setPlace(e.target.value)}
        />
        <button className="m-1 bg-black" onClick={() => getLatLng(place)}>
          Najdi zěmepisnou šířku a délku
        </button>
        <div>
          <h4>
            Jméno města: {geoPossition.townAdress}{" "}
            {loading ? "Loading..." : geoPossition.townAdress}
          </h4>
          <h4>Zeměpisná délka: {loading ? "Loading..." : geoPossition.lat}</h4>
          <h4>Zeměpisná šířka: {loading ? "Loading..." : geoPossition.log}</h4>
        </div>
      </div>
    </>
  )
}

export default GeoTracker
