import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const UpdateNews = () => {
  const [newspost, setNewspost] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [heading, setHeading] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Update News Post";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/viewNews/${id}`);
        setNewspost(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(
        `/api/admin/updateNews/${id}`,
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
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
        </div>
      ) : (
        <section className="profile-container news-container loaded">
          <h1 className="landing-main-header-blue">Update News Post</h1>
          <form className="news-container">
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="heading"
                  required
                  defaultValue={newspost.heading}
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
                  defaultValue={newspost.author}
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
                  defaultValue={newspost.body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button className="btn-medium centered" onClick={handleSubmit}>
              {submitLoading ? (
                <div className="borders "></div>
              ) : (
                "Update News Post"
              )}
            </button>
          </form>
          {success && <div className="success">Post updated successfully</div>}
          {submitFail && <div className="error">{errMessage}</div>}
        </section>
      )}
    </>
  );
};

export default UpdateNews;
