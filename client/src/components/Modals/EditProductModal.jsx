import {useState} from "react";
import Modal from "../Portals/Modal.jsx";
import AddUpdateProductForm from "../Form/AddUpdateProductForm.jsx";
import {useCategory, useProduct} from "../../Context/index.js";
import CustomTable from "../CustomTable/CustomTable.jsx";
import priceFormat from "../../libs/priceFormat.js";
import apiRequest from "../../libs/apiRequest.js";

const EditProductModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)

    const {products, productDispatch} = useProduct()
    const {categories} = useCategory()

    const columns = [
        {
            key: "productImage",
            value: "Image",
            className: "product-image h-[80px]",
            width: "100px",
            render: (item) => {
                if(item?.imageUrl !== "") {
                    return <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.title} />
                }else if(item?.imageUrl === "" && item?.color !== "") {
                    return <div className="w-full h-full flex items-center justify-center" style={{background: `#${item?.color}`}}>
                        <span className="text-white text-center text-[9px]">{item?.title}</span>
                    </div>
                }
            }
        },
        {
            key: "productTitle",
            value: "Name",
            className: "product-title",
            width: "400px",
            render: (item) => {
                return <strong className="capitalize">{item.title}</strong>
            }
        },
        {
            key: "productPrice",
            value: "Price",
            className: "product-price",
            width: "100px",
            render: (item) => {
                return priceFormat(item?.price)
            }
        },
        {
            key: "productCategory",
            value: "Category",
            className: "product-category",
            width: "300px",
            render: (item) => {
                const productCategory = categories.find(cat => cat._id == item.categoryId)
                return productCategory?.title
            }
        },
        {
            key: "actions",
            value: "",
            className: "product-actions",
            width: "calc(max-content + 100px)",
            render: (item) => {
                return (
                    <div className="flex justify-between gap-x-5">
                        <button onClick={() => {
                            setEditingProduct(item)
                            setIsEditOpen(true)
                        }}
                                className="text-primary text-sm font-normal">Edit
                        </button>
                        <button onClick={() => handleDelete(item)} className="text-danger text-sm font-normal">Delete</button>
                    </div>
                )
            }
        }
    ]

    const handleSubmit = async (values, actions) => {
        try {
            const res = await apiRequest.put(`/products/${editingProduct._id}`, {
                ...values,
                price: parseInt(values.price)
            })
            productDispatch({
                type: "UPDATE_PRODUCT",
                payload: res.data
            })
            setIsEditOpen(false)
            setEditingProduct(null)
        }catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (product) => {
        try{
            if(confirm("Are you sure you want to delete the product?")) {
                await apiRequest.delete(`/products/${product._id}`)
                productDispatch({
                    type: "DELETE_PRODUCT",
                    id: product._id
                })
            }

        }catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Modal title="Edit/Delete Products" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <CustomTable tableKey="_id" tableClass="product-table" data={products} columns={columns}/>
                </div>
            </Modal>

            <Modal title="Edit Product" isSecondModal={true} className="h-full" onOpen={isEditOpen}
                   onClose={() => setIsEditOpen(false)}>
                <AddUpdateProductForm isEdit={true} editingProduct={editingProduct} setIsEditOpen={setIsEditOpen}
                                      handleSubmit={handleSubmit}/>
            </Modal>
        </>
    );
};

export default EditProductModal;