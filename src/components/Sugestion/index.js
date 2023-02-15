import React from "react";
import Cover from "../Cover";
import Slider from "react-slick";
import "./style.css";
import { useGetPopularSeriesQuery } from "../../redux/reducers/movies";
import { useDispatch } from "react-redux";
import { setModalTrue } from "../../redux/reducers/modalSlice";
import TitleCategory from "../TitleCategory";
import Loading from "../Loading";
function Sugestion({category,title}) {
  const { data, error, isLoading } = useGetPopularSeriesQuery(category);
  const dispatch = useDispatch();

  const sendToInfoPage = async (code) => {
    await dispatch({ type: "CODE_ID", code });
    dispatch(setModalTrue());
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    draggable:false,
    swipeToSlide:true,
    centerPadding:'50px',
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1658,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1263,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 874,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <Loading/>
      ) : data ? (
        <>
          <div className="sugestion_wrapper">
          <TitleCategory title={title}/>
            <div className="sugestion_container">
              <Slider {...settings}>
                {data?.results.map((serie) => {
                  return (
                    serie.backdrop_path && (
                      <div
                        key={serie.id}
                        onClick={() => sendToInfoPage(serie.id)}
                      >
                        <Cover
                          backdrop={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.backdrop_path}`}
                        />
                        <div className="sugestion_name">
                          {serie.original_name}
                        </div>
                        <div className="sugestion_vote">
                          {serie.vote_average}
                        </div>
                        <div className="last_data">{serie.first_air_date}</div>
                      </div>
                    )
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
