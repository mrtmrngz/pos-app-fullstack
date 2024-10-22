import {GoPlus} from "react-icons/go";
import {FaPen} from "react-icons/fa";
import {memo} from 'react'
import {useNavigate} from "react-router-dom";


const CategoryItem = ({type, active, category, setIsAddModalOpen, setIsEditModalOpen}) => {


    if (type === "categoryItem") {
        return (
            <div className="category-item flex flex-col items-center justify-between cursor-pointer">
                <div className="category-img w-16 h-16 flex items-center justify-center rounded-full border-4 border-soft-gray transition-all overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center rounded-full"
                        src={category.imageUrl}
                        alt=""/>
                </div>
                <div className="info">
                    <span>{category.title}</span>
                </div>
            </div>
        );
    } else if(type === "all") {
        return (
            <div className={`category-item flex flex-col items-center justify-between cursor-pointer ${!active && "active"}`}>
                <div className="category-img w-16 h-16 flex items-center justify-center rounded-full border-4 border-soft-gray transition-all overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center rounded-full"
                        src="https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
                        alt=""/>
                </div>
                <div className="info">
                    <span>All</span>
                </div>
            </div>
        );
    } else if (type === "add") {
        return (
            <div className="category-item flex flex-col items-center justify-between cursor-pointer" onClick={() => setIsAddModalOpen(true)}>
                <div
                    className="category-icon w-16 h-16 flex items-center justify-center bg-primary rounded-full text-xl text-white border-4 border-soft-gray transition-all">
                    <GoPlus />
                </div>
                <div className="info">
                    <span>Add</span>
                </div>
            </div>
        );
    } else if (type === "edit") {
        return (
            <div className="category-item flex flex-col items-center justify-between cursor-pointer" onClick={() => setIsEditModalOpen(true)}>
                <div
                    className="category-icon w-16 h-16 flex items-center justify-center bg-secondary rounded-full text-xs text-white border-4 border-soft-gray transition-all">
                    <FaPen />
                </div>
                <div className="info">
                    <span>Edit</span>
                </div>
            </div>
        );
    }
};

export default memo(CategoryItem);