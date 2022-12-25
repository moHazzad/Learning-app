import React from "react";
import Video from "./Video";

import Style from "./Videos.module.css";

const Videos = () => {
  return (
    <div className={Style.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
