import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import {categoryValidation} from "../../Validations/CategoryValidation.js";
import CustomInput from "./CustomInput.jsx";
import Button from "../UI/Button.jsx";
import {colors} from "../../libs/colors.js";

const AddUpdateCategory = ({handleSubmit, editingCategory, isEditing=false}) => {


    const [selectedTab, setSelectedTab] = useState("image")

    const formInitialValues = {
        title: editingCategory ? editingCategory.title : "",
        imageUrl: editingCategory ? editingCategory.imageUrl : ""
    }

    useEffect(() => {
        setSelectedTab("image")
    }, [editingCategory]);

    return (
        <div>
            <Formik
                initialValues={formInitialValues}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions)
                }}
                validationSchema={categoryValidation}
                enableReinitialize
            >
                {({values, errors, touched, setFieldValue}) => (
                    <Form className="flex flex-col gap-y-4">
                        <CustomInput type="text" label="Category Name" htmlFor="title" name="title" id="title"
                                     placeholder="Enter Category Name"/>

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
                                    <CustomInput value={values.imageUrl} imageSection={true} type="text"
                                                 label="Product Image Url"
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

                        <div className="w-full flex justify-end">
                            <Button htmlType="submit" type="primary" className="!m-0">{isEditing ? "Update Category" : "Add Category"}</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddUpdateCategory;