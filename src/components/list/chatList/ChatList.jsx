import { Minus, Plus, Search } from "lucide-react";
import "./chatList.css";
import { useState } from "react";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        {addMode ? (
          <Minus className="addMode" onClick={() => setAddMode(false)} />
        ) : (
          <Plus className="addMode" onClick={() => setAddMode(true)} />
        )}
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Asghar Salehi</span>
          <p>Salam dada</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Asghar Salehi</span>
          <p>Salam dada</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Asghar Salehi</span>
          <p>Salam dada</p>
        </div>
      </div>
    </div>
  );
}
