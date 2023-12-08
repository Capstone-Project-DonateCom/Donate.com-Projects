import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pales from "../assets/pales.jpeg";
import logoLocation from ".././assets/Location.png";
import WA from ".././assets/WA.png";
import Gmail from ".././assets/Gmail.png";
import logo2 from ".././assets/logo2.png";
import sponsor from ".././assets/sponsor.png";
import kiri from "../assets/Left.png";
import axios from "axios";


const Detail = () => {
  const { id: id_donasi } = useParams();
  const [eventDetail, setEventDetail] = useState({});
  const [eventImage, setEventImage] = useState('');


  useEffect(() => {
    axios.get(`http://localhost:8000/events/${id_donasi}`)
      .then(response => {
        console.log("Response from server:", response.data);
        setEventDetail(response.data); // Simpan detail acara yang diterima dari server
      })
      .catch(error => {
        console.error("Terjadi kesalahan:", error);
      });
  }, [id_donasi]);

  
  return (
    <div>
      <div>
        <div>
          <button className="font-bold ml-[9.5rem] pt-5 mb-7 text-[#00B0B9] text-3xl flex w-full items-center gap-x-2 ">
            <img className="mr-4" src={kiri} />
            Kembali
          </button>
        </div>
        <div className="bg-white w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center">
          <img
            className="rounded-xl px-9 w-[1200px] py-9 mx-auto flex items-center"
            src={`http://localhost:8000/image/${eventDetail.poster}`}
          />
          <div className="mx-auto">
            <p className="font-bold text-2xl ml-8">
              {eventDetail.judul_donasi}
            </p>
            <p className="font-semibold text-xl ml-8 mt-2">
            {eventDetail.batas_donasi}
            </p>
            <p className="text-[#00B0B9] text-xl ml-8 mt-2">
            {eventDetail.nama_donatur}
            </p>
            <div className="flex justify-between mt-auto">
              <div className="flex w-full items-center gap-x-2 mb-[2rem]">
                <img className="ml-8 mt-2" src={logoLocation} />
                <p className="text-[#00B0B9] font-medium text-xl mt-2 mb-2">
                {eventDetail.alamat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center mt-[3rem]">
        <p className="text-justify mt-6 px-4 py-2">
        {eventDetail.deskripsi_donasi}
        </p>
        <p className="font-bold text-xl mt-6 mx-auto flex justify-center">
          Kontak untuk Donasi
        </p>
        <div className="flex justify-center items-center mt-4 mx-auto">
          <div className="text-center">
            <div className="flex items-center gap-x-4 mb-[5rem]">
              <img src={WA} alt="WhatsApp Logo" />
              <p className="font-bold text-xl">{eventDetail.no_telepon}</p>
              <img src={Gmail} alt="Gmail Logo" />
              <p className="font-bold text-xl">{eventDetail.email}</p>
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
