import React, { useState } from "react";
import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import { HiBars2 } from "react-icons/hi2";
import Search from "../Search";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from "../Layouts/Dropdown";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return ( 
    <Container className="bg-teal-300 font-dm">
      <Flex className="justify-between">
        <Dropdown onClick={handleClick}>
          <Flex className="items-center gap-x-2.5 text-base py-10">
            <div>
              <HiBars2 className="text-xl" />
              {show && (
                <ul className="absolute">
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
              </ul>
              )}
            </div>
            <div>
              <p>Shop by Category</p>
            </div>
          </Flex>
        </Dropdown>
        <div className="relative m-auto">
          <Search
            placeholder="Search Products"
            className="w-[601px] h-[50px] px-5 py-4 outline-none rounded text-[18px]"
          />
          <IoSearchOutline className="text-xl absolute top-4 right-0 items-center" />
        </div>
        <div className="items-center flex text-2xl">
          <IoMdPerson />
          <FaCaretDown />
          <FaShoppingCart className="mx-10" />
        </div>
      </Flex>
    </Container>
  );
};

export default Header;
