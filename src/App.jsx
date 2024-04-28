import "./style.css";
import ChatCard from "./components/ChatCard";
import { useState } from "react";
import AbutProject from "./components/AboutProject";
function App() {
  const [messages, setMessages] = useState(
    localStorage.getItem("Messages")
      ? JSON.parse(localStorage.getItem("Messages"))
      : []
  );
  const defaultAnswers = [
    {
      question: "Hello",
      answer: "Hey , Welcome to the Chat 👋 ",
    },
    {
      question: "how are you",
      answer: "I'm fine 💕 how are you ?",
    },
    {
      question: "❤️",
      answer: "Thank you very very much Bro  💞",
    },
  ];
  return (
    <div className="center">
      <AbutProject />
      <ChatCard
        messages={messages}
        setMessages={setMessages}
        answers={defaultAnswers}
      />
    </div>
  );
}

export default App;
