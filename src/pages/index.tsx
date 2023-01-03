/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";
import { useAuth } from "../context/AuthContext";

const HomePage: NextPage = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default HomePage;
