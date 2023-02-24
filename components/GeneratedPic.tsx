import React from "react"
import EarthPhoto from "./EarthPhoto"
import Spinner from "@/app/utilities/Spinner"

type GeneratedPicProps = {
  stats: {
    lat: string
    log: string
  }
  setIt: (e: string) => void
  setIt2: (e: string) => void
  generatePic: () => Promise<void>
  url: string
  loading: boolean
}

function GeneratedPic({
  stats,
  setIt,
  setIt2,
  generatePic,
  url,
  loading,
}: GeneratedPicProps) {
  return (
    <div className="flex flex-col">
      {" "}
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
  )
}

export default GeneratedPic
