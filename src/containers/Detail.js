import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logoLocation from ".././assets/Location.png";
import WA from ".././assets/WA.png";
import Gmail from ".././assets/Gmail.png";
import logo2 from ".././assets/logo2.png";
import sponsor from ".././assets/sponsor.png";
import kiri from "../assets/Left.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id: id_donasi } = useParams();
  const [eventDetail, setEventDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://calm-pear-eel-garb.cyclic.app/events/${id_donasi}`)
      .then((response) => {
        console.log("Response from server:", response.data);
        setEventDetail(response.data); // Simpan detail acara yang diterima dari server
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  }, [id_donasi]);

  return (
    <div>
      <div className="  min-w-[375px]">
        <div>
          <Link to="/events">
            <button className="font-bold ml-[1rem] md:ml-[9.5rem] pt-5 mb-7 text-[#00B0B9] text-xl flex w-full items-center gap-x-2 ">
              <img className="mr-4" src={kiri} alt="Back Arrow" />
              Kembali
            </button>
          </Link>
        </div>
        <div className="bg-white md:w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center">
          <img
            className="rounded-xl w-full md:w-[100%] py-9 mx-auto flex items-center"
            src={eventDetail.poster}
            alt="Event Poster"
          />
          <div className="mx-auto">
            <p className="font-bold text-2xl md:text-3xl ml-4 md:ml-8">
              {eventDetail.judul_donasi}
            </p>
            <p className="font-semibold text-xl ml-4 md:ml-8 mt-2">
              {eventDetail.batas_donasi}
            </p>
            <p className="text-[#00B0B9] text-xl ml-4 md:ml-8 mt-2">
              {eventDetail.nama_donatur}
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-auto">
              <div className="flex w-full items-center gap-x-2 mb-[2rem]">
                <img
                  className="ml-4 md:ml-8 mt-2"
                  src={logoLocation}
                  alt="Location Logo"
                />
                <p className="text-[#00B0B9] font-medium text-xl mt-2 mb-2">
                  {eventDetail.alamat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:w-[1200px] shadow-xl mx-auto px-4 py-2 rounded-xl justify-between items-center mt-[3rem]  min-w-[375px]">
        <p className="text-justify mt-6 px-4 py-2">
          {eventDetail.deskripsi_donasi}
        </p>
        <p className="font-bold text-xl mt-6 mx-auto flex justify-center">
          Kontak untuk Donasi
        </p>
        <div className="flex justify-center items-center mt-4 mx-auto">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center gap-x-4 mb-[5rem]">
              <img className="my-6" src={WA} alt="WhatsApp Logo" />
              <p className="font-bold text-xl">{eventDetail.no_telepon}</p>
              <img className="my-6" src={Gmail} alt="Gmail Logo" />
              <p className="font-bold text-xl">{eventDetail.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#00B0B9] min-w-[375px]">
        <div className="mt-[5rem] flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-[25%] h-[25%] py-[5rem] mx-auto md:mx-[8rem]">
            <img className="w-full" src={logo2} alt="Logo" />
          </div>
          <div className="mt-[2rem] mx-auto md:mx-[9rem] md:ml-[2rem]">
            <p className="text-white mt-[2rem mb-[2rem] font-bold">Menu</p>
            <p className="text-white">Home</p>
            <p className="text-white">Events</p>
            <p className="text-white">Donates</p>
            <p className="text-white t">About us</p>
          </div>
          <div className="mt-[rem] sm:mr-8 md:mr-16 lg:mr-32 mx-auto md:mx-0">
            <p className="flex justify-center text-white mb-[2rem] font-bold">Sponsored By</p>
            <img className="w-full" src={sponsor} alt="Sponsor" />
          </div>
        </div>
        <div className="bg-white h-1 mx-auto md:mx-[5rem] mt-[3rem] md:mt-0"></div>
        <div className="text-white text-center mt-[3rem] pb-10 md:flex md:justify-center lg:justify-center">
          <p>© 2023 Donate.com by Capstone Team</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
