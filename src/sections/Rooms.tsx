import { useState } from "react";
import roomBtn from "../assets/roomBtn.svg";
import starImg from "../assets/star.svg";
import { rooms } from "../data/roomsList";
import { useGlobalContext } from "../context/globalContext";

const Rooms = () => {
  const { setOpenBookingModal } = useGlobalContext();

  const [currentRoom, setCurrentRoom] = useState(0);

  const handleScroll = () => {
    if (currentRoom === rooms.length - 1) {
      setCurrentRoom(0);
    } else {
      setCurrentRoom((prev) => prev + 1);
    }
  };

  return (
    <section
      id="rooms"
      className="rooms-section mt-[70px] vsm:mt-[250px] pt-[100px] vsm:pt-[150px] xl:pt-[200px] pb-[200px] vsm:pb-[50px] w-full px-[20px] xl:px-[60px] h-fit bg-[#FFFCF6] text-[#1B3B36] "
    >
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="md:mt-[100px] xl:mt-0 text-[50px] vsm:text-[75px] md:text-[100px] font-Miracle uppercase leading-[1.2]">
          Rooms <br className="hidden md:block" />& apartments
        </h1>
        <p className="mt-[50px] md:mt-0 w-[85%] vsm:w-[50%] md:w-[20%] xl:w-[27%] text-[16px] xl:text-lg uppercase">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>

      <div className="mt-[100px] md:hidden w-full relative">
        <div className="w-full h-[476px] xl:h-[650px] relative overflow-x-hidden">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`${
                currentRoom == index
                  ? "right-0"
                  : "right-[100%] duration-1000 z-[1]"
              } absolute top-0 w-full h-full`}
            >
              <img
                className="w-full h-full bg-cover"
                src={room.img1}
                alt="Link Room"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setOpenBookingModal(true)}
          className="absolute bottom-[20px] xl:bottom-[50px] right-[20px] xl:right-[50px] cursor-pointer"
        >
          <div className="relative flex justify-center items-center">
            <svg
              className="btnBg w-[120px] h-[120px] xl:w-fit xl:h-fit"
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
            <p className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center italic">
              Book Room
            </p>
          </div>
        </button>
      </div>
      <p className="md:hidden text-end mt-[30px] text-[22px]">
        0{currentRoom + 1} <span className="opacity-30">/ 04</span>
      </p>
      <h1 className="vsm:hidden text-4xl relative font-Miracle capitalize tracking-wide">
        {rooms.map((room, index) => (
          <h1
            key={index}
            className={`${
              currentRoom == index
                ? "opacity-100 duration-500"
                : "opacity-0 vsm:translate-y-[100%]"
            } absolute text-left top-0 left-0`}
          >
            {room.name}
          </h1>
        ))}
      </h1>

      <div className="w-full mt-[30px] md:mt-[100px] gap-[30px] vsm:gap-[50px] md:gap-0 flex md:justify-between">
        <div className="xl:pt-[30px] flex flex-col justify-center xl:justify-between">
          <div className="hidden xl:block w-[217px] h-[259px] relative overflow-hidden">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${
                  currentRoom == index
                    ? "right-0"
                    : "right-[100%] duration-1000 z-[1]"
                }  absolute top-0 w-[217px] h-[259px]`}
              >
                <img
                  className="w-full h-full bg-cover"
                  src={room.img2}
                  alt="Link Room"
                />
              </div>
            ))}
          </div>

          <button onClick={handleScroll}>
            <img
              className="w-[70px] vsm:w-[105px] xl:w-fit h-fit cursor-pointer "
              src={roomBtn}
              alt="Room Button"
            />
          </button>
        </div>

        <div className="md:pt-[30px] flex-1 md:flex-none md:w-[30%] flex flex-col justify-between">
          <div className="w-fit hidden xl:flex items-center gap-[10px] border border-[#313F38] border-opacity-[0.48] px-[25px] py-[10px] rounded-[50px]">
            <img src={starImg} alt="Star Icon" />
            <p className="text-[22px]">Since 1973</p>
          </div>
          <div className="mt-[40px] xl:mt-[90px]">
            <h1 className="hidden md:block relative text-4xl font-Miracle capitalize tracking-wide">
              {rooms.map((room, index) => (
                <h1
                  key={index}
                  className={`${
                    currentRoom == index
                      ? "opacity-100 duration-500 "
                      : "opacity-0 translate-y-[100%]"
                  } absolute top-0 left-0`}
                >
                  {room.name}
                </h1>
              ))}
            </h1>
            <div className="hidden md:block mt-[40px] h-[25px] xl:h-[40px] w-[30px]"></div>
            <p className="relative text-lg leading-7">
              {rooms.map((room, index) => (
                <span
                  className={`${
                    currentRoom == index
                      ? "opacity-80 duration-500"
                      : "opacity-0"
                  } absolute top-0 left-0`}
                >
                  {room.desc}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-[40px] h-[60px] xl:h-[40px] w-[30px]"></div>
          <p className="hidden xmd:block text-[22px]">
            0{currentRoom + 1} <span className="opacity-30">/ 04</span>
          </p>
        </div>

        <div className="hidden md:block w-[40%] relative">
          <div className="w-full h-[476px] xl:h-[650px] relative overflow-x-hidden">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`${
                  currentRoom == index
                    ? "right-0"
                    : "right-[100%] duration-1000 z-[1]"
                } absolute top-0 w-full h-full`}
              >
                <img
                  className="w-full h-full bg-cover"
                  src={room.img1}
                  alt="Link Room"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpenBookingModal(true)}
            className="absolute bottom-[20px] xl:bottom-[50px] right-[20px] xl:right-[50px] cursor-pointer "
          >
            <div className="relative flex justify-center items-center">
              <svg
                className="btnBg w-[120px] h-[120px] xl:w-fit xl:h-fit"
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
              <p className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center italic">
                Book Room
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
