import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateNews = () => {
  const [heading, setHeading] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create News Post";
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(
        `/api/admin/postNews`,
        JSON.stringify({ heading, author, body }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/newsroom");
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
      <section className="profile-container news-container loaded">
        <h1 className="landing-main-header-blue">Create News Post</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="heading"
              required
              onChange={(e) => setHeading(e.target.value)}
            />
            <label htmlFor="heading">Post Title</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="author"
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="author">Post Author</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <textarea
              name="body"
              id="body"
              cols="50"
              rows="15"
              className="application-input text-area"
              placeholder="Post Body"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="btn-medium centered" onClick={handleSubmit}>
          {submitLoading ? (
            <div className="borders "></div>
          ) : (
            "Create News Post"
          )}
        </button>
        {success && <div className="success">Post created successfully</div>}
        {submitFail && <div className="error">{errMessage}</div>}
      </section>
    </>
  );
};

export default CreateNews;
