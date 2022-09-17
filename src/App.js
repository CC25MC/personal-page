import { useEffect } from "react";
import "./App.css";
import { AppRouter } from "./routes/AppRouter";
import { tokyo_tm_preloader } from "./utils";

const App = () => {
  useEffect(() => {
    var speed = 500;
    var preloader = document.querySelector("#preloader");
    if (preloader) {
      setTimeout(function () {
        tokyo_tm_preloader();
      }, speed);
    }
  }, []);
  return <AppRouter />;
};

export default App;
