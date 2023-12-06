import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import tese from "../assets/test.jpg";
import pales from "../assets/pales.jpeg";
import logoLocation from ".././assets/Location.png";
import WA from ".././assets/WA.png";
import Gmail from ".././assets/Gmail.png";
import logo2 from ".././assets/logo2.png";
import sponsor from ".././assets/sponsor.png";
import kiri from "../assets/Left.png";

const Detail = () => {
  const { id = 2 } = useParams();
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <button className="font-bold ml-[14rem] pt-7 mb-7 text-[#00B0B9] text-3xl flex w-full items-center gap-x-2 ">
            <img className="mr-4" src={kiri} />
            Kembali
          </button>
        </div>
        <div className="bg-white w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center">
          <img
            className="rounded-xl px-9 w-[1200px] py-9 mx-auto flex items-center"
            src={pales}
          />
          <div className="mx-auto">
            <p className="font-bold text-2xl ml-8">
              Bantu Palestina, Ringankan Derita Bersama
            </p>
            <p className="font-semibold text-xl ml-8 mt-2">
              20 Okt - 25 Okt 2023
            </p>
            <p className="text-[#00B0B9] text-xl ml-8 mt-2">
              Solidaritas Anak Muda
            </p>
            <div className="flex justify-between mt-auto">
              <div className="flex w-full items-center gap-x-2 mb-[2rem]">
                <img className="ml-8 mt-2" src={logoLocation} />
                <p className="text-[#00B0B9] font-medium text-xl mt-2 mb-2">
                  Gaza, Palestina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center mt-[3rem]">
        <p className="text-justify mt-6 px-4 py-2">
          Kami mengajak Anda bergabung dalam kampanye kemanusiaan ini untuk
          memberikan bantuan kepada rakyat Palestina yang sedang menghadapi
          tantangan besar. Donasi finansial Anda akan memiliki dampak langsung
          dalam menyediakan kebutuhan pokok, seperti makanan, air bersih, dan
          perlengkapan medis. Selain itu, dana yang terkumpul juga akan
          digunakan untuk membantu dalam rekonstruksi infrastruktur yang rusak
          parah akibat konflik. Setiap kontribusi Anda, sekecil apapun, akan
          membawa harapan dan kelegaan kepada mereka yang membutuhkan. Mari
          bersama-sama menjadi perubahan positif dan membantu Palestina untuk
          melangkah menuju masa depan yang lebih baik. Terima kasih atas
          dukungan Anda yang berarti.
        </p>
        <p className="font-bold text-xl mt-6 mx-auto flex justify-center">
          Kontak untuk Donasi
        </p>
        <div className="flex justify-center items-center mt-4 mx-auto">
          <div className="text-center">
            <div className="flex items-center gap-x-4 mb-[5rem]">
              <img src={WA} alt="WhatsApp Logo" />
              <p className="font-bold text-xl">088210376547</p>
              <img src={Gmail} alt="Gmail Logo" />
              <p className="font-bold text-xl">mandiryanto28@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#00B0B9]">
        <div className=" mt-[10rem] h-[272px] flex">
          <div className="w-[25%] h-[25%] py-[5rem] mx-[8rem]">
            <img className="" src={logo2} />
          </div>
          <div className="mt-[5rem] ml-[9rem] mr-[5rem]">
            <p className="text-white mb-[2rem] font-bold">Menu</p>
            <p className="text-white">Home</p>
            <p className="text-white">Events</p>
            <p className="text-white">Donates</p>
            <p className="text-white">About us</p>
          </div>
          <div className="mt-[5rem] mx-[0rem]">
            <p className="text-white mb-[2rem] font-bold">Sponsored By</p>
            <img className="" src={sponsor} />
          </div>
        </div>
        <div className="bg-white  h-1 mx-[5rem] "></div>
        <div className="text-white ml-[7rem] pt-[2rem]">
          <p>© 2023 Donate.com by Capstone Team</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
