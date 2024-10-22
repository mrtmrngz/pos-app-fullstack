import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="wrapper p-2 flex items-center justify-between">
                <div className="left flex items-center gap-x-2">
                    <div className="cart-prd-image w-14 h-14 lg:w-12 lg:h-12 overflow-hidden 2xl:w-14 2xl:h-14">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""/>
                    </div>
                    {/*<div className="cart-prd-icon flex items-center justify-center text-white bg-danger w-14 h-14 lg:w-12 lg:h-12 overflow-hidden 2xl:w-14 2xl:h-14">
                        <span className="text-[8px] 2xl:text-xs">Strawberry</span>
                    </div>*/}

                    <div className="info flex flex-col items-center gap-y-0">
                        <span className="font-semibold 2xl:text-xl">Çilek</span>
                        <div className="flex items-center gap-x-1 text-sm 2xl:text-lg">
                            <span>$5</span>
                            <span>x</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>

                <div className="right quantity flex items-center gap-x-2 text-xl">
                    <button className="bg-secondary text-white p-0.5 2xl:p-1 rounded-full">
                        <CiCircleMinus/>
                    </button>
                    <span className="text-lg 2xl:text-xl">3</span>
                    <button className="bg-secondary text-white p-0.5 2xl:p-1 rounded-full">
                        <CiCircleMinus/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;