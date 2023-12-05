import React from "react";
import logoLocation from ".././assets/Location.png";
import { useNavigate } from "react-router-dom";

const CardAwal = ({ imageAwal, titleAwal, descriptionAwal, labelDateAwal, locationAwal, idAwal }) => {
  const navigate = useNavigate();
  const handleDetail = (idEvents) => {
    navigate(`/events/${idEvents}`);
  };
  return (
    <div className="flex flex-col p-5 bg-white rounded-xl w-fit mx-auto">
      <div>
        <img className="" src={imageAwal} alt="image" />
      </div>
      <div className="mt-4 h-full flex flex-col">
        <p className="font-bold text-2xl">{titleAwal}</p>
        <p className="font-semibold text-base">{labelDateAwal}</p>
        <p className="text-base leading-normal text-justify">{descriptionAwal}</p>
        <div className="flex justify-between mt-auto">
          <div className="flex w-full items-center gap-x-3">
            <img src={logoLocation} alt="location" />
            <p className="font-semibold text-sm">{locationAwal}</p>
          </div>
          <button
            onClick={() => handleDetail(idAwal)}
            className="rounded-lg px-6 py-2 text-white bg-[#00B0B9]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAwal;
