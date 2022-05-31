// useEffectを使って関数がマウントされたタイミングで実行
import React, { useEffect, useContext } from "react";
import Layout from "./components/Layout/Layout";
import { fetchPopularData } from "../apis/index";
import { Store } from "../store/index";
import VideoGrid from "./components/VideoGrid/VideoGrid";
import VideoGridItem from "./components/VideoGridItem/VideoGridItem";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  // ↓今回の実行はマウントされた時のタイミングだけで良いので、
  // ディペンデンシーリストに空配列を渡す
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log("data", res);
      // 取得したデータをsetGlobalState関数でStoreにデータを保存する
      // ↓まず、処理を分けるためにタイプを指定する
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(globalState.popular);
  return (
    <Layout>
      {/* listの表示にはglobalstateのpopularにデータが格納されているので
      map関数でループ処理を行う */}
      <VideoGrid>
        {globalState.popular &&
          globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                // ?オプショナルチェーン
                src={popular.snippet.thumbnails.standard?.url}
                title={popular.snippet.title}
              />
            );
          })}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
