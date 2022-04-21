import React from "react";
import "./ourBrands.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../carousal/arrows/nextArrow";
import PrevArrow from "../../carousal/arrows/prevArrow";
import SliderComponent from "../../carousal";

const OurBrands = () => {
  const brandSlides = [
    {
      id: 1,
      title: "Sangeetha Veg Restaurant",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/f2ac1ad991aa8311242cbe675661040e_1568097187.png",
      descp: "28 min",
    },
    {
      id: 2,
      title: "SS Hyderabad Biryani",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/868e99c35e35fc2bae1dccc465ed4c82_1625159864.png",
      descp: "26 min",
    },
    {
      id: 3,
      title: "A2B - Adyar Ananda Bhavan        ",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png",
      descp: "20 min",
    },
    {
      id: 4,
      title: "Subway",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png",
      descp: "20 min",
    },
    {
      id: 5,
      title: "Chai Kings",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/e08ef4c87f71a72467bcdf118286be55_1491906732.png",
      descp: "22 min",
    },
    {
      id: 6,
      title: "KFC",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png",
      descp: "26 min",
    },
    {
      id: 7,
      title: " Domino's Pizza      ",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png",
      descp: "30 min",
    },
    {
      id: 8,
      title: "Dindigul Thalappakatti",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png",
      descp: "23 min",
    },
    {
      id: 9,
      title: "Sukkubhai Biryani",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/14323cdd56b56d2c3a563a27f3df3831_1598278127.png",
      descp: "29 min",
    },
    {
      id: 10,
      title: "McDonald's",
      cover:
        "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png",
      descp: "23 min",
    },
  ];

  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="section-padding">
      <div className="max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
          {brandSlides.map((_) => {
            return <SliderComponent key={_.id} item={_} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OurBrands;
