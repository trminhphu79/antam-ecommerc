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
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item?.id} className="value-row">
            <td className="value-column">{item?.title}</td>
            <td className="value-column">{item?.content}</td>
            <td className="value-column">
              <div style={{ width: "41rem" }} className="row m-auto">
                {item?.img.map((link) => {
                  return (
                    <div className="col-4" key={link}>
                      <div className="img-wrapper">
                        <img src={link} className="img-fluid" alt={link} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </td>
            <td
              className="value-column"
            >
              <div className="options">
                <span>
                  <Link
                    to={`/admin/tat-ca-san-pham/sua-san-pham/${item.id}`}
                    className="btn-edit"
                  >
                    <i class="fa fa-pen-to-square"></i>
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
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
