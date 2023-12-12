import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import house from "../assets/house.png";
import hospital from "../assets/Hospital.png";
import Graduation from "../assets/Graduation.png";
import Cash from "../assets/Cash.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import "../index.css";
import { Link } from "react-router-dom";
import bgfaq1 from "../assets/bgfaq1.png";
import bgfaq2 from "../assets/bgfaq2.png";
import bgfaq3 from "../assets/bgfaq3.png";

const Homepage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col md:flex-row mx-auto min-w-[375px]">
        <div className="animation-container md:w-1/2 font-bold">
          <div className="animate-left max-w-[800px] md:ml-40 mt-8 md:mt-56 leading-[55px]">
            <p className="text-black text-3xl md:text-5xl">
              Mari bantu <span className="text-[#00B0B9]">masyarakat,</span>{" "}
              buat perubahan <span className="text-[#00B0B9]">besar</span> dan
              bantu <span className="text-[#00B0B9]">dunia</span> ini!
            </p>
          </div>
          <div className="animate-left mt-4 md:ml-40 max-w-[600px]">
            <p className="text-black text-xl md:text-2xl font-medium leading-[30px]">
              Ketika Anda berbagi dengan orang lain sebagian dari apa yang Anda
              miliki, apa yang tersisa akan berlipat ganda dan bertambah.
            </p>
          </div>
          <div className="animate-left md:pl-40 pt-7">
            <Link to="/donates">
              <button className="bg-[#00B0B9] rounded-xl text-lg md:text-2xl px-5 py-2 text-white transform transition-transform duration-200 hover:scale-110">
                Donasi Sekarang!
              </button>
            </Link>
          </div>
        </div>
        <div className="animation-container md:flex">
          <div className="md:w mt-8 md:mt-0">
            <img className="animate-right w-full" src={hero} alt="Hero" />
          </div>
        </div>
      </div>

      {/* Selamat Datang */}
      {/* <div className="flex mt-40 scroll-animation">
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
              <button className="bg-[#00B0B9] text-white ml-40 px-3 py-3 rounded-[0.5rem] font-semibold text-xl">
                <p className="text-xl"> Detail &#62;</p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50%] pl-20">
          <img src={hero2} alt="Hero Image" />
        </div>
      </div> */}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col md:flex-row mt-40 scroll-animation min-w-[375px]"
      >
        <div className="w-full md:w-1/2 py-4 md:py-20 min-w-[375px]">
          <div>
            <div className="bg-[#00B0B9] rounded-md py-4 md:py-10 mx-4 md:mx-0">
              <p className="ml-40 text-white text-2xl md:text-5xl font-bold">
                Selamat Datang di
              </p>
            </div>
            <div className="ml-40">
              <p className="text-[#00B0B9] text-2xl md:text-5xl font-semibold mt-5 ml-4 md:ml-0">
                Donate.com
              </p>
            </div>
          </div>
          <div className="ml-40">
            <div>
              <hr className="h-1 bg-black mt-4 mx-4 md:mx-0"></hr>
            </div>
            <div>
              <p className="ml-4 md:ml-0 font-bold text-lg md:text-xl mt-5 leading-[35px]">
                Menyatukan Hati Baik, Membuat Perbedaan Bersama!
              </p>
            </div>
          </div>
          <div>
            <div className="ml-40 mt-5">
              <p className="ml-4 md:ml-0 text-justify text-base md:text-xl">
                Temukan kebaikan di Donate.com, tempat di mana komunitas pembuat
                donasi dan pendonasi saling mendukung. Proyek donasi beragam
                menanti Anda, dari kesehatan hingga pendidikan. Transparansi,
                keamanan, dan keterlibatan personal adalah inti dari pengalaman
                donasi kami.
              </p>
              <div className="mt-4 ml-4 md:ml-0">
  <Link to="/about">
    <button className="bg-[#00B0B9] text-white px-3 py-2 md:px-4 md:py-3 rounded-[0.5rem] font-semibold text-lg md:text-xl transform transition-transform duration-200 hover:scale-110 active:scale-105">
      <p> Detail &#62;</p>
    </button>
  </Link>
</div>

            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-4 md:mt-0 pl-4 md:pl-8">
          <img className="w-full" src={hero2} alt="Hero Image" />
        </div>
      </div>

      {/* Kategori Donasi */}
      <div data-aos="fade-up" data-aos-duration="3000">
        <div className="bg-[#00B0B9] h-auto sm:h-[1000px] md:h-[700px] rounded-[5rem] text-center md:text-left">
          <p className="text-white pt-8 md:pt-20 pl-8 md:pl-40 text-[2rem] md:text-[3rem] font-bold">
            Kategori Donasi
          </p>
          <div className="w-full md:w-[43rem] mx-auto md:mx-0">
            <p className="text-white pt-5 pl-8 md:pl-40 text-[0.8rem] md:text-[1rem] font-normal">
              Sesuaikan kategori donasimu sesuai dengan kategori donasi yang
              telah kami sediakan!
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start pt-8 md:pt-20 mx-auto md:ml-[12rem] md:mr-[10rem]">
            <div className="bg-white w-[15rem] h-[17rem] lg:mx-5 mx-2 mb-4 md:mb-0 rounded-[5rem]">
              <img className="mx-auto my-8 mb-4" src={house} alt="Bencana" />
              <p className="text-center">untuk</p>
              <p className="text-center font-bold text-xl">Bencana</p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] lg:mx-5 mx-2 mb-4 md:mb-0 rounded-[5rem]">
              <img
                className="mx-auto my-8 mb-4"
                src={hospital}
                alt="Kesehatan"
              />
              <p className="text-center">untuk</p>
              <p className="text-center font-bold text-xl">Kesehatan</p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] lg:mx-5 mx-2 mb-4 md:mb-0 rounded-[5rem]">
              <img
                className="mx-auto my-8 mb-4"
                src={Graduation}
                alt="Pendidikan"
              />
              <p className="text-center">untuk</p>
              <p className="text-center font-bold text-xl">Pendidikan</p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] lg:mx-5 mx-2 mb-4 md:mb-0 rounded-[5rem]">
              <img className="mx-auto my-8 mb-4" src={Cash} alt="Lain-lain" />
              <p className="text-center">untuk</p>
              <p className="text-center font-bold text-xl">Lain-lain</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div data-aos="fade-right" data-aos-duration="3000" className="relative">
        <div className="absolute w-full h-full">
          <img className="top-[-50px] z-[-4] absolute" src={bgfaq1} />
          <img
            className="left-0 bottom-[-150px] z-[-4] absolute"
            src={bgfaq2}
          />
          <img
            className="absolute right-0 bottom-[-50px] z-[-4]"
            src={bgfaq3}
          />
        </div>
        <div>
          <p className="flex justify-center mt-[10rem] mx-auto font-bold text-5xl">
            FAQ
          </p>
        </div>
        <ul
          data-aos="fade-up"
          data-aos-duration="3000"
          className="max-w-6xl mx-auto mt-20 divide-y bg-white shadow shadow-[#00B0B9] rounded-xl min-w-[375px]"
        >
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
                <span className="text-2xl my-4 ml-5">
                  Apa itu aplikasi donate.com?
                </span>
                <svg
                  className="w-10 h-10 text-gray-500 transition group-open:rotate-90 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-10 pb-4 font-medium">
                <p>
                  Donate.com merupakan platform untuk menyatukan para pembuka
                  donasi dengan individu yang ingin memberikan sumbangan. Dengan
                  fokus pada keterbukaan dan keterjangkauan, platform ini
                  menghadirkan kemudahan bagi yang ingin berbagi dan membantu,
                  menciptakan kesempatan bagi setiap individu untuk
                  berpartisipasi dalam memberikan dukungan kepada berbagai
                  inisiatif dan penyebab yang mereka pedulikan. Dengan
                  Donate.com, kita semua dapat berperan aktif dalam membentuk
                  perubahan positif yang kita inginkan dalam masyarakat.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
                <span className="text-2xl my-4 ml-5">
                  Bagaimana penyalur memberikan donasinya?
                </span>
                <svg
                  className="w-10 h-10 text-gray-500 transition group-open:rotate-90 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-10 pb-4 font-medium">
                <p>
                  - Di halaman home, penyalur donasi dapat klik "Donasi
                  Sekarang!", yang akan mengarahkan ke halaman donates.
                </p>
                <p>
                  - Kemudian, terdapat formulir yang harus diisi dengan
                  memasukkan data yang diperlukan seperti judul donasi, kontak
                  dan lainnya.
                </p>
                <p>
                  - Selanjutnya, penyalur donasi dapat mencentang checkbox "Saya
                  setuju dengan syarat dan ketentuan".
                </p>
                <p>- Lalu, klik "Submit" untuk mengirim formulir.</p>
                <p>
                  - Setelah itu, penyalur donasi diarahkan ke halaman Events.
                </p>
                <p>
                  - Pada halaman Events ini, informasi donasi akan ditampilkan
                  secara lengkap.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
                <span className="text-2xl my-4 ml-5">
                  Dalam bentuk apa saja donasi yang diberikan?
                </span>
                <svg
                  className="w-10 h-10 text-gray-500 transition group-open:rotate-90 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-10 pb-4 font-medium">
                <p>
                  Berbagai bentuk donasi yang dapat diberikan, diantaranya
                  berupa sumbangan uang tunai, pakaian, makanan dan minuman,
                  peralatan medis, perlengkapan sekolah, perlengkapan darurat
                  atau bantuan logistik lainnya.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
                <span className="text-2xl my-4 ml-5">
                  Bagaimana penerima donasi mengetahui donasi yang tersedia?
                </span>
                <svg
                  className="w-10 h-10 text-gray-500 transition group-open:rotate-90 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-10 pb-4 font-medium">
                <p>
                  - Penerima donasi dapat pergi ke halaman Events, disana
                  terdapat berbagai donasi yang sedang berlangsung.
                </p>
                <p>
                  - Penerima donasi dapat klik tombol "Details" untuk melihat
                  informasi lengkap seperti deskripsi donasi, kontak dan
                  lainnya.
                </p>
                <p>
                  - Penerima donasi dapat menghubungi kontak yang tersedia untuk
                  berkomunikasi langsung dengan penyalur donasi untuk
                  mendapatkan informasi lebih rinci.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
                <span className="text-2xl my-4 ml-5">
                  Siapa saja yang dapat melakukan donasi?
                </span>
                <svg
                  className="w-10 h-10 text-gray-500 transition group-open:rotate-90 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>

              <article className="px-10 pb-4 font-medium">
                <p>
                  Siapa pun dapat berdonasi, baik itu individu, kelompok atau
                  komunitas, perusahaan, atau organisasi non-profit.
                </p>
              </article>
            </details>
          </li>
        </ul>
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
            <p className="flex justify-center text-white mb-[2rem] font-bold">
              Sponsored By
            </p>
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

export default Homepage;
