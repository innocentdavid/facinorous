import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import ButtonDropDown from "../../elements/ButtonDropDown";

const NavbarComponent: NextPage = () => {
  return (
    <div className='h-12 bg-black w-full flex items-center justify-center'>
      <div className='h-full flex items-center justify-between gap-10'>
        <Image
          src={"/favicon/favicon.svg"}
          alt='logo'
          className='w-16 h-16'
          width={"180"}
          layout={"intrinsic"}
          height={"100"}
        />
        <div className='flex items-center gap-3 h-full'>
          <Link href={"#"}>
            <button className='text-white font-semibold text-[12px] border border-white rounded-md p-1 px-2 hover:text-yellow hover:border-yellow'>
              Find My Broker
            </button>
          </Link>
          <Link href={"#"}>
            <button className='text-white font-semibold text-[12px] border border-white rounded-md p-1 px-2 hover:text-yellow hover:border-yellow'>
              Find My First Stock
            </button>
          </Link>
          <div className='flex h-full gap-3'>
            <ButtonDropDown text='Compare brokers' />
            <ButtonDropDown text='Best brokers' />
            <ButtonDropDown text='Best review' />
            <ButtonDropDown text='Education' />
          </div>
          <FontAwesomeIcon
            icon={faSearch}
            className='text-sm text-white hover:text-yellow cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
