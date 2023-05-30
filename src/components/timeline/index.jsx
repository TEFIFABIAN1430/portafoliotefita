import React from 'react'
import CardTimeline from '../cardtimeline';
import { data } from '../../data/data.js'

const Timeline = () => {

  return (
    <div
      className={`w-full h-screen my-12 mx-0 py-12 px-2 grid place-items-center overflow-y-scroll`}
      data-aos="fade-up"
    >
      <div className="xl:w-[70%] md:w-[100%] w-[85%] h-auto relative c_lg:translate-x-0 translate-x-[15px]">
        <ul className="list-none after:absolute after:content-[' '] after:w-[2px]  after:h-full after:bg-[linear-gradient(to_bottom,_#C00B62,_#930a4c)] c_lg:after:left-auto after:left-[-30px] z-0">
          {data.map((e, i) => (
            <CardTimeline
              key={i}
              number={e.number}
              theme={e.theme}
              description={e.description}
              url={e.url}
              left={i % 2 == 0}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Timeline
