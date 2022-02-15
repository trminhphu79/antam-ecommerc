import React from "react";
import "./ProductChild.scss";

export const ProductChild = (
    props
) => {

    return <div className="ProductChild col-4">
                <div className=" card-custom">
                    {/* <h1>{props.data.name}</h1>
                    <span>{props.data.age}</span>
                    <img src={props.data.img} />
                    <button className="btn btn-primary">Show Detail</button> */}

                    <div className="cart-content"></div>
                </div>
    </div>
}

