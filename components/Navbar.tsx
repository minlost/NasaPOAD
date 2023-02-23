import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <>
      <nav className=" bg-black text-white   ">
        <div className="flex items-center justify-between w-full px-2 ">
          <div className="">
            <Link href="/">NASA</Link>
          </div>
          <ul className="flex gap-2 ">
            <li className="">
              <Link href="/satelitepic">Zkus satelit</Link>
            </li>
            <li>
              <Link href="/">Zkus POAD</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
