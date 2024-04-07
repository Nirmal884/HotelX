"use client";
import React from "react";
import HotelImage from "../../../public/hotel.jpg";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import {Button, Typography } from "@material-tailwind/react";
import {DateRangePicker}  from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';
import  {Divider}  from 'rsuite';
import 'rsuite/Divider/styles/index.css';

const Banner = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Image
        src={HotelImage}
        alt="Hotel Banner"
        className="w-full h-[100%] object-cover absolute"
      />
      <div className="relative z-1 w-screen">
      <div className=" grid grid-cols-2 p-10 ">
        <div>
          <span className="text-4xl font-serif font-bold text-white">
            HOTELX
          </span>
        </div>
        <div>
          <div className="flex gap-8">
            <div className="flex gap-5 items-center">
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <IoCall />
              </div>
              <div>
                <Typography className="text-white">
                  24*7: +1 8064255674
                </Typography>
                <Typography className="text-gray-300 text-sm">
                  call to book or enquire
                </Typography>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <FaBloggerB />
              </div>
              <div>
                <Typography className="after:mix-blend-difference text-white">
                  HotelX for Business
                </Typography>
                <Typography className="after:mix-blend-difference text-sm text-white">
                  Corporate booking sollution
                </Typography>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-6 h-6 bg-white flex justify-center items-center rounded-full">
                <MdOutlinePerson />
              </div>
              <div>
                <Typography className="after:mix-blend-difference text-white">
                  Login / Signup
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* input field */}

      <div className="flex pt-[9rem]">
            <div className="container mx-auto flex flex-col gap-4">
              <Typography variant="h1" className="  text-white">Find Best Hotels Near You !</Typography>
              <div className="w-full h-[5rem] bg-white flex gap-3 items-center justify-between">
                <input type="text" placeholder="Search place in Kerala" className="p-2 h-10 outline-none text-xl" />
                <Divider vertical />
                <DateRangePicker className="outline-none z-1"/>
                <Divider vertical />
                <Typography>2 Rooms , 3 Guests</Typography>
                <Divider vertical />
                <Button>Search</Button>
              </div>
              <div className="flex gap-4 items-center">
                <Typography className="text-white text-lg">Popular Cities</Typography>
                <Button variant="outlined" color="white">Edapally</Button>
                <Button variant="outlined" color="white">Vytila</Button>
                <Button variant="outlined" color="white">Kochi</Button>
                <Button variant="outlined" color="white">Aluva</Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
