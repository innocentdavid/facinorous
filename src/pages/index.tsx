/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import ShowSelectedNav from "../common/components/show/ShowSelectedNav";
import ChooseBroker from "../common/components/broker/ChooseBroker";
import BestOnlineBroker from "../common/components/broker/BestOnlineBrokers";
import BrokersList from "../common/components/broker/BrokersList";
import FellLost from "../common/components/broker/FellLost";
import NavbarComponet from "../common/components/navbar/NavbarComponent";
const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>BrokerChooser: Find quality online brokers in minutes</title>
      </Head>
      <div>
        <ShowSelectedNav />
      </div>
    </>
  );
};

export default HomePage;
