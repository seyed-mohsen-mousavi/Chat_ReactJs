// you don't need this component
import "../about.css";
function AboutProject() {
  return (
    <div className="about">
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />
        <DropDownFace />
        <DropDownItems />
      </div>
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
    </div>
  );
}

export default AboutProject;

function DropDownItems() {
  return (
    <div className="dropdown__items box">
      <div className="">
        <h3># For use : </h3>
        <div>
          <div className="use">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <p className="tx">
              &gt; You can refer to my
              <a
                href="https://github.com/seyed-mohsen-mousavi/Chat_ReactJs"
                target="_blank"
                className="link"
              >
                GitHub
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a>
              to use the file
            </p>
          </div>
          <div className="use">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
            </svg>
            <p>
              &gt; You can start by writing <span className="text">Hello</span>
              in the chat
            </p>
          </div>
          <div className="use or">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="rotate90"
              >
                <path d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
              </svg>
            </span>
            <p>
              Or ask me how I am by writing
              <span className="text">how are you</span> in the chat .
            </p>
          </div>
          <div className="use or">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="rotate90"
              >
                <path d="m9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3" />
              </svg>
            </span>
            <p>
              Or make me feel better by sending a
              <span className="text">❤️</span>, even though I don`t understand,
              but still...
            </p>
          </div>
        </div>
        <hr />
        <h3># Features</h3>
        <blockquote>
          <p dir="auto">You can send any text</p>
        </blockquote>
        <blockquote>
          <p dir="auto"> send emoji</p>
        </blockquote>
        <blockquote>
          <p dir="auto">Delete Message & Like Messages</p>
        </blockquote>
      </div>
      <p style={{ margin: "10px auto", color: "#a5a5a5" }} className="tx">
        For more Follow my
        <a
          href="https://github.com/seyed-mohsen-mousavi/"
          target="_blank"
          className="link"
        >
          GitHub
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
      </p>
    </div>
  );
}
function DropDownFace() {
  return (
    <label htmlFor="dropdown" className="dropdown__face">
      <div className="dropdown__text">* How to use / About the project</div>

      <div className="dropdown__arrow"></div>
    </label>
  );
}
