import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"

import free from "/public/icons/main-icons/free.svg"
import micro from "/public/icons/main-icons/micro.svg"
import base from "/public/icons/main-icons/base.svg"
import middle from "/public/icons/main-icons/middle.svg"
import team from "/public/icons/main-icons/team.svg"
import routes from "@/routes.jsx"

export function Rates() {

  return (
   <div className="flex">
     <Sidenav routes={routes} brandImg="/logo.png" />
     <div>
       <DashboardNavbar icon={base} />
       <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-1">
         <Heading heading="Тарифы" />
         <div className="container mx-auto">
           <div className="flex flex-wrap -mx-4">
             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                <span className="flex items-center  justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-4 leading-none text-white font-semibold text-xs">
                  <img src={free} alt="icon" className="pr-1" />
                  Free
                </span>
                   <h2 className="mt-2 mb-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                 </div>
                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">
                     5
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     профилей
                   </h2>
                 </div>
                 <h2 className="text-[30px] text-base text-white font-bold text-center">
                   $0
                 </h2>
                 <div className="flex justify-center">
                   <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                     Оплатить
                   </button>
                 </div>
               </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                <span className="flex items-center justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-3 leading-none text-white font-semibold text-xs">
                  <img src={micro} alt="icon" className="pr-1" />
                  Micro
                </span>
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>

                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">
                     50
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     профилей
                   </h2>
                 </div>
                 <h2 className="text-[30px] pt-[17px] pb-[17px] text-base text-white font-bold text-center">
                   $29
                 </h2>
                 <div className="flex justify-center">
                   <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                     Оплатить
                   </button>
                 </div>
               </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                <span className="flex items-center justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-3 leading-none text-white font-semibold text-xs">
                  <img src={base} alt="icon" className="pr-1" />
                  Base
                </span>
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>
                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">
                     150
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     профилей
                   </h2>
                 </div>
                 <h2 className="text-[30px] pt-[17px] pb-[17px] text-base text-white font-bold text-center">
                   $79
                 </h2>
                 <div className="flex justify-center">
                   <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                     Оплатить
                   </button>
                 </div>
               </div>
             </div>
             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621]  shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
                <span className="flex items-center justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-3 leading-none text-white font-semibold text-xs">
                  <img src={middle} alt="icon" className="pr-1" />
                  Middle
                </span>
                   <h2 className="mt-2 text-white font-bold text-center text-[12px]">
                     Весь функционал
                   </h2>
                   <h2 className="mb-2 text-white font-bold text-center text-[12px]">
                     Создание команды
                   </h2>
                 </div>
                 <div className="p-4 border-t border-[#242937] border-b text-xs text-gray-700">
                   <h2 className="text-base text-white font-bold text-center">
                     500
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     профилей
                   </h2>
                   <h2 className="text-base text-white font-bold text-center">
                     по $15
                   </h2>
                   <h2 className="text-sm text-[#A2A8B6] font-bold text-center">
                     за пользователя
                   </h2>
                 </div>
                 <h2 className="text-[30px] pt-[17px] pb-[17px] text-base text-white font-bold text-center">
                   $199
                 </h2>
                 <div className="flex justify-center">
                   <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                     Оплатить
                   </button>
                 </div>
               </div>
             </div>

             <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
               <div className="h-[402px] c-card block bg-[#131621] shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                 <div className="p-4">
               <span className="flex items-center justify-center rounded-[5px] bg-[#1F232C] inline-block px-2 py-4 leading-none text-white font-semibold text-xs">
                 <img src={team} alt="icon" className="pr-1" />
                 Team
                </span>
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
                   <h2 className="text-base text-white font-bold text-center">5</h2>
                   <h2 className="text-base text-white font-bold text-center">профилей</h2>
                   <h2 className="text-base text-white font-bold text-center">по $15</h2>
                   <h2 className="text-sm text-[#A2A8B6] font-bold text-center">за пользователя</h2>
                 </div>
                 <h2 className="text-[30px] pt-[17px] pb-[17px] text-base text-white font-bold text-center">
                   $399
                 </h2>
                 <div className="flex justify-center">
                   <button type="button" className="border-solid border-2 border-white rounded-[34px] text-white hover:bg-[#15A655] hover:border-0 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
                     Оплатить
                   </button>
                 </div>
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
