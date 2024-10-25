import {GoPlus} from "react-icons/go";
import {FaPen} from "react-icons/fa";
import {memo} from 'react'
import {useNavigate} from "react-router-dom";
import priceFormat from "../../libs/priceFormat.js";
import {useCart} from "../../Context/index.js";

const ProductItem = ({type, product, setIsAddModalOpen, setIsEditModalOpen}) => {

    const {addCart} = useCart()

    if(type === "isProduct") {
        return (
            <div onClick={() => addCart({...product, quantity: 1})} className="product-item border border-color cursor-pointer transition-all duration-300 rounded-xl">
                {(product.imageUrl !== "") && (
                    <div className="product-img max-w-full h-28 rounded-xl rounded-b-none">
                        <img className="w-full h-full object-cover rounded-xl rounded-b-none" src={product?.imageUrl}
                             alt=""/>
                    </div>
                )}

                {(product.imageUrl === "" && product.color !== "") && (
                    <div
                        style={{background: `#${product?.color}`}}
                        className="product-img flex items-center justify-center max-w-full h-28 rounded-xl rounded-b-none">
                        <h3 className="text-lg text-center font-bold text-white select-none">{product?.title}</h3>
                    </div>
                )}
                <div className="info flex flex-col items-start justify-center p-2 gap-y-2">
                    <h3 className="text-lg font-bold capitalize select-none">{product?.title}</h3>
                    <span className="text-lg">{priceFormat(product?.price)}</span>
                </div>
            </div>
        );
    } else {
        return (
            <button
                className={`product-item border min-h-[194px] text-white flex items-center justify-center border-transparent transition-all duration-300 rounded-xl capitalize ${type === "add" ? "bg-primary" : "bg-secondary"}`}
                onClick={() => {
                    if(type === "add") {
                        setIsAddModalOpen(true)
                    }else if(type === "edit") {
                        setIsEditModalOpen(true)
                    }
                }}
            >
                {type === "add" ? <GoPlus className="text-5xl" /> : <FaPen className="text-2xl" />}
            </button>
        );
    }
};

export default memo(ProductItem);