import React from "React";
import ReactDOM from "React-dom";
import LikeButton from "./button";

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: "Red"
    }
  }, " ", count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "-")));
}

const domContainer = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(Container), domContainer);