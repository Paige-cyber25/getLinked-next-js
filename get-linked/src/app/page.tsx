import { Navbar } from "@/Navbar/navbar";
import { Session2 } from "@/Session2/session2";
import { Session3 } from "@/Session3/session3";
import { Session4 } from "@/Session4/session4";
import { Session5 } from "@/Session5/session5";
import { Session } from "../Session/session";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <Session />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
    </div>
   
  )
}