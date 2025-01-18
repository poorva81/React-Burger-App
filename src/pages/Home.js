import React from "react";
import Layout from "../components/Layout.js";
import "../styles/HomeStyles.css";
import Section1 from "./Section1.js";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />
      </Layout>
    </>
  );
};
export default Home;