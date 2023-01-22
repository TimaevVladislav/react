import React from "react"
export const Tables = ({ date, email, price }) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left">
      <thead className="bg-[#21283B] text-white text-xs">
      <tr>
        <th scope="col" className="px-6 py-3 text-[14px]">
          Дата
        </th>
        <th scope="col" className="px-6 py-3 text-[14px]">
          E-mail
        </th>
        <th scope="col" className="px-6 py-3 text-[14px]">
          Сумма
        </th>
      </tr>
      </thead>
      <tbody className="text-white">
      <tr className="border-[#242937] border-b">
        <th scope="row" className="px-6 py-4 font-bold text-[#919EAB]">
          {date}
        </th>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
          {email}
        </td>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
           {price}
        </td>
      </tr>
      <tr className="border-[#242937] border-b">
        <th scope="row" className="px-6 py-4 font-bold text-[#919EAB]">
          {date}
        </th>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
          {email}
        </td>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
          {price}
        </td>
      </tr>
      <tr className="border-[#242937">
        <th scope="row" className="px-6 py-4 font-bold text-[#919EAB]">
          {date}
        </th>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
          {email}
        </td>
        <td className="px-6 py-4 font-bold text-[#919EAB]">
          {price}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
)

export const TableHome = ({ email, account }) => (
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full bg-table-banner text-sm text-left">
      <thead className="bg-[#21283B] text-white text-xs ">
      <tr>
        <th scope="col" className="px-6 py-5 text-[14px]">
          {account}
        </th>
        <th scope="col" className="px-6 py-5 text-[14px]">
          {email}
        </th>
      </tr>
      </thead>
      <tbody className="text-white font-bold border-[#242937] text-[#919EAB]">
      <tr className="border-[#242937] border-b">
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
    </table>
  </div>
)