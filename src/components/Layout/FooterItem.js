import React from "react";

function FooterItem(props) {
  return (
    <div className="footer-item">
      <div className="footer-item-title">{props.title}</div>
      <div className="footer-item-list">{props.children}</div>
    </div>
  );
}

export default FooterItem;
