import React from 'react'
import NavBar from '../components/navbar/Navbar'
import t3 from '../assets/t3.png';
import logo2 from '../assets/logo2.png';
import sponsor from '../assets/sponsor.png';

const About = () => {
  return (
    <div>
        <NavBar/>
        <div>
          <p className='flex justify-center text-5xl font-bold pt-40'>About</p>
        </div>
        <div className=' mt-[5rem] h-[30rem] ml-[15rem] mr-[15em]'>
        <p className='text-justify text-3xl font-medium leading-10'><span className='text-[#00B0B9]'>Donate.com </span>merupakan platform untuk menyatukan para pembuka donasi dengan individu yang ingin memberikan sumbangan. Dengan fokus pada keterbukaan dan keterjangkauan, platform ini menghadirkan kemudahan bagi yang ingin berbagi dan membantu, menciptakan kesempatan bagi setiap individu untuk berpartisipasi dalam memberikan dukungan kepada berbagai inisiatif dan penyebab yang mereka pedulikan. Dengan Donate.com, kita semua dapat berperan aktif dalam membentuk perubahan positif yang kita inginkan dalam masyarakat. </p>
        </div>
        <div className='flex justify-center'>
          <img src={t3}/>
        </div>
        <div>
        <p className='flex justify-center text-5xl font-bold pt-40'>Our Team</p>
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

export default About