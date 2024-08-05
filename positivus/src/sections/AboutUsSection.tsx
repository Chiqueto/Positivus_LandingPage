import Megafone from "./../assets/Illustration.png";
import Amazon from "./../assets/logos/Company logo.png";
import Drilbble from "./../assets/logos/Company logo-1.png";
import Hubspot from "./../assets/logos/Company logo-2.png";
import Notion from "./../assets/logos/Company logo-3.png";
import Netflix from "./../assets/logos/Company logo-4.png";
import Zoom from "./../assets/logos/Company logo-5.png";

export function AboutUs(){
  return(
    <section>
        <div className="flex flex-col mb-14 items-center justify-center  lg:columns-2 lg:flex-row lg:flex lg:gap-28 lg:mb-16">
          <div className="space-y-10 lg:flex-1 lg:space-y-9 lg:w-2/4">
            <h1 className="text-4xl text-pretty lg:text-6xl font-semibold text-left lg:text-pretty w-full">
              Navigating the digital landscape for success
            </h1>
            <figure className="mx-auto">
              <img src={Megafone} alt="" className="mx-auto lg:hidden" />
            </figure>
            <p className="text-left text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="w-full text-white text-center px-9 py-5 bg-neutral-900 border rounded-xl lg:w-auto">
              Book a consultation
            </button>
          </div>

          <figure className="hidden lg:block lg:w-1/2">
            <img src={Megafone} alt="" className="lg:text-right" />
          </figure>
        </div>

        <div className="flex flex-col gap-6 items-center lg:flex-row lg:gap-28">
              <ul className="flex gap-20 lg:gap-28">
                <li>
                  <img src={Amazon} alt="" className="flex-1" />
                </li>
                <li>
                  <img src={Drilbble} alt="" className="flex-1" />
                </li>
                <li>
                  <img src={Hubspot} alt="" className="flex-1" />
                </li>
              </ul>
              <ul className="flex gap-14 lg:gap-28">
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
  )
    
}