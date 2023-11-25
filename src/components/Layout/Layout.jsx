import React, {useContext} from "react";
import { LayoutContext } from "../LayoutContext/LayoutContext";
import Navbar from "../nav/Navbar";
const layout = ({children}) => {
    const {currentNavbar} = useContext(LayoutContext);

  return (
    <div>
      {currentNavbar || <Navbar/>}
      <div>{children}</div>
    </div>
  )
}

export default layout
