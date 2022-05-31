import React from "react";
// App.jsに↓をimportしてrouteを設定
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pagesからコンポーネントをインポート
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    // roter,switchでrouteの設定
    <Router>
      <Switch>
        {/* pathで/を使用する際は混在を防ぐために必ずexactをつける */}
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/watch" component={Watch} />
      </Switch>
    </Router>
  );
}

export default App;
