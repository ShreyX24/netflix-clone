import { useState, useRef, useEffect } from "react";
import { leftNavBtns } from "../../lib/nav-btns";
import { styleNavbar } from "../../styles/styles-navbar";

export const Navbar = () => {
  const [expandSearchInput, setExpandSearchInput] = useState(false);
  const [accountBtnHovered, setAccountBtnHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  // Animating navbar to darken when scrolled to more than 20px
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animating navbar to darken when scrolled to more than 20px
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        event.target instanceof Node &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setExpandSearchInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // To Detect mouse event if the pointer is clicked anywhere outside the
  // input element it will be collapsed
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        event.target instanceof Node &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setExpandSearchInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        ...styleNavbar,
        boxShadow: isScrolled
          ? "inset 0px 0px 287px 120px rgba(0,0,0,0.75)"
          : "",
      }}
      className="top-0 left-0 fixed transition-all duration-500 delay-200 ease-in-out navbar z-50"
    >
      <div className="w-full h-full flex items-center">
        {/* logo */}
        <div className="p-10">
          <img src="/icons/netflix.png" alt="Netflix Logo" width={120} />
        </div>

        {/* nav-btns */}
        <div className="w-full flex items-center justify-between">
          {/* left-nav */}
          <div className="flex items-center text-sm gap-5">
            {leftNavBtns.map((item, index) => (
              <button key={index}>
                <span className="nav-btn">{item.placeholder}</span>
              </button>
            ))}
          </div>

          {/* right-nav */}
          <div className="flex flex-wrap-reverse items-center gap-5 p-10">
            {/* search bar */}
            <div
              ref={searchContainerRef}
              className="flex items-center relative"
            >
              <div
                className={`
                flex items-center
                transition-all duration-300 ease-in-out
                ${expandSearchInput ? "w-64" : "w-8"}
                overflow-hidden
              `}
              >
                <input
                  type="text"
                  placeholder="Titles, people, genres"
                  className={`
                    nav-search
                    transition-all duration-300 ease-in-out
                    ${expandSearchInput ? "opacity-100" : "opacity-0"}
                  `}
                />
                <button
                  className="absolute left-2"
                  onClick={() => setExpandSearchInput(!expandSearchInput)}
                >
                  <img
                    src="/icons/search.png"
                    alt="Search"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* children */}
            <button>
              <span className="text-sm">Children</span>
            </button>

            {/* notification */}
            <button className="flex">
              <img src="/icons/noti.png" alt="" width={22} />
              {/* noti-counter */}
              <div className="absolute w-[16px] h-[16px] bg-red-600 ml-4 rounded-full flex items-center justify-center text-[10px]">
                <span>9+</span>
              </div>
            </button>

            {/* Account settings */}
            <button
              className="flex items-center gap-2"
              onMouseOver={() => setAccountBtnHovered(true)}
              onMouseOut={() => setAccountBtnHovered(false)}
            >
              <img
                src="/images/user-img.jpg"
                alt=""
                width={32}
                className="rounded-sm"
              />

              <img
                src="/icons/arrow-down.png"
                alt=""
                className="transition-all duration-300 ease-in-out"
                width={12}
                style={{
                  transform: accountBtnHovered
                    ? "rotate(-180deg)"
                    : "rotate(0deg)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
