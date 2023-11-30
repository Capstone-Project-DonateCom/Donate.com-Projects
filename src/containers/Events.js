import React from 'react'
import Navbar from '../components/navbar/Navbar'
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import searchIcon from "../assets/Search.png"
import Card from '../components/Card';

const Events = () => {
  const data = [
    {
      image: 'https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg', title: 'andi ', description: 'andi  kashdkasd aksjdhkasd kashdkasd kashdkasd kashdk asdkh ajsghdjad ajsvgdjad jhasgdj', labelDate: 'andi ', location: 'andi '
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg', title: 'andi ', description: 'andi  kashdkasd aksjdhkasd kashdkasd kashdkasd kashdk asdkh ajsghdjad ajsvgdjad jhasgdj', labelDate: 'andi ', location: 'andi '
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg', title: 'andi ', description: 'andi  kashdkasd aksjdhkasd kashdkasd kashdkasd kashdk asdkh ajsghdjad ajsvgdjad jhasgdj', labelDate: 'andi ', location: 'andi '
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/id/1/1f/Dewaruci.jpg', title: 'andi ', description: 'andi  kashdkasd aksjdhkasd kashdkasd kashdkasd kashdk asdkh ajsghdjad ajsvgdjad jhasgdj', labelDate: 'andi ', location: 'andi '
    }
  ]
  return (
    <div>
        <Navbar />
        <div className='bg-[#00B0B9] px-8 py-12 mx-8 rounded-3xl'>
          <div className='flex'>
            <form className='flex bg-white min-w-[280px] mx-auto px-4 py-2 rounded-md justify-between items-center gap-x-2'>
              <input className='bg-transparent outline-none w-full' placeholder='Masukkan Event Yang Kamu Cari' type='text' />
              <div>
                <img className='w-[28px]' src={searchIcon} alt='search icon' />
              </div>
            </form>
          </div>
          <div className='grid grid-cols-3 mt-16 gap-20'>
            {
              data.map(({ description, image, labelDate, location, title }) => (
                <Card description={description} image={image} labelDate={labelDate} location={location} title={title}></Card>
              ))
            }
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
  )
}

export default Events