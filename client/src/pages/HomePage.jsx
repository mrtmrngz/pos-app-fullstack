import CategoryList from "../components/Categories/CategoryList.jsx";
import ProductList from "../components/Products/ProductList.jsx";
import Cart from "../components/Cart/Cart.jsx";
import {useEffect, useState} from "react";
import Modal from "../components/Portals/Modal.jsx";
import AddProductModal from "../components/Modals/AddProductModal.jsx";
import {useCart, useCategory, useProduct} from "../Context/index.js";
import Spinner from "../components/UI/Spinner.jsx";

const HomePage = () => {

    const [isRow, setIsRow] = useState(false)
    const {categoryLoading} = useCategory()
    const {productLoading} = useProduct()

    const handleResize = () => {
        if(window.innerWidth < 1024) {
            setIsRow(true)
        }else {
            setIsRow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if(categoryLoading || productLoading) {
        return <Spinner />
    }

    return (
        <div
            className="flex w-full flex-col pb-24 md:pb-5 lg:pb-0 lg:flex-row lg:h-[calc(100vh_-_80px)] h-max overflow-auto lg:overflow-hidden">
            <div className="left lg:flex-[3.5] flex-none h-full overflow-auto container mx-auto lg:mx-0">
                <div className="wrapper mt-5 pb-4 md:pb-6">
                    <CategoryList/>
                    <ProductList />
                </div>
            </div>
            <div className={`right lg:flex-1 flex-none mt-7 lg:mt-0 lg:mx-0 h-full border-l border-b border-border-color p-0 ${isRow ? "container mx-auto border-t border-r" : ""}`} id="cart">
                <Cart />
            </div>


        </div>
    );
};

export default HomePage;