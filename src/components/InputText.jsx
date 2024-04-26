import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Theme } from "emoji-picker-react";
import { Emoji, EmojiStyle } from "emoji-picker-react";

function InputText({ messageCreator, inputValue, updateValue }) {
  const [emojiOpen, setEmjiOpen] = useState(false);
  const onEmojiClick = (e) => {
    console.log(e.emoji);
    updateValue((prevValue) => (prevValue += e.emoji));
    <EmojiPicker className="flip-out-hor-top" />;
    setEmjiOpen(!emojiOpen);
    console.log(e);
  };
  return (
    <form className="input" onSubmit={messageCreator}>
      <i onClick={() => setEmjiOpen(!emojiOpen)} className="far fa-laugh-beam">
      <Emoji unified="1f642" size="25" />
      </i>
      <input
        placeholder="Type your message here! "
        type="text"
        onChange={(e) => updateValue(e.target.value)}
        value={inputValue}
      />
      <button className="fas-btn">
        <i className="fas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </i>
      </button>
      <div style={{ position: "absolute", bottom: "130px" }}>
        <EmojiPicker
          className="flip-in-hor-bottom"
          open={emojiOpen}
          Theme={"dark"}
          reactionsDefaultOpen={true}
          width={"300px"}
          height={"400px"}
          onEmojiClick={onEmojiClick}
        />
      </div>
    </form>
  );
}

export default InputText;
