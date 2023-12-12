import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import searchIcon from "../assets/Search.png";
import Card from "../components/Card";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk nilai pencarian

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        if (Array.isArray(res.data)) {
          // Memastikan res.data adalah array
          setEvents(res.data);
        } else {
          console.error("Data yang diterima bukanlah array:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []); // Menambahkan array kosong sebagai argumen kedua useEffect

  const filteredEvents = events.filter((event) =>
    event.judul_donasi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = filteredEvents.map((event) => ({
    poster: `http://localhost:8000/image/${event.poster}`,
    title: event.judul_donasi,
    description: event.deskripsi_donasi,
    labelDate: event.batas_donasi,
    location: event.alamat,
    category: event.kategori_donasi,
    id: event.id_donasi,
  }));

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bg-[#00B0B9] px-8 py-12 mx-8 rounded-3xl"
      >
        <div data-aos="fade-up" data-aos-duration="3000" className="flex">
          <form onSubmit={(e) => e.preventDefault()} className="flex bg-white min-w-[600px] mx-auto px-4 py-2 rounded-md justify-between items-center gap-x-2">
            <input
              className="bg-transparent outline-none w-full"
              placeholder="Masukkan Event..."
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div>
              <img className="w-[28px]" src={searchIcon} alt="search icon" />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 gap-20">
          {data.map((event, index) => (
            <Card
              key={index}
              poster={event.poster}
              description={event.description}
              labelDate={event.labelDate}
              location={event.location}
              title={event.title}
              category={event.category}
              id={event.id}
            />
          ))}
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
}

export default Events;
