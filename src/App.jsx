import "./style.css";
import ChatCard from "./components/ChatCard";
import { useState } from "react";
import AbutProject from "./components/AbutProject";
function App() {
  const [messages, setMessages] = useState([]);
  const defaultAnswers = [
    {
      question: "Hi",
      answer: "Hey , Welcome to the Chat 👋 ",
    },
    {
      question: "سلام",
      answer: "👋 سلام , خوش آومدی به چت  ",
    },
    {
      question: "how are you",
      answer: "I'm fine 💕 how are you ?",
    },
    {
      question: "حالت چطوره",
      answer: " ممنون❤️ من خوبم تو چطوری   ؟ ",
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
