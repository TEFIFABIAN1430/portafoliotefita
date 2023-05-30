import React from 'react';
import styles from '../../styles/Components.module.css';
import fonts from '../../styles/Fonts.module.css';

const UserTitle = () => {
  return (
    <section className="flex items-center justify-center min-h-[50px]">
      <div
        className={`relative text-5xl group ${styles.content_title} ${fonts.font_lilita}`}
      >
        <h2 className="absolute translate-x-[-50%] translate-y-[-50%] text-transparent">
          Louder
        </h2>
        <h2 className="absolute translate-x-[-50%] translate-y-[-50%] text-[#C00B62] group-hover:text-white transition duration-700">
          Louder
        </h2>
      </div>
    </section>
  );
}

export default UserTitle;