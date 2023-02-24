import React from "react"

function Spinner() {
  return (
    <div className="flex justify-center items-center h-48">
      <svg className="animate-spin h-8 w-8 text-gray-500" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 018 8v-2a6 6 0 00-6-6h-2zm-4 4a4 4 0 110-8 4 4 0 010 8z"
        ></path>
      </svg>
    </div>
  )
}

export default Spinner
