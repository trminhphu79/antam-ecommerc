import React from "react";
import "./productForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// class ProductForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { dataSubmit: {} };
//   }

//   onSubmitForm = (value) => {
//     this.props.onSubmit(value);
//   };

//   handleChange = (e) => {
//     const { value, name } = e.target;
//     this.setState({
//       dataSubmit: {
//         ...this.state.dataSubmit,
//         [name]: value,
//       },
//     });
//   };

//   render() {
//     const { forms, onSubmit } = this.props;

//     return (
//       <div id="form-section">
//         <div className="row product-form">
//           <form className="col-lg-6 col-md-6 col-xs-12">
//             <div className="wrapper">
//               <h2>
//                 Nhập thông tin đặt hàng
//               </h2>

//               {forms.map((f) => (
//                 <div className="input-group" key={f.name}>
//                   <label htmlFor={f.title}>{f.title}</label>
//                   <input
//                     type={f.type}
//                     placeholder={f.placeholder}
//                     name={f.name}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//               ))}
//             </div>
//           </form>

//           <div className="image col-lg-6 col-md-6 col-xs-12">
//             <div className="wrapper">
//               <img src={imageFormOrder} alt="" />
//               <button
//                 className="btn"
//                 onClick={() => {
//                   this.onSubmitForm(this.state.dataSubmit);
//                 }}
//               >
//                 Đặt hàng
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductForm;

const schemeValidation = yup.object({
  name: yup
    .string()
    .required("Vui lòng nhập họ và tên....")
    .min(5, "Vui lòng nhập tối thiểu 5 kí tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại....")
    .min(5, "Vui lòng nhập tối thiểu 10 kí tự"),
  address: yup.string().required("Vui lòng nhập địa chỉ của bạn...."),
  quantity: yup
    .string()
    .required("Vui lòng nhập địa chỉ của bạn....")
    .min(2, "Mua số lượng tối thiểu là 10"),
});

const ProductForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    reset,
  } = useForm({
    resolver: yupResolver(schemeValidation),
    mode: "onChange",
  });

  const submit = (values) => {
    if (isValid) {
      props.onSubmit(values);
      reset({
        name: "",
        phone: "",
        address: "",
        quantity: 10,
      });
    }
  };
  return (
    <section id="from-order" className="form-order__wrap">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(submit)}
        className="form-order"
      >
        <div className="form-order__item">
          <label htmlFor="name">Họ và tên:</label>
          <input
            placeholder="Nhập tên của bạn"
            {...register("name")}
            id="name"
          />
          <span>{errors.name?.message}</span>
        </div>
        <div className="form-order__item">
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            placeholder="Nhập số điện thoại của bạn"
            {...register("phone")}
            id="phone"
          />
          <span>{errors.phone?.message}</span>
        </div>
        <div className="form-order__item">
          <label htmlFor="address">Địa chỉ:</label>
          <input
            placeholder="Nhập địa chỉ cụ thể của bạn"
            {...register("address")}
            id="address"
          />
          <span>{errors.address?.message}</span>
        </div>
        <div className="form-order__item">
          <label htmlFor="quantity">Số lượng:</label>
          <input
            type="quantity"
            min="0"
            defaultValue="10"
            {...register("quantity")}
            id="quantity"
          />
          <span>{errors.number?.message}</span>
        </div>
        <button type="submit">Đặt hàng</button>
      </form>
      <div className="form-img"></div>
    </section>
  );
};

export default ProductForm;
