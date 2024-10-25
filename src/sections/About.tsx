import img1 from "../assets/aboutImg1.png";
import img2 from "../assets/aboutImg2.png";
import label from "../assets/aboutStamp.svg";
import btn from "../assets/aboutBtn.svg";

const About = () => {
  return (
    <section id="about" className="w-full relative mt-[70px] overflow-hidden">
      {/* Background designs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-0 w-[58%] border-t border-[#3F5148]"></div>
          <div className="absolute top-0 right-0 w-[25%] h-[50vh] vsm:h-full border-l border-[#3F5148]"></div>
          <div className="absolute top-0 right-[25%] w-[66vw] h-[66vw] rounded-full border border-[#3F5148]">
            <div className="relative w-full h-full">
              <div className="absolute top-[50%] right-0 w-full h-[50%] bg-green"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="static vsm:absolute z-[20] pl-[20px] md:pl-0 top-[10px] sm:top-[120px] xl:top-[150px] left-[20%] xl:left-[35%]">
        <h1 className="relative vsm:static w-fit md:w-full  vsm:z-0 text-right text-[60px] vsm:text-[100px] xl:text-[125px] font-Miracle leading-[1.2] text-yellow">
          ABOUT <br /> <span className="text-yellow md:text-[#fffcf6]">US</span>
        </h1>
      </div>

      <div className="relative w-full h-full mt-[50px] vsm:mt-[100px] px-[20px] xl:px-[60px] flex flex-col md:flex-row gap-[56px] md:gap-0 justify-between">
        <div className="w-fit md:w-[35%] xl:w-[481px] h-fit md:h-full">
          <img
            className="h-full w-full object-cover"
            src={img1}
            alt="High quality room"
          />
        </div>

        <div className="w-[85%] vsm:w-[60%] md:w-[28%] xl:w-[30%] md:self-end">
          <h1 className="mt-[10px] text-[28px] xl:text-4xl font-Miracle capitalize tracking-wide">
            High quality
          </h1>
          <p className="mt-[20px] text-[13px] xl:text-base opacity-60 leading-7">
            The Five-star Realtor Link was reopened to visitors in 2016. The
            building was renovated and modernized to meet the expectations of
            the most demanding guests. We offer luxurious rooms, numerous
            facilities, and exceptional service.
          </p>
        </div>

        <div className="hidden relative md xmd:flex flex-col justify-between">
          <img
            className="absolute top-[-70px] left-[-80px]"
            src={label}
            alt="Stamp"
          />
          <img
            className="w-[165px] xl:w-fit"
            src={img2}
            alt="High quality room"
          />
          <img
            className="hidden xl:block w-fit h-fit"
            src={btn}
            alt="About Section Button"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
