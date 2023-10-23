import { Button } from "@/components/Button/Button";
import "../Session/Session.css";
import arcIcon from "../../assets/images/arc.svg";
import bulbIcon from "../../assets/images/bulb.png";
import chainIcon from "../../assets/images/chain.png";
import fireIcon from "../../assets/images/fire.png";
import manOnGlasessIcon from "../../assets/images/man.png";
import lightIcon from "../../assets/images/light.png";
import whiteStarIcon from "../../assets/images/white-star.png";
import grayStarIcon from "../../assets/images/gray-star.png";
export function Session() {
  return (
    <>
      <div className="sm:mt-[200px] mt-[100px]">
        <div className=" overflow-x-hidden overflow-y-scroll min-h-[calc(100vh-100px)] relative  pt-[32px]">
          <div className=" pl-[8.47%] pr-[3.64%] relative">
            <section className="z-[10] relative max-[620px]:w-fit">
              <h3 className="italic text-[#fff] sm:text-[36px] text-[16px] font-[700] sm:text-right ">
                Igniting a Revolution in HR Innovation
              </h3>
              <img
                src={arcIcon?.src}
                alt="arc"
                className="absolute right-0 max-[620px]:max-w-[115px]"
                loading="eager"
              />
            </section>

            <section className="flex mt-[40px] sm:flex-row flex-col relative z-[6]">
              <div className="text-[#fff] relative z-[5] flex-1 max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center">
                <div className="flex justify-end w-[42%] sm:mb-[-25px] mb-[-20px]">
                  <img
                    src={bulbIcon?.src}
                    alt="bulb"
                    className="max-w-[53px] max-w-[16px]"
                  />
                </div>
                <h2 className="getLinked font-[700] sm:text-[80px] text-[32px] sm:text-left text-center">
                  getlinked Tech
                </h2>

                <div className="mt-[-3px] flex items-center max-[620px]:justify-center clash-text font-[700] sm:text-[80px] text-[32px] sm:text-left text-center">
                  <h2>Hackathon</h2>
                  <h2 className="text-[#D434FE]">1.0</h2>
                  <img
                    alt="chain"
                    src={chainIcon?.src}
                    className="ml-[6px] max-[620px]:max-w-[32.797px]"
                    loading="lazy"
                  />
                  <img
                    alt="fire"
                    src={fireIcon?.src}
                    className="max-[620px]:max-w-[22.119px]"
                    loading="lazy"
                  />
                </div>

                <p className="mt-[8px] sm:text-[20px] text-[13px] max-[620px]:text-center max-w-[522px] mb-[41px]">
                  Participate in getlinked tech Hackathon 2023 stand a chance to
                  win a Big prize
                </p>

                <Button />

                <div className="unica mt-[77px] flex">
                  <div className="flex h-fit">
                    <h3 className="sm:text-[64px] text-[48px]">21</h3>
                    <p className="self-end sm:mb-[25px] mb-[15px] sm:text-[16px] text-[14px]">
                      h
                    </p>
                  </div>
                  <div className="flex h-fit">
                    <h3 className="ml-[60px] sm:text-[64px] text-[48px]">16</h3>
                    <p className="self-end sm:mb-[25px] mb-[15px] sm:text-[16px] text-[14px]">
                      m
                    </p>
                  </div>
                  <div className="flex h-fit">
                    <h3 className="ml-[60px] sm:text-[64px] text-[48px]">57</h3>
                    <p className="self-end sm:mb-[25px] mb-[15px] sm:text-[16px] text-[14px]">
                      s
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:absolute z-[4] flex-1 right-0 sm:mt-[0px] mt-[16.84px]">
                <img
                  src={manOnGlasessIcon?.src}
                  className="sm:max-w-[740px] absolute right-[0]"
                  loading="eager"
                />
                <img
                  src={lightIcon?.src}
                  className="light z-[10] absolute sm:min-w-[660px] right-0"
                  loading="eager"
                />
              </div>
              <img
                src={whiteStarIcon?.src}
                className="absolute star  top-[-10%] left-0 sm:max-w-[21px] max-w-[12px]"
              />
              <img
                src={grayStarIcon?.src}
                className="absolute star  top-[0] left-[45%] sm:max-w-[21px] max-w-[12px]"
              />
              <img
                src={grayStarIcon?.src}
                className="absolute star  bottom-[15%] left-[35%] sm:max-w-[21px] max-w-[12px]:max-w-[740px] absolute right-[0]"
                loading="eager"
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
