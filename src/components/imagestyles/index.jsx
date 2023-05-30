import React from 'react'
import styles from '../../styles/Components.module.css'
import profile from '../../../public/images/profile_img.png'
import profile2 from "../../../public/images/profile_img_2.png";
import Image from 'next/image'

const ImageStyled = () => {
  return (
    <div data-aos="fade-up">
      <div
        className={`${styles.image_box} w-[200px] h-[200px] rotate-45 overflow-hidden m-auto md:mb-0 mb-24
        before:content-[''] before:block before:h-full before:w-full before:absolute before:animate-[spin_7s_linear_infinite]`}
      >
        <div className={`${styles.image_inset} h-full w-full overflow-hidden`}>
          <Image
            src={profile2}
            alt="profile"
            className="block h-full w-full object-contain -rotate-45 scale-[1.2]"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageStyled