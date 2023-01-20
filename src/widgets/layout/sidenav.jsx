import { Link, NavLink } from "react-router-dom"


import logo from "/public/logo.png"
import apple from "/public/icons/apple.png"
import penguin from "/public/icons/penguin.svg"
import cube from "/public/icons/cube.svg"
import website from "/public/icons/website.svg"
import light from "/public/icons/light.svg"


import { Button, IconButton } from "@material-tailwind/react"


import { useMaterialTailwindController, setOpenSidenav } from "@/context"

export function Sidenav({ brandImg, brandName, routes }) {

  const [controller, dispatch] = useMaterialTailwindController()
  const { sidenavColor, sidenavType, openSidenav } = controller;


  return (
    <div>
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <img src={logo} alt="logo" />
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >

        </IconButton>

      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">

            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                {title}
              </li>
            )}

            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    // <Button variant={isActive ? "gradient" : "text"}
                    //   color={isActive ? sidenavColor : sidenavType === "dark" ? "#919EAB" : "#919EAB"}
                    //   className="flex items-center gap-4 px-4 capitalize rounded-none"
                    //   fullWidth
                    // >
                    //   <img src={icon} alt={name} />
                    //
                    //   {name}
                    // </Button>

                    <button className="flex items-center gap-4 px-4 capitalize rounded-none font-bold">
                      <img src={icon} alt={name} />

                      {name}
                    </button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="relative border-b border-[#242937]"></div>
      <FooterDashboard />
      <div className="flex justify-between gap-4 px-8 text-[#313645] font-bold">
        <div className="flex">
          <img src={light} alt="light" />
          <p className="text-[10px] leading-3 m-auto pl-1">
            Светлый
          </p>
        </div>
        <div className="flex">
          <div>
            <img className="h-[17px] w-[17px]" src={website} alt="website" />
          </div>
          <p className="text-[10px] leading-3 m-auto pl-1">
            На сайт
          </p>
        </div>
      </div>
    </div>
  )
}


const FooterDashboard = () => (
  <footer className="items-center gap-4 py-6 px-8">
    <p className="font-bold text-white leading-4 uppercase">
      Скачать приложение
    </p>
    <div className="flex justify-around w-[60%] mt-5">
      <div>
        <img src={penguin} alt="penguin" />
      </div>
      <div>
        <img src={cube} alt="cube" />
      </div>
      <div>
        <img src={apple} alt="apple" />
      </div>
    </div>
  </footer>
)

export default Sidenav
