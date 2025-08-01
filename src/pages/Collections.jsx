import React, { useContext, useEffect, useState } from 'react';
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import { ShopDataContext } from '../context/ShopContext';
import Card from '../component/Card';
import Footer from '../component/Footer'; 

function Collections() {
    const [showFilter, setShowFilter] = useState(false);
    const { products, search, showSearch } = useContext(ShopDataContext);
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCaterory] = useState([]);
    const [subCategory, setSubCaterory] = useState([]);

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCaterory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCaterory(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const applyFilter = () => {
        let productCopy = products.slice();

        if (showSearch && search) {
            productCopy = productCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
        }

        setFilterProduct(productCopy);
    };

    useEffect(() => {
        setFilterProduct(products);
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch]);

    return (
        <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]'>
            <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] ${showFilter ? "h-[45vh]" :"h-[8vh]"} p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed`}>
                <p className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer' onClick={() => setShowFilter(prev => !prev)}>
                    FILTERS
                    {!showFilter && <FaChevronRight className='text-[18px] md:hidden' />}
                    {showFilter && <FaChevronDown className='text-[18px] md:hidden' />}
                </p>

                <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
                    <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
                    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
                        {["Men", "Women", "Kids"].map(label => (
                            <label key={label} className='flex items-center gap-[10px] text-[16px] font-light'>
                                <input type="checkbox" value={label} onChange={toggleCategory} className='w-3' /> {label}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"} md:block`}>
                    <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
                    <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
                        {["TopWear", "BottomWear", "WinterWear"].map(label => (
                            <label key={label} className='flex items-center gap-[10px] text-[16px] font-light'>
                                <input type="checkbox" value={label} onChange={toggleSubCategory} className='w-3' /> {label}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className='lg:pl-[20%] md:py-[10px]'>
                <div className='md:w-[80vw] w-[100vw] flex justify-start flex-col lg:px-[50px]'>
                    <Title text1="ALL" text2="COLLECTIONS" />
                </div>

                <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
                    {filterProduct.map((item, index) => (
                        <Card
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image1}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Collections;
