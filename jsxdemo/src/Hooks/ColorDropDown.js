import React, { useState, useEffect, useRef } from "react";

const ColorDropDown = ({
  rareElements,
  dropdownSelected,
  handledropdownSelected,
  label,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpenDropdown(false);
    };
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const renderedOptions = rareElements.map((rare) => {
    if (rare.value === dropdownSelected.value) {
      return null;
    }
    return (
      <div
        className="item"
        key={rare.value}
        onClick={() => handledropdownSelected(rare)}
      >
        {rare.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label"> {label}</label>
        <div
          className={`ui selection dropdown ${
            openDropdown ? "visible active" : ""
          }`}
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{dropdownSelected.label}</div>
          <div className={`menu ${openDropdown ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDropDown;
