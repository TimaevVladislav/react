import { Home, Refferral, Settings, Rates, Payment } from "@/pages/dashboard"


import view from "/public/icons/view.svg"
import refferral from "/public/icons/refferral.svg"
import settings from "/public/icons/settings.svg"
import rates from "/public/icons/rates.svg"
import payment from "/public/icons/payment.svg"

export const routes = [
  {
    layout: "dashboard",
    date: "02.03.23",
    pages: [
      {
        icon: view,
        name: "Обзор",
        title: "Лицензии до:",
        path: "/midddle",
        element: <Home />
      },
      {
        icon: refferral,
        name: "Реферальная программа",
        title: "Лицензии до:",
        path: "/free",
        element: <Refferral />
      },
      {
        icon: settings,
        name: "Настройки",
        title: "Лицензии до:",
        path: "/micro",
        element: <Settings />
      },
      {
        icon: rates,
        name: "Тарифы",
        title: "Лицензии до:",
        path: "/base",
        element: <Rates />
      },
      {
        icon:  payment,
        name: "Оплата",
        title: "",
        path: "/team",
        element: <Payment />,
      },
    ],
  }
]

export default routes
