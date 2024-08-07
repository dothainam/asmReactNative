import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="bg-gradient-to-r from-[#F9F3EE] to-[#c5e1be] py-[100px]">
      <div className="w-[888.22px] h-[246.7px] mx-auto ">
        <div className="flex">
          <p className="text-[40px] font-bold text-[#505F4E]">
            Etwas abonnieren
          </p>
          <p className="">*</p>
        </div>
        <div className="flex">
          <p>_</p>
          <p className="text-[40px] font-bold text-[#505F4E]">
            Unser Newsletter
          </p>
        </div>
        <div className="flex">
          <p className="text-[14.04px] pr-[40px] pt-[30px]">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
          <div className="w-[508.45px] h-[62.39px] flex justify-center items-center bg-white ">
            <div className="bg-[#F8F8F8] w-[42.11px] h-[42.11px] flex justify-center items-center ml-2">
              ✉️
            </div>
            <input
              type="text"
              className="h-[62.39px] w-[200px] pl-[10px] text-[14.04px] text-[#57656C]"
              placeholder="youremail123@gmail.com"
            />
            <button className="w-[160.64px] mt-[62px] h-[62.39px] bg-[#656C66] flex justify-center items-center ml-auto text-[12.48px] text-[#FFFFFF] font-semibold hover:bg-[#414542]">
              <p>ABONNIEREN</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
