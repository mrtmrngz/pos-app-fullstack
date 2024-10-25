import Modal from "../Portals/Modal.jsx";
import {useState} from "react";
import AddUpdateCategory from "../Form/AddUpdateCategory.jsx";
import {useCategory} from "../../Context/index.js";
import CustomTable from "../CustomTable/CustomTable.jsx";
import apiRequest from "../../libs/apiRequest.js";

const EditCategoryModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editingCategory, setEditingCategory] = useState(null)

    const {categories, categoryDispatch} = useCategory()

    const columns = [
        {
            key: "categoryImage",
            value: "Category Image",
            width: "150px",
            className: "category-image h-[80px]",
            render: (item) => {
                if(item.imageUrl !== "") {
                    return <img className="w-full h-full object-cover object-center"
                                src={item?.imageUrl}
                                alt={item?.title}/>
                }else if (item?.imageUrl === "" && item?.color !== "") {
                    return <div className="w-full h-full flex items-center justify-center" style={{background: `#${item?.color}`}}>
                        <span className="text-white text-xs">{item?.title}</span>
                    </div>
                }
            }

        },
        {
            key: "categoryTitle",
            value: "Category Title",
            width: "400px",
            className: "category-image",
            render: (item) => {
                return <strong>{item.title}</strong>
            }

        },
        {
            key: "actions",
            value: "",
            className: "category-actions",
            width: "calc(100% - 380px)",
            render: (item) => {
                return (
                    <div className="flex justify-between gap-x-5">
                        <button onClick={() => {
                            setEditingCategory(item)
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
            const res = await apiRequest.put(`/categories/${editingCategory?._id}`, values)

            categoryDispatch({
                type: "UPDATE_CATEGORY",
                payload: res.data.category
            })

            setIsEditOpen(false)

        }catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (category) => {
        try{
            if(confirm("Are you sure you want to delete the category?")){
                await apiRequest.delete(`/categories/${category._id}`)

                categoryDispatch({
                    type: "DELETE_CATEGORY",
                    id: category._id
                })
            }
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Modal title="Edit Categories" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <CustomTable tableKey="_id" tableClass="category-table" columns={columns} data={categories} />
                </div>
            </Modal>

            <Modal isSecondModal={true} className="h-full" onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                <AddUpdateCategory handleSubmit={handleSubmit} isEditing={true} editingCategory={editingCategory} />
            </Modal>

        </>
    );
};

export default EditCategoryModal;