function Messages({ messages, onRemove, onLike }) {
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
              {mes.text}
            </div>
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
              <svg
                onClick={() => onRemove(mes.id)}
                className="remove"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
              >
                <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
