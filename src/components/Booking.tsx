import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";

const Booking = () => {
  const { openBookingModal, setOpenBookingModal } = useGlobalContext();

  //Local state
  const [username, setUsername] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Dear ${username}, You have successfully booked`);
    setOpenBookingModal(false);
  };

  return (
    <div
      className={`${
        !openBookingModal && "hidden"
      } fixed top-0 left-0 z-[21] w-full h-full bg-black/70 flex justify-center items-center`}
    >
      <div
        className={`relative duration-500 h-fit w-[90vw] vsm:w-fit bg-white text-green px-[20px] vsm:px-[40px] py-[20px]`}
      >
        <button
          className="absolute top-[20px] right-[20px]"
          onClick={() => setOpenBookingModal(false)}
        >
          <FaTimes className="text-[red] text-[25px]" />
        </button>
        <h1 className="text-[50px] font-Miracle text-center text-yellow">
          BOOKING
        </h1>
        <p className="text-center">
          Book your room now and experience{" "}
          <span className="font-Miracle">luxury.</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-[40px] flex flex-col items-center gap-[20px]"
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input type="email" placeholder="Email" required />
          <input type="number" placeholder="Number of Guests" required />
          <div className="w-full">
            <label className="ml-[10px] mb-[5px] font-semibold" htmlFor="ad">
              Arrival Date
            </label>
            <input type="date" id="ad" placeholder="Arrival Date" required />
          </div>
          <div className="w-full">
            <label className="ml-[10px] mb-[5px] font-semibold" htmlFor="dd">
              Departure Date
            </label>
            <input type="date" id="dd" placeholder="Departure Date" required />
          </div>
          <button className="bg-green/90 hover:bg-green text-white px-[10px] py-[4px]">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
