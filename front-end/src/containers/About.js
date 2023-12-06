import React from "react";
import NavBar from "../components/navbar/Navbar";
import t3 from "../assets/t3.png";
import logo2 from "../assets/logo2.png";
import sponsor from "../assets/sponsor.png";
import tese from "../assets/test.jpg";
import FDimas from "../assets/Fdimas.jpg";
import FRian from "../assets/Frian.jpg";
import FReza from "../assets/Freza.png";
import FYunus from "../assets/Fyunus.jpeg";
import FBintang from "../assets/Fbintang.jpg";

const About = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <p className="flex justify-center text-5xl font-bold pt-40">About</p>
        </div>
        <div className="px-32 py-10">
          <p className="text-justify text-3xl font-medium leading-10">
            <span className="text-[#00B0B9]">Donate.com </span>merupakan
            platform untuk menyatukan para pembuka donasi dengan individu yang
            ingin memberikan sumbangan. Dengan fokus pada keterbukaan dan
            keterjangkauan, platform ini menghadirkan kemudahan bagi yang ingin
            berbagi dan membantu, menciptakan kesempatan bagi setiap individu
            untuk berpartisipasi dalam memberikan dukungan kepada berbagai
            inisiatif dan penyebab yang mereka pedulikan. Dengan Donate.com,
            kita semua dapat berperan aktif dalam membentuk perubahan positif
            yang kita inginkan dalam masyarakat .{" "}
          </p>
        </div>
        <div className="flex justify-center pt-40">
          <img src={t3} />
        </div>
      </div>
      {/* Team */}
      <div className=" text-[#333] p-4">
        <div className="max-w-7xl max-sm:max-w-sm mx-auto">
          <h2 className=" flex justify-center text-4xl font-extrabold pt-36">
            Meet Our Team
          </h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12 pt-20">
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                src={FDimas}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">
                  Muhammad Dimas Prasetya
                </h4>
                <p className="text-xs mt-1">Frond-End Developer</p>
                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </button>
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
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                src={FRian}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">
                  Muhammad Andi Rianto
                </h4>
                <p className="text-xs mt-1">Frond-End Developer</p>
                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </button>
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
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                src={FReza}
                className="w-100 h-100 rounded-full inline-block border border-black"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Reza Hakim</h4>
                <p className="text-xs mt-1">Back-End Developer</p>
                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </button>
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
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                src={FYunus}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Ahmad Yunus</h4>
                <p className="text-xs mt-1">DevOps</p>
                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </button>
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
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded-md hover:scale-110 transition-all duration-500">
              <img
                src={FBintang}
                className="w-100 h-100 rounded-full inline-block"
              />
              <div className="mt-4">
                <h4 className="text-base font-extrabold">Aria Bintang</h4>
                <p className="text-xs mt-1">BackEnd Developer</p>
                <div className="space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 155.139 155.139"
                    >
                      <path
                        d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                        data-original="#010002"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none  bg-gray-100 hover:bg-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="#333"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#03a9f4"
                      />
                    </svg>
                  </button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <p className="flex justify-center text-5xl font-bold pt-40">Our Team</p>
      </div>
      <div style={{ display: "flex" }}>
        <div className="h-[400px] w-[400px] bg-[#00B0B9] border-[#00B0B9] border-2 mx-auto mt-20">
          <div>
            <img className="h=[400px] w-[400px]" src={tese} />
            <div className="">
              <p className="text-md font-bold text-center mt-2 text-white">
                Aria Bintang
              </p>
              <p className="text-sm font-semibold text-center mt-2 text-white">
                Front-End & Back-End
              </p>
              <p className="text-xs font-medium text-center mt-2 text-white">
                Universitas
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[275px] border-[#00B0B9] border-2 mx-auto mt-20">
          <div>
            <img className="h=[250px] w-[275px]" src={tese} />
            <div className="py-2 bg-[#00B0B9]">
              <p className="text-md font-bold text-center mt-2  text-white">
                Muhammad Dimas Prasetya
              </p>
              <p className="text-sm font-semibold text-center mt-2  text-white">
                Front-End & Back-End
              </p>
              <p className="text-xs font-medium text-center mt-2  text-white">
                Universitas Muhammadiyah Tangerang
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[275px] border-[#00B0B9] border-2 mx-auto mt-20">
          <div>
            <img className="h=[250px] w-[275px] mx-auto" src={tese} />
            <div className="py-2 bg-[#00B0B9]">
              <p className="text-md font-bold text-center mt-2  text-white">
                Muhammad Andi Rianto
              </p>
              <p className="text-sm font-semibold text-center mt-2  text-white">
                Front-End & Back-End
              </p>
              <p className="text-xs font-medium text-center mt-2  text-white">
                Universitas Muhammadiyah Tangerang
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="h-[300px] w-[275px] border-[#00B0B9] border-2 mx-auto mt-20">
          <div>
            <img className="h=[250px] w-[275px] flek mx-auto" src={tese} />
            <div className="py-2 bg-[#00B0B9]">
              <p className="text-md font-bold text-center mt-2  text-white">
                Reza Hakim
              </p>
              <p className="text-sm font-semibold text-center mt-2  text-white">
                Front-End & Back-End
              </p>
              <p className="text-xs font-medium text-center mt-2  text-white">
                Universitas
              </p>
            </div>
          </div>
        </div>

        <div className="h-[300px] w-[275px] border-[#00B0B9] border-2 mx-auto mt-20">
          <div>
            <img className="h=[250px] w-[275px]" src={tese} />
            <div className="py-2 bg-[#00B0B9]">
              <p className="text-md font-bold text-center mt-2  text-white">
                Ahmad Yunus
              </p>
              <p className="text-sm font-semibold text-center mt-2  text-white">
                FullStack
              </p>
              <p className="text-xs font-medium text-center mt-2  text-white">
                Universitas
              </p>
            </div>
          </div>
        </div>
      </div> */}

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

export default About;
