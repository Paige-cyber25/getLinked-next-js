import { Navbar } from "@/Navbar/navbar";
import { Session } from "../Session/session";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navbar />
      <Session />
    </div>
   
  )
}