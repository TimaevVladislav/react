import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {InputPayment} from "@/components/Inputs.jsx"
import {ButtonPayment} from "@/components/Button.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"


import team from "/public/icons/main-icons/team.svg"
import circle from "../../../public/icons/payment/circle.svg"
import circleLoad from "../../../public/icons/payment/circle-load.svg"
import micro from "../../../public/icons/main-icons/micro.svg"

import bitcoin from "../../../public/icons/payment/bitcoin.svg"
import master from "../../../public/icons/payment/master.svg"
import paypal from "../../../public/icons/payment/paypal.svg"
import routes from "@/routes.jsx"

const SelectPeriod = () => {
  return (
    <>
      <select className="bg-[#1A1E2D] rounded-[21px] w-[96.64px] h-[25.4px] pr-2 text-white text-sm rounded-lg">
        <option>1 месяц</option>
      </select>
    </>
  )
}
const PaymentCard = () => {
  return (
    <div className="flex text-start bg-[#131621]">
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 pt-0">
        <div className="h-[402px] c-card block rounded-lg overflow-hidden">
          <div className="p-4 pt-0">
                <span className="flex items-center text-[16px] rounded-[5px] inline-block py-4 leading-none text-white font-semibold text-xs">
                  Тарифный план
                </span>
            <div className="flex justify-between  items-center rounded-[5px] inline-block py-2 leading-none font-semibold text-xs">
              <div className="flex items-center">
                <p className="text-[#919EAB]">Дополнительные <br/> пользователи</p>
              </div>
              <div className="flex rounded-[6px] items-center ">
                <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] mr-1">-</button>
                <button className="bg-[#1A1E2D] rounded-[21px] w-[56px] h-[23.25px]">12</button>
                <button className="bg-[#1A1E2D] rounded-[21px] w-[20px] h-[19.37px] ml-1">+</button>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="flex justify-between  items-center rounded-[5px] inline-block py-2 leading-none font-semibold text-xs">
              <div className="flex items-center text-[#919EAB]">
                <p className="text-[#919EAB]">Переод оплаты</p>
              </div>
              <div className="rounded-[6px] items-center">
                <SelectPeriod />
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="flex justify-between items-center rounded-[5px] inline-block py-2 leading-none font-semibold text-xs">
              <div className="flex items-center text-[#919EAB]">
                <InputPayment />
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="flex justify-between  items-center rounded-[5px] inline-block py-2 leading-none font-semibold text-xs">
              <div className="flex items-center">
                <p className="text-[#919EAB]">Ваша скидка</p>
              </div>
              <div className="rounded-[6px] items-center text-[18px]">
                <p className="text-[#15A655]">-$25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 pt-0">
        <div className="h-[402px] c-card block rounded-lg overflow-hidden">
          <div className="p-4 pt-0">
            <span className="flex items-center text-[16px] rounded-[5px] inline-block pt-4 leading-none text-white font-semibold text-xs">
             Способы оплаты
            </span>
          </div>
          <div className="p-4 pt-0">
           <div className="flex justify-between items-center pl-4 rounded-[5px] bg-[#1F232C] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
            <div className="flex items-center">
              <img src={circle} alt="icon" className="pr-1" />
              PayPal
            </div>
            <div className="bg-[#D9D9D9] rounded-[6px] items-center h-[29px] w-[51px]">
              <img src={paypal} alt="icon" className="pt-[3.5px] m-auto pl-[5px] pr-1" />
            </div>
           </div>
          </div>
          <div className="p-4 pt-0">
            <div className="flex justify-between items-center pl-4 rounded-[5px] bg-[#1F232C] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="flex items-center">
                <img src={circleLoad} alt="icon" className="pt-[3.5px] m-auto pl-[3wpx] pr-1" />
                Credit / Debit Card
              </div>
              <div className="bg-[#D9D9D9] rounded-[6px] items-center h-[29px] w-[51px]">
                <img  src={master} alt="icon" className="pt-[3.5px] m-auto pl-[5px] pr-1" />
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="flex justify-between items-center pl-4 rounded-[5px] bg-[#1F232C] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="flex items-center">
                <img src={circleLoad} alt="icon" className="pr-1" />
                Crypto
              </div>
              <div className="bg-[#D9D9D9] rounded-[6px] items-center h-[29px] w-[51px]">
                <img  src={bitcoin} alt="icon" className="pt-[1px] m-auto pl-[5px] pr-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 pt-0">
        <div className="h-[360px] c-card block bg-modal shadow-md hover:shadow-xl rounded-lg overflow-hidden">
          <div className="pt-0">
                <span className="flex items-center text-[16px] rounded-[5px] inline-block py-4 leading-none text-white font-semibold text-xs">
                  Итого
                </span>
            <div className="flex justify-between items-center text-[12px] pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Тариф
              </div>
              <div className="flex items-center text-[#15A655]">
                <img src={micro} alt="icon" className="pr-1" />
                Micro
              </div>
            </div>
            <div className="flex justify-between items-center text-[12px] pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Профили
              </div>
              <div className="flex items-center">
                150
              </div>
            </div>
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Пользователи
              </div>
              <div className="flex items-center">
                2
              </div>
            </div>
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Переод (мес.)
              </div>
              <div className="flex items-center">
                12
              </div>
            </div>
          </div>
          <div className="pt-0">
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Стоимость тарифа
              </div>
              <div className="flex items-center">
                $1245
              </div>
            </div>
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Доп. пользователи
              </div>
              <div className="flex items-center">
                $15
              </div>
            </div>
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center text-[#15A655] text-[12px]">
                Скидка (по промокоду)
              </div>
              <div className="flex items-center text-[#15A655]">
                -$2.5
              </div>
            </div>
            <div className="flex justify-between items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <div className="rounded-[6px] items-center">
                Комиссия
              </div>
              <div className="flex items-center">
                $0.5
              </div>
            </div>
          </div>
          <div className="pt-0">
            <h2 className="text-[30px] pt-[17px] pb-[17px] leading-[0] text-white font-bold text-center">
              $125
            </h2>
            <div className="flex justify-center items-center pl-4 rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
              <ButtonPayment title="Оплатить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export function Payment () {
  return (
    <div className="flex">
      <Sidenav routes={routes} brandImg="/logo.png" />
      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <DashboardNavbar icon={team} title={"ksy92"} />
        <Heading heading="Оплата" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white font-bold">
         <PaymentCard />
        </div>
      </div>
    </div>
  )
}
export default Payment
