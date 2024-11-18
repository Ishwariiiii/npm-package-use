import React, { useEffect } from "react";
import Card from "../../component/card/Card";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const removeToken = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col">
      <Card />
      <button
        onClick={removeToken}
        className="px-4 py-2 border-2 border-white text-white mt-3"
      >
        Remove
      </button>
    </div>
  );
};

export default UserDashboard;
