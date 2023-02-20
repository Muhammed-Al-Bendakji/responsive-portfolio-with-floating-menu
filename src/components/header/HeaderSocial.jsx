import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="" target="_blank">
        <BsLinkedin />
      </a>
      <a href="" target="_blank">
        <BsGithub />
      </a>
      <a href="" target="_blank">
        <BsFacebook />
      </a>
      <a href="" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
