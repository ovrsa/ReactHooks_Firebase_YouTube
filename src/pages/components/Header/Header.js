import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// ↓css moduleパターンではcssをStyleオブジェクトとして呼び出す
// 今回はオブジェクト名をStyleとしている
import Style from "./Header.module.scss"

const Header = () => {
  return (
    // ↓styleオブジェクトの中のheader
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Style.item}>
        {/* 検索フォーム */}
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form> 
      </div>
    </div>
  );
};

export default Header;
