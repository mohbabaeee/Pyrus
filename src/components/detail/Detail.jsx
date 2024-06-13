import { ChevronDown, ChevronUp, CloudDownload } from "lucide-react";
import "./detail.css";

export default function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Asghar Salehi</h2>
        <p>Lorem ipsum dolor sit, amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <ChevronUp className="icon" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <ChevronUp className="icon" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <ChevronDown className="icon" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
                <span>My_avatar_image</span>
              </div>
              <CloudDownload className="icon" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
                <span>My_avatar_image</span>
              </div>
              <CloudDownload className="icon" />
            </div>
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://avatars.githubusercontent.com/u/169454609?v=4"
                  alt=""
                />
                <span>My_avatar_image</span>
              </div>
              <CloudDownload className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span> <ChevronDown className="icon" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">LogOut</button>
      </div>
    </div>
  );
}
