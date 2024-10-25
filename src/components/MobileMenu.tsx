import { Link as ScrollLink } from "react-scroll";
import { useGlobalContext } from "../context/globalContext";

const MobileMenu = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <div
      className={`mobile-menu xl:hidden ${
        !isOpen && "hidden"
      } fixed z-[999] left-0 bg-green top-[10vh] vsm:top-[12vh] bottom-0 min-h-[90vh] w-screen pt-[30px]`}
    >
      <div className="nav flex flex-1 flex-col gap-[40px] px-[20px]">
        <ScrollLink
          onClick={() => setIsOpen(false)}
          to="home"
          duration={500}
          smooth={true}
        >
          HOME
        </ScrollLink>

        <ScrollLink
          onClick={() => setIsOpen(false)}
          to="about"
          duration={500}
          smooth={true}
        >
          ABOUT
        </ScrollLink>

        <ScrollLink
          onClick={() => setIsOpen(false)}
          to="rooms"
          duration={500}
          smooth={true}
          offset={0}
        >
          ROOMS
        </ScrollLink>

        <ScrollLink
          onClick={() => setIsOpen(false)}
          to="contact"
          duration={1000}
          smooth={true}
        >
          CONTACT
        </ScrollLink>
      </div>
    </div>
  );
};

      <p className="mt-[50px] mb-[20px] text-xl font-normal uppercase leading-tight text-center">
        +38 032 297 50 20
      </p>
      <p className="mb-[60px] text-center text-lg font-normal uppercase">
        8 Lystopadovoho Chynu,Lviv
      </p>

      <div className="w-fit mx-auto flex gap-[20px]">
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          instagram
        </a>
        <a
          href="#"
          className="text-xs font-medium uppercase leading-tight underline underline-offset-4"
        >
          twitter
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
