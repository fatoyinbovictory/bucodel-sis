import React from "react";
import StudentNav from "../../Components/StudentNav";

const Fees = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Fees & Payments</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Fees to Pay</p>
            <p className="personal-info">₦560,000</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Bank Name</p>
            <p className="personal-info">Babcock Microfinance Bank</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Bank Account Number</p>
            <p className="personal-info">0039474849</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Upload Evidence of Payment</p>
            <input type="file" name="upload-fees" id="" />
          </li>
        </ul>
        <button className="btn-medium">Submit</button>

      </section>
    </>
  );
};

export default Fees;
