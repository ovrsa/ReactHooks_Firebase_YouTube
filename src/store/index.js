import React, { createContext, useReducer } from "react";

const initialState = {
  popular: [],
  related: [],
  selected: {}
};

// ↓2つの値を取り、1つの値を返す処理
const reducer = (state, action) => {
  // アクションに含まれるタイプで処理を分けていく
  switch (action.type) {
    // ↓受け取ったaction payloadをpopularにセットして値を返す
    case "SET_POPULAR":
      return { ...state, popular: action.payload.popular };
    case "SET_RELATED":
      return { ...state, related: action.payload.related };
    case "SET_SELECTED":
      return { ...state, selected: action.payload.selected };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

// propsでchildrennodeを受け取る
export const StoreProvider = ({ children }) => {
  // useReducerにreducerとinitialStateを渡して、stateを生成
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
