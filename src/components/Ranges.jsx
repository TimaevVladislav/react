import React from "react"

const ProgressBar = ({progressColor, progressWidth}) => (
  <>
    <div className="w-[160px] ml-[45px] bg-[#2A2F41] rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div className={`${progressColor}  ${progressWidth}`}></div>
    </div>
  </>
)
export const Range = ({progressColor, progressWidth}) => (
  <div>
    <div className="flex justify-between w-[170px] items-center text-white font-bold ml-[40px] rounded-[5px] px-2 py-2 leading-none text-white ">
      <div className="items-center w-[160px]">
        <h1 className="text-[10px] normal-case">Лицензии до:</h1>
      </div>
      <div className="items-center">
        <p className="text-white text-[12px]">02.03.23</p>
      </div>
    </div>
    <ProgressBar
      progressColor={progressColor}
      progressWidth={progressWidth}
    />
  </div>
)