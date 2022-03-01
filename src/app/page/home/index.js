import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "core/redux/actions/userActions";
import { getList, removeById } from "app/const/firebase";
import { deleteAction } from "core/redux/actions/productActions";
import { Slide } from "app/page/home/slide";
import ProductContainer from "../products/productContainer";
import { getProducts } from "../server/productChaillo";
const HomePage = () => {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const products = getProducts();

  useEffect(() => {
    getList("product")
      .then((result) => {
        console.log("result", result);
        setListProduct(result);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  return (
    <div className="background-page">
      <ProductContainer products={products} />
    </div>
  );
};

export default HomePage;

{
  /* <div className="container py-5 text-center"> */
}
{
  /* <h1 className="mb-5">Danh sách</h1>

        <div className="my-3">
         <Link className="btn btn-success" to="/add">
            Thêm SP
          </Link> 
        </div> */
}

{
  /* <div className="row my-5">
          {listProduct?.map((product, index) => {
            return (
              <div className="col-3 col-md-6 col-lg-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={product.url[0]}
                    alt={product.url[0]}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>

                    <Link className="btn btn-secondary mx-3" to="/edit">
                      Sửa
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */
}

{
  /* <button className="btn btn-danger" onClick={handleLogout}>
          Fake Logout
        </button> */
}
{
  /* </div> */
}

// const handleLogout = () => {
//   dispatch(logoutAction());
//   history.push("/login");
// };

// const handleDelete = (id) => {
//   removeById("product", id)
//     .then(() => {
//       let result = [...listProduct];
//       const index = result.findIndex((y) => y.id === id);

//       if (index !== -1) {
//         result.splice(index, 1);
//       }

//       setListProduct(result);
//       dispatch(deleteAction(id));
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// };
