import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CategoryItem from "./CategoryItem.jsx";
import 'swiper/css';
import 'swiper/css/free-mode';
import React, {useEffect, useRef, useState} from "react";
import {useCategory, useProduct} from "../../Context/index.js";
import AddCategoryModal from "../Modals/AddCategoryModal.jsx";
import EditCategoryModal from "../Modals/EditCategoryModal.jsx";


const CategoryList = () => {

    const [canNavigate, setCanNavigate] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const {categories, categoryDispatch} = useCategory()

    const {productDispatch} = useProduct()

    const swiperRef = useRef()

    const handlePrev = () => {
        if(swiperRef.current) {
            swiperRef.current.swiper.slidePrev()
        }
    }

    const handleNext = () => {
        if(swiperRef.current) {
            swiperRef.current.swiper.slideNext()
        }
    }

    const updateNavigationVisibility = () => {
        if(swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper
            const activeBreakPoint = swiperInstance.currentBreakpoint

            const currentParams = swiperInstance.params.breakpoints[activeBreakPoint]
            const slidesPerView = currentParams ? currentParams.slidesPerView : swiperInstance.params.slidesPerView

            if(categories.length + 3 > slidesPerView) {
                setCanNavigate(true)
            }else {
                setCanNavigate(false)
            }

        }
    }

    useEffect(() => {
        if(swiperRef.current) {
            updateNavigationVisibility()
            swiperRef.current.swiper.on('breakpoint', updateNavigationVisibility)
        }
    }, [categories]);

    useEffect(() => {
        categoryDispatch({
            type: "SELECTED_CATEGORY",
            value: selectedCategory
        })
        productDispatch({
            type: "CHANGE_PRODUCTS",
            id: selectedCategory
        })
    }, [selectedCategory])

    return (
        <div className="category-list relative">
            <div className="category-wrapper">
                <Swiper
                slidesPerView={3}
                slidesPerGroup={3}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                ref={swiperRef}
                speed={1200}
                breakpoints={{
                    520: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    640: {
                        slidesPerView: 5,
                        slidesPerGroup: 5
                    },
                    910: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    },
                    1024: {
                        slidesPerView: 7,
                        slidesPerGroup: 7
                    },
                    1200: {
                        slidesPerView: 8,
                        slidesPerGroup: 8
                    }
                }}
                onSwiper={() => updateNavigationVisibility()}
                className="category-swiper py-2 sm:px-2 px-5"
                >

                    <SwiperSlide>
                        <CategoryItem type="add" setIsAddModalOpen={setIsAddModalOpen} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CategoryItem type="edit" setIsEditModalOpen={setIsEditModalOpen} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <CategoryItem type="all" active={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </SwiperSlide>

                    {categories.map((category) => (
                        <SwiperSlide key={category._id}>
                            <CategoryItem type="categoryItem" active={selectedCategory} setSelectedCategory={setSelectedCategory} category={category} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            {canNavigate && (
                <div className="buttons">
                    <button className="prev slider-swipe-buttons -left-2" onClick={handlePrev}>
                        <FaAngleLeft/>
                    </button>
                    <button className="next slider-swipe-buttons -right-2" onClick={handleNext}>
                        <FaAngleRight/>
                    </button>
                </div>
            )}
            <AddCategoryModal setIsAddModalOpen={setIsAddModalOpen} onOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
            <EditCategoryModal setIsEditModalOpen={setIsEditModalOpen} onOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
        </div>
    );
};

export default CategoryList;