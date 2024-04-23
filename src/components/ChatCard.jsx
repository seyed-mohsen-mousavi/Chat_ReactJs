import { useState } from "react";
import InputText from "./InputText";
import Messages from "./Messages";

function ChatCard() {
  // default messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sendFrom: "Admin",
      text: "Welcome to the Chat👋",
      createdAt: "",
      date_time: `00 : 00 : 00`,
      liked: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  // new Message
  function messageCreator(e) {
    e.preventDefault();
    const newMessage = {
      id: Date.now(),
      sendFrom: "Member",
      text: inputValue,
      createdAt: new Date().toISOString(),
      date_time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      liked: false,
    };
    if (inputValue.length > 0 && inputValue.length < 24) {
      messages.push(newMessage);
      setInputValue("");
    } else {
      console.log("no no no");
    }
    console.log(messages);
  }

  // remove hanle
  const hanleRemoveMessage = (id) => {
    setMessages((prevMessage) =>
      prevMessage.filter((e) => {
        return e.id !== id;
      })
    );
  };
  // like hanle
  const hanleLikeMessage = (id) => {
    setMessages((prevMessage) =>
      prevMessage.map((message) =>
        message.id === +id ? { ...message, liked: !message.liked } : message
      )
    );
  };
  return (
    <div className="chat">
      <div className="contact bar">
        <img
          className="pic"
          src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/HeyPeterParker.png"
          alt=""
        />
        <div className="name">Admin</div>
        <div className="seen">Today at 12:56</div>
      </div>
      <Messages
        messages={messages}
        onRemove={hanleRemoveMessage}
        onLike={hanleLikeMessage}
      />
      <InputText
        messageCreator={messageCreator}
        inputValue={inputValue}
        updateValue={setInputValue}
      />
    </div>
  );
}

export default ChatCard;
