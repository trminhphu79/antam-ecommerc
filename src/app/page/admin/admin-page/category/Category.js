import React from "react";
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

        <section className="table-section">
            <div className="category-list">
                <div className='d-flex align-items-center header-category'>
                    <h1> Category</h1>
                    <button className="product-btn-create" onClick={handleAddCategory}>
                        Thêm loại sản phẩm
                    </button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}


export default Category