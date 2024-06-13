import { ArrowRight } from "lucide-react";
import "./login.css";

export default function Login() {
  const hours = new Date().getHours();
  let message;
  if (hours < 12) {
    message = "Good Morning";
  } else if (hours < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }

  return (
    <div className="loginContainer">
      <div className="login">
        <div className="pic"></div>
        <p>{message}</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>
            <ArrowRight width={30} height={30} />
          </button>
        </form>
      </div>
    </div>
  );
}
