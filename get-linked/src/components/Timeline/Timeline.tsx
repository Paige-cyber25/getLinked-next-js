import "./Timeline.css";
import purpleStar from "../../assets/images/purple-star.png";
import whiteStarIcon from "../../assets/images/white-star.png";
import grayStarIcon from "../../assets/images/gray-star.png";

export function Timeline() {
  return (
    <div className="container" id="timeline">
      <section className=" relative pt-[62px] pb-[78px]  sm:pl-[18.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] justify-between items-center">
        <div className="text-[#fff] text-center flex flex-col items-center">
          <h5 className="sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text">
            Timeline
          </h5>
          <p className="sm:text-[14px] text-[13px] max-[620px]:text-center  mt-[12px] max-w-[346px]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="mt-[91px] relative max-[620px]:flex">
          <div className="h-[90%] w-[4px] bg-[#D434FE] absolute top-0 left-[0%] sm:hidden"></div>
          <div className="max-[620px]:ml-[30px]">
            <div className="flex sm:flex-row flex-col justify-between mb-[120px]">
              <div className="flex-1 flex  mr-[90px] flex-row">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Hackathon Announcement
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row-reverse flex-col-reverse justify-between mb-[120px]">
              <div className="flex-1 flex flex-row-reverse">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Teams Registration begins
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mb-[120px]">
              <div className="flex-1 flex  mr-[90px] flex-row">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Teams Registration ends
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    Interested Participants are no longer Allowed to register
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row-reverse flex-col-reverse justify-between mb-[120px]">
              <div className="flex-1 flex  flex-row-reverse">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Announcement of the accepted teams and ideas
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between mb-[120px]">
              <div className="flex-1 flex  mr-[90px] flex-row">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Getlinked Hackathon 1.0 Offically Begins
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    Accepted teams can now proceed to build their ground
                    breaking skill driven solutions
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
            <div className="flex sm:flex-row-reverse flex-col-reverse justify-between mb-[120px]">
              <div className="flex-1 flex  flex-row-reverse">
                <div className="sm:max-w-[90%]">
                  <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                    Demo Day
                  </h4>
                  <p className="text-[#fff] mt-[12px] sm:text-[14px] text-[12px]">
                    Teams get the opportunity to pitch their projects to judges.
                    The winner of the hackathon will also be announced on this
                    day
                  </p>
                </div>
                <div className="absolute border-[10px] border-[#150E28] sm:left-[42.5%] left-[-4%] mt-[20px] z-[4] flex sm:h-[63px] h-[39px] w-[39px] sm:w-[63px] rounded-full items-center justify-center text-[#fff] timeline max-[620px]:text-[12px]">
                  6
                </div>
              </div>
              <div className="flex-1">
                <h4 className="sm:text-[24px] text-[12px] font-[700] text-[#D434FE]">
                  November 18, 2023
                </h4>
              </div>
            </div>
          </div>
          <div className="h-[100%] w-[4px] bg-[#D434FE] absolute top-0 left-[45.5%] max-[620px]:hidden"></div>
        </div>
        <img src={purpleStar?.src} alt="purple-star" className="absolute star  top-[10%] left-[15%] sm:max-w-[21px] max-w-[12px]" />
        <img src={whiteStarIcon?.src} alt="white-star" className="absolute star  top-[45%] right-[20%] sm:max-w-[21px] max-w-[12px]"/>
        <img src={grayStarIcon?.src} alt="gray-star" className="absolute star  bottom-[8%] left-[7%] sm:max-w-[18px] max-w-[12px]"/>
      </section>
    </div>
  );
}
