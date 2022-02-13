import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductAction } from "core/redux/actions/productActions";
import { storage } from "app/const/firebase";

function AddProduct() {
  const { loading } = useSelector((state) => state.product);
  const [dataSubmit, setDataSubmit] = useState({});
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addProductAction({ ...dataSubmit, url: urls }));
  };

  const handleUpload = () => {
    const promises = [];

    images.forEach((image) => {
      let uploadTask = storage.ref(`images/${image.name}`).put(image);

      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log({ error });
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);

              setUrls((prevState) => [...prevState, url]);
            })
            .catch((error) => console.log(error));
        }
      );
    });

    Promise.all(promises)
      .then(() => {
        alert("upload thành công");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  const handleChangeImage = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const newImage = files[i];

      setImages((prevState) => [...prevState, newImage]);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-5">Thêm sản phẩm</h1>

      <form>
        <input
          type="file"
          className="form-control-file mb-5"
          multiple
          onChange={handleChangeImage}
        />

        <button
          className="btn btn-warning"
          type="button"
          onClick={handleUpload}
        >
          upload
        </button>

        <div className="form-group">
          <label>Tên sản phẩm</label>

          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-3">
          <label>Mô tả</label>

          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="form-group mt-3">
          <label>Giá</label>

          <input
            type="text"
            className="form-control"
            name="price"
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          Thêm
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
