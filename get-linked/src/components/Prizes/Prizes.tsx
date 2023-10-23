import "../Prizes/Prizes.css";
import purpleStar from "../../assets/images/purple-star.png";
import whiteStarIcon from "../../assets/images/white-star.png";
import rewardCup from "../../assets/images/reward-cup.png";
import goldMetal from "../../assets/images/gold_medal.png";
import silverMedal from "../../assets/images/silver_medal.png";
import bronzeMedal from "../../assets/images/bronze_medal.png";

export function Prizes() {
  return (
    <div className="container" id="overview">
      <section className=" rewards-bg pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] relative">
        <div className="text-[#fff] flex flex-col items-center sm:mb-[180px] mb-[40px]">
          <div className="sm:w-[600px] pl-[350px]">
            <h5 className="sm:text-[32px] text-[20px] font-[700] max-[620px]:text-center clash-text">
              Prizes and
            </h5>
            <h5 className="sm:text-[32px] text-[20px] font-[700] max-[620px]:text-center clash-text text-[#D434FE]">
              Rewards
            </h5>
            <p className="sm:text-[14px] text-[12px]  mt-[12px] max-w-[346px] max-[620px]:text-center">
              Highlight of the prizes or rewards for winners and for
              participants
            </p>
          </div>
        </div>

        <div className="sub">
          <div className="flex justify-between sm:flex-row flex-col">
            <img src={rewardCup?.src} alt="reward-cup" className="sm:max-w-[548px]" loading="lazy" />
            <div className="flex max-[620px]:mt-[190px] max-[620px]:justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={silverMedal?.src}
                  alt="medals"
                  className="z-[10] max-[620px]:max-w-[75px]"
                  loading="lazy"
                />
                <div className="rounded-[8px] sm:pt-[111px] pt-[60px] sm:mt-[-100px] mt-[-50px] flex flex-col items-center pb-[33px] sm:px-[25px] px-[9px] text-center bg-[#D434FE1F] border-[1px] border-[#D434FE]">
                  <h3 className="sm:text-[36px] text-[12px] leading-[216.4%] text-[#fff] font-[700]">
                    2nd
                  </h3>
                  <h5 className="sm:text-[24px] text-[12px] text-[#fff] font-[600] leading-[216.4%]">
                    Runner
                  </h5>
                  <h4 className="sm:text-[32px] text-[14px] font-[700] text-[#D434FE] leading-[216.4%]">
                    &#8358;300,000
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center mt-[-80px]">
                <img
                  src={goldMetal?.src}
                  alt="medals"
                  className="z-[10] max-[620px]:max-w-[125px]"
                  loading="lazy"
                />
                <div className="rounded-[8px] sm:pt-[111px] pt-[60px] sm:mt-[-100px] mt-[-50px] flex flex-col items-center pb-[33px] sm:px-[25px] px-[9px] text-center bg-[#D434FE1F] border-[1px] border-[#D434FE] mx-[30px] bg-[#903AFF1F] border-[#903AFF]">
                  <h3 className="sm:text-[36px] text-[12px] leading-[216.4%] text-[#fff] font-[700]">
                    1st
                  </h3>
                  <h5 className="sm:text-[24px] text-[12px] text-[#fff] font-[600] leading-[216.4%]">
                    Runner
                  </h5>
                  <h4 className="sm:text-[32px] text-[14px] font-[700] text-[#D434FE] leading-[216.4%]">
                    &#8358;400,000
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={bronzeMedal?.src}
                  alt="medals"
                  className="z-[10] max-[620px]:max-w-[75px]"
                  loading="lazy"
                />
                <div className="rounded-[8px] sm:pt-[111px] pt-[60px] sm:mt-[-100px] mt-[-50px] flex flex-col items-center pb-[33px] sm:px-[25px] px-[9px] text-center bg-[#D434FE1F] border-[1px] border-[#D434FE]">
                  <h3 className="sm:text-[36px] text-[12px] leading-[216.4%] text-[#fff] font-[700]">
                    3rd
                  </h3>
                  <h5 className="sm:text-[24px] text-[12px] text-[#fff] font-[600] leading-[216.4%]">
                    Runner
                  </h5>
                  <h4 className="sm:text-[32px] text-[14px] font-[700] text-[#D434FE] leading-[216.4%]">
                    &#8358;150,000
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="purple-star" src={purpleStar?.src} className="absolute star top-[5%] left-[15%] sm:max-w-[18px] max-w-[12px]" />
        <img alt="white-star" src={whiteStarIcon?.src} className='absolute star  top-[45%] left-[45%] sm:max-w-[21px] max-w-[13px]' />
        <img alt="white-star" src={whiteStarIcon?.src} className='absolute star  top-[45%] right-[5%] sm:max-w-[21px] max-w-[13px]' />
        <img alt="white-star" src={whiteStarIcon?.src} className='absolute star  bottom-[5%] left-[15%] sm:max-w-[18px] max-w-[12px]' />
        <img alt="white-star" src={whiteStarIcon?.src} className='absolute star  bottom-[5%] right-[15%] sm:max-w-[18px] max-w-[12px]' />
      </section>
    </div>
  );
}
