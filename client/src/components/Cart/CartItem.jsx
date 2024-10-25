import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import {useCart} from "../../Context/index.js";

const CartItem = ({item}) => {

    const {increaseItem, decreaseItem} = useCart()

    return (
        <div className="cart-item">
            <div className="wrapper p-2 flex items-center justify-between">
                <div className="left flex items-center gap-x-2">
                    {item?.imageUrl !== "" && (
                        <div className="cart-prd-image w-14 h-14 lg:w-12 lg:h-12 overflow-hidden 2xl:w-14 2xl:h-14">
                            <img
                                className="w-full h-full object-cover"
                                src={item?.imageUrl}
                                alt=""/>
                        </div>
                    )}

                    {(item?.imageUrl === "" && item?.color !== "") && (
                        <div
                            className="cart-prd-icon flex items-center justify-center text-white bg-danger w-14 h-14 lg:w-12 lg:h-12 overflow-hidden 2xl:w-14 2xl:h-14" style={{background: `#${item?.color}`}}>
                            <span className="text-[8px] 2xl:text-xs">{item.title}</span>
                        </div>
                    )}

                    <div className="info flex flex-col items-start gap-y-0">
                        <span className="font-semibold 2xl:text-xl capitalize">{item?.title}</span>
                        <div className="flex items-center gap-x-1 text-sm 2xl:text-lg text-left">
                            <span>${item.price}</span>
                            <span>x</span>
                            <span>{item.quantity}</span>
                        </div>
                    </div>
                </div>

                <div className="right quantity flex items-center gap-x-2 text-xl">
                    <button onClick={() => increaseItem(item._id)}
                            className="bg-secondary text-white p-0.5 2xl:p-1 rounded-full">
                        <CiCirclePlus/>
                    </button>
                    <span className="text-lg 2xl:text-xl">{item.quantity}</span>
                    <button onClick={() => decreaseItem(item._id)} className="bg-secondary text-white p-0.5 2xl:p-1 rounded-full">
                        <CiCircleMinus/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;