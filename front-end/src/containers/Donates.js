import React, { useState } from "react";
import NavBar from "../components/navbar/Navbar";
import gform from "../assets/gform.png";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { nanoid } from "nanoid"; // Impor nanoid
import dhero1 from "../assets/dhero1.png";
import dhero2 from "../assets/dhero2.png";
import dhero3 from "../assets/dhero3.png";


function Donates() {
  const [judul, setJudul] = useState('');
  const [nama, setNama] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [kategori, setKategori] = useState('');
  const [gambar, setGambar] = useState('');
  const [alamat, setAlamat] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const uniqueID = nanoid();

    console.log('id : ', uniqueID);
    console.log('judul : ', judul);
    console.log('nama : ', nama);
    console.log('date : ', date);
    console.log('number : ', number);
    console.log('email : ', email);
    console.log('kategori : ', kategori);
    console.log('gambar : ', gambar);
    console.log('alamat : ', alamat);
    console.log('deskripsi : ', deskripsi);

    const data = new FormData();
    data.append('id', uniqueID); // Sertakan ID unik ke dalam data yang dikirim
    data.append('judul', judul);
    data.append('nama', nama);
    data.append('date', date);
    data.append('number', number);
    data.append('email', email);
    data.append('kategori', kategori);
    data.append('gambar', gambar);
    data.append('alamat', alamat);
    data.append('deskripsi', deskripsi);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8000/donates',
        data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('post success: ', response);
      navigate('/Events');

    } catch (error) {
      console.error('error: ', error);
    }
  };

  return (
    <div>
      <NavBar />
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-32 space-y-8 md:space-y-0 md:space-x-8">
    <div className="text-center">
      <img src={dhero1} alt="Description 1" className="mx-auto" />
      <div>
        <p className="font-bold text-3xl pt-10">
          Transparansi sepenuhnya
        </p>
        <p className="font-medium text-xl">
          Transparan dengan bentuk dan kuantitas donasi yang diberikan.
        </p>
      </div>
    </div>

    <div className="text-center">
      <img src={dhero2} alt="Description 2" className="mx-auto" />
      <div>
        <p className="font-bold text-3xl pt-10">
          Transparansi sepenuhnya
        </p>
        <p className="font-medium text-xl">
          Transparan dengan bentuk dan kuantitas donasi yang diberikan.
        </p>
      </div>
    </div>

    <div className="text-center">
      <img src={dhero3} alt="Description 3" className="mx-auto" />
      <div>
        <p className="font-bold text-3xl pt-10">
          Transparansi sepenuhnya
          </p>
        <p className="font-medium text-xl">
          Transparan dengan bentuk dan kuantitas donasi yang diberikan.
        </p>
      </div>
    </div>
  </div>

    <div className="flex flex-col items-center justify-center pt-20">
      <img src={t3} alt="pp" className="mx-auto" />
    </div>

    <div className="flex items-center justify-center pt-40">
      <p className="text-5xl font-bold text-center">Form Untuk Donasi</p>
    </div>
      {/* Form */}
      <div class="mt-10 sm:mt-0 ">
        <div class="mx-[10rem] shadow-2xl md:grid md:grid-cols-1 md:gap-6 ">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0"></div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={onSubmit}>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        class="block text-sm font-medium "
                      >
                        Judul Donasi
                      </label>
                      <input
                        value={judul} onChange={(e) => setJudul(e.target.value)}
                        type="text"
                        name="judul"
                        id="judul"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Nama Donatur
                      </label>
                      <input
                        value={nama} onChange={(e) => setNama(e.target.value)}
                        type="text"
                        name="nama"
                        id="nama"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      ></input>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="tanggal_selesai_donasi"
                        class="block text-sm font-medium mb-1"
                      >
                        Tanggal Selesai Donasi
                      </label>
                      <input
                        value={date} onChange={(e) => setDate(e.target.value)}
                        type="date"
                        name="date"
                        id="date"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="no_hp" class="block text-sm font-medium">
                        No Hp
                      </label>
                      <input
                        value={number} onChange={(e) => setNumber(e.target.value)}
                        type="tel"
                        name="number"
                        id="number"
                        autocomplete="tel"
                        pattern="[0-9]{10,}"
                        title="Masukkan setidaknya 10 digit angka"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9]block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="email" class="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Kategori Donasi
                      </label>
                      <select
                        value={kategori} onChange={(e) => setKategori(e.target.value)}
                        id="kategori"
                        name="kategori"
                        autocomplete="kategori"
                        className="mt-1 block w-full  border bg-white shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm  border-black border-2 py-3"
                      >
                        <option>Bencana</option>
                        <option>Kesehatan</option>
                        <option>Pendidikan</option>
                        <option>Lain-lain</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block text-2xl font-medium text-sm ">
                        Upload Gambar
                      </label>
                      <input
                        onChange={(e) => setGambar(e.target.files[0])}
                        type="file"
                        name="gambar"
                        id="gambar"
                        className="mt-1 p-2 border border-black border-2 py-3 mr-10 block w-[30.8rem]"
                      ></input>
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        for="alamat"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Alamat
                      </label>
                      <input
                        value={alamat} onChange={(e) => setAlamat(e.target.value)}
                        type="text"
                        name="alamat"
                        id="alamat"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9]block w-full shadow-sm sm:text-sm  border-black border-2 py-3"
                      ></input>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="deskripsi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Deskripsi
                      </label>
                      <textarea
                        value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}
                        name="deskripsi"
                        id="deskripsi"
                        rows="8"
                        style={{ height: "300px" }}
                        className="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00B0B9] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#00B0B9]">
        <div className=" mt-[10rem] h-[272px] flex">
          <div className="w-[25%] h-[25%] py-[5rem] mx-[8rem]">
            <img className="" src={logo2} />
          </div>
          <div className="mt-[5rem] ml-[13rem] mr-[5rem]">
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

export default Donates;