import React, { useState, useEffect } from "react";
import Axios from "axios";

const Convert = ({ language, text }) => {
  const [tranlsated, setTranslated] = useState("");

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    const timeoutId = setTimeout(() => {
      if (text) {
        doTranslation();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  return (
    <div>
      <h1 className="ui header">{tranlsated}</h1>
    </div>
  );
};

export default Convert;
