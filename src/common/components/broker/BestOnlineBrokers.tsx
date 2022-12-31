/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Broker from "./Broker";
const BestOnlineBroker: NextPage = () => {
  return (
    <div className='w-full py-10 bg-gradient-to-b from-white to-blue-50 '>
      <div className='lg:w-[950px] mx-auto flex flex-col gap-8 py-10'>
        <div className='w-full flex items-center justify-center flex-col text-3xl'>
          <h1 className='font-bold font-Geomanist w-full text-center'>
            <div className="">Best online brokers</div>
            <div className='text-gray-400'>
              in Nigeria
            </div>
          </h1>
        </div>
        {/* <div className='flex flex-wrap justify-evenly items-center gap-3'> */}
        <div className='flex flex-wrap justify-evenly items-center sm:items-stretch flex-col sm:flex-row mt-6'>
          <Broker />
          <Broker />
          <Broker />
        </div>
      </div>
    </div>
  );
};

export default BestOnlineBroker;
