import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "../components/MobileMenu";
import { useGlobalContext } from "../context/globalContext";

const Navbar = () => {
  const { isOpen, setIsOpen } = useGlobalContext();
  return (
    <nav className="sticky top-0 z-[20] bg-green w-full px-[20px] xl:px-[60px] h-[10vh] vsm:h-[12vh] flex justify-between items-center">
      <Link to="/" className="text-xl font-medium">
        RealtorLink
      </Link>

      <ul className="hidden xl:flex gap-[40px] items-center">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <ScrollLink to="about" duration={500} smooth={true}>
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="rooms" duration={500} smooth={true} offset={200}>
            ROOMS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" duration={1000} smooth={true}>
            CONTACT
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};


      <p className="hidden xl:block text-base uppercase leading-tight">
        +38 032 297 50 20
      </p>

      <button className="block xl:hidden">
        {isOpen ? (
          <FaTimes
            className="text-[red] text-[30px]"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars className="text-[30px]" onClick={() => setIsOpen(true)} />
        )}
      </button>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
