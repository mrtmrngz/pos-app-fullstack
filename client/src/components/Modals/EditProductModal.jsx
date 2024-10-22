import {useState} from "react";
import Modal from "../Portals/Modal.jsx";
import AddUpdateProductForm from "../Form/AddUpdateProductForm.jsx";
import {useCategory, useProduct} from "../../Context/index.js";
import CustomTable from "../CustomTable/CustomTable.jsx";

const EditProductModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)

    const {products} = useProduct()
    const {categories} = useCategory()

    const columns = [
        {
            key: "productImage",
            value: "Image",
            className: "product-image h-[80px]",
            width: "100px",
            render: (item) => {
                return <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.title} />
            }
        },
        {
            key: "productTitle",
            value: "Name",
            className: "product-title",
            width: "400px",
            render: (item) => {
                return <strong>{item.title}</strong>
            }
        },
        {
            key: "productPrice",
            value: "Price",
            className: "product-price",
            width: "100px",
            render: (item) => {
                return item.price
            }
        },
        {
            key: "productCategory",
            value: "Category",
            className: "product-category",
            width: "300px",
            render: (item) => {
                const productCategory = categories.find(cat => cat.id == item.categoryId)
                return productCategory.title
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
                        <button className="text-danger text-sm font-normal">Delete</button>
                    </div>
                )
            }
        }
    ]

    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsEditOpen(false)
        setEditingProduct(null)
        actions.resetForm()
    }


    return (
        <>
            <Modal title="Edit/Delete Products" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <CustomTable tableKey="id" tableClass="product-table" data={products} columns={columns}/>
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