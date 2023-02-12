import React from "react";
import Button from ".";
export default {
  title: "Button",
  component: Button,
  excludeStories: /.*Data$/
};

export const CoverData = {
  icon: 'fa-play',
  title:'assistir agora'
};

export const button = () => <Button {...CoverData} />;
