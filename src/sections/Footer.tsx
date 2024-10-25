import star from "../assets/star.svg";
import hotelImg from "../assets/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png";
import curve from "../assets/Curve.png";
import arrow1 from "../assets/footerarrow1.svg";
import arrow2 from "../assets/footerarrow2.svg";
import { useGlobalContext } from "../context/globalContext";

type FooterPropType = {
  whiteBg: boolean;
};

const Footer = ({ whiteBg }: FooterPropType) => {
  const { setOpenBookingModal } = useGlobalContext();
  return (
    <footer
      className={`${
        whiteBg ? "bg-white text-green" : "bg-green text-white"
      } relative w-full h-fit px-[20px] xl:px-[60px] pt-[100px] sm:pt-[200px]`}
    >
      <p
        className={`${
          !whiteBg && "text-right"
        } text-[20px] vsm:text-[38px] xl:text-[40px]  leading-[50px]`}
      >
        +38 032 297 50 20
      </p>
      <p
        className={`${
          whiteBg && "ml-auto w-fit vsm:mr-[110px] xl:mr-[200px]"
        }  mt-[70px] vsm:mt-[80px] w-60 text-lg uppercase`}
      >
        8 Lystopadovoho <br /> Chynu,Lviv
      </p>

      <div className="relative mt-[70px] sm:mt-[150px] flex gap-[70px]">
        <div className="h-fit flex gap-[40px]">
          <h1 className="relative whitespace-nowrap z-[1] h-fit text-[84px] vsm:text-[100px] md:text-[150px] xl:text-[200px] font-Miracle uppercase leading-[200px]">
            Get in
          </h1>
          <img
            className="w-[70px] xl:w-[100px] h-fit xl:h-[100px] self-center"
            src={star}
            alt="star"
          />
        </div>
        <img
          className="absolute top-[210px] vsm:top-[230px] right-[20px] md:static w-[151px] vsm:w-[233px] xl:w-fit"
          src={hotelImg}
          alt="hotel room"
        />
      </div>
      <h1 className="relative h-fit mt-[-100px] xl:mt-[-60px] text-end text-[84px] vsm:text-[100px] md:text-[150px] xl:text-[200px] text-yellow font-Miracle uppercase leading-[200px]">
        TOUCH
      </h1>

      <img className="absolute top-[13%] left-0" src={curve} alt="curve" />

      <div className="pb-[150px] hidden md:block">
        <h1 className="text-[26px] uppercase">Find a room</h1>

        <div className="flex">
          <div className="w-fit border border-[#313F38] flex py-[15px]">
            <button
              onClick={() => setOpenBookingModal(true)}
              className="px-[20px] py-[10px] flex items-center gap-[90px] border-r border-r-[#313F38] border-opacity-[0.24]"
            >
              <p className="text-base font-medium">CHECK IN</p>
              <img src={arrow1} alt="arrow" />
            </button>
            <button
              onClick={() => setOpenBookingModal(true)}
              className="px-[20px] py-[10px] flex items-center gap-[90px]"
            >
              <p className="text-base font-medium">CHECK OUT</p>
              <img src={arrow1} alt="arrow" />
            </button>
          </div>
          <button
            onClick={() => setOpenBookingModal(true)}
            className="py-[25px] bg-green text-white px-[25px] text-[18px] font-medium"
          >
            BOOK ROOM
          </button>
        </div>
      </div>

      <div
        id="contact"
        className="mt-[100px] vsm:mt-0 py-[50px] pb-[100px] vsm:py-[100px] border-t border-t-[#313F38] border-opacity-[0.24] flex gap-[50px] md:gap-0 flex-col md:flex-row justify-between"
      >
        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-yellow text-[26px] uppercase">/</span>
            About us
          </h1>
          <p className="mt-[10px] md:mt-[40px] mb-[10px] md:mb-[70px] w-[285px] opacity-80 text-base leading-7">
            The five-star hotel in a beautiful European city with a modern
            restaurant, conference-hall, and art-bar.
          </p>
          <div className="opacity-25 text-sm">
            ©2023 All rights reserved. BankHotel
          </div>
        </div>

        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-amber-300 text-[26px] uppercase">/</span>
            news
          </h1>
          <p className="mt-[10px] md:mt-[40px] mb-[10px] md:mb-[70px] w-[285px] opacity-80 text-base leading-7">
            Sign up to our newsletter not to miss exclusive offers and
            information about the upcoming events.
          </p>
          <div className="w-fit h-fit flex gap-[5px] border border-[#313F38] border-opacity-[0.24] px-[20px] py-[15px]">
            <input
              type="text"
              className="border-none outline-none"
              placeholder="EMAIL"
            />
            <img src={arrow2} alt="arrow" />
          </div>
        </div>

        <div>
          <h1 className="text-[26px] uppercase">
            <span className="text-amber-300 text-[26px] uppercase">/</span>
            social
          </h1>
          <p className="mt-[10px] md:mt-[40px] flex flex-col xl:flex-row gap-[10px] md:gap-[30px]">
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              facebook
            </a>
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              instagram
            </a>
            <a
              href="#"
              target="blank"
              className="text-base font-medium hover:font-bold uppercase leading-tight"
            >
              twitter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
