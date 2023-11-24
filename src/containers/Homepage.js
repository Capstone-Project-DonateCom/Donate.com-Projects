import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";

const Homepage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="flex">
        <div className="w-1/2 font-bold ">
          <div>
            <div className="w-[800px] leading-[55px]">
              <p className="text-black mt-56  ml-40 text-[3rem] ">
                Mari bantu <span className="text-[#00B0B9]">masyarakat,</span>{" "}
                buat perubahan <span className="text-[#00B0B9]">besar</span> dan
                bantu <span className="text-[#00B0B9]">dunia</span> ini!
              </p>
            </div>
            <div>
              <p>
                <p className="text-black w-[550px] mt-4 ml-40 text-[1.3rem] font-medium leading-[30px] ">
                  Ketika Anda berbagi dengan orang lain sebagian dari apa yang
                  Anda miliki, apa yang tersisa akan berlipat ganda dan
                  bertambah.
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
          <img src={hero} />
        </div>
      </div>
      {/* Selamat Datang */}
      <div className="flex my-40 ">
        <div className="w-1/2 py-20">
          <div>
            <div className="bg-[#00B0B9] rounded-md py-10 mr">
              <p className="text-white ml-40 text-[3rem] font-bold">
                Selamat Datang di
              </p>
            </div>
            <p className="text-[#00B0B9] ml-40 text-[3rem] font-semibold">
              Donate.com
            </p>
          </div>
          <div>
            <hr className="h-1 bg-black ml-40 mt-4"></hr>
          </div>
          <div>
            <p className="ml-40 font-bold leading-[55px]">
              Menyatukan Hati Baik, Membuat Perbedaan Bersama!
            </p>
          </div>
          <div>
            <p className="ml-40 text-justify">
              Temukan kebaikan di Donate.com, tempat di mana komunitas pembuat
              donasi dan pendonasi saling mendukung. Proyek donasi beragam
              menanti Anda, dari kesehatan hingga pendidikan. Transparansi,
              keamanan, dan keterlibatan personal adalah inti dari pengalaman
              donasi kami.
            </p>
            <div className="mt-4">
          <button className="bg-[#00B0B9] text-white ml-40 px-3 py-2 rounded-md font-semibold ">
            Detail
          </button>
        </div>
          </div>
        </div>
        <div className=" w-[50%] pl-20 ">
          <img src={hero2}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
