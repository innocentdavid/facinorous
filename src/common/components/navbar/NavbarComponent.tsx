import { NextPage } from "next";
import Image from "next/image";

const NavbarComponet: NextPage = () => {
  return (
    <nav
      className='bg-black flex flex-col lg:flex-wrap text-md font-sans z-50
            fixed top-0 w-full'
      style={{ height: "60px" }}
      id='nav-bar'
    >
      <div className='w-full lg:max-w-[1170px] lg:flex lg:mx-auto'>
        <div className='flex'>
          <div className='relative'>
            <a
              className='flex flex-row items-center ml-4'
              href='https://brokerchooser.com'
              style={{ height: "60px" }}
              data-ga-event-element-id='https://brokerchooser.com'
              data-ga-event-category='Navbar navigation'
              data-ga-event-click='true'
            >
              <Image
                src='/favicon/favicon.svg'
                alt='BrokerChooser logo'
                height={"20"}
                width='224px'
              />
            </a>
          </div>
          <div className='ml-auto mr-4 lg:hidden flex flex-row items-center'>
            <button className='bc-navbar-hamburger-icon cursor-pointer'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='bc-navbar-icon flex flex-wrap h-full w-8 justify-center'>
                <svg
                  className='h-4 w-4'
                  viewBox='0 0 16 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z'
                    fill='white'
                  ></path>
                </svg>
                <span className='uppercase text-white text-[8px] tracking-widest mt-1 leading-3'>
                  Menu
                </span>
              </span>
              <span className='hidden bc-navbar-icon flex flex-wrap h-full w-8 justify-center'>
                <svg
                  className='h-4 w-4'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.192 0.343994L5.94897 4.58599L1.70697 0.343994L0.292969 1.75799L4.53497 5.99999L0.292969 10.242L1.70697 11.656L5.94897 7.41399L10.192 11.656L11.606 10.242L7.36397 5.99999L11.606 1.75799L10.192 0.343994Z'
                    fill='white'
                  ></path>
                </svg>
                <span className='uppercase text-white text-[8px] tracking-widest mt-1 leading-3'>
                  Close
                </span>
              </span>
            </button>
          </div>
        </div>

        <ul
          className='hidden bc-navbar-menu bg-red-400
               lg:mt-0 lg:ml-auto my-0 lg:flex
               text-white items-center bg-black'
          style={{ height: "60px" }}
        >
          <li className='h-full flex items-center bg-black px-6 lg:px-0'>
            <a
              className='
              h-full lg:h-auto w-full lg:w-auto lg:px-2 lg:py-1 lg:m-1 flex items-center
              lg:border-2 lg:rounded-lg lg:hover:border-primary-400
              hover:text-white
              active:text-primary-400
              lg:hover:text-primary-400 hover:no-underline
              text-base font-medium select-none
              border-t border-gray-700
              border-t-black
              text-white lg:border-white'
              href='https://brokerchooser.com/find-my-broker'
              data-ga-event-element-id='https://brokerchooser.com/find-my-broker'
              data-ga-event-category='Navbar navigation'
              data-ga-event-impression=''
              data-ga-event-click='1'
            >
              <span className='flex-1 text-left'>Find My Broker</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='inline h-4 w-4 rotate-180 mr-1 lg:hidden'
              >
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </li>
          <li className='h-full flex items-center bg-black px-6 lg:px-0'>
            <a
              className='
              h-full lg:h-auto w-full lg:w-auto lg:px-2 lg:py-1 lg:m-1 flex items-center
              lg:border-2 lg:rounded-lg lg:hover:border-primary-400
              hover:text-white
              active:text-primary-400
              lg:hover:text-primary-400 hover:no-underline
              text-base font-medium select-none
              border-t border-gray-700
               
              text-white lg:border-white'
              href='https://brokerchooser.com/my-first-stock-trade-quest'
              data-ga-event-element-id='https://brokerchooser.com/my-first-stock-trade-quest'
              data-ga-event-category='Navbar navigation'
              data-ga-event-impression=''
              data-ga-event-click='1'
            >
              <span className='flex-1 text-left'>Buy My First Stock</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='inline h-4 w-4 rotate-180 mr-1 lg:hidden'
              >
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
          </li>
          <li className='h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-compare-brokers'>
            <button className='h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group'>
              <span className='flex-1 text-left'>Compare brokers</span>
              <svg
                className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition delay-50'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.293 9.29297L12 13.586L7.707 9.29297L6.293 10.707L12 16.414L17.707 10.707L16.293 9.29297Z'
                  fill='currentColor'
                ></path>
              </svg>
            </button>

            <div
              className='absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500 cursor-default overflow-y-auto shadow-bc lg:hidden hidden'
              style={{ maxHeight: "calc(100vh - 60px)", marginTop: "60px" }}
            >
              <div className='container mx-auto w-full lg:max-w-[1170px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8'>
                <div className='lg:hidden px-4 flex justify-between w-full items-center'>
                  <button className='bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='inline mb-px h-5 w-5 mr-2'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='border-b-2 border-primary-500 box-decoration-slice'>
                      Back
                    </span>
                  </button>
                </div>

                <div className='lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8'>
                  Compare brokers
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='my-4'>
                    <div className='bg-secondary-100 rounded px-4 py-1 mb-2 font-medium tracking-wider select-none'>
                      Compare Broker tool
                    </div>

                    <div className='px-4 leading-8'>
                      Compare selected brokers by their fees, minimum deposit,
                      withdrawal, account opening and other areas. Filter
                      according to broker or product type, including stocks,
                      futures, CFDs or crypto.
                    </div>

                    <div className='mt-4 flex justify-center'>
                      <a
                        href='https://brokerchooser.com/compare'
                        className=' h-10 px-3 py-2
                      text-base uppercase tracking-wider font-medium cursor-pointer select-none whitespace-nowrap
                      shadow-bc hover:shadow-bcHover rounded-lg box-border bg-secondary-500
                      text-white hover:text-white hover:no-underline'
                        data-ga-event-element-id='https://brokerchooser.com/compare'
                        data-ga-event-category='Navbar navigation'
                        data-ga-event-impression=''
                        data-ga-event-click='1'
                      >
                        COMPARE BROKERS
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Compare highest-rated brokers
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/interactive-brokers-vs-saxo-bank'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-saxo-bank'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Interactive Brokers vs Saxo Bank
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/degiro-vs-interactive-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-interactive-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            DEGIRO vs Interactive Brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/saxo-bank-vs-swissquote'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/saxo-bank-vs-swissquote'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Saxo Bank vs Swissquote
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/capitalcom-vs-xtb'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/capitalcom-vs-xtb'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Capital.com vs XTB
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/charles-schwab-vs-e-trade'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Charles Schwab vs E*TRADE
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/interactive-brokers-vs-td-ameritrade'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-td-ameritrade'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Interactive Brokers vs TD Ameritrade
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/etoro-vs-xtb'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-xtb'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            eToro vs XTB
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/interactive-brokers-vs-tradestation'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/interactive-brokers-vs-tradestation'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Interactive Brokers vs Tradestation
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/fidelity-vs-interactive-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/fidelity-vs-interactive-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Fidelity vs Interactive Brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/capitalcom-vs-etoro'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/capitalcom-vs-etoro'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Capital.com vs eToro
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Compare other popular brokers
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/etoro-review/etoro-alternatives/freetrade'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/etoro-review/etoro-alternatives/freetrade'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            eToro vs Freetrade
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/etoro-vs-interactive-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-interactive-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            eToro vs Interactive Brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/degiro-vs-trading-212'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-trading-212'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            DEGIRO vs Trading 212
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/degiro-vs-etoro'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-etoro'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            DEGIRO vs eToro
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/etoro-vs-plus500'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-plus500'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Plus500 vs eToro
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/degiro-vs-revolut'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/degiro-vs-revolut'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            DEGIRO vs Revolut
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/compare/etoro-vs-trading-212'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/compare/etoro-vs-trading-212'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            eToro vs Trading 212
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Compare Digital Banks tool
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/digital-banks/comparison'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/digital-banks/comparison'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Compare digital banks
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-best-brokers'>
            <button className='h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group'>
              <span className='flex-1 text-left'>Best brokers</span>
              <svg
                className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition delay-50'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.293 9.29297L12 13.586L7.707 9.29297L6.293 10.707L12 16.414L17.707 10.707L16.293 9.29297Z'
                  fill='currentColor'
                ></path>
              </svg>
            </button>

            <div
              className='hidden absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500 cursor-default overflow-y-auto shadow-bc lg:hidden'
              style={{ maxHeight: "calc(100vh - 60px)", marginTop: "60px" }}
            >
              <div className='container mx-auto w-full lg:max-w-[1170px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8'>
                <div className='lg:hidden px-4 flex justify-between w-full items-center'>
                  <button className='bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='inline mb-px h-5 w-5 mr-2'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='border-b-2 border-primary-500 box-decoration-slice'>
                      Back
                    </span>
                  </button>
                </div>

                <div className='lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8'>
                  Best brokers
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='my-4'>
                    <div className='bg-secondary-100 rounded px-4 py-1 mb-2 font-medium tracking-wider select-none'>
                      Not sure which broker to choose?
                    </div>

                    <div className='px-4 leading-8'>
                      For a tailored recommendation, check out our broker finder
                      tool. Answer a few simple questions and get a list of the
                      most relevant brokers.
                    </div>

                    <div className='mt-4 flex justify-center'>
                      <a
                        href='https://brokerchooser.com/find-my-broker'
                        className=' h-10 px-3 py-2
                      text-base uppercase tracking-wider font-medium cursor-pointer select-none whitespace-nowrap
                      shadow-bc hover:shadow-bcHover rounded-lg box-border bg-secondary-500
                      text-white hover:text-white hover:no-underline'
                        data-ga-event-element-id='(megamenu)https://brokerchooser.com/find-my-broker'
                        data-ga-event-category='Navbar navigation'
                        data-ga-event-impression=''
                        data-ga-event-click='1'
                      >
                        FIND MY BROKER
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Best brokers by category
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-stock-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-stock-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best stock brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-brokers-for-etfs'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-brokers-for-etfs'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for ETF
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-forex-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-forex-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best forex brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-cfd-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-cfd-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best CFD brokers
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-online-brokers-for-crypto-trading'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-online-brokers-for-crypto-trading'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best online brokers for crypto trading
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-brokers-for-futures'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-brokers-for-futures'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for futures
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-options-platforms-and-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-options-platforms-and-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for options trading
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-brokers-for-beginners'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-brokers-for-beginners'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for beginners
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Themes
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-brokers-for-esg-investing'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-brokers-for-esg-investing'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for ESG trading
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Country-specific recommendations
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/united-states'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/united-states'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            United States
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/united-kingdom'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/united-kingdom'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            United Kingdom
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/india'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/india'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>India</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/singapore'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/singapore'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Singapore</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Trading Platform
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-trading-platform'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-trading-platform'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best trading platforms
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-options-platforms-and-brokers'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-options-platforms-and-brokers'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best options trading platforms
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-stock-trading-apps'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-stock-trading-apps'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best stock trading apps
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className='h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-broker-reviews'>
            <button className='h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group'>
              <span className='flex-1 text-left'>Broker reviews</span>
              <svg
                className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition delay-50'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.293 9.29297L12 13.586L7.707 9.29297L6.293 10.707L12 16.414L17.707 10.707L16.293 9.29297Z'
                  fill='currentColor'
                ></path>
              </svg>
            </button>

            <div
              className='hidden absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500 cursor-default overflow-y-auto shadow-bc lg:hidden'
              style={{ maxHeight: "calc(100vh - 60px)", marginTop: "60px" }}
            >
              <div className='container mx-auto w-full lg:max-w-[1170px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8'>
                <div className='lg:hidden px-4 flex justify-between w-full items-center'>
                  <button className='bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='inline mb-px h-5 w-5 mr-2'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='border-b-2 border-primary-500 box-decoration-slice'>
                      Back
                    </span>
                  </button>
                </div>

                <div className='lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8'>
                  Broker reviews
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='my-4'>
                    <div className='bg-secondary-100 rounded px-4 py-1 mb-2 font-medium tracking-wider select-none'>
                      Broker reviews
                    </div>

                    <div className='px-4 leading-8'>
                      Online broker reviews crafted by our team of experts.
                      Fees, minimum deposit requirements, withdrawal, account
                      opening, research tools and more. We use over 50,000+ data
                      points and a consistent, fact-based methodology.
                    </div>

                    <div className='mt-4 flex justify-center'>
                      <a
                        href='https://brokerchooser.com/broker-reviews'
                        className=' h-10 px-3 py-2
                      text-base uppercase tracking-wider font-medium cursor-pointer select-none whitespace-nowrap
                      shadow-bc hover:shadow-bcHover rounded-lg box-border bg-secondary-500
                      text-white hover:text-white hover:no-underline'
                        data-ga-event-element-id='https://brokerchooser.com/broker-reviews'
                        data-ga-event-category='Navbar navigation'
                        data-ga-event-impression=''
                        data-ga-event-click='1'
                      >
                        ALL REVIEWS
                      </a>
                    </div>
                  </div>
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Highest-rated brokers
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/interactive-brokers-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/interactive-brokers-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Interactive Brokers review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/degiro-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/degiro-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            DEGIRO review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/saxo-bank-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/saxo-bank-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Saxo Bank review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/xtb-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/xtb-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>XTB review</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/charles-schwab-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/charles-schwab-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Charles Schwab review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/td-ameritrade-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/td-ameritrade-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            TD Ameritrade review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/etoro-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/etoro-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            eToro review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/merrill-edge-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/merrill-edge-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Merrill Edge review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/fidelity-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/fidelity-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Fidelity review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/capitalcom-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/capitalcom-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Capital.com review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Other popular brokers
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/revolut-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/revolut-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Revolut review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/freetrade-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/freetrade-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Freetrade review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/webull-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/webull-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Webull review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/moomoo-review'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/moomoo-review'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            moomoo review
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Fees
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/etoro-review/etoro-fees'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/etoro-review/etoro-fees'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>eToro fees</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/interactive-brokers-review/interactive-brokers-fees'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/interactive-brokers-review/interactive-brokers-fees'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Interactive Brokers fees
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/broker-reviews/saxo-bank-review/saxo-bank-fees'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/broker-reviews/saxo-bank-review/saxo-bank-fees'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Saxo Bank fees
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='h-full text-base bg-black px-6 lg:px-0 bc-navbar-section-education'>
            <button className='h-full w-full lg:w-auto lg:py-0 lg:m-0 lg:px-2 flex flex-wrap items-center cursor-pointer border-t border-gray-700 border-b-black lg:border-b-2 lg:border-t-0 font-medium select-none group'>
              <span className='flex-1 text-left'>Education</span>
              <svg
                className='justify-self-end h-6 w-6 xl:h-6 xl:w-6 navbar-chevron transition delay-50'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.293 9.29297L12 13.586L7.707 9.29297L6.293 10.707L12 16.414L17.707 10.707L16.293 9.29297Z'
                  fill='currentColor'
                ></path>
              </svg>
            </button>

            <div
              className='hidden absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-500 cursor-default overflow-y-auto shadow-bc lg:hidden'
              style={{ maxHeight: "calc(100vh - 60px)", marginTop: "60px" }}
            >
              <div className='container mx-auto w-full lg:max-w-[1170px] flex flex-wrap justify-center text-black font-normal pt-4 pb-8'>
                <div className='lg:hidden px-4 flex justify-between w-full items-center'>
                  <button className='bc-navbar-back-navigation block hover:bg-primary-500 text-sm sm:text-base max-w-max cursor-pointer mt-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='inline mb-px h-5 w-5 mr-2'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='border-b-2 border-primary-500 box-decoration-slice'>
                      Back
                    </span>
                  </button>
                </div>

                <div className='lg:hidden flex justify-between w-full items-center my-4 text-2xl font-bold px-8'>
                  Education
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      For beginners
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/how-to-start-investing'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/how-to-start-investing'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            How to start investing
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/how-to-become-a-trader'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/how-to-become-a-trader'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            How to become a trader
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/best-brokers/best-brokers-for-beginners'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/best-brokers/best-brokers-for-beginners'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Best brokers for beginners
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/frequently-asked-questions'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/frequently-asked-questions'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>FAQ</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      For advanced users
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/market-risk'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/market-risk'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Market risk</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/taxation-of-dividend-income-and-capital-gains'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/taxation-of-dividend-income-and-capital-gains'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Taxation</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      Topics we cover
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Invest &amp; Trade
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/stocks'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/stocks'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Stocks &amp; ETFs
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/forex'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/forex'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Forex</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/commodities'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/commodities'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Commodities</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/options-and-futures'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/options-and-futures'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Options &amp; Futures
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/crypto'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/crypto'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Crypto</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/investing/esg'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/investing/esg'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            ESG Investing
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Discover all topics
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      News &amp; Research
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/news/data-dashboard'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/news/data-dashboard'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Data dashboard
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/news'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/news'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>News</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/news/media-mentions'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/news/media-mentions'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Media mentions
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/education/news/online-trading-in-2022'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/education/news/online-trading-in-2022'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>
                            Online trading in 2022
                          </div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='mt-4'>
                    <div className='w-full px-4 py-1 mb-2 bg-gray-200 rounded  font-medium tracking-wider'>
                      The secret sauce
                    </div>

                    <ul>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/team'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/team'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Team</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/methodology'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/methodology'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Methodology</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                      <li className='group'>
                        <a
                          href='https://brokerchooser.com/who-we-are'
                          className='w-full font-normal text-gray-700 flex flex-start hover:text-black hover:underline px-3 py-2 lg:py-1'
                          data-ga-event-element-id='https://brokerchooser.com/who-we-are'
                          data-ga-event-category='Navbar navigation'
                          data-ga-event-impression=''
                          data-ga-event-click='1'
                        >
                          <div className='w-full md:max-w-max'>Who we are</div>
                          <div>
                            <span className='svg_icon bx-right-arrow-alt lg:invisible group-hover:visible'></span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponet;
