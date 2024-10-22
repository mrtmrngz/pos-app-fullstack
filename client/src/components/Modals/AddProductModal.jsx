import {useState} from "react";
import Modal from "../Portals/Modal.jsx";
import AddUpdateProductForm from "../Form/AddUpdateProductForm.jsx";

const AddProductModal = ({onOpen, onClose, setIsAddModalOpen}) => {


    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsAddModalOpen(false)
        actions.resetForm()
    }

    return (
        <Modal title="Add Products" onOpen={onOpen} onClose={onClose}>
            <AddUpdateProductForm handleSubmit={handleSubmit} />
        </Modal>
    );
};

export default AddProductModal;