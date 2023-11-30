import { createContext } from "react";
import Navbar from "../nav/Navbar";

const LayoutContext = createContext();

// eslint-disable-next-line react/prop-types
const LayoutProvider = ({ children }) => {
  // const [currentNavbar, setNavbar] = useState(<Navbar />);
  const contextValue = <Navbar />;

  return (
    <div>
      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </div>
  );
};

export { LayoutContext, LayoutProvider };

// const [currentNavbar, setNavbar] = useState(<Navbar />);
// const contextValue = currentNavbar;

// return (
//   <div>
//     <LayoutContext.Provider value={{ currentNavbar, setNavbar }}>
//       {children}
//     </LayoutContext.Provider>
//   </div>
