// import Link from "next/link";

// function Navbar() {
//   const profile = "/EnovaProfile.pdf";
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b-2 md:font-bold text-green-900">
//       <div className="flex flex-col justify-between">
//         <div className="hidden md:block">
//           <img
//             src="pattern.png"
//             alt="pattern"
//             className="transform scale-y-[-1] md:h-7 md:w-[90rem]"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <img src="ELogo.png" alt="logo" className="w-40 md:w-56 lg:w-80" />
//           <div className="flex gap-1 md:gap-3 mr-3">
//             <h2>
//               <Link href={"/"}>Home</Link>
//             </h2>
//             <h2>
//               <Link href={"#our-services"}>Our Services</Link>
//             </h2>
//             <h2>
//               <Link
//                 href={profile}
//                 download="EnovaProfile.pdf"
//                 target={"_blank"}
//               >
//                 Portfolio
//               </Link>
//             </h2>
//           </div>
//         </div>
//         <div className="md:hidden">
//           <img src="pattern.png" alt="pattern" />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-black my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-white dark:bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center  dark:text-black bg-black relative dark:bg-gray-50 justify-between w-full px-10 z-10 lg:px-16 md:px-12 sm:px-8 py-8 font-medium">
      <h2 className="font-bold text-3xl lg:text-2xl md:text-xl sm:text-xs animate-bounce">
        <Link href={"/"}>Enova Africa</Link>
      </h2>
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-black block transition-all duration-300 ease-out my-1 h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" rounded-lg backdrop-blur-md  z-50 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col justify-center items-center text-xl">
            <CustomMobileLink
              toggle={handleClick}
              href={"/"}
              title="Home"
              className=""
            />

            <CustomMobileLink
              toggle={handleClick}
              href={"/about"}
              title="About Us"
              className=""
            />

            <CustomMobileLink
              toggle={handleClick}
              href={"/projects"}
              title="Our Services"
              className=""
            />
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]"></div>
    </nav>
  );
}

export default Navbar;
