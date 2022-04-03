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
    prevPrice:"18999",
    price: "18000",
    reviews: "439",
    rating: "4.2",
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotAsleep.jpg",
    isLiked: true,
    title: "kyotAsleep",
    color: "black",
    prevPrice:"",
    price: "13500",
    reviews: "1439",
    rating: "4.2",
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotPeek.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    prevPrice:"18999",
    price: "11999",
    reviews: "69",
    rating: "4.8",
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotComfy.jpg",
    isLiked: true,
    title: "kyotComfy",
    color: "Red",
    prevPrice:"",
    price: "13500",
    reviews: "439",
    rating: "4.4",
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotHugCat.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    prevPrice:"18999",
    price: "11999",
    reviews: "439",
    rating: "4.8",
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotComfy.jpg",
    isLiked: true,
    title: "kyotComfy",
    color: "black",
    prevPrice:"",
    price: "13500",
    reviews: "439",
    rating: "4.4",
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotPeek.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    prevPrice:"",
    price: "11999",
    reviews: "439",
    rating: "4.8",
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotComfy.jpg",
    isLiked: true,
    title: "kyotComfy",
    color: "black",
    prevPrice:"",
    price: "13500",
    reviews: "439",
    rating: "4.4",
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotHugCat.jpg",
    isLiked: false,
    title: "kyotPeek",
    color: "white",
    prevPrice:"18999",
    price: "11999",
    reviews: "439",
    rating: "4.8",
    categoryName: "sweaters",
  },
];
