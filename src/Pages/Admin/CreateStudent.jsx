import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";
import axios from "../../Api/axios";

const CreateStudent = () => {
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [sex, setSex] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [nationality, setNationality] = useState();
  const [nameOfGuardian, setNameOfGuardian] = useState();
  const [stateOfOrigin, setStateOfOrigin] = useState();
  const [address, setAddress] = useState();
  const [placeOfBirth, setPlaceOfBirth] = useState();
  const [program, setProgram] = useState();
  const [previousUni, setPreviousUni] = useState();
  const [password, setPassword] = useState();
  const [ssceFile, setSsceFile] = useState();
  const [pathToSsce, setPathToSsce] = useState();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("middleName", middleName);
    formData.append("sex", sex);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("nationality", nationality);
    formData.append("nameOfGuardian", nameOfGuardian);
    formData.append("stateOfOrigin", stateOfOrigin);
    formData.append("address", address);
    formData.append("placeOfBirth", placeOfBirth);
    formData.append("program", program);
    formData.append("previousUni", previousUni);
    formData.append("password", password);
    formData.append("ssceFile", ssceFile);
    formData.append("pathToSsce", pathToSsce);
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(`/api/admin/createStudent`, formData, {
        headers: { "Content-type": "multipart/form-data" }
      });
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate(0);
      }, 3000);
    } catch (error) {
      setSubmitFail(true);
      console.log(error);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue application-header">
          Create a Student Account
        </h1>
        <h1 className="landing-main-header-blue application-header">
          Personal Info
        </h1>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="lastName"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="middleName"
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
              />
              <label htmlFor="middleName">Middle Name</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="date"
                className="application-input"
                name="dateofbirth"
                required
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
              <label htmlFor="dateofbirth">Date of Birth</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="email"
                className="application-input"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <select
                className="application-input"
                name="sex"
                required
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label htmlFor="sex">Sex</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="nationality"
                onChange={(e) => {
                  setNationality(e.target.value);
                }}
                required
              />
              <label htmlFor="nationality">Nationality</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="stateoforigin"
                onChange={(e) => {
                  setStateOfOrigin(e.target.value);
                }}
                required
              />
              <label htmlFor="stateoforigin">State of Origin</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="nameofparent"
                onChange={(e) => {
                  setNameOfGuardian(e.target.value);
                }}
                required
              />
              <label htmlFor="nameofparent">Name of Parent/Guardian</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="placeOfBirth"
                required
                onChange={(e) => {
                  setPlaceOfBirth(e.target.value);
                }}
              />
              <label htmlFor="placeOfBirth">Place of Birth</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="nameofparent"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <label htmlFor="nameofparent">Home Address</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="middleName"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label htmlFor="lastName">Phone Number</label>
            </div>
          </div>
        </div>
        <h1 className="landing-main-header-blue application-header">
          Academic Info
        </h1>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <select
                className="application-input"
                name="program"
                required
                onChange={(e) => {
                  setProgram(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Accounting">Accounting</option>
                <option value="Accounting">Computer Science</option>
              </select>
              <label htmlFor="lastName">Program</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="middleName"
                onChange={(e) => {
                  setPreviousUni(e.target.value);
                }}
              />
              <label htmlFor="lastName">
                Prev. Uni. Attended(If Applicable)
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-wrap">
            <label className="upload-label" htmlFor="lastName">
              Upload Your SSCE Result in PDF Format
            </label>
            <div className="input-wrap">
              <input
                type="file"
                className="application-input-file"
                name="middleName"
                required
                onChange={(e) => {
                  setPathToSsce(
                    `uploads/applications/${e.target.files[0].name}`
                  );
                  setSsceFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>
        <h1 className="landing-main-header-blue application-header">
          Create Password
        </h1>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="password"
                className="application-input"
                name="middleName"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="lastName">Create Password</label>
            </div>
          </div>
        </div>
        <br />
        <button className="login-btn" onClick={handleSubmit}>
          {submitLoading ? (
            <div className="borders"></div>
          ) : (
            "Create Student Account"
          )}
        </button>
        <br />
        {success && <div className="success">Account Created Successfully</div>}
        {submitFail && <div className="error">{errMessage}</div>}
        <br />
      </section>
    </>
  );
};

export default CreateStudent;
