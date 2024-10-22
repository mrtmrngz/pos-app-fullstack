import {Link, useLocation} from "react-router-dom";
import { IoMdHome, IoMdPerson  } from "react-icons/io";
import { LiaNewspaperSolid } from "react-icons/lia";
import { FaSignOutAlt, FaShoppingCart  } from "react-icons/fa";
import {AiOutlineUser} from "react-icons/ai";
import { IoMdStats } from "react-icons/io";



const HeaderRight = () => {

    const {pathname} = useLocation()
    const number = 50

    const links = [
        {
            label: "Home",
            url: "/",
            icon: <IoMdHome size={28} />
        },
        {
            label: "Bills",
            url: "/bills",
            icon: <LiaNewspaperSolid size={28} />
        },
        {
            label: "Statistics",
            url: "/statistics",
            icon: <IoMdStats size={28} />
        },
        {
            label: "Sign Out",
            url: "/login",
            icon: <FaSignOutAlt size={28} />
        }
    ]

    return (
        <div className="header-right">
            <div
                className="header-right-links fixed left-0 bottom-0 py-3 md:py-0 w-full px-[4%] md:px-0 border-t md:border-t-transparent border-t-border-color md:static flex items-center justify-between gap-x-8 z-[600] bg-white">

                {links.map((link, index) => (
                    <div key={index}
                         className={`header-right-link cursor-pointer ${link.url === "/cart" && "hidden md:flex"} ${link.badge && "badge-link relative"}`}>
                        <Link to={link.url}
                              className={`flex flex-col items-center gap-y-0.5 ${link.url === "/login" && "text-red-600"} ${link.url === pathname && "active"}`}>
                            {link.icon}
                            <span className="sm:text-xs text-[10px]">{link.label}</span>
                            {(link.badge && link.number > 0) && <span
                                className="badge w-5 h-5 bg-danger text-white text-[10px] rounded-full flex items-center justify-center absolute -top-2 -right-3 font-semibold">{link.number}</span>}
                        </Link>
                    </div>
                ))}

            </div>

            <div className={`header-right-link md:hidden flex items-center relative justify-center ${pathname !== "/" ? "hidden" : ""}`}>
                <a href="#cart" className="flex flex-col items-center gap-y-0.5">
                    <FaShoppingCart size={20}/>
                    <span className="text-xs">Cart</span>
                    {number > 0 && <span
                        className="badge w-5 h-5 bg-danger text-white text-[10px] text-center rounded-full flex items-center justify-center absolute -top-3 -right-4 font-semibold">{number}</span>}
                </a>
            </div>
        </div>
    );
};

export default HeaderRight;