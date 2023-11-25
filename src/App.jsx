// App.jsx
import React from "react";
import { LayoutProvider } from "./components/LayoutContext/LayoutContext";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/destination";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <>
      <LayoutProvider>
        <Layout>
          <Home/>
        </Layout>
      </LayoutProvider>
    </>
  );
}

export default App;
