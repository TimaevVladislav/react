import { Routes, Route } from "react-router-dom"
import { Cog6ToothIcon } from "@heroicons/react/24/solid"
import { IconButton } from "@material-tailwind/react"
import {
  Sidenav,
  Configurator,
  Footer,
} from "@/widgets/layout"
import routes from "@/routes"
import { useMaterialTailwindController, setOpenConfigurator } from "@/context"

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();

  return (
    <div className="flex m-auto">
      <div className="p-4 xl:ml-80 bg-[#161A27] rounded-[25px]">
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
