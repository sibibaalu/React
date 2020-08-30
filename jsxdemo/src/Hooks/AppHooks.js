import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import ColorDropDown from "./ColorDropDown";
import TranslateWidget from "./TranslateWidget";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React",
    content:
      "Cafasfjadfjadfhlkadflkadfjladhfl adsfadsfafadf adfafadf adfadfadfadfeewr ",
  },
  {
    title: "Check React Hooks",
    content:
      "erioefoinwrvonsfvbnsofghopriggv oihofi ihefpiwejfp pjhpfweidfhwoeifh iheoi hfwefh",
  },
  {
    title: "What is Accordion",
    content:
      "efiwefoihwref hwgwrg wrg wefwefwefwerwerf er wqer weughiuh iugbsdkvsdvkbqef ",
  },
];

const rareElements = [
  {
    label: "Sapphire",
    value: "blue",
  },
  {
    label: "Gold",
    value: "yellow",
  },
  {
    label: "Ruby",
    value: "red",
  },
  {
    label: "Emerald",
    value: "green",
  },
];

export default () => {
  const [dropdownSelected, setDropdownSelected] = useState(rareElements[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/wikisearch">
        <WikiSearch />
      </Route>
      <Route path="/dropdown">
        <ColorDropDown
          label="Select a color"
          rareElements={rareElements}
          dropdownSelected={dropdownSelected}
          handledropdownSelected={setDropdownSelected}
        />
      </Route>
      <Route path="/translate">
        <TranslateWidget />
      </Route>
    </div>
  );
};
