import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Newspost = () => {
  const [newspost, setNewspost] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const { id } = useParams();

  useEffect(() => {
    document.title = "News Post";
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
        <section className="profile-container loaded">
          <div className="news-container">
            <h2 className="landing-main-header-blue">{newspost.heading}</h2>
            <h4 className="news-author">
              By {newspost.author} ・ Created:{" "}
              {new Date(newspost.createdAt).toLocaleDateString()} ・ Last
              Updated: {new Date(newspost.updatedAt).toLocaleDateString()}
            </h4>
            <br />
            <p className="news-body">{newspost.body}</p>
            <div>
              <Link to="update">
                <button className="courses-table-button">Update Post</button>
              </Link>
              <button className="courses-table-button red2">Delete Post</button>
            </div>
            <br />
          </div>
        </section>
      )}
    </>
  );
};

export default Newspost;
