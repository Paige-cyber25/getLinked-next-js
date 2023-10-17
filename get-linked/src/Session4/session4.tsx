import "../Session4/session4.css";
import purpleStar from "../assets/images/purple-star.png";
import readerIcon from "../assets/images/observer.png";
import whiteStarIcon from "../assets/images/white-star.png";
import grayStarIcon from "../assets/images/gray-star.png";
export function Session4() {
  return (
    <div className="container">
      <section className="relative pt-[62px] pb-[78px]  sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col justify-between items-center">
        <div className="relative left-[-40px]  z-[-1]">
          <img className="" alt="reader" src={readerIcon?.src} />
        </div>
        <div className="sm:ml-[53px] text-[#fff] sm:max-w-[50%] max-[620px]:flex max-[620px]:flex-col relative left-[15%]">
          <div className="flex sm:mb-[0px] mb-[16px]">
            <div className="sm:text-[32px] text-[20px] font-[700] clash-text max-[620px]:text-center max-[620px]:w-[100%]">
              <h5>Judging Criteria</h5>
              <h5 className="text-[#D434FE]">Key attributes</h5>
            </div>
          </div>
          <div className="mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center">
            <span className="text-[#FF26B9] text-[16px] font-[700]">
              Innovation and Creativity: &nbsp;
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </div>
          <div className="mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center">
            <span className="text-[#FF26B9] text-[16px] font-[700]">
              Functionality: &nbsp;
            </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </div>
          <div className="mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center">
            <span className="text-[#FF26B9] text-[16px] font-[700]">
              Impact and Relevance: &nbsp;
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </div>
          <div className="mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center">
            <span className="text-[#FF26B9] text-[16px] font-[700]">
              Technical Complexity: &nbsp;
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </div>
          <div className="mb-[22px] text-[#FFF] text-[14px] max-[620px]:text-center">
            <span className="text-[#FF26B9] text-[16px] font-[700]">
              Adherence to Hackathon Rules: &nbsp;
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </div>
          <button className=" font-[700] text-[#fff] text-[16px] rounded-[4px] h-[53px] w-[172px] register-btn mt-[55px] max-[620px]:self-center">
            Read More
          </button>
        </div>
        <img
          className="star absolute top-[10%] left-[20%] sm:max-w-[18px] max-w-[12px]"
          alt="purple-star"
          src={purpleStar?.src}
        />
        <img
          className="star absolute  bottom-[50%] left-[29%] sm:max-w-[18px] max-w-[12px]"
          alt="gray-star"
          src={grayStarIcon?.src}
        />
        <img
          className="star absolute  bottom-[15%] left-[45%] sm:max-w-[18px] max-w-[12px]"
          alt="white-star"
          src={whiteStarIcon?.src}
        />
      </section>
    </div>
  );
}
