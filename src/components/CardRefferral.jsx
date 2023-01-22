import React from "react"
import refferralCard from "../../public/icons/refferral-card.svg"
import {Heading} from "@/components/Heading.jsx"
import {Inputs} from "@/components/Inputs.jsx"

export const CardRefferral = () => {
  return (
   <>
     <div className="relative overflow-x-auto sm:rounded-lg">
       <Heading heading="Реферальнная система" />
       <div className="h-[163px] w-[475.5px] bg-refferral c-card block rounded-lg overflow-hidden">
         <div className="flex">
           <div className="w-[120px] m-auto">
             <img src={refferralCard} alt="icon" className="pl-[25px] pb-[91px]" />
           </div>
           <div className="col-4">
             <p className="items-center text-[14px] rounded-[5px] inline-block py-4 leading-none text-white font-semibold text-xs">
               Вы получите <span className="text-[#15A655] pl-1 pr-1">15% от всех платежей</span> приведенных вами пользователей пожизненно.
             </p>
             <p className="text-[#919EAB] items-center rounded-[5px] inline-block leading-none text-white font-semibold text-xs">
               Для вывода реферальных средств, свяжитесь с оператором
             </p>
             <Inputs />
           </div>
         </div>
       </div>
     </div>
   </>
  )
}

export const CardStatistics = () => {
  return (
    <div className="ml-[30px] relative overflow-x-auto sm:rounded-lg">
      <Heading heading="Ваша статистика" />
      <div className="h-[163px] w-[321.75px] bg-statistics c-card block rounded-lg overflow-hidden">
          <div className="h-[81px] w-[321.75px] flex justify-between items-center pl-4 rounded-[5px] rounded-b-[0] inline-block py-2 leading-none text-white font-semibold text-xs">
            <div className="items-center w-[321.75px] text-center">
              <h1 className="font-bold text-[30px]">1544</h1>
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-[13px]">Всего зарегистрировано пользователей по вашей реферальной ссылке</h1>
            </div>
          </div>
          <div className="h-[81px] w-[321.75px] flex justify-between items-center border-[#242937] border-t rounded-b-[5px] inline-block py-2 leading-none text-white font-semibold text-xs">
            <div className="items-center w-[321.75px] text-center">
              <h1 className="font-bold text-[16px]">Баланс:</h1>
            </div>
            <div className="items-center w-[350.75px]">
              <h1 className="font-bold text-[30px] text-[#15A655] pr-[90px]">$1544</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
