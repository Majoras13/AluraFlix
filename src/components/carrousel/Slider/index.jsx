import React from "react";
import Slider from "react-slick";
import VideoCard from "../VideoCard";

function SliderBox  ({data}){

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
              centerPadding:"1rem",
            }
          }
        ]
      };

    return<Slider {...settings}>
      {data.map((data)=><VideoCard key={data.id} linkUrl={data.videoUrl} thumbnail={data.imgLink}/>)}
    </Slider>
    
}

export default SliderBox