import React from "react";
import Description from ".";

export default {
  title: "Description",
  component: Description,
  excludeStories: /.*Data$/
};

export const descriptionData = {
  primary: true,
  backdrop:'https://m.media-amazon.com/images/I/71QPnEkXygS._AC_SY550_.jpg',
  genres: [
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 35,
      name: "Comedy"
    }
  ],
  title: "Fight Club",
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  author: "Jeremy Carver",
  duration: "58 MIM   2019   HD    5.1",
  id:550,
};

export const description = () => <Description {...descriptionData} />;
