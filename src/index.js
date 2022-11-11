import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { Provider } from "./react-redux-nut";

// import store from "./store";

import "./index.css";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
);
