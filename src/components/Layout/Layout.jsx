import { useContext } from "react";
import { LayoutContext } from "../LayoutContext/LayoutContext";
// import Navbar from "../nav/Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const currentNavbar = useContext(LayoutContext);

  return (
    <div>
      <div>{currentNavbar}</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

// {currentNavbar || <Navbar />}
