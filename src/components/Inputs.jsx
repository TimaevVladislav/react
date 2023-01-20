import React from "react"
import switchIcon from "/public/icons/switch.svg"
export const Inputs = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="group w-72 md:w-80 lg:w-96">
        <label htmlFor="10" className="inline-block w-full text-sm font-medium text-white text-[11px] transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          Ваша реферальная ссылка
        </label>
        <div className="relative flex items-center">
          <input placeholder="vision.com" id="10" type="text" className="input-custom placeholder-[#15A655] bg-transparent placeholder-bold font-bold peer relative h-10 w-full rounded-md pl-4 pr-20 outline-none drop-shadow-sm transition-all duration-200 ease-in-out" />
          <img className="absolute right-2 h-4 w-9 rounded-md text-xs font-semibold text-white transition-all duration-200 ease-in-out" src={switchIcon} alt="switch" />
        </div>
      </div>
    </div>
  )
}

export const InputPayment = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="group">
        <label htmlFor="10" className="inline-block w-full text-sm text-[11px] font-medium text-white transition-all duration-200 ease-in-out">
          Промокод
        </label>
        <div className="relative flex items-center">
          <input placeholder="Введите промокод" id="10" type="text" className="input-custom bg-transparent text-[11px] peer relative h-10 w-full rounded-md pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out" />
          <button className="absolute right-2 h-7 w-16 rounded-md bg-[#15A655] text-[11px] text-xs font-semibold text-white transition-all duration-200 ease-in-out">
            Проверить
          </button>
        </div>
      </div>
    </div>
  )
}
