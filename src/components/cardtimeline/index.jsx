import React from 'react'
import fonts from "../../styles/Fonts.module.css";
import Link from 'next/link';

const CardTimeline = ({ number, theme, description, url, left}) => {

  return (
    <>
      <li
        className="c_lg:w-1/2 h-fit shadow-[1px_1px_25px_rgba(0,0,0,0.384)] rounded-xl c_lg:mb-8 z-10 relative
        odd:float-left odd:clear-right
        c_lg:odd:translate-x-[-30px] c_lg:odd:text-right 
        even:float-right even:clear-left c_lg:even:translate-x-[30px]
        last:mb-0
        w-full mb-14 odd:text-left odd:translate-x-0 
        group/item
        "
      >
        <div
          /* className={`${
            left
              ? "c_lg:bg-[linear-gradient(90deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] bg-[linear-gradient(270deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] c_lg:rounded-s-[15px] rounded-e-[15px]"
              : "bg-[linear-gradient(270deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] rounded-e-[15px] "
          }`} */
          /* data-aos="fade-up" */
        >
          <div className="relative w-full md:h-[230px] h-[210px] ">
            <div
              className={`absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-100 group-hover/item:opacity-0  transition-opacity duration-700 uppercase text-white ${
                fonts.font_lilita
              } md:text-4xl text-2xl ${
                left
                  ? "c_lg:bg-[linear-gradient(90deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] bg-[linear-gradient(270deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] c_lg:rounded-s-[15px] rounded-e-[15px]"
                  : "bg-[linear-gradient(270deg,_#C00B62_0%,_rgba(192,11,98,0)_100%)] rounded-e-[15px] "
              }`}
            >
              Semana {number}
            </div>
            <div className="absolute top-0 left-0 w-full h-full grid justify-center opacity-0 group-hover/item:opacity-100  transition-opacity duration-700 pt-4">
              <h3
                className={`text-[#C00B62] md:text-3xl text-2xl md:px-10 px-4 ${fonts.font_lilita}`}
              >
                {theme}
              </h3>
              <p
                className={`text-white md:text-lg text-base md:px-10 px-4 ${fonts.font_bree}`}
              >
                {description}
              </p>
              <div className="flex items-stretch justify-between mt-3 bg-[#C00B62] py-2 md:px-10 px-4  rounded-b-[15px]">
                <p
                  className={`text-white uppercase self-center  rounded-e-[15px] md:text-xl text-lg ${fonts.font_lilita}`}
                >
                  Semana {number}
                </p>
                <Link
                  href={`${url}`}
                  className={`text-white w-[40px] h-[40px] bg-[#13000E] rounded-full flex items-stretch ${fonts.font_bree}`}
                >
                  <p className="self-center m-auto">{">"}</p>
                </Link>
              </div>
            </div>
          </div>
          <span
            className={`w-[30px] h-[30px] bg-[#63183C] rounded-full absolute top-0
          after:absolute after:content-[' '] after:w-[15px] after:h-[15px] after:bg-[#C00B62] after:rounded-full after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2
          ${
            left
              ? "c_lg:right-[-31px] c_lg:left-auto c_lg:transform c_lg:translate-x-1/2 c_lg:-translate-y-1/2 left-[-30px] transform -translate-x-1/2 -translate-y-1/2"
              : "left-[-29px] transform -translate-x-1/2 -translate-y-1/2"
          }
          `}
          ></span>
        </div>
      </li>
    </>
  );
};

export default CardTimeline