import { getAllUser } from "core/redux/actions/userAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CustomerInfor = () => {
  const {customerList}= useSelector((state) => state.customer);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUser());
    console.log(customerList)
  }, [])
  let data = [
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des",
      address: "Phus nhuan"
    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des",
      address: "Phus A"

    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des",
      address: "Tan  nhuan"

    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des"
    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des"
    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des"
    },
    {
      name: "Tran Minh Phus",
      phone: "0339741460",
      description: "No des"
    },

  ]
  return (
    <>
      <section className="table-section">
        <div className="category-list mt-4">
          <h1> Thông tin khách hàng</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Tên</th>
              <th>Số điện thoại</th>
              <td>Địa chỉ</td>
              <th>Khu vực</th>
              <th>Ngày</th>
            </tr>
          </thead>
          <tbody>
            {customerList?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.area}</td>
                <td>{item.dayCreate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
