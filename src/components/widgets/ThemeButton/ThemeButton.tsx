import React, { FC } from "react";
import "./ThemeButton.sass";
import sprites from "@assets/sprites/sprites.svg";

interface IToggleProps {
  value: boolean;
  onChange: () => void;
}

const Toggle: FC<IToggleProps> = ({ value, onChange }) => (
  <label className="switch" htmlFor="toggler">
    <svg className="sun">
      <use href={`${sprites}#sun`} />
    </svg>
    <svg className="moon">
      <use href={`${sprites}#moon`} />
    </svg>
    <input
      className="input"
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={!value}
      readOnly
    />
    <span className="slider"></span>
  </label>
);

export default Toggle;
