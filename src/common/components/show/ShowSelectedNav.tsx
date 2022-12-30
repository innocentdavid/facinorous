import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FormChange } from "../functions/CommonFunctionalites";

const SearchTab = () => {
  const [searchContent, setSearchContent] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='h-12 bg-gray-100 w-full flex items-center justify-center'>
      <form
        className='h-full w-[950px] lg:max-w-[1170px] lg:mx-auto flex items-center gap-2 py-[0.5rem] justify-center'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='h-full w-full p-2 outline-none text-[13px] placeholder:italic border border-gray-300 rounded-md '
          placeholder='Search by broker names or topics...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            FormChange(e, setSearchContent)
          }
        />
        <button
          className='bg-blue h-full px-[0.6rem] rounded-md flex items-center justify-center'
          type='submit'
        >
          <FontAwesomeIcon icon={faSearch} className='text-white text-[11px]' />
        </button>
      </form>
    </div>
  );
};

const ShowSelectedNav = () => {
  return <SearchTab />;
};

export default ShowSelectedNav;
