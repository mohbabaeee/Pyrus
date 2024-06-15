import { ChevronDown, ChevronUp, CloudDownload } from "lucide-react";
import "./detail.css";
import { auth } from "../../lib/firebase";

export default function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>اصغر صالحی</h2>
        <p>!کتاب لاتی 100 صفحست 99 صفحش رفاقت</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <ChevronUp className="icon" />
            <span>تنظیمات گفتگو</span>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <ChevronUp className="icon" />
            <span>حریم خصوصی</span>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <ChevronDown className="icon" />
            <span>تصاویر ارسالی</span>
          </div>
          <div className="photos">
            <div className="photoItem">
              <CloudDownload className="icon" />
              <div className="photoDetail">
                <span>My_avatar_image</span>
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <CloudDownload className="icon" />
              <div className="photoDetail">
                <span>My_avatar_image</span>
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <CloudDownload className="icon" />
              <div className="photoDetail">
                <span>My_avatar_image</span>
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <ChevronDown className="icon" />
            <span>فایل های ارسالی</span>
          </div>
        </div>
        <button>مسدود کردن</button>
        <button className="logout" onClick={() => auth.signOut()}>
          خروج
        </button>
      </div>
    </div>
  );
}
