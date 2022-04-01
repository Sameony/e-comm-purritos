import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imageUrl: "Images/kyotPeek.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    price: "18000",
    rating: "4.2",
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotComfy.jpg",
    isLiked: true,
    title: "kyotComfy",
    color: "black",
    price: "13500",
    rating: "4.4",
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotPeek.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    price: "11999",
    rating: "4.8",
    categoryName: "sweaters",
  },
];
