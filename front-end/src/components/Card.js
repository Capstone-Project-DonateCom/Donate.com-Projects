import React, { useState, useEffect }from "react";
import logoLocation from ".././assets/Location.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ poster, title, description, labelDate, location, id }) => {

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
      <div>
        <img className="" src={poster} alt="image" />
      </div>
      <div className="mt-4 h-full flex flex-col">
        <p className="font-bold text-2xl">{title}</p>
        <p className="font-semibold text-base">{labelDate}</p>
        <p className="text-base leading-normal text-justify">{description}</p>
        <div className="flex justify-between mt-auto">
          <div className="flex w-full items-center gap-x-3">
            <img src={logoLocation} alt="location" />
            <p className="font-semibold text-sm">{location}</p>
          </div>
          <div>
            <Link to={`/events/${id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Card;
