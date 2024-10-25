import starImg from "../assets/star.svg";
import heroBtn from "../assets/heroBtn.svg";
import heroImg from "../assets/heroImage.png";
import heroImg2 from "../assets/pexels-nath.jpg";
import arrowDown from "../assets/arrow.svg";
import { useGlobalContext } from "../context/globalContext";

const Hero = () => {
  const { setOpenBookingModal } = useGlobalContext();
  return (
    <section className="hero w-full mt-[15px] vsm:mt-[40px] px-[20px] xl:px-[60px]">
      <div className="w-full flex flex-col xmd:flex-row items-center xl:items-start justify-between">
        <div className="mb-[24px] xmd:mb-0">
          <h1 className="text-[70px] vsm:text-[80px] md:text-[120px] text-center xmd:text-start xl:text-[140px] 2xl:text-[170px] font-Miracle leading-[1.2]">
            Realtor<span className="text-yellow">Link</span>
          </h1>
          <p className="mt-[19px] text-center xmd:text-start text-[14px] xl:text-lg text-yellow uppercase">
            rooms // restaurant // congress hall // wine bar
          </p>
        </div>

        <div className="w-[50%] mb-[24px] h-0 border-t border-t-[#FFFCF6] border-opacity-[0.12] xmd:hidden"></div>

        <div className="w-[90%] vsm:w-[60%] xmd:w-[20%] xl:w-[28%] order-3 xl:order-2">
          <div className="w-fit hidden xl:flex items-center gap-[10px] border border-[#FFFCF6] border-opacity-[0.32] px-[25px] py-[10px] rounded-[50px]">
            <img src={starImg} alt="Star Icon" />
            <p className="text-[22px]">Since 1973</p>
          </div>
          <p className="xl:mt-[96px] text-center xmd:text-start text-[13px] xl:text-base leading-relaxed opacity-80">
            The luxurious Link in the most beautiful European city with an
            exclusive restaurant, conference-hall, and art-bar.
          </p>
        </div>

        <div className="hidden xmd:block order-2 xl:order-3">
          <img src={heroBtn} alt="Down Button Icon" />
        </div>
      </div>

      <div className="w-full mt-[60px]">
        <div className="relative">
          <div className="h-[472px] vsm:h-fit">
            <img
              className="hidden sm:block h-full w-full object-cover vsm:h-fit vsm:w-fit vsm:object-contain "
              src={heroImg}
              alt="Hero Main Image"
            />
            <img
              className="block sm:hidden h-full w-full object-cover vsm:h-fit vsm:w-fit vsm:object-contain "
              src={heroImg2}
              alt="Hero Main Image"
            />
          </div>

          <div className="absolute bottom-[20px] xmd:bottom-0 xl:top-0 right-[20px] xmd:right-0 flex">
            <button
              onClick={() => setOpenBookingModal(true)}
              className="button blurbg flex gap-[90px] items-center justify-between"
            >
              <p className="text-base font-medium leading-tight">CHECK IN</p>
              <img src={arrowDown} alt="arrow" />
            </button>
            <button
              onClick={() => setOpenBookingModal(true)}
              className="button blurbg flex gap-[90px] items-center justify-between"
            >
              <p className="text-base font-medium leading-tight">CHECK OUT</p>
              <img src={arrowDown} alt="arrow" />
            </button>
            <button
              onClick={() => setOpenBookingModal(true)}
              className="button bg-yellow cursor-pointer"
            >
              <p className="text-black text-lg font-medium uppercase leading-tight">
                book room
              </p>
            </button>
            <button
              onClick={() => setOpenBookingModal(true)}
              className="relative flex xmd:hidden justify-center items-center"
            >
              <svg
                className="btnBg w-[120px] h-[120px] xl:w-fit xl:h-fit fill-yellow"
                width="167"
                height="175"
                viewBox="0 0 167 175"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M83.5 0L134.931 16.711L166.717 60.461V114.539L134.931 158.289L83.5 175L32.0688 158.289L0.282555 114.539V60.461L32.0688 16.711L83.5 0Z"
                  fill=""
                />
              </svg>
              <p className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#1B3B36] text-center italic">
                Book Room
              </p>
            </button>
          </div>
        </div>

        <div className="mt-[30px] flex justify-between">
          <div className="hidden vsm:block">
            <p className="text-yellow text-[16.5px] 2xl:text-[26px] underline uppercase">
              +38 032 297 50 20
            </p>
            <p className="text-[16.5px] 2xl:text-[26px] underline uppercase">
              8 Lystopadovoho Chynu,Lviv
            </p>
          </div>

          <div>
            <p className="text-[16.5px] italic 2xl:text-[26px] uppercase">
              Art & Congress
            </p>
            <p className="vsm:text-right italic text-[16.5px] 2xl:text-[26px] uppercase">
              Hall
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
