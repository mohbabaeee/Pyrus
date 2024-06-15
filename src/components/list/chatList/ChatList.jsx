import { Minus, Plus, Search } from "lucide-react";
import "./chatList.css";
import { useEffect, useState } from "react";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "user", currentUser.id), async (res) => {
      const items = res.data().chats;

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);
        const user = userDocSnap.data();
        return { ...item, user };
      });

      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updateAt - a.updateAt));
    });

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <Search />
          <input type="text" placeholder="جستجو" />
        </div>
        {addMode ? (
          <Minus className="addMode" onClick={() => setAddMode(false)} />
        ) : (
          <Plus className="addMode" onClick={() => setAddMode(true)} />
        )}
      </div>
      {chats.map((chat) => {
        <div key={chat.chatId} className="item">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>اصغر صالحی</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>;
      })}
      {addMode && <AddUser />}
    </div>
  );
}
