import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  const electronHot = require('electron-hot-loader');
  electronHot.install();
  electronHot.watchJsx(['dist/**/*.js']);
  electronHot.watchCss(['assets/**/*.css']);
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);
