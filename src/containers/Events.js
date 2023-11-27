import React from 'react'
import Navbar from '../components/navbar/Navbar'
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";

const Events = () => {
  return (
    <div>
        <Navbar />
        <div className='text-center'>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p><p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p>
        <p>Belum di buat</p><p>Belum di buat</p>
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
         <img className="" src={sponsor}/>
        </div>
      </div>
        <div className="bg-white  h-1 mx-[5rem] ">
      </div>
      <div className="text-white ml-[7rem] pt-[2rem]">
        <p>© 2023 Donate.com by Capstone Team</p>
      </div>

      </div>
    </div>
  )
}

export default Events