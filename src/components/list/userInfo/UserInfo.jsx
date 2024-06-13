import { Ellipsis, Pencil, Video } from "lucide-react";
import "./userInfo.css";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./Pyrus.png" alt="" />
        <h2>Pyrus</h2>
      </div>
      <div className="icons">
        <Ellipsis className="list-userinfo-icons" />
        <Video className="list-userinfo-icons" />
        <Pencil className="list-userinfo-icons" />
      </div>
    </div>
  );
}
