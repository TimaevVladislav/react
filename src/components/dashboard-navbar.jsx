import React from "react"
import { useLocation } from "react-router-dom"
import { Navbar, IconButton } from "@material-tailwind/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { useMaterialTailwindController, setOpenSidenav } from "@/context/index.jsx"

import message from "/public/icons/message.svg"
import bell from "/public/icons/bell.svg"
import select from "../../public/icons/select.svg"

import {Range} from "@/components/Ranges.jsx"
import {AvatarNavbar} from "@/components/Avatars.jsx"
import {Notification} from "@/components/Notification.jsx"

const SelectLanguage = () => {
  return (
    <>
       <span className="pr-[20px] rounded-[0] border-r-[1px] border-[#1F232D] text-[#15A655] flex items-center justify-center rounded-[5px] inline-block px-2 py-2 leading-none text-white font-semibold text-xs">
        <img src={select} alt="icon" className="pr-1" />
        En
       </span>
    </>
  )
}

export function DashboardNavbar({icon, title, color, width, progressTitle}) {
  const [controller, dispatch] = useMaterialTailwindController()
  const { fixedNavbar, openSidenav } = controller

  const { pathname } = useLocation()
  const [layout, page] = pathname.split("/").filter((el) => el !== "")

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`border-b rounded-none border-[#242937] transition-all ${fixedNavbar ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5" : "px-0 py-1"}`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex pb-[10px] flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex ml-[20px]">
          <img src={icon} alt={page} />
          <h1 className="m-auto ml-[10px] text-[#15A655] text-xs font-bold leading-3 not-italic">
            {page}
          </h1>
          <Range title={progressTitle} color={color} width={width} />
        </div>

        <div className="flex items-center">
          <SelectLanguage />
         <div className="p-4 pt-0 ml-2">
           <Notification color="#7750F8" />
           <img src={message} alt="message" />
         </div>


          <div className="p-4 pt-0">
            <Notification color="#15A655" />
            <img src={bell} alt="bell" />
          </div>

          <AvatarNavbar title={title} />

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar
