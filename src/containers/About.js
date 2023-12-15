import React from "react";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import FDimas from "../assets/Fdimas2.jpg";
import FRian from "../assets/Frian2.jpg";
import FReza from "../assets/Freza.png";
import FYunus from "../assets/Fyunus2.jpg";
import FBintang from "../assets/Fbintang.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" min-w-[375px]">
      <div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <p
            className="flex justify-center text-5xl font-bold pt-40"
            style={{ marginBottom: "20px" }}
          >
            About
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="px-4 sm:px-8 md:px-16 lg:px-32 py-6 flex justify-center"
          style={{ width: "80%", margin: "auto" }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-1xl 2xl:text-2xl font-normal leading-10 sm:leading-10 lg:leading-10 text-justify">
            <span className="text-[#00B0B9]">Donate.com </span>merupakan
            platform untuk menyatukan para pembuka donasi dengan individu yang
            ingin memberikan sumbangan. Dengan fokus pada keterbukaan dan
            keterjangkauan, platform ini menghadirkan kemudahan bagi yang ingin
            berbagi dan membantu, menciptakan kesempatan bagi setiap individu
            untuk berpartisipasi dalam memberikan dukungan kepada berbagai
            inisiatif dan penyebab yang mereka pedulikan. Dengan Donate.com,
            kita semua dapat berperan aktif dalam membentuk perubahan positif
            yang kita inginkan dalam masyarakat.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex justify-center pt-40"
        >
          <img src={t3} />
        </div>
      </div>
      {/* Team */}
      <div className=" text-[#333] p-4">
        <div className="max-w-7xl max-sm:max-w-sm mx-auto">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" flex justify-center text-4xl font-extrabold pt-36"
          >
            Meet Our Team
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12 pt-20"
          >
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={FDimas}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">
                  Muhammad Dimas Prasetya
                </h4>
                <p className="text-xs mt-1">Frond-End Developer</p>
                <div className="space-x-4 mt-4">
                  <Link
                    to="https://www.instagram.com/dimaasprstya/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C21292"
                        width="12px"
                        viewBox="0 0 25 25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/muhammad-dimas-prasetya-55884524b/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={FRian}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">
                  Muhammad Andi Rianto
                </h4>
                <p className="text-xs mt-1">Frond-End Developer</p>
                <div className="space-x-4 mt-4">
                  <Link
                    to="https://www.instagram.com/andiryannto/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C21292"
                        width="12px"
                        viewBox="0 0 25 25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
                      </svg>
                    </button>
                  </Link>
                  <Link to="https://www.linkedin.com/in/muhammad-andi-rianto-a7587929a/" target="_blank">
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        fill="#333"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                          data-original="#0077b5"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={FReza}
                className="w-100 h-100 rounded-full inline-block border border-black"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Reza Hakim</h4>
                <p className="text-xs mt-1">Back-End Developer</p>
                <div className="space-x-4 mt-4">
                  <Link
                    to="https://www.instagram.com/rezaaahakim_"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C21292"
                        width="12px"
                        viewBox="0 0 25 25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
                      </svg>
                    </button>
                  </Link>
                  <Link to="https://www.linkedin.com/in/reza-hakim-757784283/" target="_blank">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#333"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={FYunus}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Ahmad Yunus</h4>
                <p className="text-xs mt-1">DevOps</p>
                <div className="space-x-4 mt-4">
                  <Link
                    to="https://www.instagram.com/ahmadynss_/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C21292"
                        width="12px"
                        viewBox="0 0 25 25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
                      </svg>
                    </button>
                  </Link>
                  <Link to="https://linkedin.com/in/ahmdyunus53" target="_blank">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#333"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                src={FBintang}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Aria Bintang</h4>
                <p className="text-xs mt-1">Back-End Developer</p>
                <div className="space-x-4 mt-4">
                  <Link
                    to="https://www.instagram.com/ariabintangr/"
                    target="_blank"
                  >
                    <button
                      type="button"
                      className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C21292"
                        width="12px"
                        viewBox="0 0 25 25"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.5" />
                      </svg>
                    </button>
                  </Link>
                 <Link to="https://www.linkedin.com/in/aria-bintang-772146260/" target="_blank">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      fill="#333"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                        data-original="#0077b5"
                      />
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default About;
