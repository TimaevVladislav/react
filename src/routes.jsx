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
        path: "/midddle",
        element: <Home />
      },
      {
        icon: refferral,
        name: "Реферальная программа",
        path: "/free",
        element: <Refferral />
      },
      {
        icon: settings,
        name: "Настройки",
        path: "/micro",
        element: <Settings />
      },
      {
        icon: rates,
        name: "Тарифы",
        path: "/base",
        element: <Rates />
      },
      {
        icon:  payment,
        name: "Оплата",
        path: "/team",
        element: <Payment />,
      },
    ],
  }
]

export default routes
