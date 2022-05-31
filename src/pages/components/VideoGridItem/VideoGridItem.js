import React from "react";
import Style from "./VideoGridItem.module.scss";
import { Link } from "react-router-dom";

// ↓それぞれ必要なpropsを受け取れるように
const VideoGridItem = ({ id, src, title }) => {
  return (
    // Linkにはパスネームとサーチパラメーターを追加
    <Link to={{ pathname: "watch", search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default VideoGridItem;
