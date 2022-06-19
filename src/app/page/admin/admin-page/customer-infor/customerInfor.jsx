export const CustomerInfor = () => {
    
    let data = [
        {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des",
            address:"Phus nhuan"
        },
        {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des",
            address:"Phus A"

        },
        {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des",
            address:"Tan  nhuan"

        },
        {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des"
        },
        {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des"
        },
           {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des"
        },
           {
            name:"Tran Minh Phus",
            phone:"0339741460",
            description:"No des"
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
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.description}</td>
            
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
