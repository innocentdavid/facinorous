/* eslint-disable react/no-unescaped-entities */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FormChange } from "../functions/CommonFunctionalites";
import NavbarComponet from "../navbar/NavbarComponent";

const SearchTab = () => {
  const [searchContent, setSearchContent] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='h-16 bg-gray-100 w-full flex items-center justify-center'>
      <form
        className='h-full lg:mx-auto flex items-center gap-2 py-[0.5rem] justify-center w-[1140px]'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='h-full w-full p-2 outline-none text-[15px] placeholder:italic border-2 border-gray-300 rounded-md '
          placeholder='Search by broker names or topics...'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            FormChange(e, setSearchContent)
          }
        />
        <button
          className='bg-blue-color h-full px-[1rem] rounded-md flex items-center justify-center'
          type='submit'
        >
          <FontAwesomeIcon icon={faSearch} className='text-white text-[11px]' />
        </button>
      </form>
    </div>
  );
};

const ShowSelectedNav = () => {
  return (
    <>
      <NavbarComponet />
      <div className='w-full overflow-x-hidden'>
        <div className='w-full relative text-sm sm:text-base py-10 sm:pt-14'>
          <SearchTab />
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]'>
            <div className='sm:flex-row flex flex-col sm:items-center relative'>
              <div className='flex-1'>
                <div></div>

                <div className='hidden sm:block mt-4'>
                  <div>
                    <h1 className='font-bold text-4xl lg:text-5xl w-full mb-6 sm:mb-8'>
                      Not sure which broker to choose?
                    </h1>
                    <p className='mb-7 text-base sm:text-xl'>
                      Save hours of dull research by answering a few simple
                      questions. Find the right broker in seconds!
                    </p>
                    <p className='mb-7 text-base sm:text-xl'>
                      Let's start with selecting the country you live in!
                    </p>
                    <div className='flex flex-col items-start gap-4'>
                      <div className='w-72'>
                        <div className=''>
                          <div
                            className='css-b62m3t-container'
                            id='ZOkadfuombExxFDIVipg'
                          >
                            <span
                              id='react-select-4-live-region'
                              className='css-7pg0cj-a11yText'
                            ></span>
                            <span
                              aria-live='polite'
                              aria-atomic='false'
                              aria-relevant='additions text'
                              className='css-7pg0cj-a11yText'
                            ></span>
                            <div className='text-orange-500 border px-4 py-2 w-fit'>
                              Nigeria Only
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center sm:justify-start'>
                        <div className='flex items-center relative w-max flex-col'>
                          <a
                            className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-sm sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem]'
                            target=''
                            href='/find-my-broker?countryId=153&amp;applyCountryAsGlobal=true'
                          >
                            Find my broker
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              className='ml-2 w-5 h-5'
                            >
                              <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-1 flex justify-center items-center mb-8 sm:mb-0'>
                <div
                  className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] xl:ml-12 xl:w-[34rem] xl:h-[34rem] sm:ml-4 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage: "url('/assets/touch_screen.svg')"
                  }}
                ></div>
              </div>
              <div className='block sm:hidden'>
                <div>
                  <h1 className='font-bold text-4xl lg:text-5xl w-full mb-6 sm:mb-8'>
                    Not sure which broker to choose?
                  </h1>
                  <p className='mb-7 text-base sm:text-xl'>
                    Save hours of dull research by answering a few simple
                    questions. Find the right broker in seconds!
                  </p>
                  <p className='mb-7 text-base sm:text-xl'>
                    Let's start with selecting the country you live in!
                  </p>
                  <div className='flex flex-col items-start gap-4'>
                    <div className='w-72'>
                      <div className=''>
                        <div
                          className='css-b62m3t-container'
                          id='lUeBDYHPCuwboeyCfGUh'
                        >
                          <span
                            id='react-select-5-live-region'
                            className='css-7pg0cj-a11yText'
                          ></span>
                          <span
                            aria-live='polite'
                            aria-atomic='false'
                            aria-relevant='additions text'
                            className='css-7pg0cj-a11yText'
                          ></span>
                          <div className='css-1s2u09g-control'>
                            <div className='css-1d8n9bt'>
                              <div className='css-qc6sy-singleValue'>
                                Nigeria
                              </div>
                              <div className='css-ackcql' data-value=''>
                                <input
                                  className=''
                                  autoCapitalize='none'
                                  autoComplete='off'
                                  autoCorrect='off'
                                  id='react-select-5-input'
                                  spellCheck='false'
                                  tabIndex={0}
                                  type='text'
                                  aria-autocomplete='list'
                                  aria-expanded='false'
                                  aria-haspopup='true'
                                  role=''
                                  value=''
                                  style={{
                                    color: "inherit",
                                    background: "0px center",
                                    opacity: 1,
                                    width: "100%",
                                    gridArea: " 1 / 2 / auto / auto",
                                    font: "inherit",
                                    minWidth: "2px",
                                    border: "0px",
                                    margin: "0px",
                                    outline: "0px",
                                    padding: "0px"
                                  }}
                                />
                              </div>
                            </div>
                            <div className='css-1wy0on6'>
                              <span className='css-1okebmr-indicatorSeparator'></span>
                              <div
                                className='css-tlfecz-indicatorContainer'
                                aria-hidden='true'
                              >
                                <svg
                                  height='20'
                                  width='20'
                                  viewBox='0 0 20 20'
                                  aria-hidden='true'
                                  focusable='false'
                                  className='css-8mmkcg'
                                >
                                  <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center sm:justify-start'>
                      <div className='flex items-center relative w-max flex-col'>
                        <a
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-sm sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem]'
                          target=''
                          href='/find-my-broker?countryId=153&amp;applyCountryAsGlobal=true'
                        >
                          Find my broker
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='ml-2 w-5 h-5'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-2 sm:py-10'>
          <div className='w-full h-full absolute flex justify-end flex-col bottom-0'>
            <div className='w-full h-16 bg-secondary-50 bg-opacity-60 rounded-t-[50%]'></div>
            <div className='w-full bg-secondary-50 bg-opacity-60 h-1/2'></div>
          </div>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]'>
            <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
              Best online brokers <br />
              <span className='text-gray-400'>in Nigeria</span>
            </h2>
            <div className='flex flex-wrap justify-evenly items-center sm:items-stretch flex-col sm:flex-row mt-6'>
              <div className='flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-success-500'>
                <div className='absolute flex top-0 bg-success-500 rounded-b pb-0.5'>
                  <div className='has-tooltip  cursor-pointer flex justify-center'>
                    <span className='hidden tooltip absolute rounded shadow-lg p-3 bg-gray-100  mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52'>
                      This broker is recommended for you because it is a great
                      fit based on answers you gave earlier in the Find My
                      Broker tool. This is one of the top 5 brokers that best
                      fit the preferences you provided.
                    </span>
                    <div className='flex text-white text-xs font-semibold px-2'>
                      <div
                        className='w-3 h-3 self-center mr-1 bg-contain bg-center bg-no-repeat'
                        style={{
                          backgroundImage:
                            "url('/images/icons/white-check.svg')"
                        }}
                      ></div>
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
                              className='absolute h-full z-10 bg-success-500'
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                          <div className='font-bold text-xs ml-1.5 sm:text-sm sm:ml-2'>
                            4.8
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-center mt-6 flex items-start sm:h-24'>
                      Recommended for forex and CFD traders looking for low fees
                      and great deposit/withdrawal service
                    </div>
                    <div className='flex flex-col items-center mt-7 sm:mt-8'>
                      <div className='flex items-center relative w-max flex-col'>
                        <a
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'
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
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className='text-xs sm:text-sm mt-4'>
                        or
                        <a
                          href='/broker-reviews/xtb-review'
                          className='max-w-max cursor-pointer no-underline  transition-all duration-75 text-xs sm:text-sm inline-block'
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
              <div className='flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-success-500'>
                <div className='absolute flex top-0 bg-success-500 rounded-b pb-0.5'>
                  <div className='has-tooltip  cursor-pointer flex justify-center'>
                    <span className='hidden absolute rounded shadow-lg p-3 bg-gray-100 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52'>
                      This broker is recommended for you because it is a great
                      fit based on answers you gave earlier in the Find My
                      Broker tool. This is one of the top 5 brokers that best
                      fit the preferences you provided.
                    </span>
                    <div className='flex text-white text-xs font-semibold px-2'>
                      <div
                        className='w-3 h-3 self-center mr-1 bg-contain bg-center bg-no-repeat'
                        style={{
                          backgroundImage:
                            "url('/images/icons/white-check.svg')"
                        }}
                      ></div>
                      Recommended for you
                    </div>
                  </div>
                </div>
                <div className='flex items-center sm:mb-6 sm:h-8'></div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center flex-col'>
                      <a
                        href='https://brokerchooser.com/go-to-broker/capitalcom/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-logo'
                        rel='noreferrer nofollow'
                        target='_blank'
                      >
                        <div
                          className='shadow-lg rounded-md w-12 h-12 sm:w-16 sm:h-16 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                          style={{
                            backgroundImage:
                              "url('https://brokerchooser.com/uploads/broker_logos/capitalcom-review.png')"
                          }}
                        ></div>
                      </a>
                      <div className='flex flex-col items-center mt-2 sm:mt-4'>
                        <a
                          href='https://brokerchooser.com/go-to-broker/capitalcom/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-name-link'
                          rel='noreferrer nofollow'
                          target='_blank'
                        >
                          <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                            Capital.com
                          </strong>
                        </a>
                        <div className='flex items-center'>
                          <div className='relative border border-black rounded-full flex overflow-hidden w-[90px] sm:w-[125px] h-[7px] sm:h-[10px]'>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div
                              className='absolute h-full z-10 bg-success-500'
                              style={{ width: "96%" }}
                            ></div>
                          </div>
                          <div className='font-bold text-xs ml-1.5 sm:text-sm sm:ml-2'>
                            4.8
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-center mt-6 flex items-start sm:h-24'>
                      Recommended for investors and CFD traders looking for a
                      great trading platform and excellent customer service
                    </div>
                    <div className='flex flex-col items-center mt-7 sm:mt-8'>
                      <div className='flex items-center relative w-max flex-col'>
                        <a
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'
                          rel='noreferrer nofollow'
                          target='_blank'
                          href='https://brokerchooser.com/go-to-broker/capitalcom/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button'
                        >
                          Visit broker
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-3 h-3'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className='text-xs sm:text-sm mt-4'>
                        or
                        <a
                          href='/broker-reviews/capitalcom-review'
                          className='max-w-max cursor-pointer no-underline  transition-all duration-75 text-xs sm:text-sm inline-block'
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
                    87.41% of retail CFD accounts lose money
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-start w-64 sm:w-80 shadow-md px-3 py-8 m-2 bg-white relative rounded border-2 border-success-500'>
                <div className='absolute flex top-0 bg-success-500 rounded-b pb-0.5'>
                  <div className='has-tooltip cursor-pointer flex justify-center'>
                    <span className='hidden absolute rounded shadow-lg p-3 bg-gray-100 mt-8 mx-4 max-w-xs bg-secondary-50 text-sm z-50 text-black w-52'>
                      This broker is recommended for you because it is a great
                      fit based on answers you gave earlier in the Find My
                      Broker tool. This is one of the top 5 brokers that best
                      fit the preferences you provided.
                    </span>
                    <div className='flex text-white text-xs font-semibold px-2'>
                      <div
                        className='w-3 h-3 self-center mr-1 bg-contain bg-center bg-no-repeat'
                        style={{
                          backgroundImage:
                            "url('/images/icons/white-check.svg')"
                        }}
                      ></div>
                      Recommended for you
                    </div>
                  </div>
                </div>
                <div className='flex items-center sm:mb-6 sm:h-8'></div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center flex-col'>
                      <a
                        href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-logo'
                        rel='noreferrer nofollow'
                        target='_blank'
                      >
                        <div
                          className='shadow-lg rounded-md w-12 h-12 sm:w-16 sm:h-16 hover:opacity-80 bg-contain bg-center bg-no-repeat'
                          style={{
                            backgroundImage:
                              "url('https://brokerchooser.com/uploads/broker_logos/admirals-admiral-markets-review.png')"
                          }}
                        ></div>
                      </a>
                      <div className='flex flex-col items-center mt-2 sm:mt-4'>
                        <a
                          href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button-name-link'
                          rel='noreferrer nofollow'
                          target='_blank'
                        >
                          <strong className='text-base text-center sm:text-lg font-bold hover:text-primary-500'>
                            Admirals (Admiral Markets)
                          </strong>
                        </a>
                        <div className='flex items-center'>
                          <div className='relative border border-black rounded-full flex overflow-hidden w-[90px] sm:w-[125px] h-[7px] sm:h-[10px]'>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div className='h-full border-r border-black last:border-r-0 z-20 w-[25px] sm:w-[25px]'></div>
                            <div
                              className='absolute h-full z-10 bg-success-500'
                              style={{ width: "94%" }}
                            ></div>
                          </div>
                          <div className='font-bold text-xs ml-1.5 sm:text-sm sm:ml-2'>
                            4.7
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='text-center mt-6 flex items-start sm:h-24'>
                      Recommended for forex traders who are familiar with
                      MetaTrader trading platforms
                    </div>
                    <div className='flex flex-col items-center mt-7 sm:mt-8'>
                      <div className='flex items-center relative w-max flex-col'>
                        <a
                          className='flex flex-row items-center justify-center font-medium uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white'
                          rel='noreferrer nofollow'
                          target='_blank'
                          href='https://brokerchooser.com/go-to-broker/admirals-admiral-markets/open-account?measurementCategory=01homepa%2F02notrel%2F03notrel&amp;measurementList=front-page-visit-broker-button'
                        >
                          Visit broker
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            className='w-3 h-3'
                          >
                            <path
                              fillRule='evenodd'
                              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className='text-xs sm:text-sm mt-4'>
                        or
                        <a
                          href='/broker-reviews/admirals-admiral-markets-review'
                          className='max-w-max cursor-pointer no-underline  transition-all duration-75 text-xs sm:text-sm inline-block'
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
                    81% of retail CFD accounts lose money
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-10 sm:pt-12 sm:pb-14 bg-secondary-50 bg-opacity-60'>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]'>
            <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
              Best Brokers List
            </h2>
            <div className='flex flex-wrap justify-evenly w-full items-start'>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  Best Stock Brokers in 2023
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  To help you to find the best stock broker, we first selected
                  102 quality brokers; then we scrutinized ...
                </div>
                <a
                  href='/best-brokers/best-stock-brokers'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  Best forex brokers in 2023
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  While many forex trading brokers offer an excellent service,
                  the ones in our toplist go the extra mile ...
                </div>
                <a
                  href='/best-brokers/best-forex-brokers'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold  text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  Best crypto brokers in 2023
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  To help you find the best crypto broker, we went ahead and did
                  the research for you. We looked at the 102 online brokers that
                  we cover, then ...
                </div>
                <a
                  href='/best-brokers/best-crypto-brokers'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-10 sm:pt-12 sm:pb-14 bg-secondary-50 bg-opacity-60'>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]'>
            <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
              Start here if you still feel lost
            </h2>
            <div className='flex flex-wrap justify-evenly w-full items-start'>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  Buy your first stock
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  A step-by-step guide with screenshots and instructions,
                  explaining how to buy your first stocks by yourself!
                </div>
                <a
                  href='/my-first-stock-trade-quest'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  What is Forex Trading?
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  Forex trading means the buying and selling of currency pairs.
                  You are basically buying one currency while selling another
                  ...
                </div>
                <a
                  href='/education/forex/forex-trading-explained'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
              <div className='shadow-md flex flex-col items-center rounded-md py-6 px-3 bg-white mt-4 w-64 mx-2'>
                <h2 className='font-semibold text-2xl w-3/4 sm:w-auto sm:max-w-sm mb-4 text-center'>
                  What is crypto trading?
                </h2>
                <div className='text-center text-sm sm:text-base mb-4'>
                  Crypto trading means the trading of cryptocurrencies or
                  digital currencies for other assets, such as conventional fiat
                  money or other digital currencies ...
                </div>
                <a
                  href='/education/crypto/what-is-cryptocurrency/what-is-crypto-trading'
                  className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                  target='_blank'
                  style={{
                    background:
                      "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                  }}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='inline mb-px h-5 w-5 ml-2'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-10 sm:pt-14 sm:pb-20'>
          <div className='w-full h-full absolute flex justify-end flex-col-reverse top-0'>
            <div className='w-full h-16 bg-secondary-50 bg-opacity-60 rounded-b-[50%]'></div>
            <div className='w-full bg-secondary-50 bg-opacity-60 h-3/4'></div>
          </div>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
            <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
              <div className='text-sm uppercase text-primary-500 mb-2.5'>
                Testimonials
              </div>
              What our users say about us
            </h2>
            <div className='flex flex-col justify-center'>
              <div className='w-full flex justify-between items-center'>
                <div className='w-12 h-12'>
                  <div
                    className='w-12 h-12 bg-contain bg-center bg-no-repeat cursor-pointer'
                    style={{
                      backgroundImage:
                        "url('/assets/icons/carousel_left_button.png')"
                    }}
                  ></div>
                </div>
                <div className='flex flex-col justify-start transition-opacity ease-in-out duration-300 opacity-100'>
                  <div className='flex items-start sm:items-start h-[28rem] sm:h-64'>
                    <div className='flex text-sm sm:text-base h-max max-w-2xl m-auto flex-col items-center sm:flex-row sm:items-start'>
                      <div
                        className='w-32 h-32 mb-4 sm:mb-6 mr-4 bg-contain bg-center bg-no-repeat'
                        style={{
                          backgroundImage: "url('/assets/Dion.png')"
                        }}
                      ></div>
                      <div className='flex flex-col justify-start'>
                        <div className='mb-4 sm:mb-8 text-gray-700 max-w-lg italic'>
                          I just wanted to give you a big thanks! I really
                          enjoyed your website, searching for the best broker
                          for my wishes. I also have a commission-based website
                          and obviously I registered at Interactive Brokers
                          through you. Especially the easy to understand fees
                          table was great! Thanks again, keep up the amazing
                          work!
                        </div>
                        <div className='font-bold'>Dion Rozema</div>
                        <div className='text-sm text-gray-500'>Owner</div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 flex justify-center'>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-500'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                    <div className='w-2 h-2 mx-1 rounded-full cursor-pointer bg-secondary-100'></div>
                  </div>
                </div>
                <div className='w-12 h-12'>
                  <div
                    className='w-12 h-12 bg-contain bg-center bg-no-repeat cursor-pointer'
                    style={{
                      backgroundImage:
                        "url('/assets/icons/carousel_right_button.png')"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-10 sm:py-14'>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
            <div className='sm:flex-row-reverse flex flex-col sm:items-center relative'>
              <div className='flex-1'>
                <div>
                  <h2 className='font-bold text-2xl w-full sm:text-3xl text-center sm:text-left mb-4 sm:mb-6'>
                    Who we are?
                  </h2>
                </div>
                <div className='hidden sm:block mt-4'>
                  <div className='flex flex-col items-start'>
                    <div className='mb-3 sm:mb-4'>
                      <a
                        href='/methodology'
                        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                        target=''
                        style={{
                          background:
                            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                        }}
                      >
                        <span>
                          Independent comparison site for online brokers
                        </span>
                      </a>
                    </div>
                    <div className='mb-3 sm:mb-4'>
                      <a
                        href='/what-brokers-will-you-find-here'
                        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                        target=''
                        style={{
                          background:
                            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                        }}
                      >
                        <span>
                          Partnered up with the world’s best brokerages
                        </span>
                      </a>
                    </div>
                    <div className='mb-3 sm:mb-4'>
                      <a
                        href='/why-trust-us'
                        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                        target=''
                        style={{
                          background:
                            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                        }}
                      >
                        <span>Trusted by millions of users worldwide</span>
                      </a>
                    </div>
                    <div className='mb-3 sm:mb-4'>
                      <a
                        href='/who-we-are'
                        className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                        target=''
                        style={{
                          background:
                            "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                        }}
                      >
                        <span>Fueled by our expert team</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-1 flex justify-center items-center mb-8 sm:mb-0'>
                <div
                  className='flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] mr-4 sm:mr-4 bg-contain bg-center bg-no-repeat'
                  style={{
                    backgroundImage: "url('/assets/presentation_light.svg')"
                  }}
                ></div>
              </div>
              <div className='block sm:hidden'>
                <div className='flex flex-col items-start'>
                  <div className='mb-3 sm:mb-4'>
                    <a
                      href='/methodology'
                      className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                      target=''
                      style={{
                        background:
                          "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                      }}
                    >
                      <span>
                        Independent comparison site for online brokers
                      </span>
                    </a>
                  </div>
                  <div className='mb-3 sm:mb-4'>
                    <a
                      href='/what-brokers-will-you-find-here'
                      className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                      target=''
                      style={{
                        background:
                          "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                      }}
                    >
                      <span>Partnered up with the world’s best brokerages</span>
                    </a>
                  </div>
                  <div className='mb-3 sm:mb-4'>
                    <a
                      href='/why-trust-us'
                      className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                      target=''
                      style={{
                        background:
                          "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                      }}
                    >
                      <span>Trusted by millions of users worldwide</span>
                    </a>
                  </div>
                  <div className='mb-3 sm:mb-4'>
                    <a
                      href='/who-we-are'
                      className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                      target=''
                      style={{
                        background:
                          "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                      }}
                    >
                      <span>Fueled by our expert team</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full relative text-sm sm:text-base py-10 sm:py-14'>
          <span className='relative -top-20'></span>
          <div className='relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1000px]'>
            <h2 className='font-bold text-2xl w-full sm:text-3xl text-center mb-4 sm:mb-6'>
              As seen on
            </h2>
            <div className='flex flex-wrap justify-center'>
              <a
                className='block'
                href='https://www.bloomberg.com/news/articles/2021-01-26/tax-for-trading-stocks-robinhood-investors-confused-over-how-much-they-must-pay'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "125px",
                    height: "26px",
                    backgroundImage: "url('/assets/media_logos/bloomberg.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://markets.businessinsider.com/news/stocks/amtd-digital-stock-price-trading-volume-wanes-after-massive-surge-2022-8'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "89px",
                    height: "29px",
                    backgroundImage:
                      "url('/assets/media_logos/business_insider.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://www.cnbc.com/video/2022/06/28/coinflex-token-raise-47-million-ftx-buy-robinhood-crypto-world.html'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "46px",
                    height: "38px",
                    backgroundImage: "url('/assets/media_logos/cnbc.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://www.ft.com/content/4f8a3790-9d4a-4d4b-a72c-9bdcb88618e0'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "104px",
                    height: "34px",
                    backgroundImage:
                      "url('/assets/media_logos/financial_times.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://www.forbes.com/sites/billybambrough/2022/06/08/serious-warning-issued-over-major-bitcoin-and-crypto-exchange-binance-and-its-ethereum-rival-bnb-after-sec-bombshell-hits-its-price/?sh=758c94dc4b37'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "88px",
                    height: "24px",
                    backgroundImage: "url('/assets/media_logos/forbes.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://fortune.com/2022/07/05/india-crypto-tax-trading-volume-exchanges-coindcx-zebpay-wazirx-koinbazar-startups-investors/'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "89px",
                    height: "23px",
                    backgroundImage:
                      "url('/assets/media_logos/fortune_magazine.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://www.investopedia.com/robinhood-begins-crypto-wallet-beta-tests-5217005'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "146px",
                    height: "25px",
                    backgroundImage:
                      "url('/assets/media_logos/investopedia.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://www.fool.com/investing/2022/07/27/cathie-wood-trades-shopify-and-coinbase-stocks/'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "161px",
                    height: "23px",
                    backgroundImage:
                      "url('/assets/media_logos/motley_fool.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://seekingalpha.com/news/3864016-crypto-exchange-huobi-registers-with-australian-financial-watchdog'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "132px",
                    height: "29px",
                    backgroundImage:
                      "url('/assets/media_logos/seeking_alpha.svg')"
                  }}
                ></div>
              </a>
              <a
                className='block'
                href='https://au.finance.yahoo.com/news/reason-aussies-are-losing-up-to-25-k-a-year-012949858.html'
                rel='nofollow'
              >
                <div
                  className='mx-8 my-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 bg-contain bg-center bg-no-repeat'
                  style={{
                    width: "83px",
                    height: "34px",
                    backgroundImage:
                      "url('/assets/media_logos/yahoo_finance.svg')"
                  }}
                ></div>
              </a>
            </div>
            <div className='text-center mt-8'>
              <a
                href='education/news/media-mentions'
                className='inline max-w-max cursor-pointer text-sm sm:text-base no-underline  transition-all duration-75'
                target='_blank'
                style={{
                  background:
                    "linear-gradient(rgb(253, 173, 0) 0%, rgb(253, 173, 0) 100%) 0px 100% / 1px 1px repeat-x;"
                }}
              >
                <span>See all media mentions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className='bc_footer_nav font-sans'>
        <div className='bc_footer_container'>
          <div className='bc_footer_nav_col'>
            <h4>About</h4>
            <ul>
              <li>
                <a href='https://brokerchooser.com/who-we-are'>Who we are</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/for-businesses'>
                  For Businesses
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/methodology'>
                  Our Methodology
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/team'>Our Team</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/education/news'>News</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/careers'>Careers</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/contact'>Contact</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/education/news/data-dashboard'>
                  Data dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className='bc_footer_nav_col'>
            <h4>Discover</h4>
            <ul>
              <li>
                <a href='https://brokerchooser.com/best-broker-awards'>
                  Best brokers 2023
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/find-my-broker'>
                  Find my broker
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/education'>Education</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare-brokerage'>
                  Compare brokers
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews'>
                  Broker reviews
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/digital-banks/comparison'>
                  Compare digital banks
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/digital-banks/reviews'>
                  Digital bank reviews
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/robo-advisors/reviews'>
                  Robo-advisor reviews
                </a>
              </li>
            </ul>
          </div>
          <div className='bc_footer_nav_col'>
            <h4>Follow us</h4>
            <ul id='follow-us'>
              <li>
                <a href='https://www.facebook.com/brokerchooser'>
                  <svg className='icon icon-2x icon-facebook-square'>
                    <use xlinkHref='#icon-facebook-square'></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/brokerchooser'>
                  <svg className='icon icon-2x icon-twitter-square'>
                    <use xlinkHref='#icon-twitter-square'></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/10527960/'>
                  <svg className='icon icon-2x icon-linkedin-square'>
                    <use xlinkHref='#icon-linkedin-square'></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UC0uZMULaH5TB7bRq6IuvbBA'>
                  <svg className='icon icon-2x icon-youtube-square'>
                    <use xlinkHref='#icon-youtube-square'></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='bc_footer_container'>
          <div className='bc_footer_nav_col'>
            <h4>Highest rated brokers</h4>
            <ul>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/interactive-brokers-review'>
                  Interactive Brokers review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/saxo-bank-review'>
                  Saxo Bank review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/degiro-review'>
                  DEGIRO review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/td-ameritrade-review'>
                  TD Ameritrade review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/charles-schwab-review'>
                  Charles Schwab review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/citic-securities-review'>
                  CITIC Securities review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/e-trade-review'>
                  E*TRADE review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/capitalcom-review'>
                  Capital.com review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/fidelity-review'>
                  Fidelity review
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/broker-reviews/merrill-edge-review'>
                  Merrill Edge review
                </a>
              </li>
            </ul>
          </div>
          <div className='bc_footer_nav_col'>
            <h4>Highest rated vs best alternative</h4>
            <ul>
              <li>
                <a href='https://brokerchooser.com/compare/interactive-brokers-vs-saxo-bank'>
                  Interactive Brokers vs Saxo Bank
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/saxo-bank-vs-swissquote'>
                  Saxo Bank vs Swissquote
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/comdirect-vs-degiro'>
                  Comdirect vs DEGIRO
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/e-trade-vs-td-ameritrade'>
                  E*TRADE vs TD Ameritrade
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'>
                  Charles Schwab vs E*TRADE
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/citic-securities-vs-degiro'>
                  CITIC Securities vs DEGIRO
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'>
                  Charles Schwab vs E*TRADE
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/capitalcom-vs-xtb'>
                  Capital.com vs XTB
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/fidelity-vs-merrill-edge'>
                  Fidelity vs Merrill Edge
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/compare/charles-schwab-vs-merrill-edge'>
                  Charles Schwab vs Merrill Edge
                </a>
              </li>
            </ul>
          </div>
          <div className='bc_footer_nav_col'>
            <h4>Country specific recommendations</h4>
            <ul>
              <li>
                <a href='https://brokerchooser.com/united-states'>
                  United States
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/united-kingdom'>
                  United Kingdom
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/india'>India</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/singapore'>Singapore</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/australia'>Australia</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/malaysia'>Malaysia</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/canada'>Canada</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/south-africa'>
                  South Africa
                </a>
              </li>
              <li>
                <a href='https://brokerchooser.com/germany'>Germany</a>
              </li>
              <li>
                <a href='https://brokerchooser.com/netherlands'>Netherlands</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='bc_footer_container'>
          <div className='bc_footer_nav_col'>
            <h4>Regional settings</h4>
            <div>
              <a href='https://brokerchooser.com/regional-settings?returnUrl=https%3A%2F%2Fbrokerchooser.com'>
                Nigeria
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className='bc_footer font-sans'>
        <div className='bc_footer_container'>
          <div className='bc_footer_nav_col'>
            <p className='disclaimer'>
              <strong>Disclaimer:</strong> <br />
              Please note that by investing in and/or trading financial
              instruments, commodities and any other assets, you are taking a
              high degree of risk and you can lose all your deposited money. You
              should engage in any such activity only if you are fully aware of
              the relevant risks. BrokerChooser does not provide investment or
              any other advice, for further information please read our
              <a href='https://brokerchooser.com/general-terms-and-conditions'>
                General Terms and Conditions
              </a>
              .
              <br />
            </p>
          </div>
          <div className='bc_footer_nav_col'></div>
        </div>
        <div className='bc_footer_container'>
          <div className='bc_footer_nav_col'>
            <p className='disclaimer' id='advertiser-disclosure'>
              <strong>Advertiser Disclosure:</strong>
              <br />
              At BrokerChooser, we consider clarity and transparency as core
              values. BrokerChooser is free to use for everyone, but earns a
              commission from some of its partners with no additional cost to
              you (please find the{" "}
              <a href='https://brokerchooser.com/advertiser-disclosure'>
                list of such partners here
              </a>
              ). However, please note that all the material and information made
              available by BrokerChooser or any of its affiliates is based on{" "}
              <a href='https://brokerchooser.com/methodology'>
                our proprietary professional methodology
              </a>
              , which is unbiased, prepared in accordance with the best interest
              of our customers and most importantly independent from the
              remuneration structure we have in place with some of our partners.
            </p>
          </div>
          <div className='bc_footer_nav_col copyright'>
            Copyright{" "}
            <span style={{ fontWeight: "700" }}>
              BROKER<span style={{ color: "#FDAD00" }}>CHOOSER</span>
            </span>{" "}
            Ltd. 2022.
            <br />
            Company reg#: C86950
            <p>
              <a
                href='https://www.iubenda.com/privacy-policy/8253309/full-legal'
                target='_blank'
                rel='nofollow noreferrer'
              >
                Privacy Policy
              </a>
              <br />
              <a
                href='https://www.iubenda.com/privacy-policy/8253309/cookie-policy'
                target='_blank'
                rel='nofollow noreferrer'
              >
                Cookie Policy
              </a>
              <br />
              <a
                href='https://brokerchooser.com/general-terms-and-conditions'
                target='_blank'
                rel='nofollow noreferrer'
              >
                General Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default ShowSelectedNav;
