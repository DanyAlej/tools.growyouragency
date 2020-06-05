import React from 'react';
import './styles/Switch.css'

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <div class="whole">
      <div class="divcontainer">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </div>
    </div>
  );
};

export default Switch;