import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutAction } from "core/redux/actions/userActions";

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutAction());
    history.push("/login");
  };

  return (
    <>
      <div className="container py-5 text-center">
        <h1 className="mb-5">Firebase CRUD</h1>

        <button className="btn btn-danger" onClick={handleLogout}>
          Fake Logout
        </button>
      </div>
    </>
  );
}

export default HomePage;
