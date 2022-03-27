import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "core/redux/actions/productActions";
import Delete from "./delete";
import { icons } from "assets/icons/icons-svg";

function TableBody({ data }) {
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteProductAction(item.id));
  };

  return (
    <>
      {data.map((item) => {
        return (
          <tr key={item?.id} className="value-row">
            <td
              className="value-column"
              style={{
                width: "20%",
              }}
            >
              <p>{item?.title}</p>
            </td>
            <td
              className="value-column w-40"
              style={{
                width: "40%",
              }}
            >
              <p>{item?.content}</p>
            </td>
            <td
              className="value-column"
              style={{
                width: "40%",
              }}
            >
              <div className="row m-auto">
                {item?.img.map((link) => {
                  return (
                    <div className="col-4" key={link}>
                      <img src={link} className="img-fluid" alt={link} />
                    </div>
                  );
                })}
              </div>
            </td>
            <td
              className="value-column"
              style={{
                width: "20%",
                display: "flex",
              }}
            >
              <span>
                <Link
                  to={`/admin/tat-ca-san-pham/sua-san-pham/${item.id}`}
                  className="btn-edit"
                >
                  {icons.iconEdit}
                </Link>
              </span>
              <span>
                <Delete
                  item={item}
                  list="products"
                  onDelete={() => {
                    handleDelete(item);
                  }}
                />
              </span>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
