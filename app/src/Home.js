import React from "react";
// import Head from "./Head";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      {/* <Head title='Home' description="Essa é a descrição da Home"/> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name='description' content='essa é a descrição da página Home' />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </HelmetProvider>
  );
};

export default Home;
