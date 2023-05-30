import React from 'react'
import fonts from "../../styles/Fonts.module.css";

const colores = {
  orange: "bg-orange-500 hover:bg-orange-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  amber: "bg-amber-500 hover:bg-amber-600",
  green: "bg-green-500 hover:bg-green-600",
  emerald: "bg-emerald-500 hover:bg-emerald-600",
};

const LabelArticle = ({name, color}) => {
  return (
    <li className="m-1">
      <p
        className={`inline-flex text-center text-gray-100 py-1 px-3 rounded-full ${colores[color]} transition duration-150 ease-in-out ${fonts.font_bree}`}
      >
        {name}
      </p>
    </li>
  );
}

export default LabelArticle