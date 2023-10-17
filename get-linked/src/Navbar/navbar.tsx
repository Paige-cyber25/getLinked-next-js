import { Button } from "@/Button/button";
import { Divider } from "@/Divider/divider";
import "../Navbar/navbar.css";
export function Navbar() {
  return (
    <div>
      <nav className="navbar z-[100] fixed top-0 left-0 right-0 w-[100%] px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] pt-[4.43%] pb-[1.98%] flex items-center justify-between">
        <p className="text-white text-[36px]">
          get<span className="text-[#D434FE] text-[36px]">Linked</span>
        </p>
        <section className="flex items-center justify-between max-[620px]:hidden">
            <ul className="flex items-center mr-[100px] links">
            <li className="line text-[16px] text-[#fff]">Timeline</li>
            <li className="text-[16px] text-[#fff] ml-[56px]">Overview</li>
            <li className="text-[16px] text-[#fff] ml-[56px]">FAQs</li>
            <li className="text-[16px] text-[#fff] ml-[56px]">Contact</li>
            </ul>
        </section>      
        <Button />

        <button className="sm:hidden">

        </button>
      </nav>

     <Divider />
    </div>
  );
}
