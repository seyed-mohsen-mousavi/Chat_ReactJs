// you don't need this component
import "../about.css";
function AbutProject() {
  return (
    <div className="about">
      <div className="dropdown">
        <input type="checkbox" id="dropdown" />

        <label className="dropdown__face" for="dropdown">
          <div className="dropdown__text">Dropdown</div>

          <div className="dropdown__arrow"></div>
        </label>

        <ul className="dropdown__items">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur doloremque, fugit assumenda aspernatur consequuntur
            ducimus nihil ratione consectetur amet ipsam laudantium hic sed
            maxime rem tempora repudiandae aliquid debitis explicabo?
          </div>
        </ul>
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

export default AbutProject;
