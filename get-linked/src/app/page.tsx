import { Navbar } from "@/components/Navbar/Navbar";
import { Prizes } from "@/components/Prizes/Prizes";
import { Session2 } from "@/components/Session2/Session2";
import { Session3 } from "@/components/Session3/Session3";
import { Session4 } from "@/components/Session4/Session4";
import { Session5 } from "@/components/Session5/Session5";
import { Timeline } from "@/components/Timeline/Timeline";
import { Session } from "../components/Session/Session";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <Session />
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Timeline />
      <Prizes />
    </div>
   
  )
}