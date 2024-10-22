import Container from "../../UI/Container.jsx";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import HeaderRight from "./HeaderRight.jsx";

const Header = () => {

    const {path} = useLocation()
    const navigate = useNavigate()

    return (
        <header className="h-20 border-b border-border-color w-full bg-white">
            <Container className="h-full">
                <div className="w-full h-full flex items-center justify-between gap-x-5">
                    <div className="header-left">
                        <Link to="/" className="flex items-center text-xl md:text-2xl font-semibold tracking-wide">
                            <FaFileInvoiceDollar className="text-primary hidden md:flex" />
                            <span className="uppercase">Logo</span>
                        </Link>
                    </div>
                    <div className="header-center flex items-center flex-1 bg-slate-100 rounded-full px-5 gap-x-3" onClick={() => {
                        path !== "/" && navigate("/")
                    }}>
                        <CiSearch size={20} className="bg-slate-100" />
                        <input type="text" className="max-w-full w-full bg-transparent border-none py-2 text-sm" placeholder="Search..." />
                    </div>
                    <HeaderRight />
                </div>
            </Container>
        </header>
    );
};

export default Header;