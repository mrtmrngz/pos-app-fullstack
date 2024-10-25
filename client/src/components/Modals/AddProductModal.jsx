import {useState} from "react";
import Modal from "../Portals/Modal.jsx";
import AddUpdateProductForm from "../Form/AddUpdateProductForm.jsx";
import apiRequest from "../../libs/apiRequest.js";
import {useProduct} from "../../Context/index.js";

const AddProductModal = ({onOpen, onClose, setIsAddModalOpen}) => {

    const {productDispatch} = useProduct()

    const handleSubmit = async (values, actions) => {
        try{
            const res = await apiRequest.post('/products', {
                ...values,
                price: parseInt(values.price)
            })
            productDispatch({
                type: "ADD_PRODUCT",
                product: res.data
            })
            setIsAddModalOpen(false)
            actions.resetForm()
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal title="Add Products" onOpen={onOpen} onClose={onClose}>
            <AddUpdateProductForm handleSubmit={handleSubmit} />
        </Modal>
    );
};

export default AddProductModal;