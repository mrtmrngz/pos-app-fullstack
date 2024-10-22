import Button from "../UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import CheckoutModal from "../Modals/CheckoutModal.jsx";
import {useState} from "react";

const Cart = () => {

    const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false)

    return (
        <>
            <div className="cart-wrapper flex flex-col h-full w-full">
                <div
                    className="top w-full flex text-sm lg:text-xs xl:text-sm gap-x-5 items-center justify-between p-4 bg-orange-color text-white">
                    <h2>Items in the cart</h2>
                    <span className="py-2 px-3 rounded-xl bg-[#c7512c]">10 pieces</span>
                </div>
                <div className="center flex-1 flex flex-col h-full overflow-auto lg:max-h-[unset] max-h-[300px]">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className="bottom border-t border-border-color mt-auto">
                    <div className="wrapper">
                        <div className="flex px-2 flex-col gap-y-2 py-3 border-b border-border-color">
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold">Subtotal</h4>
                                <span>$28</span>
                            </div>
                            <div className="flex justify-between text-danger items-center">
                                <h4 className="font-semibold">Tax</h4>
                                <span>6%</span>
                            </div>
                        </div>

                        <div className="px-2 py-3 border-b border-border-color">
                            <div className="flex items-center justify-between text-2xl">
                                <h2 className="font-bold text-secondary">Total</h2>
                                <span>$32</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-y-2 w-full px-2 py-3">
                            <Button onClick={() => setIsCheckOutModalOpen(true)} className="btn primary !w-full rounded-2xl">Checkout</Button>
                            <Button className="btn danger !w-full rounded-2xl">Clear Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutModal onOpen={isCheckOutModalOpen} onClose={() => setIsCheckOutModalOpen(false)} setIsCheckOutModalOpen={setIsCheckOutModalOpen} />
        </>
    );
};

export default Cart;