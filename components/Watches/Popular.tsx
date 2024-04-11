"use client";
import React from "react";
import TempA from "../Global/TempA";
import { BsChevronRight } from "react-icons/bs";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default function Popular() {
  const items = [
    {
      name: "Rolex, GMT-Master II",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653ce28288cf246fb4786d_126710BLNR-0002-p-500.png",
    },
    {
      name: "Rolex, Datejust 41",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/656030ee7881f7af6f614b03_126334-0002-p-500.png",
    },
    {
      name: "Rolex, GMT-Master II",
      price: "80,000 - 100,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65646b9909421d2717c6b76f_126710BLRO-0001-p-500.png",
    },
    {
      name: "Rolex, Submariner",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/65653b3afcb90a40f0370bc2_126610LN-0001-p-500.png",
    },
    {
      name: "Rolex, Datejust 41",
      price: "50,000 - 80,000 AED",
      text: "Comes with Box & Papers",
      img: "https://assets-global.website-files.com/64c794410a6c56562470f505/656030ee7881f7af6f614b03_126334-0002-p-500.png",
    },
  
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <div className="py-5 container3 overflow-x-hidden relative">
      <Slider {...settings}>
        {items.map((watch, key) => (
            <TempA watch={watch} key={key} />
      ))}
       </Slider>
    </div>
  );
}
