import React from "react";
import Contact from "./Contact";

type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#B5DCB0] to-[#F9F3EE] w-full">
        <div className="bg-[url('./assets/Image/banner.png')] bg-cover h-[679px]">
          <div className="pt-[150px] pl-[130px] w-2/4 *:py-3">
            <p className="text-[55px] text-[#505F4E] ">
              Wir kümmern uns um Ihre schöner Garten und Haus
            </p>
            <p className="text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-[20px] w-[216px]  text-center h-[59px] border-[3px] border-[#505F4E]">
              Lern mehr
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
