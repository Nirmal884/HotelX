import React from "react";
import { Rate } from "rsuite";
import 'rsuite/Rate/styles/index.css';

const RecomendedCard = () => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
      <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-image"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          La Casa By HotelX
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Highway south palarivatton near St.Joseph school
        </p>
        <Rate defaultValue={4.5}allowHalf color="yellow" size="sm"/>
        <span>(45 reviews)</span>
        <p><span className="text-red-800 text-2xl font-semibold">${' '} 56</span><span className="text-lg line-through">{" "}${" "}67</span> <span className="text-yellow-800 text-sm">27%off</span></p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default RecomendedCard;
