import React from "react"
import {DashboardNavbar} from "@/widgets/layout/index.js"
import {Table} from "@/components/Table.jsx"
import {CardRefferral, CardStatistics} from "@/components/CardRefferral.jsx"

import free from "/public/icons/main-icons/free.svg"

export function Refferral() {
  return (
    <>
      <DashboardNavbar icon={free} />
      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <div>
         <div className="flex justify-between">
           <CardRefferral />
           <CardStatistics />
         </div>
        </div>
        <Table date="12.05.2023" email="accteam@mail.ru" price="$5454" />
      </div>
    </>
  );
}

export default Refferral
