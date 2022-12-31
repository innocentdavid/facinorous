/* eslint-disable react/no-unescaped-entities */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
const ChooseBroker: NextPage = () => {
  return (<>
    <div className="w-full relative text-sm sm:text-base py-10 sm:pt-14">
      <span className="relative -top-20" />
      <div className="relative w-full sm:mx-auto px-3 sm:px-6 z-20 max-w-[1200px]">
        <div className="sm:flex-row flex flex-col sm:items-center relative">
          <div className="flex-1"><div />
            <div className="hidden sm:block mt-4"><div>
              <h1 className="font-bold font-Geomanist text-4xl lg:text-5xl w-full mb-6 sm:mb-8">Not sure which broker to choose?</h1>
              <p className="mb-7 text-base sm:text-xl">Save hours of dull research by answering a few simple questions. Find the right broker in seconds!</p>
              <p className="mb-7 text-base sm:text-xl">Let's start with selecting the country you live in!</p>
              <div className="flex flex-col items-start gap-4">
                {/* <div className="w-72">
                  <div className="">
                    <div className="css-b62m3t-container" id="bdkmEAbDReQRRwjmwvHZ">
                      <span id="react-select-4-live-region" className="css-7pg0cj-a11yText" />
                      <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                      <div className="css-1s2u09g-control">
                        <div className="css-1d8n9bt">
                          <div className="css-qc6sy-singleValue">Nigeria</div>
                          <div className="css-ackcql" data-value="">
                            <input className="" autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-4-input" spellCheck={false} tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" value={true} style={{ color: "inherit", background: "0px center", opacity: "1", width: "100%", gridArea: "1 / 2 / auto / auto", font: "inherit", minWidth: 2, border: 0, margin: 0, outline: 0, padding: 0 }} />
                          </div>
                        </div>
                        <div className="css-1wy0on6">
                          <span className="css-1okebmr-indicatorSeparator" />
                          <div className="css-tlfecz-indicatorContainer" aria-hidden="true">
                            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable={false} className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <style>{`
                      #bdkmEAbDReQRRwjmwvHZ input {
                          box-shadow: none;
                      }
                  `}</style>
                  </div>
                </div> */}
                <button className='flex font-semibold border w-fit p-2 rounded-md text-sm border-gray-300 text-orange-500'>
                  Nigeria only
                </button>
                <button className='text-white bg-orange-400 w-fit p-3 rounded-md text-sm px-5 font-semibold flex items-center justify-center gap-2 shadow-md'>
                  <span className='text-[13px]'>FIND MY BROKER</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="flex justify-center sm:justify-start">
                  <div className="flex items-center relative w-max flex-col">
                    <a className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem]" target="" href="/find-my-broker?countryId=153&applyCountryAsGlobal=true">Find my broker
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 w-5 h-5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mb-8 sm:mb-0">
            <div className="flex-1 block h-48 w-48 sm:h-[360px] sm:w-[360px] xl:ml-12 xl:w-[34rem] xl:h-[34rem] sm:ml-4 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url(/assets/touch_screen.svg)" }} /></div><div className="block sm:hidden">
            <div>
              <h1 className="font-bold font-Geomanist text-4xl lg:text-5xl w-full mb-6 sm:mb-8">Not sure which broker to choose?</h1>
              <p className="mb-7 text-base sm:text-xl">Save hours of dull research by answering a few simple questions. Find the right broker in seconds!</p>
              <p className="mb-7 text-base sm:text-xl">Let's start with selecting the country you live in!</p>
              <div className="flex flex-col items-start gap-4">
                {/* <div className="w-72">
                  <div className="">
                    <div className="css-b62m3t-container" id="lwWxLqutNwNljoTpMAvm">
                      <span id="react-select-5-live-region" className="css-7pg0cj-a11yText" />
                      <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" />
                      <div className="css-1s2u09g-control">
                        <div className="css-1d8n9bt">
                          <div className="css-qc6sy-singleValue">Nigeria</div>
                          <div className="css-ackcql" data-value="">
                            <input className="" autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-5-input" spellCheck={false} tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" value={true} style={{ color: "inherit", background: "0px center", opacity: "1", width: "100%", gridArea: "1 / 2 / auto / auto", font: "inherit", minWidth: 2, border: 0, margin: 0, outline: 0, padding: 0 }} />
                          </div>
                        </div>
                        <div className="css-1wy0on6">
                          <span className="css-1okebmr-indicatorSeparator" />
                          <div className="css-tlfecz-indicatorContainer" aria-hidden="true">
                            <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable={false} className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <style>
                      {`
                          #lwWxLqutNwNljoTpMAvm input {
                              box-shadow: none;
                          }
                      `}
                    </style>
                  </div>
                </div> */}
                <button className='flex font-semibold border w-fit p-2 rounded-md text-sm border-gray-300 text-orange-500'>
                  Nigeria only
                </button>
                <button className='text-white bg-orange-400 w-fit p-3 rounded-md text-sm px-5 font-semibold flex items-center justify-center gap-2 shadow-md'>
                  <span className='text-[13px]'>FIND MY BROKER</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="flex justify-center sm:justify-start">
                  <div className="flex items-center relative w-max flex-col">
                    <a className="flex flex-row items-center justify-center font-medium text-sm uppercase tracking-wider cursor-pointer select-none shadow-bc hover:shadow-bcHover rounded-lg box-border whitespace-nowrap  sm:text-base h-10 sm:h-12 px-[18px] sm:px-[26px] bg-primary-500 text-white w-max-[17rem]" target="" href="/find-my-broker?countryId=153&applyCountryAsGlobal=true">Find my broker
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 w-5 h-5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className='px-3 lg:px-[13%] mx-auto flex justify-between py-10 gap-3'>
      <div className='flex justify-center flex-col gap-5 w-3/6'>
        <h1 className='font-bold font-Geomanist text-4xl lg:text-5xl w-full mb-6 sm:mb-8'>
          Not sure which broker to choose?
        </h1>
        <p className="mb-7 text-base sm:text-xl">
          Save hours of dull research by answering a few simple questions. Find
          the right broker in seconds!
        </p>
        <p>Let's start with selecting the country you live in!</p>
        <button className='flex font-semibold border w-fit p-2 rounded-md text-sm border-gray-300 text-orange-500'>
          Nigeria only
        </button>
        <button className='text-white bg-orange-400 w-fit p-3 rounded-md text-sm px-5 font-semibold flex items-center justify-center gap-2 shadow-md'>
          <span className='text-[13px]'>FIND MY BROKER</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <Image
        src={"/assets/touch_screen.svg"}
        alt='Touch Screen'
        width={"450"}
        height={"450"}
      />
    </div> */}
  </>);
};

export default ChooseBroker;
