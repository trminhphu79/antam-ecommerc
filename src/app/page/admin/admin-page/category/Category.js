import React from "react";
import "./Category.scss"
const Category = () => {
    const categories = [
        {
            name: "Hủ mỹ phẩm"
        },
        {
            name: "Chai lọ mỹ phẩm"
        },
        {
            name: "Chai nhựa pet"
        },
        {
            name: "In ấn chai lọ mỹ phẩm"
        },

        {
            name: "vỏ họp mỹ phẩm"
        },
    ]

    const handleAddCategory = () => {
        console.log("hello category")
    }

    return (

        <section className="table-section mt-4">
            <div className="category-list">
                <h1> Phân loại sản phẩm</h1>
                <div className='header-category mt-5'>
                    <button className="product-btn-create" onClick={handleAddCategory}>
                        Thêm loại
                    </button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th style={{
                            width: "15%"
                        }}></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td style={{
                                width: "15%",
                                cursor: 'pointer'
                            }}>
                                <span className="btn-edit" style={{
                                    margin: "0 15px 0 0"
                                }}>
                                    <i class="fa fa-pen-to-square"></i>
                                </span>
                                <span className="btn-delete">
                                    <i class="fa fa-trash"></i>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}


export default Category