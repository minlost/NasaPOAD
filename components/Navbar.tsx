import Link from "next/link"
import React from "react"

function Navbar() {
  return (
    <>
      <nav className=" bg-black text-white   ">
        <div className="flex items-center justify-between mx-5 py-2 w-full h-8">
          <div className="">
            <Link href="/">NASA</Link>
          </div>
          {/* <ul className="flex space-x-2 ">
            <li>
              <Link href="/">Odkaz 1</Link>
            </li>
            <li>
              <Link href="/">Odkaz 2</Link>
            </li>
            <li>
              <Link href="/">Odkaz 3</Link>
            </li>
            <li>
              <Link href="/">Odkaz 4</Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
