/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import NavbarComponent from "../common/components/navbar/NavbarComponent";
const MyFirstStockTradeQuest = () => {
  return (
    <>
      <Head>
        <title>BrokerChooser: Find quality online brokers in minutes</title>
      </Head>
      <div>
        <NavbarComponent />
        {/* <div className="w-full" style={{height: "60px"}}></div> */}
        <div className="">
          <div className="w-full overflow-x-hidden bg-secondary-50 flex justify-center px-3 lg:px-[18%] md:py-8 text-sm sm:text-base">
            <div className="flex flex-col items-center pt-8 max-w-col-9">
              <h1 className="text-center font-bold text-4xl lg:text-5xl w-full">
                My First Stock Trade Quest
              </h1>
              <p className="text-center mt-2 text-gray-500">
                A step-by-step guide that helps beginners to successfully buy
                their first stocks within a few days.
              </p>
              <div className="mt-6 sm:mt-8 text-xl sm:text-2xl text-center font-semibold">
                Hey, we are happy that you’re here!
              </div>
              <div className="mt-6 sm:mt-8">
                Buying stocks and starting{" "}
                <span className="font-semibold">your investment journey</span>{" "}
                is much easier and faster than beginner investors usually think.
                So we have good news for you. We have prepared this{" "}
                <span className="font-semibold">step-by-step guide</span> with
                easy explanations and useful tips that will{" "}
                <span className="font-semibold">
                  help you buy your first stocks on your own
                </span>{" "}
                in no time.
              </div>
              <div className="bg-white rounded font-semibold text-base sm:text-lg flex items-center my-6 sm:my-8 py-4 px-4">
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-secondary-500 w-8 h-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  If you follow this guide, you’ll be able to purchase your
                  first stocks by yourself!
                </div>
              </div>
              <div className="flex flex-col justify-center sm:items-center  sm:flex-row  mt-8">
                <div className="w-full sm:w-1/3">
                  <div
                    className="h-52 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(/images/my-first-stock-trade-quest/expert_adam.png)",
                    }}
                  ></div>
                </div>
                <div className="w-full sm:w-2/3 italic mt-3 sm:mt-0">
                  “Hey there! I’m Ádám, senior broker expert. At BrokerChooser,
                  we talk to a lot of beginner investors about their struggles
                  to take the first steps in their investment journey. We wanted
                  to ease their pain and help them take their investments into
                  their own hands.
                  <br />
                  <br />
                  Meet Rebeka, my colleague who is a beginner investor. She
                  helped to create this guide for you showing the exact steps of
                  her first successful stock purchase.“
                </div>
              </div>
              <div className="flex flex-col justify-center sm:items-center sm:flex-row-reverse flex-row-reverse mt-10">
                <div className="w-full sm:w-1/3">
                  <div
                    className="h-52 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url(/images/my-first-stock-trade-quest/expert_rebeka.png)",
                    }}
                  ></div>
                </div>
                <div className="w-full sm:w-2/3 italic mt-3 sm:mt-0">
                  “Hi, I’m Rebeka, junior PR manager at BrokerChooser. Opening
                  an account and purchasing my first stocks was surprisingly
                  easy compared with the difficulties and hurdles I expected
                  initially. Hope my learnings will be useful, and let us know
                  if you get lost on the way.”
                </div>
              </div>
              <div className="w-full flex flex-col items-start">
                <h2 className="mt-6 sm:mt-8 font-bold text-2xl w-full sm:text-3xl text-center sm:text-left mb-4 sm:mb-6">
                  What can you expect?
                </h2>
                <ul className="list-outside m-2 pl-2 list-disc">
                  <li className="mt-3 sm:mt-4 text-primary-500">
                    <span className="text-black text-sm sm:text-base font-normal">
                      A step-by-step guide how to complete your{" "}
                      <span className="font-semibold">
                        first stock purchase
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 sm:mt-4 text-primary-500">
                    <span className="text-black text-sm sm:text-base font-normal">
                      Each step is explained using{" "}
                      <span className="font-semibold">
                        screenshots and instructions
                      </span>{" "}
                      on how to open an account, deposit money and make your
                      first purchase
                    </span>
                  </li>
                  <li className="mt-3 sm:mt-4 text-primary-500">
                    <span className="text-black text-sm sm:text-base font-normal">
                      You can{" "}
                      <span className="font-semibold">track your progress</span>{" "}
                      toward completing the process
                    </span>
                  </li>
                  <li className="mt-3 sm:mt-4 text-primary-500">
                    <span className="text-black text-sm sm:text-base font-normal">
                      We’ll <span className="font-semibold">provide help</span>{" "}
                      if you are stuck or need more information
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded font-semibold text-base sm:text-lg flex items-center my-6 sm:my-8 py-4 px-4">
                If you’re ready, let’s start with the first step: choosing a
                broker where you’ll carry out your first trade.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 bg-gray-50">
            <div className="flex flex-col items-center w-full">
              <div id="stage_0" className="pt-16 -mt-16"></div>
              <div className="w-full max-w-col-9 mb-4 rounded bg-white border rounded border-white">
                <div className="flex justify-between cursor-pointer py-3 pl-5 pr-3">
                  <div className="font-semibold text-lg sm:text-xl">
                    1. Where to buy your first stock
                  </div>
                  <div className="flex items-center ml-2">
                    <div className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                      <div className="text-secondary-500">Step 1/4</div>
                    </div>
                    <div
                      className="w-8 h-8 bg-contain bg-center bg-no-repeat"
                      style={{backgroundImage: "url(/images/icons/arrow_up_black.svg)"}}
                    ></div>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-gray-100">
                  <div className="mb-6">
                    <div>
                      <div className="mb-4">
                        <div className="text-xs sm:text-sm text-secondary-500">
                          Step 1
                        </div>
                        <div className="text-base sm:text-lg font-semibold mt-2">
                          Why eToro, best broker for beginners in 2023
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full">
                        <div className="text-sm sm:text-base w-full md:w-2/3 mb-4 md:mb-0">
                          <div>
                            <span>
                              Based on our extensive research and{" "}
                              <a
                                target="_blank"
                                href="/methodology"
                                className="underline"
                              >
                                testing with live accounts
                              </a>
                              ,{" "}
                              <span className="font-semibold">
                                eToro is our winner
                              </span>{" "}
                              in 2023 as the{" "}
                              <span className="font-semibold">
                                best broker for beginners
                              </span>
                              , who have little to zero trading experience.
                            </span>
                            <br />
                            <br />
                            <span>
                              Based on our experience beginner traders need:
                            </span>
                            <ul className="list-disc list-outside pl-5">
                              <li>
                                transparent, low fees with zero commission
                              </li>
                              <li>an easy-to-use mobile trading platform</li>
                              <li>and good educational material</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col items-center">
                          <a
                            href="https://brokerchooser.com/go-to-broker/etoro/open-account?measurementCategory=01mfstqa%2F02notrel%2F03notrel&amp;measurementList=my-first-stock-trade-quest-broker-logo-link"
                            rel="noreferrer nofollow"
                            target="_blank"
                          >
                            <div
                              className="w-20 h-20 mb-3 bg-contain bg-center bg-no-repeat"
                              style={{backgroundImage: "url(https://brokerchooser.com/uploads/broker_logos/etoro-review.png)"}}
                            ></div>
                          </a>
                          <div className="flex justify-center items-center">
                            <div
                              className="h-8 w-8 mr-4 bg-contain bg-center bg-no-repeat"
                              style={{backgroundImage: "url(/images/icons/award_badge.png)"}}
                            ></div>
                            Best broker for beginners
                          </div>
                          <div className="flex items-center relative w-max flex-col">
                            <a
                              className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-xs sm:text-sm h-6 sm:h-8 px-[9px] sm:px-[13px] bg-secondary-500 text-white mt-3 w-full"
                              rel="noreferrer nofollow"
                              target="_blank"
                              href="https://brokerchooser.com/go-to-broker/etoro/open-account?measurementCategory=01mfstqa%2F02notrel%2F03notrel&amp;measurementList=my-first-stock-trade-quest-visit-broker-button"
                            >
                              Visit broker
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-3 h-3"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                            <p className="text-2xs sm:text-xs text-center max-w-[10rem] mt-3 sm:mt-4">
                              79% of retail CFD accounts lose money
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-6">
                        <div className="flex flex-col sm:flex-row justify-center items-center w-full bg-secondary-50 p-3 pr-4">
                          <div className="flex flex-col items-center">
                            <div
                              className="w-14 h-14 bg-contain bg-center bg-no-repeat"
                              style={{backgroundImage: "url(/images/my-first-stock-trade-quest/adam_profile.png)"}}
                            ></div>
                            <div className="font-semibold text-center text-sm mt-2">
                              ÁDÁM
                            </div>
                          </div>
                          <div className="w-full mt-4 sm:mt-0 sm:ml-6 italic text-sm sm:text-base">
                            <div>
                              <span>Having doubts?</span>
                              <br />
                              <span>
                                Don't worry, our{" "}
                                <a
                                  target="_blank"
                                  href="/advertiser-disclosure"
                                  className="underline"
                                >
                                  partnerships
                                </a>{" "}
                                with the brokers we test and review do not
                                affect our{" "}
                                <a
                                  target="_blank"
                                  href="/methodology"
                                  className="underline"
                                >
                                  scoring
                                </a>{" "}
                                and recommendations.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      <button
                        className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-white border-2 border-slate-400 text-slate-500 mr-2 bg-opacity-60 border-opacity-25 hover:cursor-default hover:shadow-bc"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] px-[11px] sm:px-[16px] bg-white border-2 border-secondary-500 text-secondary-500"
                        type="button"
                      >
                        next
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-2 w-4 h-4"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="my-6 w-full">
                    <div className="flex">
                      <div className="flex items-center relative w-full">
                        <div className="relative w-full flex items-center">
                          <div className="w-full h-[3px] bg-secondary-500"></div>
                          <div className="absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0"></div>
                        </div>
                        <div className="relative w-full flex items-center">
                          <div className="w-full h-[3px] bg-secondary-100"></div>
                          <div className="absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0"></div>
                        </div>
                        <div className="relative w-full flex items-center">
                          <div className="w-full h-[3px] bg-secondary-100"></div>
                          <div className="absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0"></div>
                        </div>
                        <div className="relative w-full flex items-center">
                          <div className="w-full h-[3px] bg-secondary-100"></div>
                          <div className="absolute w-[3px] h-[3px] rounded-full bg-secondary-500 right-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  text-sm h-8 sm:h-10 px-[13px] sm:px-[18px] bg-white border-2 border-slate-400 text-slate-500 w-48"
                      target=""
                      href="mailto:info@brokerchooser.com?subject=Help needed in buying my first stock!"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-2 w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Need some help?
                    </a>
                  </div>
                </div>
              </div>
              <div id="stage_1" className="pt-16 -mt-16"></div>
              <div className="w-full max-w-col-9 mb-4 rounded bg-white border rounded border-white">
                <div className="flex justify-between cursor-pointer py-3 pl-5 pr-3">
                  <div className="font-semibold text-lg sm:text-xl">
                    2. Prepare for registration
                  </div>
                  <div className="flex items-center ml-2">
                    <div className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                      <div className="text-gray-500">Completed 0/5</div>
                    </div>
                    <div
                      className="w-8 h-8 bg-contain bg-center bg-no-repeat"
                      style={{backgroundImage: "url(/images/icons/arrow_down_black.svg)"}}
                    ></div>
                  </div>
                </div>
              </div>
              <div id="stage_2" className="pt-16 -mt-16"></div>
              <div className="w-full max-w-col-9 mb-4 rounded bg-white border rounded border-white">
                <div className="flex justify-between cursor-pointer py-3 pl-5 pr-3">
                  <div className="font-semibold text-lg sm:text-xl">
                    3. Step-by-step account opening and trading
                  </div>
                  <div className="flex items-center ml-2">
                    <div className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                      <div className="text-gray-500">Completed 0/14</div>
                    </div>
                    <div
                      className="w-8 h-8 bg-contain bg-center bg-no-repeat"
                      style={{backgroundImage: "url(/images/icons/arrow_down_black.svg)"}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFirstStockTradeQuest;
