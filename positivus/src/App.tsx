import Logo from "./assets/Icon.svg";
import Megafone from "./assets/Illustration.png";
import Amazon from "./assets/logos/Company logo.png"
import Drilbble from "./assets/logos/Company logo-1.png"
import Hubspot from "./assets/logos/Company logo-2.png"
import Notion from "./assets/logos/Company logo-3.png"
import Netflix from "./assets/logos/Company logo-4.png"
import Zoom from "./assets/logos/Company logo-5.png"
import "./index.css";
export function App() {
  return (
    <main className="mb-36">
      <section className="mx-24">
        <header className="my-14 flex items-center text-xl">
          <div className="flex items-center text-3xl font-semibold flex-1">
            <img src={Logo} /> Positivus{" "}
          </div>
          <div>
            <ul className="flex justify-end items-center gap-10">
              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>
                <div className="px-9 py-5 border-solid border border-black rounded-xl">
                  Request a quote
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="columns-2 flex gap-28 mb-16">
          <div className="flex-1 space-y-9">
            <h1 className="text-6xl font-semibold text-left text-pretty w-4/5">Navigating the digital landscape for success</h1>
            <p className="text-left max-w-lg text-xl">
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media
              marketing, and content creation.
            </p>
            <button className="text-white text-center px-9 py-5 bg-neutral-900 border rounded-xl">Book a consultation</button>
      
          </div>
      
          <figure>
            <img src={Megafone} alt="" className="text-right"/>
          </figure>
        </div>
      
        <div>
          <ul className="flex gap-28">
            <li><img src={Amazon} alt="" className="flex-1"/></li>
            <li><img src={Drilbble} alt="" className="flex-1"/></li>
            <li><img src={Hubspot} alt="" className="flex-1"/></li>
            <li><img src={Notion} alt="" className="flex-1"/></li>
            <li><img src={Netflix} alt="" className="flex-1"/></li>
            <li><img src={Zoom} alt="" className="flex-1"/></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
