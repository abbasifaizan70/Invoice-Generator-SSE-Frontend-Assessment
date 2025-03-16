import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import successIcon from "../assets/images/success.png";
import { Typography } from "@mui/material";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
  title: string;
  description: string;
  type?: ToastType;
  iconUrl?: string; // Custom image URL for the icon
}

const toastStyles: Record<ToastType, ToastOptions> = {
  success: {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: false,
    style: {
      borderRadius: "10px",
      width: "414px",
      background: "#FFFFFF",
      boxShadow: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      padding: "16px 24px",
      fontSize: "16px",
      border: "1px solid #F5F5F5",
    },
  },
  error: {},
  info: {},
  warning: {},
};

const showToast = ({
  title,
  description,
  type = "success",
  iconUrl = successIcon,
}: ToastProps) => {
  toast(
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      {iconUrl && <img src={iconUrl} alt="icon" />}
      <div>
        <Typography
          sx={{
            fontFamily: "Rubik",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#555555",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0%",
            color: "#8E8E8E",
          }}
        >
          {description}
        </Typography>
      </div>
    </div>,
    { ...toastStyles[type] }
  );
};

const ToastNotification: React.FC = () => {
  return <ToastContainer />;
};

export { showToast, ToastNotification };
