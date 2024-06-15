import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    e.target.files[0] &&
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
  };

  const handleLogin = async (e) => {
    setLoadingLogin(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.message === "Firebase: Error (auth/network-request-failed).") {
        toast.error("یا نت ضعیفه یا فیلترشکن نزدی!");
      } else if (err.message === "Firebase: Error (auth/invalid-credential).") {
        toast.error("نام کاربری یا رمز عبور اشتباهه!");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("ایمیل نامعتبره!");
      } else {
        toast.error(err.message);
      }
    } finally {
      setLoadingLogin(false);
    }
  };

  const handleRegister = async (e) => {
    setLoadingRegister(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("حسابت ساخته شد!");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/network-request-failed).") {
        toast.error("یا نت ضعیفه یا فیلترشکن نزدی!");
      } else if (
        err.message === "Firebase: Error (auth/email-already-in-use)."
      ) {
        toast.error("ایمیل یا نام کاربری تکراریه!");
      } else if (err.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("ایمیل یا نام کاربری معتبر نیست!");
      } else if (
        err.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        toast.error("رمز قوی‌تر امتحان کن!");
      } else if (
        err.message === "Cannot read properties of null (reading 'name')"
      ) {
        toast.success("حسابت ساخته شد!");
      } else {
        toast.error(err.message);
      }
    } finally {
      setLoadingRegister(false);
    }
  };

  return (
    <div className="login">
      {login ? (
        <div className="item">
          <h1>ورود به حساب کاربری</h1>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loadingLogin}>
              {loadingLogin ? <div className="loader"></div> : "ورود"}
            </button>
            <p onClick={() => setLogin(false)}>میخوای ثبت‌نام کنی؟</p>
          </form>
        </div>
      ) : (
        <div className="item">
          <h1>ساختن حساب</h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="file">
              <img src={avatar.url || "./avatar.png"} alt="" />
              بارگذاری پروفایل
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleAvatar}
            />
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button disabled={loadingRegister}>
              {loadingRegister ? <div className="loader"></div> : "ثبت نام"}
            </button>
            <p onClick={() => setLogin(true)}>حساب داری؟</p>
          </form>
        </div>
      )}
    </div>
  );
}
