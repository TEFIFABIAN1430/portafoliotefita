import React from "react";
import fonts from "../../styles/Fonts.module.css";
import styles from "../../styles/Components.module.css"

const Title = ({ text, right }) => {
  return (
    <div
      className={`flex ${
        right ? "c_lg:justify-start" : "c_lg:justify-end"
      } justify-center `}
    >
      <p
        className="relative p-3"
        data-aos={`zoom-in-${right ? "right" : "left"}`}
      >
        <span
          className={`block border border-[#C00B62] md:px-5 md:py-2 px-2 py-1 text-[#C00B62] md:text-[30px] text-[23px] text-center min-w-[250px] ${fonts.font_lilita}`}
        >
          {text}
        </span>
        <span
          className={`content-[''] block absolute w-1 bg-[#C00B62] left-0 bottom-0 ${styles.title_line_1}`}
        ></span>
        <span
          className={`content-[''] block absolute h-1 bg-[#C00B62] left-0 top-0 ${styles.title_line_2}`}
        ></span>
        <span
          className={`content-[''] block absolute w-1 bg-[#C00B62] right-0 top-0 ${styles.title_line_3}`}
        ></span>
        <span
          className={`content-[''] block absolute h-1 bg-[#C00B62] right-0 bottom-0 ${styles.title_line_4}`}
        ></span>
      </p>
    </div>
  );
};

export default Title;
