import React from "react"
import message from "/public/icons/message.svg"
export const Button = () => (
  <div>
    <div className="flex w-full flex-wrap justify-end items-center gap-6">
      <button type="button" className="rounded text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        <img src={message} alt="message" className="pr-1.5" />
        <div className="text-xl font-mono font-bold pt-0.5">
          Помощь оператора
        </div>
      </button>
    </div>
  </div>
)
export const ButtonPayment = () => (
 <>
   <div className="justify-center">
     <button type="button" className="bg-[#15A655] rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
       Оплатить
     </button>
   </div>
 </>
)