import { useEffect } from "react";
import Nav from "./Nav";


const Layout = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return (
    <>
      <div className="app">
        <Nav />
        <>{props.children}</>
      </div>
    </>
  );
};

export default Layout;
