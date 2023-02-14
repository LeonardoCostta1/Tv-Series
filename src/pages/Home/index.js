import React from "react";
import Description from "../../components/Description";
import Sugestion from "../../components/Sugestion";
import "./style.css";

function Home() {
  const categorySeries = [
    {
      category: "popular",
      title: "popular"
    },
    {
      category: "top_rated",
      title: "top rated"
    },
    {
      category: "on_the_air",
      title: "on the air"
    },
    {
      category: "airing_today",
      title: "airing today"
    }
  ];
  return (
    <div className="home_wrapper">
      <div className="home_container">
        <Description />
        {categorySeries.map((series, index) => {
          return (
            <Sugestion
              key={index}
              category={series.category}
              title={series.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
