import React from 'react'
import NavBar from '../components/navbar/Navbar'
import gform from "../assets/gform.png";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";

const Donates = () => {
  return (
    <div>
        <NavBar/>
        {/* Hero */}
        <div>
        <div className='flex justify-center pt-[7rem]'>
        <img src={gform} />
        </div>
        <div className='flex text-3xl font-bold mt-28'>
          <p className='pl-[15rem]'>Transparansi sepenuhnya</p>
          <p className='pl-[7rem]'>Terbagi rata</p>
          <p className='pl-[12rem]'>Dapat dipercaya</p>
        </div>
        <div className='flex text-xl font-medium my-10'>
          <p className='text-center pl-[17rem] w-[36rem]'>Transparan dengan bentuk dan kuantitas donasi yang diberikan.</p>
          <p className='text-center pl-[9rem] w-[26rem]'>Donasi yang diberikan terbagi secara rata sesuai kebutuhan.</p>
          <p className='text-center pl-[7rem] w-[26rem]'>Dapat dipercaya karena donasi bersifat transparansi dari berbagai aspek.</p>
        </div>
        <div className='flex justify-center pt-20'>
        <img src={t3} />
        </div>
        <div className='flex justify-center pt-40'>
          <p className='text-5xl font-bold'>
            Form Buat Donasi
          </p>
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

export default Donates