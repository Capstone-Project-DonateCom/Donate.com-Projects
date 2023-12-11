import React, { useState, useEffect }from "react";
import logoLocation from ".././assets/Location.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ poster, title, description, labelDate, location, category, id }) => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mengambil daftar event dari server
    axios.get('http://localhost:8000/')
      .then(response => {
        setEvents(response.data); // Menyimpan daftar event yang diterima dari server
      })
      .catch(error => {
        console.error("Terjadi kesalahan:", error);
      });
  }, []);
  
  return (  
    <div className="flex flex-col p-5 bg-white rounded-xl w-fit mx-auto">
      <div style={{ position: 'relative' }}>
        <img className="" src={poster} alt={title} />
        <p className="font-bold text-sm mt-3 ml-3 text-black bg-white leading-5 rounded-md p-2" style={{ position: 'absolute', top: 0, left: 0 }}>
          Kategori : {category}
        </p>
      </div>
      <div className="mt-4 h-full flex flex-col">
        <p className="font-bold text-2xl">{title}</p>
        <p className="font-semibold text-base" style={{ marginTop: '8px', marginBottom: '20px' }}>Batas Donasi : {labelDate}</p>
        <p className="text-base leading-normal text-justify">{description}</p>
        <div className="flex justify-between mt-auto">
          <div className="flex w-full items-center gap-x-3">
            <img src={logoLocation} alt="location" />
            <p className="font-semibold text-sm ">{location}</p>
          </div>
          <div>
            <Link to={`/events/${id}`}>
              <button className="rounded-lg px-6 py-2 text-white bg-[#00B0B9]">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Card;
