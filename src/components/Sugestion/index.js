import React from "react";
import Cover from "../Cover";
import Slider from "react-slick";
import "./style.css";
import { useGetPopularSeriesQuery } from "../../services/movies";

function Sugestion() {
  const { data, error, isLoading } = useGetPopularSeriesQuery();
  console.log(data);
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: "110px",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="sugestion_wrapper">
            <div className="sugestion_container">
              <Slider {...settings}>
                {data?.results.map((serie) => {
                  return (
                    <div>
                      <Cover
                        backdrop={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.poster_path}`}
                      />
                      <div className="sugestion_name">
                        {serie.original_name}
                      </div>
                      <div className="sugestion_vote">{serie.vote_average}</div>
                      <div className="last_data">{serie.first_air_date}</div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Sugestion;
