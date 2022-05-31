import axios from "axios";

const KEY = "AIzaSyAEeHPI2SbmbPeM8rSmHhzNTAsAFiMH5sA";

// ↓baseURL
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
};

// ↓トレンドリスト用のメソッド
// asyncで非同期関数化
export const fetchPopularData = async () => {
  // await後にリクエスト処理を追加
  // youtubeインスタンスのgetメソッドを使用していく
  // 第一引数にパスを、第二引数にパラメーターを
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      id
    },
  });
};

// 関連動画の取得ロジック
export const fetchRelatedData = async (id) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id
    }
  })
}