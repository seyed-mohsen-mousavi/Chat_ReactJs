import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Emoji } from "emoji-picker-react";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

function InputText({ messageCreator, inputValue, updateValue }) {
  const [emojiOpen, setEmjiOpen] = useState(false);
  const onEmojiClick = (e) => {
    updateValue((prevValue) => (prevValue += e.emoji));
    setEmjiOpen(!emojiOpen);
  };
  return (
    <form className="input" onSubmit={messageCreator}>
      <i
        onClick={() => setEmjiOpen(!emojiOpen)}
        className={`far fa-laugh-beam ${emojiOpen ? "active" : ""}`}
      >
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
          <PaperAirplaneIcon />
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
