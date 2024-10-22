import {memo, useState} from 'react'
import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import Button from "../UI/Button.jsx";
import {categoryValidation} from "../../Validations/CategoryValidation.js";
import AddUpdateCategory from "../Form/AddUpdateCategory.jsx";

const AddCategoryModal = ({onOpen, onClose, setIsAddModalOpen}) => {


    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsAddModalOpen(false)
        actions.resetForm()
    }

    return (
        <Modal title="Add Category" onOpen={onOpen} onClose={onClose}>
            <AddUpdateCategory handleSubmit={handleSubmit} />
        </Modal>
    );
};

export default memo(AddCategoryModal);