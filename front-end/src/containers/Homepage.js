import React from "react";
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import house from "../assets/house.png";
import hospital from "../assets/Hospital.png";
import Graduation from "../assets/Graduation.png";
import Cash from "../assets/Cash.png";
import Navbar from "../components/navbar/Navbar";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import bulet from "../assets/bulet.png";
import bgfaq from "../assets/bgfaq.png";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* Hero */}
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="md:w-1/2 font-bold">
          <div className="max-w-[800px] md:ml-40 mt-8 md:mt-56 leading-[55px]">
            <p className="text-black text-3xl md:text-5xl">
              Mari bantu <span className="text-[#00B0B9]">masyarakat,</span>{" "}
              buat perubahan <span className="text-[#00B0B9]">besar</span> dan
              bantu <span className="text-[#00B0B9]">dunia</span> ini!
            </p>
          </div>
          <div className="mt-4 md:ml-40 max-w-[600px]">
            <p className="text-black text-xl md:text-2xl font-medium leading-[30px]">
              Ketika Anda berbagi dengan orang lain sebagian dari apa yang Anda
              miliki, apa yang tersisa akan berlipat ganda dan bertambah.
            </p>
          </div>
          <div className="md:pl-40 pt-7">
            <button className="bg-[#00B0B9] rounded-xl text-lg md:text-2xl px-5 py-2 text-white">
              Donasi Sekarang!
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img className="w-full" src={hero} alt="Hero" />
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
              <button className="bg-[#00B0B9] text-white ml-40 px-3 py-3 rounded-[0.5rem] font-semibold text-xl ">
                <p className="text-xl"> Detail &#62;</p>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[50%] pl-20 ">
          <img src={hero2} />
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
            <div className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem] ">
              <img className="mx-[4.5rem] my-8 mb-[4rem]" src={house} />
              <p className="flex justify-center">untuk</p>
              <p className="flex justify-center font-bold text-xl">Bencana</p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] my-8 mb-[4rem]" src={hospital} />
              <p className="flex justify-center">untuk</p>
              <p className="flex justify-center font-bold text-xl">Kesehatan</p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] my-8 mb-[4rem]" src={Graduation} />
              <p className="flex justify-center">untuk</p>
              <p className="flex justify-center font-bold text-xl">
                Pendidikan
              </p>
            </div>
            <div className="bg-white w-[15rem] h-[17rem] mx-[2rem]  rounded-[5rem]">
              <img className="mx-[4.5rem] my-8 mb-[4rem]" src={Cash} />
              <p className="flex justify-center">untuk</p>
              <p className="flex justify-center font-bold text-xl">Lain-lain</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      {/* <div>
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
      </div> */}

      {/* FAQ */}

      <ul className="max-w-6xl mx-auto mt-40 divide-y  shadow shadow-blue-600 rounded-xl">
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

            <article className="px-10 pb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.
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

            <article className="px-10 pb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.
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

            <article className="px-10 pb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.
              </p>
            </article>
          </details>
        </li>
        <li>
          <details className="group">
            <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
              <span className="text-2xl my-4 ml-5">
                Bagaimana cara melihat berita tentang kebutuhan donasi?
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

            <article className="px-10 pb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ipsum sapien. Vestibulum molestie porttitor augue vitae
                vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique
                tellus.
              </p>
            </article>
          </details>
        </li>
      </ul>

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

export default Homepage;
