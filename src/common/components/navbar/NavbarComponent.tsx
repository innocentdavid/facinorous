import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CommonContext } from "../../../context/CommonContext";
import ButtonDropDown from "../../elements/ButtonDropDown";
import { ICommonContext } from "../../types";

const NavbarComponent: NextPage = () => {
  const { searchComponent, setSeachComponent } =
    useContext<ICommonContext>(CommonContext);
  return (
    <div className='h-12 bg-black w-full flex items-center justify-center'>
      <div className='h-full flex w-[950px] lg:max-w-[1170px] lg:mx-auto items-center justify-between gap-16'>
        <Image
          src={"/favicon/favicon.svg"}
          alt='logo'
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
          <div className='flex h-full gap-4'>
            <ButtonDropDown text='Compare brokers' />
            <ButtonDropDown text='Best brokers' />
            <ButtonDropDown text='Best review' />
            <ButtonDropDown text='Education' />
          </div>
          {searchComponent && (
            <FontAwesomeIcon
              icon={faSearch}
              className='text-sm text-white hover:text-yellow cursor-pointer'
              onClick={() => setSeachComponent(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
