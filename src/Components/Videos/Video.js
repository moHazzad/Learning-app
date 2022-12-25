import React from "react";

import image from "../Assets/images/3.jpg";
import Style from "./video.module.css";

const Video = () => {
  return (
    <a href="quiz.html">
      <div className={Style.video}>
        <img src={image} alt="cideo title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={Style.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
