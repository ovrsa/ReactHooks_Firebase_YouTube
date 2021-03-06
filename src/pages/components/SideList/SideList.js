import React, { useEffect, useContext } from "react";
import { Store } from "../../../store/index";
import { fetchRelatedData } from "../../../apis/index";
import SideListItem from "../SideListItem/SideListItem";
import Style from "./SideList.module.scss";

const SideList = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const setRelatedVideo = async (id) => {
    await fetchRelatedData(id).then((res) => {
      setGlobalState({
        type: "SET_RELATED",
        payload: { related: res.data.items },
      });
    });
  };
  // ↓の処理でデータを再取得
  useEffect(() => {
    setRelatedVideo(globalState.selected.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.selected]);
  return (
    <div className={Style.sidenav}>
      {globalState.related ? (
        globalState.related.map((video) => {
          <SideListItem
            id={video.id.videoId}
            key={video.id.videoId}
            src={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
          />;
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  );
};

export default SideList;
