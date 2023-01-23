import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {TableHome} from "@/components/Tables.jsx"
import {DashboardNavbar, Sidenav} from "@/widgets/layout/index.js"

import middle from "/public/icons/main-icons/middle.svg"
import routes from "@/routes.jsx"


const TableFields = () => (
  <tbody className="font-bold text-[#919EAB]">
  <tr className="border-b border-[#242937]">
    <td className="px-6 py-4 whitespace-nowrap text-sm">
      Тариф
    </td>
    <td className="text-sm whitespace-nowrap text-[#15A655]">
      Base
      <button type="button" className="button-custom text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1  text-sm px-6 py-1 ml-[22px] text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        Купить
      </button>
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="px-6 py-4 whitespace-nowrap text-sm ">
      Пользователи
    </td>
    <td className="text-sm whitespace-nowrap">
      1/2
      <button type="button" className="button-custom text-white bg-[#15A655] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-1 text-sm px-4 py-1 ml-[30px] text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        Добавить
      </button>
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="pl-6 py-4 whitespace-nowrap text-sm">
      Количество команд
    </td>
    <td className="text-sm py-4 whitespace-nowrap">
      2
    </td>
  </tr>
  <tr className="border-b border-[#242937]">
    <td className="pl-6 py-4 whitespace-nowrap text-sm">
      Окончания лицензии
    </td>
    <td className="text-sm py-4 whitespace-nowrap">
      02.03.2023
    </td>
  </tr>
  </tbody>
)

export function Home() {

  const progressRange = {
    color: "progress-home h-1.5 rounded-full",
    width: "w-[119px]"
  }

  return (
    <div className="flex">
        <Sidenav routes={routes} brandImg="/logo.png" />
      <div className="w-[825px] h-[650px]">
        <DashboardNavbar
          icon={middle}
          title={"accteam ..."}
          color={progressRange.color}
          width={progressRange.width}
        />
        <div className="mt-12">
          <Heading heading="Обзор" />
          <div className="rounded-[7px]">
            <TableHome account="Аккаунт" email="accteam@mail.ru" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
