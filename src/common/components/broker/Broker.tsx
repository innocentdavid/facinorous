import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import React from "react";

const Broker: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-green-400'>
      <div className='absolute flex top-0 bg-green-400 rounded-b pb-0.5'>
        <div className='has-tooltip cursor-pointer flex justify-center'>
          <span className='tooltip absolute rounded shadow-lg p-3 bg-gray-100  mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52'>
            This broker is recommended for you because it is a great fit based
            on answers you gave earlier in the Find My Broker tool. This is one
            of the top 5 brokers that best fit the preferences you provided.
          </span>
          <div className='flex text-white text-xs font-semibold  px-2 items-center gap-1'>
            <FontAwesomeIcon icon={faCheck} className='text-sm' />
            Recommended for you
          </div>
        </div>
      </div>
      <div className='flex items-center sm:mb-6 sm:h-8 mb-6'>
        <div className='flex justify-center items-center'>
          <div
            className='h-8 w-8 mr-4 bg-contain bg-center bg-no-repeat'
            style={{
              backgroundImage: "url('/images/icons/award_badge.png')"
            }}
          ></div>
          Best CFD broker
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex items-center flex-col'>
          <div className='flex items-center flex-col'>
            <a
              href='https://brokerchooser.com/go-to-broker/xtb/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-logo'
              rel='noreferrer nofollow'
              target='_blank'
            >
              <div
                className='shadow-lg rounded-md w-12 h-12 sm:w-16 sm:h-16 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                style={{
                  backgroundImage:
                    "url('https://brokerchooser.com/uploads/broker_logos/xtb-review.png')"
                }}
              ></div>
            </a>
            <div className='flex flex-col items-center mt-2 sm:mt-4'>
              <a
                href='https://brokerchooser.com/go-to-broker/xtb/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-name-link'
                rel='noreferrer nofollow'
                target='_blank'
              >
                <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                  XTB
                </strong>
              </a>
              <div className='flex items-center'>
                <div className='relative border border-black rounded-full flex overflow-hidden w-[90px] sm:w-[125px] h-[7px] sm:h-[10px]'>
                  <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                  <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                  <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                  <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                  <div
                    className='absolute h-full z-10 bg-green-400'
                    style={{ width: "96%" }}
                  ></div>
                </div>
                <div className='font-bold text-xs ml-1.5 sm:text-sm sm:ml-2'>
                  4.8
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-6 flex items-start sm:h-24 text-sm'>
            Recommended for forex and CFD traders looking for low fees and great
            deposit/withdrawal service
          </div>
          <div className='flex flex-col items-center mt-7 sm:mt-8'>
            <div className='flex items-center relative w-max flex-col'>
              <a
                className='flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'
                rel='noreferrer nofollow'
                target='_blank'
                href='https://brokerchooser.com/go-to-broker/xtb/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button'
              >
                Visit broker
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
            <div className='text-xs sm:text-sm mt-4'>
              or{" "}
              <a
                href='/broker-reviews/xtb-review'
                className=' max-w-max cursor-pointer  no-underline transition-all duration-75 text-xs sm:text-sm inline-block'
                target='_blank'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                }}
              >
                <span>Read review</span>
              </a>
            </div>
          </div>
        </div>
        <div className='text-2xs sm:text-xs font-gray-400 mt-2.5 sm:mt-5'>
          76% of retail CFD accounts lose money
        </div>
      </div>
    </div>
  );
};

export default Broker;
