import React from "react";
import Header from "../Header/Header";
import Style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={Style.wrapper}>
      {/* Headerコンポーネントは全てのページで使うのでLayoutに追加 */}
      <Header />
      <div className={Style.main}>{children}</div>
    </div>
  );
};

export default Layout;
