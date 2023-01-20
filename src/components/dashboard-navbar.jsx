import { useLocation } from "react-router-dom"
import { Navbar, IconButton } from "@material-tailwind/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { useMaterialTailwindController, setOpenSidenav } from "@/context/index.jsx"

import message from "/public/icons/message.svg"
import bell from "/public/icons/bell.svg"
import avatar from "/public/images/avatar.png"
import React from "react";
import { Range } from "@/components/Range.jsx";

const SelectLanguage = () => {
  return (
    <>
      <select className="bg-[#161A27] p-0 text-white font-bold text-[#15A655] text-[12px] mr-7">
        <option>En</option>
      </select>
    </>
  )
}

export function DashboardNavbar({icon}) {
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
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex ml-[20px]">
          <img src={icon} alt={page} />
          <h1 className="m-auto ml-[10px] text-[#15A655] text-xs font-bold leading-3 not-italic">
            {page}
          </h1>
          <Range />
        </div>


        <div className="flex items-center">
          <SelectLanguage />
         <div className="p-4">
           <img src={message} alt="message" />
         </div>

          <div className="p-4">
            <img src={bell} alt="bell" />
          </div>

          <div>
            <img className="object-cover w-16 h-16 border-2 border-[#31373F] rounded-full" src={avatar} alt="Avatar" />
          </div>

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
