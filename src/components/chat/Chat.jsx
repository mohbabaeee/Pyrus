import {
  Camera,
  Image,
  Info,
  Laugh,
  Mic,
  Phone,
  SendHorizontal,
  Video,
} from "lucide-react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prevText) => prevText + e.emoji);
  };

  console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Asghar Salehi</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <Phone className="chat-top-icons" />
          <Video className="chat-top-icons" />
          <Info className="chat-top-icons" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam rem ipsam, magnam impedit illo incidunt quos ut,
              reprehenderit autem porro cumque beatae animi? Illum debitis
              commodi consequuntur in? Suscipit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam rem ipsam, magnam impedit illo incidunt quos ut,
              reprehenderit autem porro cumque beatae animi? Illum debitis
              commodi consequuntur in? Suscipit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://avatars.githubusercontent.com/u/169454609?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam rem ipsam, magnam impedit illo incidunt quos ut,
              reprehenderit autem porro cumque beatae animi? Illum debitis
              commodi consequuntur in? Suscipit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam rem ipsam, magnam impedit illo incidunt quos ut,
              reprehenderit autem porro cumque beatae animi? Illum debitis
              commodi consequuntur in? Suscipit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ullam rem ipsam, magnam impedit illo incidunt quos ut,
              reprehenderit autem porro cumque beatae animi? Illum debitis
              commodi consequuntur in? Suscipit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <Image className="icon" />
          <Camera className="icon" />
          <Mic className="icon" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <Laugh
            className="icon"
            id="emoji-icon"
            onClick={() => setOpen((prevState) => !prevState)}
          />
          <div className="picker">
            <EmojiPicker
              open={open}
              onEmojiClick={handleEmoji}
              theme="dark"
              searchDisabled
            />
          </div>
        </div>
        <button className="sendButton">
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
}
