import Modal from "../Portals/Modal.jsx";
import {useState} from "react";
import AddUpdateCategory from "../Form/AddUpdateCategory.jsx";
import {useCategory} from "../../Context/index.js";
import CustomTable from "../CustomTable/CustomTable.jsx";

const EditCategoryModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)
    const [editingCategory, setEditingCategory] = useState(null)

    const {categories} = useCategory()

    const columns = [
        {
            key: "categoryImage",
            value: "Category Image",
            width: "100px",
            className: "category-image h-[80px]",
            render: (item) => {
                return <img className="w-full h-full object-cover"
                            src={item.imageUrl}
                            alt={item.title}/>
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
                        <button className="text-danger text-sm font-normal">Delete</button>
                    </div>
                )
            }

        }
    ]

    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsEditOpen(false)
        actions.resetForm()
        setEditingCategory(null)
    }

    return (
        <>
            <Modal title="Edit Categories" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <CustomTable tableKey="id" tableClass="category-table" columns={columns} data={categories} />
                </div>
            </Modal>

            <Modal isSecondModal={true} className="h-full" onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                <AddUpdateCategory handleSubmit={handleSubmit} isEditing={true} editingCategory={editingCategory} />
            </Modal>

        </>
    );
};

export default EditCategoryModal;