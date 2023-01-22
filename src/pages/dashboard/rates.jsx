import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"

import free from "/public/icons/main-icons/free.svg"
import micro from "/public/icons/main-icons/micro.svg"
import base from "/public/icons/main-icons/base.svg"
import middle from "/public/icons/main-icons/middle.svg"
import team from "/public/icons/main-icons/team.svg"
import select from "/public/icons/select.svg"
import routes from "@/routes.jsx"

const RateIcons = ({icon, title}) => (
  <span className="flex items-center  justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-3 leading-none text-white font-semibold text-xs">
  <img src={icon} alt={title} className="pr-1 h-[15px]" height="13px" width="22px" />
    {title}
  </span>
)

const RateButton = ({price}) => (
  <>
    <h2 className="text-[30px] text-base text-white font-bold text-center">
      ${price}
    </h2>
    <div className="flex justify-center">
      <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center">
        Оплатить
      </button>
    </div>
  </>
)

const Profiles = ({amount}) => (
  <div className="p-4 h-[120px] border-t  border-b border-[#242937] text-xs text-gray-700">
    <h2 className="text-base text-white font-bold text-center">
      {amount}

    </h2>
    <h2 className="text-base text-white font-bold text-center">
      профилей
    </h2>
  </div>
)

export function Rates() {

  const progressRange = {
    color: "progress-rates h-1.5 rounded-full",
    width: "w-[19px]"
  }

  return (
   <div className="flex">
     <Sidenav routes={routes} brandImg="/logo.png" />
     <div>
       <DashboardNavbar
         icon={base}
         title={"ksy92"}
         progressColor={progressRange.color}
         progressWidth={progressRange.width}
       />
       <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-1">
         <Heading heading="Тарифы" />
         <div className="container mx-auto">
           <div className="flex flex-wrap -mx-4">
             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                   <RateIcons icon={free} title="Free" />
                   <h2 className="mt-2 mb-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                 </div>
                 <Profiles amount={5} />
                 <RateButton price={5} />
                </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                   <RateIcons icon={micro} title="Micro" />
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>
                 <Profiles amount={50} />
                 <RateButton price={29} />
               </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                   <RateIcons icon={base} title="Base" />
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>
                 <Profiles amount={150} />
                 <RateButton price={79} />
               </div>
             </div>
             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621]  shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                 <RateIcons icon={middle} title="Middle" />
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>

                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">
                     $500
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     профилей
                   </h2>
                   <div className="flex justify-center rounded-[6px] items-center font-bold text-white pt-1 pb-1">
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] mr-1">-</button>
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[56px] h-[23.25px]">2</button>
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] ml-1">+</button>
                   </div>
                   <h2 className="text-base text-white font-bold text-center">
                     по $15
                   </h2>
                   <h2 className="text-sm text-[#A2A8B6] font-bold text-center">
                     за пользователя
                   </h2>
                 </div>
                 <RateButton price={199} />
               </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                 <RateIcons icon={team} title="Team" />
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>
                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">по $199</h2>
                   <h2 className="text-[#A2A8B6] text-[10.5px] font-bold text-center">за каждые 1500 профилей</h2>
                   <span className="text-[#15A655] flex items-center justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
                   <img src={select} alt="icon" className="pr-1" />
                    4500
                   </span>

                   <div className="flex justify-center rounded-[6px] items-center font-bold text-white pt-2 pb-2">
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] mr-1">-</button>
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[56px] h-[23.25px]">2</button>
                     <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] ml-1">+</button>
                   </div>
                   <h2 className="text-base text-white font-bold text-center">5</h2>
                   <h2 className="text-base text-white font-bold text-center">профилей</h2>
                   <h2 className="text-base text-white font-bold text-center">по $15</h2>
                   <h2 className="text-sm text-[#A2A8B6] font-bold text-center">за пользователя</h2>
                 </div>
                 <RateButton price={399} />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Rates
