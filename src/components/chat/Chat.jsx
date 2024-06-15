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

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>اصغر صالحی</span>
            <p>!کتاب لاتی 100 صفحست 99 صفحش رفاقت</p>
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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <span>یک دقیقه قبل</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <span>یک دقیقه قبل</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://avatars.githubusercontent.com/u/169454609?v=4"
              alt=""
            />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <span>یک دقیقه قبل</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <span>یک دقیقه قبل</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <span>یک دقیقه قبل</span>
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
          dir="rtl"
          placeholder="نوشتن پیام..."
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
          <SendHorizontal color="#121212" />
        </button>
      </div>
    </div>
  );
}
