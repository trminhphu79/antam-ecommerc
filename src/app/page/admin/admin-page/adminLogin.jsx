import React, { useEffect, useState } from "react";
import logoMain from '../../../../assets/images/logo-chailo.png';
import "../styles/loginAdmin.scss"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AdminLogin() {
    const userAcount = {
        username: '',
        password: '',
    };
    let isAccount = false;
    let history = useHistory();


    const handleChange = (e) => {
        const { value, name } = e.target;
        userAcount[name] = value;
    };
    const handleLoginAdmin = () => {
        if (userAcount.username === 'trangxinhgai' && userAcount.password === 'trangxinhgai') {
            isAccount = true;
            alert('đăng nhập thành công');
            history.push("/admin/tat-ca-san-pham");
        } else { isAccount = false; }
    }

    return (
        <div className="main-login" >
            <div className="form-login">
                <div className="main-logo d-flex justify-content-center" >
                    <div>
                        <img src={logoMain} alt="" />
                    </div>
                </div>
                <form className="">
                    <div className="form-group">
                        <label className="label">Tài khoản</label>
                        <input name='username' onChange={handleChange} className='form-control' type="text" />
                    </div>
                    <div className="form-group">
                        <label className="label">Mật khẩu</label>
                        <input name='password' onChange={handleChange} className='form-control' type="password" />


                    </div>
                    <div className="btn-action d-flex justify-content-center">
                        <button type='button' className="btn-login" onClick={handleLoginAdmin}>
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin