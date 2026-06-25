"use client"
import Desktop from "@/img/desktop.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";
export default function Page() {

    const router = useRouter();
  
  return (
   <div className="flex flex-col items-center justify-center h-screen gap-4">
    <Image src = {Desktop} alt = "desktop" width={500} height={500}/>
    <Button onClick={() => router.push("/login")}>Want to turn on the pc?</Button>
   </div>
  );
}