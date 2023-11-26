import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import house from "../assets/house.png";
import hospital from "../assets/Hospital.png";
import Graduation from "../assets/Graduation.png";
import Cash from "../assets/Cash.png";
import Navbar from "../components/navbar/Navbar";



const Homepage = () => {
  return (
    <div>
      <Navbar />
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
      <div className="flex mt-40 ">
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
              <button className="bg-[#00B0B9] text-white ml-40 px-10 py-5 rounded-[1.2rem] font-semibold text-xl ">
              <p className="text-xl"> Detail          &#62;</p>
              </button>
              
            </div>
          </div>
        </div>
        <div className=" w-[50%] pl-20 ">
          <img src={hero2}/>
        </div>
      </div>
      {/* Kategori Donasi */}
      <div>
        <div className="bg-[#00B0B9] h-[700px]  rounded-[5rem]">
          <p className="text-white pt-20 pl-40 text-[3rem] font-bold">
            Kategori Donasi
          </p>
          <div className="w-[43rem]">
            <p className="text-white pt-5 pl-40 text-[1rem] font-normal">
              Sesuaikan kategori donasimu sesuai dengan kategori donasi yang
              telah kami sediakan!
            </p>
          </div>
          <div className="flex pt-20 ml-[10rem] mr-[10rem]">
            <button className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem] ">
              <img className="mx-[4.5rem] mb-[4rem]" src={house} />
              <p className="">untuk</p>
              <p className="font-bold text-xl" >Bencana</p>
            </button>
            <button className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] mb-[4rem]" src={hospital} />
              <p className="">untuk</p>
              <p className="font-bold text-xl">Kesehatan</p>
            </button>
            <button className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] mb-[4rem]" src={Graduation} />
              <p>untuk</p>
              <p className="font-bold text-xl">Pendidikan</p>
            </button>
            <button className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] mb-[4rem]" src={Cash} />
              <p>untuk</p>
              <p className="font-bold text-xl">Lain-lain</p>
            </button>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div>
        <div className="flex justify-center pt-40 text-[3rem] font-bold pb-20">
          <p>FAQ</p>
        </div>
        <div className="border border-black p-4 mx-48 py-8 rounded-[1rem] text-[1.5rem] my-3">
          <p className="font-bold mx-10">Apa itu aplikasi donate.com?</p>
        </div>
        <div className="border border-black p-4 mx-48 py-8 rounded-[1rem] text-[1.5rem] my-3">
          <p className="font-bold mx-10">
            Bagaimana penyalur memberikan donasinya?
          </p>
        </div>
        <div className="border border-black p-4 mx-48 py-8 rounded-[1rem] text-[1.5rem] my-3">
          <p className="font-bold mx-10">
            Dalam bentuk apa saja donasi yang diberikan?
          </p>
        </div>
        <div className="border border-black p-4 mx-48 py-8 rounded-[1rem] text-[1.5rem] my-3">
          <p className="font-bold mx-10">
            Bagaimana cara melihat berita tentang kebutuhan donasi?
          </p>
        </div>
      </div>
      {/* Footer */}
      <div>
        
      </div>
    </div>
  );
};

export default Homepage;
