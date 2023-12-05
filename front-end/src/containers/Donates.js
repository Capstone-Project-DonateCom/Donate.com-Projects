import React, { useState } from "react";
import NavBar from "../components/navbar/Navbar";
import gform from "../assets/gform.png";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Donates() {
  const [judul, setJudul] = useState('');
  const [nama, setNama] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [kategori, setKategori] = useState('');
  const [gambar, setGambar] = useState(null);
  const [alamat, setAlamat] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    // Update 'gambar' state with the selected file
    setGambar(event.target.files[0]);
  };

  function handleSubmit(event) {
    event.preventDefault(); // Menghentikan behavior default dari form submission
    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('email', email);
    formData.append('judul', judul);
    formData.append('date', date);
    formData.append('kategori', kategori);
    formData.append('deskripsi', deskripsi);
    formData.append('number', number);
    formData.append('alamat', alamat);
    formData.append('gambar', gambar); // Append the file object

    axios.post('http://localhost:8000/donates', formData)
      .then((res) => {
        console.log(res);
        navigate('/Events');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      {/* Hero */}
      <div>
        <div className="flex justify-center pt-14">
          <img className="mx-auto" src={gform} alt="GForm" />
        </div>

        <div className="flex justify-center text-3xl font-bold mt-28 ml-4">
          <p className="mx-auto">Transparansi</p>
          <p className="mx-auto">Terbagi Rata</p>
          <p className="mx-auto">Dapat Dipercaya</p>
        </div>

        <div className="flex justify-center text-xl font-medium my-5 mx-auto">
          <p className="text-center ml-7.5 w-80">
            Transparan secara penuh dengan bentuk dan kuantitas donasi yang
            diberikan.
          </p>
          <p className="text-center mx-auto w-80">
            Donasi yang diberikan terbagi secara rata sesuai kebutuhan dan
            prioritas.
          </p>
          <p className="text-center mx-auto w-80">
            Dapat dipercaya karena donasi bersifat transparan dari berbagai
            aspek.
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <img src={t3} alt="pp" />
        </div>
        <div className="flex justify-center pt-40">
          <p className="text-5xl font-bold">Form Buat Donasi</p>
        </div>
      </div>
      {/* Form */}
      <div class="mt-10 sm:mt-0 ">
        <div class="mx-[10rem] shadow-2xl md:grid md:grid-cols-1 md:gap-6 ">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0"></div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="judul"
                        class="block text-sm font-medium "
                      >
                        Judul Donasi
                      </label>
                      <input
                        onChange={e => setJudul(e.target.value)}
                        type="text"
                        name="judul"
                        id="judul"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="nama"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Nama Donatur
                      </label>
                      <input
                        onChange={e => setNama(e.target.value)}
                        type="text"
                        name="nama"
                        id="nama"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      ></input>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="date"
                        class="block text-sm font-medium mb-1"
                      >
                        Tanggal Selesai Donasi
                      </label>
                      <input
                        onChange={e => setDate(e.target.value)}
                        type="date"
                        name="date"
                        id="date"
                        class="mt-1 focus:ring-[#00B0B9] focus:border-[#00B0B9] block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="number" class="block text-sm font-medium">
                        No Hp
                      </label>
                      <input
                        onChange={e => setNumber(e.target.value)}
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
                        onChange={e => setEmail(e.target.value)}
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
                        for="kategori"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Kategori Donasi
                      </label>
                      <select
                        onChange={e => setKategori(e.target.value)}
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
                        onChange={handleFileChange}
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
                        onChange={e => setAlamat(e.target.value)}
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
                        onChange={e => setDeskripsi(e.target.value)}
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
