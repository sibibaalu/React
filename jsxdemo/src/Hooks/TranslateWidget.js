import React, { useState, useEffect } from "react";
import ColorDropDown from "./ColorDropDown";
import Convert from "./Convert";

const languages = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Tamil",
    value: "ta",
  },
];

const TranslateWidget = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");

  useEffect(() => {
    
  }, [text]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter the text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <ColorDropDown
        label="Select a language"
        dropdownSelected={language}
        handledropdownSelected={setLanguage}
        rareElements={languages}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default TranslateWidget;
