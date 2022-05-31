/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
// ↓URLを取得する為
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../../../apis/index";
import { Store } from "../../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";
import Link from "react-linkify";
import Linkify from "react-linkify/dist/components/Linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  };
  useEffect(() => {
    setSelectedVideo();
  }, []);

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
