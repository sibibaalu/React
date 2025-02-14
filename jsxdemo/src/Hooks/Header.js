import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/wikisearch" className="item">
        wikisearch
      </a>
      <a href="/dropdown" className="item">
        Color dropdown
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
    </div>
  );
};

export default Header;
