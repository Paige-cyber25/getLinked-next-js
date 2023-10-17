import "../Session3/session3.css";
import girlIcon from "../assets/images/girl-sitting.png";
import whiteStarIcon from "../assets/images/white-star.png";
import grayStarIcon from "../assets/images/gray-star.png";
export function Session3() {
  return (
    <div className="container">
      <section className=" relative z-[5] pt-[62px] pb-[78px] sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  sm:h-[590px]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col-reverse justify-between items-center">
        <div className="text-[#fff] sm:max-w-[50%]">
          <div className="flex">
            <div className="sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text max-[620px]:w-[100%]">
              <h5>Rules and</h5>
              <h5 className="text-[#D434FE]">Guidelines</h5>
            </div>
          </div>
          <p className="mt-[18px] sm:text-[14px] text-[13px] max-[620px]:text-center fam">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="sm:absolute right-[-240px]">
            <img src={ girlIcon?.src} alt="girl-sitting" className="sm:max-w-[600px]"/>
        </div>
        <img src={grayStarIcon?.src} className="absolute star  top-[25%] left-[25%] sm:max-w-[21px] max-w-[12px]"/>
        <img src={whiteStarIcon?.src} className="absolute star  bottom-[25%] left-[45%] sm:max-w-[21px] max-w-[12px]"/>
      </section>
    </div>
  );
}
