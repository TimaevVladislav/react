import React from "react"
export const Notification = ({color}) => (
  <div className="inline-flex relative w-fit">
    <div className={`bg-[${color}]  absolute inline-block top-0 left-0.5 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 px-1 h-[16px] w-[16px] text-[11px] text-center whitespace-nowrap align-baseline font-bold text-white rounded-full z-10`}>
      5
    </div>
  </div>
)