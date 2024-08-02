import Logo from "./assets/Icon.svg";
import Megafone from "./assets/Illustration.png";
import Amazon from "./assets/logos/Company logo.png";
import Drilbble from "./assets/logos/Company logo-1.png";
import Hubspot from "./assets/logos/Company logo-2.png";
import Notion from "./assets/logos/Company logo-3.png";
import Netflix from "./assets/logos/Company logo-4.png";
import Zoom from "./assets/logos/Company logo-5.png";
import "./index.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function App() {

  return (
    <main className="mb-36">
      <section className="mx-5 sm:mx-24">
        <header className="my-7  sm:my-14 flex items-center text-xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center text-3xl font-semibold">
              <img src={Logo} /> Positivus
            </div>
            <div className="absolute top-7 right-10 z-10 space-x-1 text-end flex sm:sm:relative sm:top-auto sm:right-auto sm:space-x-0 sm:text-left">
              <ul className="flex items-center flex-col text-lg bg-zinc-100 gap-4 sm:flex-row sm:bg-transparent sm:justify-end sm:gap-10">
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>
                  <div className="px-1 py-1 m-2 text-center border-solid border border-black rounded-xl sm:px-7 sm:py-5 sm:m-0">
                    Request a quote
                  </div>
                </li>
              </ul>
            </div>
            <FontAwesomeIcon icon={faBars} className=" sm:hidden"/>
          </div>
        </header>
        <div className="columns-2 flex gap-28 mb-16">
          <div className="flex-1 space-y-9">
            <h1 className="text-6xl font-semibold text-left text-pretty w-4/5">
              Navigating the digital landscape for success
            </h1>
            <p className="text-left max-w-lg text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="text-white text-center px-9 py-5 bg-neutral-900 border rounded-xl">
              Book a consultation
            </button>
          </div>

          <figure>
            <img src={Megafone} alt="" className="text-right" />
          </figure>
        </div>

        <div>
          <ul className="flex gap-28">
            <li>
              <img src={Amazon} alt="" className="flex-1" />
            </li>
            <li>
              <img src={Drilbble} alt="" className="flex-1" />
            </li>
            <li>
              <img src={Hubspot} alt="" className="flex-1" />
            </li>
            <li>
              <img src={Notion} alt="" className="flex-1" />
            </li>
            <li>
              <img src={Netflix} alt="" className="flex-1" />
            </li>
            <li>
              <img src={Zoom} alt="" className="flex-1" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
