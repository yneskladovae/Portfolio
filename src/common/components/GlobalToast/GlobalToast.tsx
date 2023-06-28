import React from "react";
import {ToastContainer} from "react-toastify";

export const GlobalToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
