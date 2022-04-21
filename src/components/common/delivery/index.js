import React from "react";
import CardItem from "../cardItem";
import Filters from "../filters";
import "./delivery.css";
import DeliveryCollection from "./deliveryCollection";
import OurBrands from "./ourBrands";

const DeliveryTab = () => {
  const deliveryFilters = [
    {
      id: 1,
      icon: "fi fi-sr-settings-sliders",
      title: "Filters",
    },
    { id: 2, title: "Rating: 4.0" },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    { id: 4, title: "Pure Veg" },
    { id: 5, title: "Delivery Time", icon: "fi fi-sr-apps-sort" },
    { id: 6, title: "Great Offers" },
  ];
  const foodCards = [
    {
      id: 1,
      img: "https://b.zmtcdn.com/data/pictures/3/19914143/dad25168a8280e4f392201149347d168_o2_featured_v2.jpg?output-format=webp",
      title: "Veg Meals",
      descp: "Beverages, Fast Food, Shawarma,",
      offerPrice: "200 for two",
      rating: 3.5,
      location: "Nungambakkam, Chennai",
    },
    {
      id: 2,
      img: "https://b.zmtcdn.com/data/pictures/chains/3/65343/4319a845d06dbd55b66f3f4da294a757_featured_v2.jpg?output-format=webp",
      title: "McDonald's",
      descp: "Beverages",
      offerPrice: "500 for two",
      rating: 4.0,
      location: "Nungambakkam, Chennai",
    },
    {
      id: 3,
      img: "https://b.zmtcdn.com/data/pictures/4/19418884/2d4b94f0557e9e29f760a287a4bb4866_featured_v2.jpg?output-format=webp",
      title: "The Sandwich Man",
      descp: "Fast Food, Sandwich, Desserts and others",
      offerPrice: "250 for two",
      rating: 4.2,
      location: "Nungambakkam, Chennai",
    },
    {
      id: 4,
      img: "https://b.zmtcdn.com/data/pictures/chains/0/18225860/572999873b161d836dce1cb64827ef6f_featured_v2.jpg",
      title: "Burger King",
      descp: "Beverages, Fast Food",
      offerPrice: "300 for two",
      rating: 4.5,
      location: "Nungambakkam, Chennai",
    },
    {
      id: 5,
      img: "https://b.zmtcdn.com/data/pictures/2/19517162/736afefb3dcd19c29aa0863289e5009d_featured_v2.jpg",
      title: "Tea Time",
      descp: "Tea Fast food and Beverages",
      offerPrice: "300 for two",
      rating: 3.0,
      location: "Nungambakkam, Chennai",
    },
    {
      id: 6,
      img: "https://b.zmtcdn.com/data/pictures/chains/3/18244083/ab37e3b538111d0ddef2487402774064_featured_v2.jpg",
      title: "Al Sham",
      descp: "Chetinad, Kerala, Biryani,Fast food ",
      offerPrice: "750 for two",
      rating: 3.9,
      location: "Nungambakkam, Chennai",
    },
  ];

  return (
    <div>
      <Filters filterList={deliveryFilters} />

      <DeliveryCollection />
      <OurBrands />
      <CardItem
        foodCards={foodCards}
        cardHead="Delivery Restaurants in Nungambakkam, India"
      />
    </div>
  );
};

export default DeliveryTab;
