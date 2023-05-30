import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import chevronup from "../../../public/icons/chevron_double_up.svg";

const ButtonFixed = () => {
  return (
    <Link
      className="text-white bg-[#13000eba] w-11 h-11 p-2 border border-[#C00B62] text-center fixed right-[20px] bottom-[20px] rounded-full hover:w-12 hover:h-12 duration-700 hover:bg-[#13000e]"
      href={"/#header"}
      scroll={false}
    >
      <Image src={chevronup} alt="chevronup" />
    </Link>
  );
}

export default ButtonFixed