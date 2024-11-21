import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="mx-auto px-0  ">
            <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;