import React, { useContext, useEffect, useState } from "react";
import { logo } from "@/app/assests";
import { GiFullWoodBucket } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import AppContext from "@/context";

export const NavbarComponent = () => {
  const { setBasketModal, cartItems } = useContext(AppContext);
  const router = useRouter();
  const [isPathName, setIsPathName] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(cartItems);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsPathName(pathname === "/bucket");
  }, [pathname]);

  return (
    <nav className=" fixed w-full z-50 shadow-md p-3 bg-[#121618] ">
      <div className="container mx-auto flex items-center justify-between  relative">
        <a
          className="cursor-pointer"
          onClick={() => {
            scrollToSection("home");
            setBasketModal(false);
          }}
        >
          <img src={logo?.src} className="h-14" alt="The Pie Express Logo" />
        </a>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl md:mr-0 mr-4">☰</span>
        </button>
        <div
          className={`lg:flex space-x-6 items-center absolute lg:static  w-full lg:w-auto top-16 left-0 transition-transform duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {[
            { id: "home", label: "Home" },
            { id: "menu", label: "Menu" },
            { id: "services", label: "Services" },
            { id: "blog", label: "Blog" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <div
              key={id}
              onClick={() => {
                scrollToSection(id);
                setBasketModal(false);
              }}
              className={`cursor-pointer text-white hover:text-gray-300 transition lg:p-0`}
            >
              {label}
            </div>
          ))}
          {/* <div
            className="relative cursor-pointer"
            onClick={() => setBasketModal(true)}
          >
            <GiFullWoodBucket className=" hidden md:flex text-yellow-500 text-6xl cursor-pointer" />
            <div className="absolute bg-white h-5 w-5 top-8 rounded-sm right-5">
              <div className="w-full h-full flex items-center justify-center mt-2">
                <p className="text-center textr-black"> {cartItems?.length}</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div
          className="absolute top-0 right-[-10px] cursor-pointer lg:hidden"
          onClick={() => setBasketModal(true)}
        >
          <GiFullWoodBucket
            onClick={() => setBasketModal(true)}
            className="  z-50  text-yellow-500 text-5xl cursor-pointer"
          />
          <div className="absolute  bg-white h-4 w-4 top-[26px] rounded-sm right-4">
            <div className="w-full h-full flex items-center justify-center mt-2">
              <p className="text-center textr-black"> {cartItems?.length}</p>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};
