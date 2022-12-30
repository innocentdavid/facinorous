/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Broker from "./Broker";
const BestOnlineBroker: NextPage = () => {
  return (
    <div className='w-full py-10 bg-gradient-to-b from-white to-blue-50 '>
      <div className='w-[950px] mx-auto flex flex-col gap-8 py-10'>
        <div className='w-full flex items-center justify-center flex-col text-3xl'>
          <h1 className='font-bold w-full text-center'>Best online brokers</h1>
          <h1 className='font-bold w-full text-center text-gray-400'>
            in Nigeria
          </h1>
        </div>
        <div className='flex gap-3'>
          <Broker />
          <Broker />
          <Broker />
        </div>
      </div>
    </div>
  );
};

export default BestOnlineBroker;
