import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import News from "./News";
import Greet from "./Greet/Greeti18n";
import "./styles.css";
import "./i18n";

const Loader = () => <div>loading...</div>;
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <h1>Hello CodeSandbox</h1>
        <News />
        <Greet />
      </Suspense>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
