import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Notification() {
  return (
    <div className="notification">
      <ToastContainer position="bottom-right" theme="dark" rtl />
    </div>
  );
}
