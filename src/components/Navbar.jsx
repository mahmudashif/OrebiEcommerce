import React from "react";
import logo from "../assets/Logo.png";
import Flex from "./Layouts/Flex";

const Navbar = () => {
  return (
    <div>
      <nav className="font-dm max-w-container mx-auto py-8">
        <Flex>
          <div className="w-2/5">
            <img src={logo} alt="" />
          </div>
          <div>
            <ul className="text-[#767676] text-lg capitalize">
              <Flex className=" gap-12">
                <li className=" hover:text-primary">home</li>
                <li className=" hover:text-primary">shop</li>
                <li className=" hover:text-primary">about</li>
                <li className=" hover:text-primary">contacts</li>
                <li className=" hover:text-primary">journel</li>
              </Flex>
            </ul>
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Navbar;
