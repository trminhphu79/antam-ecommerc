import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { KEY_TOKEN } from "app/const/App";
import { loginAction } from "core/redux/actions/userActions";

function LoginPage() {
  const { logging } = useSelector((state) => state.user);
  const token = localStorage.getItem(KEY_TOKEN);
  const dispatch = useDispatch();

  const handleFakeLogin = () => {
    dispatch(loginAction());
  };

  return (
    <>
      {token ? (
        <Redirect to="/" />
      ) : (
        <div className="container py-5 text-center">
          <h1 className="mb-5">Đăng nhập</h1>
          <p className="text-secondary mb-2">Vui lòng đăng nhập</p>

          <button className="btn btn-primary" onClick={handleFakeLogin}>
            Fake Login
          </button>

          {logging && (
            <div className="d-flex justify-content-center mt-3">
              <span className="spinner-border text-primary"></span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default LoginPage;
