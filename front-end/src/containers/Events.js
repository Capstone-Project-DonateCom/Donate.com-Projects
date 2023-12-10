import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import searchIcon from "../assets/Search.png";
import Card from "../components/Card";
import CardAwal from "../components/CardAwal";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        if (Array.isArray(res.data)) { // Memastikan res.data adalah array
          setEvents(res.data);
        } else {
          console.error("Data yang diterima bukanlah array:", res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []); // Menambahkan array kosong sebagai argumen kedua useEffect
  
  const dataAwal = [
    {
      imageAwal:
        "https://akcdn.detik.net.id/visual/2022/06/24/porak-poranda-desa-purasari-bogor-diterjang-banjir-bandang-2_169.jpeg?w=650",
      titleAwal: "Donasi Bencana Banjir ",
      descriptionAwal:
        "Bencana banjir telah melanda wilayah kami, dan ribuan keluarga menghadapi situasi darurat yang mendesak. Air bah telah merusak rumah mereka, merampas harta benda, meninggalkan mereka tanpa tempat tinggal. ",
      labelDateAwal: "20 Okt - 25 Okt 2023 ",
      locationAwal: "Kemang, Jakarta",
      idAwal: 1,
    },
    {
      imageAwal:
        "https://awsimages.detik.net.id/visual/2023/10/26/warga-palestina-berkumpul-di-lokasi-serangan-israel-terhadap-rumah-rumah-saat-konflik-antara-israel-dan-kelompok-islam-palesti_169.jpeg?w=800&q=90",
      titleAwal: "Donasi untuk Palestina ",
      descriptionAwal:
        "Palestina menghadapi tantangan besar akibat konflik dan krisis kemanusiaan yang berkepanjangan. Ribuan orang, termasuk anak-anak, wanita, dan lansia, merasakan dampaknya setiap hari. ",
      labelDateAwal: "17 Nov - 30 Nov 2023",
      locationAwal: "Gaza, Palestina",
      idAwal: 2,
    },
    {
      imageAwal: "https://static.dw.com/image/46915218_605.jpg",
      titleAwal: "Donasi Tanah Longsor ",
      descriptionAwal:
        "Tanjakan curam dan hujan deras telah menyebabkan tanah longsor yang merusak sejumlah wilayah. Bantuan mendesak diperlukan untuk membantu korban yang terdampak. Setiap donasi Anda dapat membuat perbedaan besar dalam memulihkan kehidupan mereka.",
      labelDateAwal: "26 Des - 30 Des 2023",
      locationAwal: "Pati, Jawa Tengah ",
      idAwal: 3,
    },
    {
      imageAwal: "https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg",
      titleAwal: "Donasi Anak Yatim ",
      descriptionAwal:
        "Banyak anak yatim di seluruh dunia yang menghadapi tantangan besar setiap hari. Kehilangan orang tua tidak hanya meninggalkan mereka tanpa dukungan emosional, tetapi juga memengaruhi akses mereka terhadap pendidikan, kesehatan, dan peluang masa depan. ",
      labelDateAwal: "15 Jan - 30 Jan 2024 ",
      locationAwal: "Tangerang, Banten",
      idAwal: 4,
    },
  ];
  const data = events.map((event) => ({
    poster: `http://localhost:8000/image/${event.poster}`,
    title: event.judul_donasi,
    description: event.deskripsi_donasi,
    labelDate: event.batas_donasi,
    location: event.alamat,
  }));

  return (
    <div>
      <Navbar />
      <div className="bg-[#00B0B9] px-8 py-12 mx-8 rounded-3xl">
        <div className="flex">
          <form className="flex bg-white min-w-[280px] mx-auto px-4 py-2 rounded-md justify-between items-center gap-x-2">
            <input
              className="bg-transparent outline-none w-full"
              placeholder="Masukkan Event..."
              type="text"
            />
            <div>
              <img className="w-[28px]" src={searchIcon} alt="search icon" />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-16 gap-20">
          {dataAwal.map(
            (
              {
                descriptionAwal,
                imageAwal,
                labelDateAwal,
                locationAwal,
                titleAwal,
              },
              indexAwal
            ) => (
              <CardAwal
                key={indexAwal}
                descriptionAwal={descriptionAwal}
                imageAwal={imageAwal}
                labelDateAwal={labelDateAwal}
                locationAwal={locationAwal}
                titleAwal={titleAwal}
              />
            )
          )}
          {data.map(
            ({ poster, description, labelDate, location, title }, index) => (
              <Card
                key={index}
                poster={poster}
                description={description}
                labelDate={labelDate}
                location={location}
                title={title}
              />
            )
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#00B0B9] min-w-[375px]">
        <div className="mt-[5rem] flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-[25%] h-[25%] py-[5rem] mx-auto md:mx-[8rem]">
            <img className="w-full" src={logo2} alt="Logo" />
          </div>
          <div className="mt-[2rem] mx-auto md:mx-[9rem] md:ml-[5rem]">
            <p className="text-white mt-[2rem mb-[2rem] font-bold">Menu</p>
            <p className="text-white">Home</p>
            <p className="text-white">Events</p>
            <p className="text-white">Donates</p>
            <p className="text-white">About us</p>
          </div>
          <div className="mt-[rem] sm:mr-8 md:mr-16 lg:mr-32 mx-auto md:mx-0">
            <p className="text-white mb-[2rem] font-bold">Sponsored By</p>
            <img className="w-full" src={sponsor} alt="Sponsor" />
          </div>
        </div>
        <div className="bg-white h-1 mx-auto md:mx-[5rem] mt-[3rem] md:mt-0"></div>
        <div className="text-white text-center mt-[3rem] md:flex md:justify-center lg:justify-start lg:ml-[7rem] lg:pt-[2rem]">
          <p>© 2023 Donate.com by Capstone Team</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
