import Image from "next/image"
import PicturesOfADay from "@/components/PicturesOfADay"

async function GetData() {
  const response = await fetch(
    "http://api.positionstack.com/v1/forward?access_key=3a9ac87e05d6d8cff6a635b9a1601421&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC",
    { mode: "no-cors" }
  )
  const data = await response.json()
  console.log(data)
}

type ImageProps = {
  url: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
}

function getPreviousDay(day: number): string {
  const previous = new Date(new Date().getTime())
  previous.setDate(new Date().getDate() - day)
  return previous.toISOString().split("T")[0]
}

function pushDates(callback: (day: number) => string): string[] {
  let arrOfDays = []
  for (let i = 0; i < 12; i++) {
    arrOfDays.push(callback(i - 1))
  }
  return arrOfDays
}

let arrOfDays = pushDates(getPreviousDay)

let yourDate = new Date().toISOString().split("T")[0]

async function getDataOfPicture(num: string): Promise<ImageProps> {
  const data = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${num}&api_key=${process.env.API_KEY}`
  )
  return data.json()
}

// console.log(yourDate)

export default async function Home() {
  let newArr = []
  for (let i = 1; i < arrOfDays.length; i++) {
    const data = await getDataOfPicture(arrOfDays[i])
    newArr.push(data)
  }

  GetData()

  return (
    <>
      <div className="flex justify-center content-center  h-[150px] my-7">
        <img src="/NASA_logo.png" alt="" />
        <br />
      </div>
      <h1 className="text-gray-100 text-center	text-[45px] my-3 lg:text-[30px] ">
        NASA Pictures Of A Day
      </h1>

      <main className=" text-white w-full flex flex-row-reverse lg:flex-col lg:gap-0 gap-1 justify-center items-center ">
        <PicturesOfADay arr={newArr} />
      </main>
    </>
  )
}
