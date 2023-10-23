import lightBulb from "../../assets/images/the-big-idea.png";
import curlIcon from "../../assets/images/curl.png";
import purpleStar from "../../assets/images/purple-star.png";
import "./Session2.css";
export function Session2() {
  return (
    <>
      <section className=" z-[5] pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%] border-[1px] border-[#FFFFFF2E] sm:mt-[91px] mt-[400px] flex sm:flex-row flex-col justify-between items-center relative">
        <div className="relative">
          <img
            alt="light-bulb"
            src={lightBulb?.src}
            className="sm:max-w-[490px]"
            loading="lazy"
          />
          <img
            alt="curl"
            src={curlIcon?.src}
            className="absolute bottom-0 right-0"
            loading="lazy"
          />
        </div>

        <div className="text-[#fff] sm:max-w-[50%] mt-[30px]">
          <div className="flex">
            <div className="sm:text-[32px] text-[20px] font-[700] clash-text sm:text-left text-center max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center max-[620px]:w-[100%]">
              <h5>Introduction to getlinked</h5>
              <h5 className="text-[#D434FE]">tech Hackathon 1.0</h5>
            </div>
            <img
              src={purpleStar?.src}
              className="star ml-[90px] max-[620px]:hidden h-[28px] mt-[45px]"
              alt="purple-star"
              loading="lazy"
            />
          </div>
          <p className="mt-[18px] sm:text-[14px] text-[13px] max-[620px]:text-center">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <img
          src={purpleStar?.src}
          className="star absolute  top-[30%] left-[8%] sm:max-w-[18px] max-w-[12px]"
          alt="purple-star"
          loading="lazy"
        />
        <img
          src={purpleStar?.src}
          className="star absolute  bottom-[15%] left-[35%] sm:max-w-[21px] max-w-[12px]"
          alt="purple-star"
          loading="lazy"
        />
      </section>
    </>
  );
}
