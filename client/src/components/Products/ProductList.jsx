import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import {useProduct} from "../../Context/index.js";
import AddProductModal from "../Modals/AddProductModal.jsx";
import EditProductModal from "../Modals/EditProductModal.jsx";

const ProductList = () => {

    const [isModalAddOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const {products, searchValue} = useProduct()

    const searchFilteredProducts = products.filter(product => product.title.toLocaleLowerCase('tr').includes(searchValue))

    return (
        <div className="w-full h-full mt-8">
            <div className="product-wrapper">
                <div className="product-list grid grid-cols-card gap-5">

                    {(products && products.length > 0) ? (
                        <>
                            {
                                searchFilteredProducts.map((product) => (
                                    <ProductItem key={product._id} product={product} type="isProduct"/>
                                ))
                            }

                            <ProductItem type="add" setIsAddModalOpen={setIsAddModalOpen}/>
                            <ProductItem type="edit" setIsEditModalOpen={setIsEditModalOpen}/>
                        </>
                    ) : (
                        <h2 className="text-xl text-danger text-center">There is no Products</h2>
                    )}

                </div>
            </div>
            <AddProductModal setIsAddModalOpen={setIsAddModalOpen} onOpen={isModalAddOpen}
                             onClose={() => setIsAddModalOpen(false)}/>
            <EditProductModal onOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen}
                              onClose={() => setIsEditModalOpen(false)}/>
        </div>
    )
        ;
};

export default ProductList;