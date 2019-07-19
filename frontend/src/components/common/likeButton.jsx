import React from "react";

const LikeButton = props => {
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={props.liked ? "fa fa-heart text-danger" : "fa fa-heart-o"}
      aria-hidden="true"
    />
  );
};

export default LikeButton;
