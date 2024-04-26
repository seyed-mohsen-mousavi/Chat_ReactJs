import { useState } from "react";
import InputText from "./InputText";
import Messages from "./Messages";

function ChatCard({ messages, setMessages, answers }) {
  // default messages
  const [inputValue, setInputValue] = useState("");
  // new Message

  const messageCreator = (e) => {
    const newMessageObj = {
      id: Date.now(),
      sendFrom: "Member",
      text: [inputValue, inputValue.length <= 2 ? true : false],
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
            text: [q.answer, q.answer.length <= 2 ? true : false],
            createdAt: new Date().toISOString(),
            date_time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            liked: false,
          };
          messages.push(answerMessage);
        }
      });
    }
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.length > 0 && inputValue.length < 25) {
      createMessage();
    } else if (inputValue.length > 0 && inputValue.length < 2) {
      createMessage();
    } else {
      console.log("no no no");
    }
    console.log(messages);
  };

  // remove Messages hanle
  const hanleRemoveMessage = (id) => {
    setMessages((prevMessage) =>
      prevMessage.filter((e) => {
        return e.id !== id;
      })
    );
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
