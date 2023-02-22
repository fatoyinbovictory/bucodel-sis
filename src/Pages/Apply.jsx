import React from "react";
import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import Footer from "../Components/Footer";
import HomeNavBar from "../Components/HomeNavBar";

const Apply = () => {
  return (
    <main>
    <HomeNavBar/>
      <section className="apply-form">
      <h1 className="landing-main-header">Apply to BUCODeL</h1>
      <ApplicationForm />
      </section>
      <Footer/>
    </main>
  );
};

export default Apply;
