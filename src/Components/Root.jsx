
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import usePageTitle from "./Title";

const Root = () => {
    usePageTitle()
    return (
        <div className="container mx-auto px-5 lg:px-0  bg-purple-200">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;