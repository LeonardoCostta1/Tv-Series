import React from "react";
import Cover from ".";

export default {
  title: "Cover",
  component: Cover,
  excludeStories: /.*Data$/
};

export const CoverData = {
  backdrop: "https://m.media-amazon.com/images/I/71QPnEkXygS._AC_SY550_.jpg"
};

export const cover = () => <Cover {...CoverData} />;
