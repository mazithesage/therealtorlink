import { useState } from "react";
import arrow from "../assets/fArrow.svg";
import roomBtn from "../assets/roomBtn.svg";
import { Link as ScrollLink } from "react-scroll";

type FacilityPropType = {
  facility: {
    img: string;
    name: string;
    id: string;
    desc: string;
  };
  index: number;
};

const Facility = ({ facility, index }: FacilityPropType) => {
  //Local states
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id={facility.id}
      className="mt-[50px] pb-[40px] border-b border-b-[#313F38] border-opacity-[0.24]"
    >
      <div
        className={`facility ${
          isOpen ? "h-0" : "h-fit"
        } relative overflow-hidden flex gap-[30px] md:gap-0 flex-col md:flex-row justify-between items-center`}
      >
        <img
          className="w-[157px] vsm:w-[189px] xl:w-[217px] xl:h-[217px]"
          src={facility.img}
          alt="Link Facility"
        />

        <ScrollLink
          to={facility.id}
          className="cursor-pointer md:ml-[100px] flex-1 flex gap-[70px] text-[40px] font-Miracle capitalize leading-[50px] tracking-wider"
          onClick={() => setIsOpen(true)}
          duration={500}
          smooth={true}
        >
          <span className="absolute md:static top-0 right-[5px] vsm:right-[20px] text-[30px] vsm:text-[40px]">
            0{index + 1}
          </span>
          <span className="text-[24px] vsm:text-[40px]">{facility.name}</span>
        </ScrollLink>

        <button onClick={() => setIsOpen(true)} className="hidden md:block">
          <img
            className="w-[44px] xl:w-fit cursor-pointer"
            src={arrow}
            alt="arrow"
          />
        </button>
      </div>

      <div
        className={`${
          isOpen ? "h-auto" : "h-0"
        } w-full  overflow-hidden duration-300`}
      >
        <img
          className="md:hidden block w-full"
          src={facility.img}
          alt="Link Facility"
        />

        <div className="flex justify-between">
          <div className="pt-[10px] md:pt-[30px] flex flex-col justify-start md:justify-end">
            <button onClick={() => setIsOpen(false)}>
              <img
                className="w-[70px] vsm:w-[105px] xl:w-fit h-fit rotate-[90deg] md:mb-[120px] cursor-pointer"
                src={roomBtn}
                alt="Room Button"
              />
            </button>
          </div>

          <div className="pt-0 md:pt-[60px] ml-[20px] md:ml-0 flex-1 md:flex-none md:w-[28%] xl:w-[30%] flex flex-col justify-between">
            <p className="text-[30px] vsm:text-[50px] font-normal font-Miracle uppercase">
              0{index + 1}
            </p>
            <div className="">
              <h1 className="mb-[10px] vsm:mb-[30px] text-[30px] vsm:text-4xl font-Miracle capitalize tracking-wide">
                {facility.name}
              </h1>
              <p className="opacity-80 text-[13px] xl:text-lg leading-7">
                {facility.desc}
              </p>
            </div>
          </div>

          <img
            className="hidden md:block w-[35%] 2xl:w-fit"
            src={facility.img}
            alt="Link Facility"
          />
        </div>
      </div>
    </div>
  );
};

export default Facility;
