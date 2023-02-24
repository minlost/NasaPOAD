import Link from "next/link"
import React from "react"
import { CiSatellite1 } from "react-icons/ci"
import { SlPicture } from "react-icons/sl"

function Navbar() {
  return (
    <>
      <nav className=" bg-black text-white   ">
        <div className="flex items-center justify-between w-full px-2 ">
          <div className="">
            <Link href="/" className="text-[1.5rem]">
              NASA
            </Link>
          </div>
          <ul className="flex gap-2 ">
            <li className="">
              <Link href="/satelitepic">
                <CiSatellite1 className="text-[40px]" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <SlPicture className="text-[30px] mt-1" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
