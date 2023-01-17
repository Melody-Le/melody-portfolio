import React from "react";
import SocialIcon from "../../components/socialIcon/SocialIcon";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 block p-4 bg-[#DDDDDD] sm:p-6 ">
      {/* <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-1" /> */}
      <div className="flex items-center justify-between mx-auto">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Melody Le™
          </a>
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <SocialIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
