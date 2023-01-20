import React from "react"
import {Heading} from "@/components/Heading.jsx"
import {DashboardNavbar} from "@/widgets/layout/index.js"
import micro from "../../../public/icons/main-icons/micro.svg"

export function Settings() {
  return (
   <>
     <DashboardNavbar icon={micro} />
     <div className="mt-12 mb-8 flex flex-col gap-12">
       <Heading heading="Настройки" />
     </div>
   </>
  );
}

export default Settings;
