import React from 'react'
import styles from '../../styles/Components.module.css'
import Image from 'next/image';
import github from "../../../public/icons/github.svg";

const CardStyled = ({img, delay}) => {
  return (
    <>
      <div
        className="flex-auto text-2xl mt-1 relative before:content-[' '] before:float-left before:pt-[100%] mx-3"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div
          className={`${styles.effect_1} rounded-[30%] h-[80px] w-[80px] absolute z-10 bg-[#0ba5c0a9]`}
        ></div>
        <div
          className={`${styles.effect_2} rounded-[30%] h-[80px] w-[80px] absolute z-20 bg-[#c00b38a9]`}
        ></div>
        <div className=" rounded-[30%] h-[80px] w-[80px] m-[8%] absolute align-middle z-30">
          <Image src={img} alt="github" className="p-4" />
        </div>
      </div>
    </>
  );
}

export default CardStyled