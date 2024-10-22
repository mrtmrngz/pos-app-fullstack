import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import {useProduct} from "../../Context/index.js";
import AddProductModal from "../Modals/AddProductModal.jsx";
import EditProductModal from "../Modals/EditProductModal.jsx";

const ProductList = () => {

    const [isModalAddOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const {products} = useProduct()

    return (
        <div className="w-full h-full mt-8">
            <div className="product-wrapper">
                <div className="product-list grid grid-cols-card gap-5">

                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} color={false} type="isProduct" />
                    ))}

                    <ProductItem type="add" setIsAddModalOpen={setIsAddModalOpen} />
                    <ProductItem type="edit" setIsEditModalOpen={setIsEditModalOpen} />

                </div>
            </div>
            <AddProductModal setIsAddModalOpen={setIsAddModalOpen} onOpen={isModalAddOpen} onClose={() => setIsAddModalOpen(false)} />
            <EditProductModal onOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
        </div>
    );
};

export default ProductList;