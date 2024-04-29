// you don't need this component
import "../about.css";
import {
  FolderIcon,
  HandRaisedIcon,
  InformationCircleIcon,
  ArrowUturnUpIcon,
} from "@heroicons/react/16/solid";
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
            <FolderIcon />
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
            <HandRaisedIcon />
            <p>
              &gt; You can start by writing <span className="text">Hello</span>
              in the chat
            </p>
          </div>
          <div className="use or">
            <span>
              <ArrowUturnUpIcon className="rotate90" />
            </span>
            <p>
              Or ask me how I am by writing
              <span className="text">how are you</span> in the chat .
            </p>
          </div>
          <div className="use or">
            <span>
              <ArrowUturnUpIcon className="rotate90" />
            </span>
            <p>
              Or make me feel better by sending a
              <span className="text">❤️</span>, even though I don`t understand,
              but still...
            </p>
          </div>
        </div>
        <hr />
        <div className="Features">
          <div>
            <h3># Features</h3>
            <div>
              <blockquote>
                <p dir="auto">You can send any text</p>
              </blockquote>
              <blockquote>
                <p dir="auto"> send emoji</p>
              </blockquote>
              <blockquote>
                <p dir="auto">Delete Message Like Messages</p>
              </blockquote>
            </div>
          </div>
          <div>
            <h3># Packages</h3>
            <div className="Packegs">
              <blockquote>
                <a
                  href="https://www.npmjs.com/package/@heroicons/react"
                  dir="auto"
                >
                  @heroicons/react
                </a>
              </blockquote>
              <blockquote>
                <a
                  href="https://www.npmjs.com/package/react-hot-toast"
                  dir="auto"
                >
                  react-hot-toast
                </a>
              </blockquote>
              <blockquote>
                <a
                  href="https://www.npmjs.com/package/emoji-picker-react"
                  dir="auto"
                >
                  emoji-picker-react
                </a>
              </blockquote>
            </div>
          </div>
        </div>
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
      <div className="dropdown__text">
        * How to use / About the project{" "}
        <InformationCircleIcon style={{ width: "20px" }} />
      </div>
    </label>
  );
}
