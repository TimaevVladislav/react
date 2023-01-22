import React from "react"

import avatar from "../../public/images/avatar.png"

export const AvatarNavbar = ({title}) => (
  <div>
    <img className="object-cover w-16 h-16 border-2 border-[#31373F] rounded-full h-[43px] w-[40px]"src={avatar} alt="Avatar" />
    <p className="text-[#15A655] text-[11px] text-center font-bold pt-1">
      {title}
    </p>
  </div>
)

export const AvatarSettings = ({title}) => (
  <div>
    <img className="object-cover w-16 h-16 border-2 border-[#31373F] rounded-full h-[43px] w-[40px]"src={avatar} alt="Avatar" />
    <p className="text-[#15A655] text-[11px] text-center font-bold pt-1">
      {title}
    </p>
  </div>
)