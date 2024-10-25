import {memo, useState} from 'react'
import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import Button from "../UI/Button.jsx";
import {categoryValidation} from "../../Validations/CategoryValidation.js";
import AddUpdateCategory from "../Form/AddUpdateCategory.jsx";
import apiRequest from "../../libs/apiRequest.js";
import {useCategory} from "../../Context/index.js";

const AddCategoryModal = ({onOpen, onClose, setIsAddModalOpen}) => {

    const {categoryDispatch} = useCategory()

    const handleSubmit = async (values, actions) => {
        try {
            const res = await apiRequest.post('/categories', values)

            categoryDispatch({
                type: "ADD_CATEGORY",
                data: res.data
            })

            actions.resetForm()
            setIsAddModalOpen(false)

        }catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal title="Add Category" onOpen={onOpen} onClose={onClose}>
            <AddUpdateCategory handleSubmit={handleSubmit} />
        </Modal>
    );
};

export default memo(AddCategoryModal);