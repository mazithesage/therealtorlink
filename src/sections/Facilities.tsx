import starImg from "../assets/star.svg";
import img1 from "../assets/facilityImg1.png";
import img2 from "../assets/facilityImg2.png";
import Facility from "../components/Facility";
import { facilities } from "../data/facilitiesList";

const Facilities = () => {
  return (
    <section className="facilities-section w-full mt-[-3px] pb-[200px] py-[80px] px-[20px] xl:px-[60px] bg-[#FFFCF6] text-[#1B3B36]">
      <div className="pt-[80px] border-t border-t-[#313F38]">
        <div className="w-full flex xmd:gap-[120px] xl:gap-0 justify-start xl:justify-between xl:flex-row">
          <p className="w-auto xl:w-fit flex-1 xl:flex-auto text-end xl:text-start text-[16px] md:text-lg uppercase order-3 xl:order-1">
            Art & <br className="hidden vsm:block" /> Congress hall
          </p>

          <h1 className="xl:translate-x-[-80px] text-[60px] vsm:text-[80px] md:text-[100px] font-Miracle leading-[1.2] vsm:leading-[105px] order-2">
            OUR <br /> FACI <br />
            <span className="pl-[30px] vsm:pl-[80px] flex items-center gap-[20px] vsm:gap-[65px]">
              <img src={starImg} alt="star" /> LITIES
            </span>
          </h1>

          <img
            className="hidden opacity-0 xl:opacity-100 w-[245px] xl:w-fit xmd:block h-fit order-1 xl:order-3"
            src={img1}
            alt="Hotel facility"
          />
        </div>

        <div className="mt-[50px] xmd:mt-0 xl:mt-[70px] flex flex-col md:flex-row gap-[30px] md:gap-[120px] xl:gap-[60px] items-center md:items-end">
          <img
            className="w-[245px] xl:w-fit h-fit"
            src={img2}
            alt="Hotel facility"
          />
          <p className="self-center vsm:self-end md:mb-[-100px] w-[80%] vsm:w-[300px] text-center vsm:text-left text-[13px] xl:text-base opacity-80 leading-7">
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.
          </p>
        </div>

        <div className="mt-[80px] md:mt-[200px] w-full h-fit">
          {facilities.map((facility, index) => (
            <Facility key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
