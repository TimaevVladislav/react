import React from "react"

const ProgressBar = () => (
  <>
    <div className="mb-1 text-base font-medium dark:text-white">Small</div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"></div>
    </div>
  </>
)
export const Range = () => (
  <div className="flex justify-between items-center text-white font-bold ml-[40px] rounded-[5px] inline-block px-2 py-2 leading-none text-white ">
    <div>
      <div className="items-center w-[160px]">
        <h1 className="text-[10px]">Лицензии до:</h1>
      </div>
      <div className="items-center">
        <p className="text-white text-[12px]">02.03.23</p>
      </div>
      <ProgressBar />
    </div>
  </div>
)
