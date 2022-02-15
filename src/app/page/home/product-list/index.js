import React from "react";
import "./Product.scss";
import { ProductChild } from "./child-product"
const productList = [
    {
        name: "Tran Minh Phu",
        age: 19,
        img: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/hongngan/2018_05_09/e/chum-anh-chung-minh-shiba-inu-la-giong-cho-dang-yeu-nhat-hinh-13.jpg"
    },

    {
        name: "Tran Minh Phu",
        age: 19,
        img: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/hongngan/2018_05_09/e/chum-anh-chung-minh-shiba-inu-la-giong-cho-dang-yeu-nhat-hinh-13.jpg"

    },
    {
        name: "Tran Minh Phu",
        age: 19,
        img: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/hongngan/2018_05_09/e/chum-anh-chung-minh-shiba-inu-la-giong-cho-dang-yeu-nhat-hinh-13.jpg"

    },
    {
        name: "Tran Minh Phu",
        age: 19,
        img: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/hongngan/2018_05_09/e/chum-anh-chung-minh-shiba-inu-la-giong-cho-dang-yeu-nhat-hinh-13.jpg"

    },
    {
        name: "Tran Minh Phu",
        age: 19
    },
    {
        name: "Tran Minh Phu",
        age: 19
    },
    {
        name: "Tran Minh Phu",
        age: 19
    },
    {
        name: "Tran Minh Phu",
        age: 19
    },

]
export const Product = () => {

    return <div className="Product">
        <div className="row ">
            {productList.map((product) =>
                <ProductChild data={product} />
            )}
        </div>
    </div>
}

