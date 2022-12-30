/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import NavbarComponent from "../common/components/navbar/NavbarComponent";
const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>BrokerChooser: Find quality online brokers in minutes</title>
      </Head>
      <div>
        <NavbarComponent />
      </div>
    </>
  );
};

export default HomePage;
