import { useRef } from "react";
import { useEffect } from "react";
import { TrashIcon } from "@heroicons/react/16/solid";

function Messages({ messages, onRemove, onLike }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="messages" id="chat">
      {messages.map((mes) => {
        return (
          <div
            key={mes.id}
            className={`mes ${mes.sendFrom !== "Admin" ? "contact-m " : ""} `}
          >
            <div
              className={`message ${
                mes.sendFrom !== "Admin" ? "contact-m " : ""
              } animated zoomInRight ${mes.liked ? "liked" : ""}`}
            >
              <p className="message_text">{mes.text}</p>
              <span className="message_date">
                {new Date(mes.createdAt).toLocaleDateString("en-US", options)}
              </span>
            </div>
            {/* Like and Remove */}
            <div className="li-rm">
              <label className="ui-like">
                <input
                  type="checkbox"
                  onChange={() => onLike(mes.id)}
                  checked={mes.liked}
                />
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill=""
                  >
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                    </g>
                  </svg>
                </div>
              </label>
              <TrashIcon onClick={() => onRemove(mes.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
