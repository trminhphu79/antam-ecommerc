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
  fullName: yup
    .string()
    .required("Vui lòng nhập họ và tên....")
    .max(10, "Vui lòng nhập tối đa 10 kí tự")
    .min(5, "Vui lòng nhập tối thiểu 5 kí tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại....")
    .min(5, "Vui lòng nhập tối thiểu 10 kí tự"),
  address: yup.string().required("Vui lòng nhập địa chỉ của bạn...."),
  number: yup
    .string()
    .required("Vui lòng nhập địa chỉ của bạn....")
    .min(2, "Mua số lượng tối thiểu là 10"),
});

const ProductForm = () => {
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
      console.log("send data to backend");
      reset({
        fullName: "",
        phone: "",
        address: "",
        number: 10,
      });
    }
    console.log(values);
  };
  return (
    <section id="from-order" className="form-order__wrap">
      <form
        autoComplete="off"
        onSubmit={handleSubmit(submit)}
        className="form-order"
      >
        <div className="form-order__item">
          <label htmlFor="fullName">Họ và tên:</label>
          <input {...register("fullName")} id="fullName" />
          <p>{errors.fullName?.message}</p>
        </div>
        <div className="form-order__item">
          <label htmlFor="phone">Số điện thoại:</label>
          <input {...register("phone")} id="phone" />
          <p>{errors.phone?.message}</p>
        </div>
        <div className="form-order__item">
          <label htmlFor="address">Địa chỉ:</label>
          <input {...register("address")} id="address" />
          <p>{errors.address?.message}</p>
        </div>
        <div className="form-order__item">
          <label htmlFor="number">Số lượng:</label>
          <input
            type="number"
            min="0"
            defaultValue="10"
            {...register("number")}
            id="number"
          />
          <p>{errors.number?.message}</p>
        </div>
        <button type="submit">Đặt hàng</button>
      </form>
      <div className="form-img"></div>
    </section>
  );
};

export default ProductForm;
