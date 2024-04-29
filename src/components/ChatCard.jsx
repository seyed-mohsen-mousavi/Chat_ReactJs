import { useState } from "react";
import InputText from "./InputText";
import Messages from "./Messages";
import toast, { Toaster } from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/16/solid";
const removeNotif = () =>
  toast.error("Message Deleted !", {
    icon: <TrashIcon style={{ width: "15px", color: "red" }} />,
    duration:1500
  });

function ChatCard({ messages, setMessages, answers }) {
  messages ? localStorage.setItem("Messages", JSON.stringify(messages)) : "";

  // default messages
  const [inputValue, setInputValue] = useState("");
  // new Message

  const messageCreator = (e) => {
    const newMessageObj = {
      id: Date.now(),
      sendFrom: "Member",
      text: inputValue,
      createdAt: new Date().toISOString(),
      date_time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      liked: false,
    };
    function createMessage() {
      messages.push(newMessageObj);
      createDefultAnswer();
      setInputValue("");
    }
    function createDefultAnswer() {
      answers.map((q) => {
        if (inputValue.toLocaleLowerCase() === q.question.toLocaleLowerCase()) {
          const answerMessage = {
            id: +(Date.now() * 1.1).toFixed(""),
            sendFrom: "Admin",
            text: q.answer,
            createdAt: new Date().toISOString(),
            date_time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            liked: false,
          };
          messages.push(answerMessage);
        }
      });
    }
    e.preventDefault();
    if (inputValue.length > 0 && inputValue.length < 250) {
      createMessage();
    } else if (inputValue.length > 0 && inputValue.length < 2) {
      createMessage();
    } else {
      console.log("no no no");
    }
  };

  // remove Messages hanle
  const hanleRemoveMessage = (id) => {
    setMessages((prevMessage) =>
      prevMessage.filter((e) => {
        return e.id !== id;
      })
    );
    removeNotif();
  };
  // like Messages hanle
  const hanleLikeMessage = (id) => {
    setMessages((prevMessage) =>
      prevMessage.map((message) =>
        message.id === +id ? { ...message, liked: !message.liked } : message
      )
    );
  };
  return (
    <div className="chat">
      <Toaster />
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
