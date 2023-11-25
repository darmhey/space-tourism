
import React, { createContext, useState } from 'react';
import Navbar from '../nav/Navbar';

const LayoutContext = createContext();


const LayoutProvider = ({ children }) => {
  const [currentNavbar, setNavbar] = useState(<Navbar />);

  return (
    <div>
      <LayoutContext.Provider value={{ currentNavbar, setNavbar }}>
        {children}
      </LayoutContext.Provider>
    </div>
  );
};

export { LayoutContext, LayoutProvider };
