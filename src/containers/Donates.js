import React from "react";
import NavBar from "../components/navbar/Navbar";
import gform from "../assets/gform.png";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";

const Donates = () => {
  return (
    <div>
      <NavBar />
      {/* Hero */}
      <div>
        <div className="flex justify-center pt-[7rem]">
          <img src={gform} />
        </div>
        <div className="flex text-3xl font-bold mt-28">
          <p className="ml-[10rem]">Transparansi sepenuhnya</p>
          <p className="ml-[7rem]">Terbagi rata</p>
          <p className="ml-[12rem]">Dapat dipercaya</p>
        </div>
        <div className="flex just justify-center text-xl font-medium my-5">
          <p className="text-center pl-[5rem] w-[24rem]">
            Transparan dengan bentuk dan kuantitas donasi yang diberikan.
          </p>
          <p className="text-center pl-[7rem] w-[24rem]">
            Donasi yang diberikan terbagi secara rata sesuai kebutuhan.
          </p>
          <p className="text-center pl-[7rem] w-[29rem]">
            Dapat dipercaya karena donasi bersifat transparansi dari berbagai
            aspek.
          </p>
        </div>
        <div className="flex justify-center pt-20">
          <img src={t3} />
        </div>
        <div className="flex justify-center pt-40">
          <p className="text-5xl font-bold">Form Buat Donasi</p>
        </div>
      </div>
      {/* Form */}
      {/* <div className="bg-white rounded-[5rem] shadow-2xl mx-10 h-[700px] mt-[7rem]">
        <form action="/submit_form" method="post">
          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 w-[750px]">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              {" "}
              Judul Donasi :
              <input
                type="text"
                id="nama donasi"
                name="username"
                required
              ></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Nama Donatur:
              <input
                type="text"
                id="nama donatur"
                name="username"
                required
              ></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Tanggal Selesai Donasi:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              No Hp:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Email:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Kategori Donasi:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Upload Gambar:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Alamat:<input></input>
            </label>
          </div>

          <div className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold  text-black"
            >
              Deskripsi:<input></input>
            </label>
          </div>
        </form>
      </div> */}
      {/* Form2 */}
      <div class="mt-10 sm:mt-0 ">
        <div class="mx-[10rem] shadow-2xl md:grid md:grid-cols-1 md:gap-6 ">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0"></div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
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
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-2 py-3"
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
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-2 py-3"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        class="block text-sm font-medium mb-1"
                      >
                        Tanggal Selesai Donasi
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-2 py-3 "
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3 ">
                      <label
                        for="first_name"
                        class="block text-sm font-medium "
                      >
                        No Hp
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-2 py-3 "
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3 ">
                      <label
                        for="first_name"
                        class="block text-sm font-medium "
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border-2 py-3 "
                      ></input>
                    </div>

                    

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Kategori Donasi
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block w-full py-4 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Bencana</option>
                        <option>Kesehatan</option>
                        <option>Pendidikan</option>
                        <option>Lain-lain</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autocomplete="street-address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="city"
                        class="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        class="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
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
