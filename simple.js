function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요,";
  const type = "button";

  return React.createElement("input", {
    onClick: () => {
      setLiked(!liked);
    },
    value: text,
    type: "button",
  });
}

const domContainer1 = document.getElementById("root1");
ReactDOM.render(React.createElement(LikeButton), domContainer1);

const domContainer2 = document.getElementById("root2");
ReactDOM.render(React.createElement(LikeButton), domContainer2);

const domContainer3 = document.getElementById("root3");
ReactDOM.render(React.createElement(LikeButton), domContainer3);
