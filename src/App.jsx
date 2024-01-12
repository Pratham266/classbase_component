import React, { Suspense, useState } from "react";
import Profile from "./component/Profile";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import ToggleEvent from "./component/ToggleEvent";
import First from "./component/First";
import About from "./component/About";
import CompC from "./component/CompC";
import ClickCounter from "./component/HOC/ClickCounter";
import HOC from "./component/HOC/hoc";
const LazyAbout = React.lazy(() => import("./component/About"));

class App extends React.Component {
  render() {
    return (
      <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/toggle" element={<ToggleEvent />} />
          <Route
            path="/about"
            element={
                <LazyAbout />
            }
          />
        <Route path="/context" element={<CompC/>}/>
        
        <Route path="/hoc" element={<HOC/>}/>
        </Routes>

        </Suspense>

      </>
    );
  }
}

export default App;
