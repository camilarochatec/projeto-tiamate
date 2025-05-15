import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SiteLayout = () => {
    return (
        <>

            <Outlet />

        </>
    );
}

export default SiteLayout;