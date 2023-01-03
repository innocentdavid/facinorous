/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import ShowSelectedNav from "../common/components/show/ShowSelectedNav";
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
