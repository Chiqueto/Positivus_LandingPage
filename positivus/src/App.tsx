import Logo from "./assets/Icon.svg";
import Arrow from "./assets/card_imgs/Arrow 1.svg"
import "./index.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBarItems } from "./components/NavBarItems.tsx"
import { useState } from "react";
import { AboutUs } from "./sections/AboutUsSection.tsx";
import Search_engine from "./assets/card_imgs/Search_engine.png"

export function App() {
  const [isNavBarhidden, setNavBarhidden] = useState(false)

  function changeNavBar(){
    isNavBarhidden ? setNavBarhidden(false) : setNavBarhidden(true)
  }


  return (
    <main className="mb-36 mx-5 lg:mx-24">
      <header className="my-7 lg:my-14 flex items-center text-xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-3xl font-semibold">
              <img src={Logo} /> Positivus
            </div>
            {isNavBarhidden ? <NavBarItems variant="opened"/> : <NavBarItems variant="hidden"/>}
            <FontAwesomeIcon onClick={changeNavBar} icon={faBars} className=" lg:hidden"/>
          </div>
        </header>

      <AboutUs />

      <section className="mt-14">
        <div>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start">
            <h2 className="bg-lime-300 inline text-4xl font-medium p-1 rounded-md">Services</h2>
            <p className="mt-7 text-lg text-center text-balance lg:mt-0 lg:ml-10 lg:text-left lg:w-3/5">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>
        </div>
        <div>
          <div className="w-full p-12 bg-zinc-100 rounded-3xl border-solid border-black border">
            <div className="">
              <h3 className="bg-lime-300 inline text-2xl font-medium p-1 rounded-md">Search engine <br /> optimization</h3>
              <div className="mt-6 flex flex-row">
                <img src={Search_engine} alt="" />
                <span className="rounded-full w-10 h-10 bg-black flex items-center justify-center text-zinc-100"><img src={Arrow} alt="" /></span>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>

    </main>
  );
}
