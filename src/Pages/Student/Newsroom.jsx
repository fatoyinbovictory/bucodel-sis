import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Newsroom = () => {
  const [newsposts, setNewsposts] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();

  useEffect(() => {
    document.title = "Newsroom";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/student/viewAllNews`);
        setNewsposts(res.data);
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
      <StudentNav />
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
          <h1 className="landing-main-header-blue">Newsroom</h1>
          <div className="news-container">
            {newsposts.map((post) => {
              return (
                <div className="news-post" key={post._id}>
                  <h2 className="news-heading">{post.heading}</h2>
                  <h4 className="news-author">
                    By {post.author}{"・"}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </h4>
                  <p>
                    {post.bodyPreview}
                    <Link to={post._id} className="news-link">
                      ...Read More
                    </Link>
                  </p>
                </div>
              );
            })}
          </div>
          <br />
        </section>
      )}
    </>
  );
};

export default Newsroom;
