import '../Session5/session5.css';
import thinkingIcon from "../assets/images/thinking.png";
import questionIcon from "../assets/images/question_mark.png";
import  Accordion  from '../shared/Accordion/Accordion';

export function Session5 () {
    return(
        <div className='container'>
            <section className=' relative sm:pt-[80px] pt-[62px] pb-[78px]  sm:pl-[8.47%] sm:pr-[3.64%] max-[620px]:px-[8.47%]  border-b-[1px] border-b-[#FFFFFF2E] flex sm:flex-row flex-col justify-between items-center'>
                <div className='text-[#fff] sm:max-w-[50%]'>
                    <div className='flex mb-[68px]'>
                        <div className='sm:text-[32px] text-[20px] max-[620px]:text-center font-[700] clash-text'>
                            <h5>Frequently Ask</h5>
                            <h5 className='text-[#D434FE]'>Question</h5>
                            <p className='sm:max-w-[342px] text-[#FFF] text-[14px] mt-[16px] font-[400]'>
                                We got answers to the questions that you might want to ask about &nbsp;
                                <b>getlinked Hackathon 1.0</b>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Accordion />
                    </div>
                </div>
                <div className='sm:absolute top-[5%] right-[-176px] z-[10] max-[620px]:mt-[100px]'>
                    <img src={thinkingIcon?.src} alt="thinking-man" className='sm:max-w-[600px]' loading='lazy' />
                </div>
                    <img src={questionIcon?.src} alt="question" className='absolute  sm:top-[6%] bottom-[44%] sm:right-[4%] right-[43%] sm:max-w-[21px] max-w-[12px]' />
                    <img src={questionIcon?.src} alt="question" className='absolute  sm:top-[1%]  bottom-[46%] sm:right-[16%] right-[50%] sm:max-w-[21px] max-w-[12px]' />
                    <img src={questionIcon?.src} alt="question" className='absolute  sm:top-[10%] bottom-[44%] sm:right-[25%] right-[57%] sm:max-w-[21px] max-w-[12px]' />
            </section>
        </div>
    )
}