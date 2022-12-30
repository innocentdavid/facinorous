import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useState } from "react";

const ButtonDropDown: NextPage<{ text: string }> = ({ text }) => {
  const [rotate, setRotate] = useState<boolean>(false);
  return (
    <button
      className='text-white text-[16px] min-w-20  font-semibold flex gap-1 items-center h-full hover:text-yellow-color hover:border-b-2 border-b-yellow-color'
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
    >
      <span>{text}</span>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={`text-[14px] ${
          rotate ? "rotate-[-180deg]" : "rotate-0"
        } duration-200`}
      />
    </button>
  );
};

export default ButtonDropDown;
