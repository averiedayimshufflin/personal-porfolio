import Background from "@/img/image.png";
import Monitor from "@/img/give.png";
import Pcbox from "@/img/pc_box.png";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="fixed inset-0 bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "2500px 1250px",
      }}
    >
      {/* GAME WORLD */}
      <div className="relative w-[1920px] h-[1080px]">

        <Image
          src={Monitor}
          alt="monitor"
          style={{
            position: "absolute",
            width: 1500,
            height: 1150,
            left: 0,
            top: 20,
          }}
        />

        <Image
          src={Pcbox}
          alt="pcbox"
          style={{
            position: "absolute",
            width: 1000,
            height: 1300,
            left: 1100,
            top: -100,
          }}
        />

      </div>
    </div>
  );
}