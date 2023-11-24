import React from "react";
import hero from "../assets/hero.png";

const Homepage = () => {
  return (
    <div className="flex">
      <div className="w-1/2 font-bold ">
        <div>
          <div className="w-[800px] leading-[55px]">
            <p className="text-black mt-56  ml-40 text-[3rem] ">
              Mari bantu <span className="text-[#00B0B9]">masyarakat,</span>{" "}
              buat perubahan{" "}
              <span className="text-[#00B0B9]">besar</span> dan bantu{" "}
              <span className="text-[#00B0B9]">dunia</span> ini!
            </p>
          </div>
          <div>
            <p>
            <p className="text-black w-[550px] mt-4 ml-40 text-[1.3rem] font-medium leading-[30px] ">
            Ketika Anda berbagi dengan orang lain sebagian dari apa yang Anda miliki, apa yang tersisa akan berlipat ganda dan bertambah.
            </p>
            </p>
          </div>
          <div className="pl-40 pt-7">
            <button className="bg-[#00B0B9] rounded-xl text-[25px] px-5 py-2 text-white">
                Donasi Sekarang!
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={hero}/>
      </div>
    </div>
  );
};

export default Homepage;
