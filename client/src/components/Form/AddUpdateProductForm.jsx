import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {productValidation} from "../../Validations/ProductValidation.js";
import CustomInput from "./CustomInput.jsx";
import {colors} from "../../libs/colors.js";
import CustomSelect from "./CustomSelect.jsx";
import Button from "../UI/Button.jsx";
import {useCategory} from "../../Context/index.js";

const AddUpdateProductForm = ({handleSubmit, editingProduct, isEdit=false}) => {

    const [selectedTab, setSelectedTab] = useState("image")

    const {categories} = useCategory()

    const formInitialValues = {
        title: editingProduct ? editingProduct.title : "",
        imageUrl: editingProduct ? editingProduct.imageUrl : "",
        color: editingProduct ? editingProduct.color : "",
        price: editingProduct ? editingProduct.price : "",
        categoryId: editingProduct ? editingProduct.categoryId : ""
    }

    const selectInputData = categories.map(cat => {
        return {
            key: cat._id,
            value: cat.title
        }
    })

    useEffect(() => {
        setSelectedTab("image")
    }, [editingProduct])


    return (
        <div>
            <Formik
                initialValues={formInitialValues}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
                validationSchema={productValidation(selectInputData)}
                enableReinitialize
            >
                {({values, actions, setFieldValue, errors, touched}) => (
                    <Form className="flex flex-col gap-y-4 w-full overflow-x-auto">
                        <CustomInput type="text" label="Product Name" htmlFor="title" name="title" id="title"
                                     placeholder="Enter Product Name"/>

                        <div className="flex flex-col gap-y-3">
                            <ul className="flex gap-x-5 border-b border-border-color">
                                <li className={`pb-2 ${selectedTab === "image" ? "font-bold" : ""}`}>
                                    <button type="button" onClick={() => setSelectedTab("image")}>Image</button>
                                </li>
                                <li className={`pb-2 ${selectedTab === "color" ? "font-bold" : ""}`}>
                                    <button type="button" onClick={() => setSelectedTab("color")}>Color</button>
                                </li>
                            </ul>

                            {selectedTab === "image" ? (
                                <>
                                    <CustomInput value={values.imageUrl} imageSection={true} type="text" label="Product Image Url"
                                                 htmlFor="imageUrl"
                                                 name="imageUrl"
                                                 id="imageUrl" placeholder="Enter Product Image Url"/>
                                </>
                            ) : (
                                <div className="colors flex gap-3 flex-wrap">
                                    {colors.map((color, index) => (
                                        <button type="button" key={index} style={{background: `#${color.color}`}}
                                                className={`color !h-5 !w-9 cursor-pointer border-2 ${values.color === color.color ? "border-danger" : "border-transparent"}`}
                                                onClick={() => setFieldValue('color', color.color)}
                                        />
                                    ))}
                                </div>
                            )}

                            {errors.imageUrl && (
                                <div className="text-red-500 text-sm">{errors.imageUrl}</div>
                            )}

                        </div>

                        <CustomInput type="number" min={0} max={10000000} id="price" htmlFor="price"
                                     name="price"
                                     label="Product Price" placeholder="Enter Product Price"/>

                        <CustomSelect data={selectInputData} selectTitle="Select a Category" label="Product Category" name="categoryId"
                                      htmlFor="categoryId" id="categoryId"/>

                        <div className="w-full flex justify-end">
                            <Button htmlType="submit" type="primary" className="!m-0">{!isEdit ? "Add Product" : "Edit Product"}</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddUpdateProductForm;