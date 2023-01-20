import React from "react"
import message from "/public/icons/message.svg"
import light from "../../public/icons/light.svg"
import website from "../../public/icons/website.svg"

export const Button = () => (
  <div>
    <div className="flex w-full flex-wrap justify-between  items-center gap-6">
      <FooterDashboard />
      <button type="button" className="rounded text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        <img src={message} alt="message" className="pr-1.5" />
        <div className="text-xl font-mono font-bold pt-0.5">
          Помощь оператора
        </div>
      </button>
    </div>
  </div>
)

export const ButtonPayment = ({ title }) => (
 <>
   <div className="justify-center">
     <button type="button" className="bg-[#15A655] rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
       {title}
     </button>
   </div>
 </>
)

const FooterDashboard = () => (
  <div className="flex gap-4 text-[#313645] font-bold">
    <div className="flex pl-[20px]">
      <img src={light} alt="light" />
      <p className="text-[10px] leading-3 m-auto pl-1">
        Светлый
      </p>
    </div>
    <div className="flex pl-[80px]">
      <div>
        <img className="h-[17px] w-[17px]" src={website} alt="website" />
      </div>
      <p className="text-[10px] leading-3 m-auto pl-1">
        На сайт
      </p>
    </div>
  </div>
)