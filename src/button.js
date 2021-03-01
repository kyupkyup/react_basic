import React from "React";
import ReactDOM from "React-dom";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요,";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}

export default LikeButton;