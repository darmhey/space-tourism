// App.jsx
import React from "react";
import { LayoutProvider } from "./components/LayoutContext/LayoutContext";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Destination from "./pages/destination/destination";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <LayoutProvider>
        <Layout>
          <Destination/>
        </Layout>
      </LayoutProvider>
    </>
  );
}

export default App;
