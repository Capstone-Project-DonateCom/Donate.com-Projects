import React from "react";
import logoLocation from ".././assets/Location.png";
import { useNavigate } from "react-router-dom";

const Card = ({ poster, title, description, labelDate, location, id }) => {
  const navigate = useNavigate();
  const handleDetail = (idEvents) => {
    navigate(`/events/${idEvents}`);
  };
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
          <button
            onClick={() => handleDetail(id)}
            className="rounded-lg px-6 py-2 text-white bg-[#00B0B9]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
