import React from "react";
import Menu from ".";

export default {
  title: "Menu",
  component: Menu,
  excludeStories: /.*Data$/
};

export const MenuData = {
  textLogo: "streamreel",
  user:'leonard costa'
};

export const menu = () => <Menu {...MenuData} />;
