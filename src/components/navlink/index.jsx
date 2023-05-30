import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { links } from '../../data/data.js'
import Chevron from "../../../public/icons/chevron.png";

const NavLink = ({setOpen}) => {

  const [heading, setHeading] = useState("")
  const [subHeading, setSubHeading] = useState("");
  const [visible, setVisible] = useState(false)

  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="md:border-0 border-b border-[#B6207A]">
          <div className="px-3 text-left group ">
            <h1
              className="py-5 w-fit h-fit cursor-pointer md:hover:text-white hover:text-[#B6207A]"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {link.name}
              {link.submenu && (
                <>
                  <span className="md:hidden ml-2 inline-block">
                    <Image
                      src={Chevron}
                      width={10}
                      height={10}
                      alt="chevron"
                      className={`${heading === link.name && "rotate-180"}`}
                    />
                  </span>
                  <span className="md:mt-1 md:ml-2 ml-2  md:inline-block hidden group-hover:rotate-180 ">
                    <Image
                      src={Chevron}
                      width={10}
                      height={10}
                      alt="chevron_up"
                    />
                  </span>
                </>
              )}
            </h1>
            {link.submenu && (
              <div
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className={`duration-1000 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute top-16 mr-1 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-[#310018] border-t border-l border-[#B6207A] rotate-45"></div>
                  </div>
                  <div className="bg-gradient-to-b from-[#310018] to-[#20001D] border border-[#B6207A] rounded-lg p-6 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-base pb-2 border-b-2 border-[#B6207A]">
                          {mysublinks.Head}
                        </h1>
                        <ul className="list-indide list-[square] pl-5">
                          {mysublinks.sublink.map((slink) => (
                            <li
                              key={slink.name}
                              className="text-sm text-white my-3 hover:text-[#B6207A]"
                            >
                              <Link href={slink.link} scroll={false}>
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <div
            className={` ${heading === link.name ? "md:hidden" : "hidden"} `}
          >
            {/* Sublinks */}
            {link.submenu &&
              link.sublinks.map((slinks) => (
                <div key={slinks.Head}>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 hover:text-[#B6207A]"
                    >
                      {slinks.Head}
                      <span className="md:mt-1 md:ml-2 ml-2 inline-block">
                        <Image
                          src={Chevron}
                          width={9}
                          height={9}
                          alt="chevron"
                          className={`${
                            subHeading === slinks.Head && "rotate-180"
                          }`}
                        />
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li key={slink.name} className="py-3 pl-14">
                          <Link
                            href={slink.link}
                            scroll={false}
                            onClick={() => setOpen((prevOpen) => !prevOpen)}
                            className=" hover:text-[#B6207A] "
                          >
                            {slink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLink