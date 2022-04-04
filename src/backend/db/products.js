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
    title: "Exquisite Blanket",
    color: "brown",
    prevPrice:"18999",
    price: "18000",
    reviews: "3439",
    rating: 4.6,
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/pawPlainBlanky.png",
    isLiked: true,
    title: "Phenomenal soft blanket",
    color: "grey",
    prevPrice:"",
    price: "13500",
    reviews: "1431",
    rating: 4.3,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/squishCat.png",
    isLiked: false,
    title: "Phenomenal soft blanket",
    color: "grey",
    prevPrice:"14999",
    price: "11999",
    reviews: "629",
    rating: 4.8,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotComfy.jpg",
    isLiked: true,
    title: "Thin all weather blanket",
    color: "grey",
    prevPrice:"",
    price: "9500",
    reviews: "439",
    rating: 2.4,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotAsleep2.jpg",
    isLiked: false,
    title: "Precious striped Blanket",
    color: "brown",
    prevPrice:"9999",
    price: "8000",
    reviews: "341",
    rating: 3.3,
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/sleepPatternBlanket.png",
    isLiked: false,
    title: "Exquisite designer blanket",
    color: "golden",
    prevPrice:"18999",
    price: "14999",
    reviews: "439",
    rating: 4.8,
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/unknown.png",
    isLiked: false,
    title: "Ferocious blanket",
    color: "white",
    prevPrice:"18999",
    price: "14999",
    reviews: "837",
    rating: 4.3,
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/sleepPlainBlanket.png",
    isLiked: true,
    title: "Ultra-Soft thin blanket",
    color: "white",
    prevPrice:"",
    price: "7800",
    reviews: "721",
    rating: 2.5,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/sweaterGrey.png",
    isLiked: false,
    title: "Ultra-Soft sweater",
    color: "grey",
    prevPrice:"",
    price: "11999",
    reviews: "439",
    rating: 2.8,
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/ultraThinBlanky.png",
    isLiked: true,
    title: "Ultra Thin catsheet",
    color: "white",
    prevPrice:"",
    price: "6500",
    reviews: "439",
    rating: 1.6,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/kyotHugCat.jpg",
    isLiked: false,
    title: "Ultra-soft Sweater",
    color: "brown",
    prevPrice:"18999",
    price: "11999",
    reviews: "1372",
    rating: 3.9,
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/woolBed.png",
    isLiked: true,
    title: "Baba White Sheep wool",
    color: "white",
    prevPrice:"",
    price: "9500",
    reviews: "621",
    rating: 2.9,
    categoryName: "plain-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/sweaterBasket.png",
    isLiked: false,
    title: "Soft white Sweater",
    color: "white",
    prevPrice:"",
    price: "13400",
    reviews: "23",
    rating: 5,
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/sweaterGrey2.png",
    isLiked: false,
    title: "Ultra-Soft sweater",
    color: "grey",
    prevPrice:"",
    price: "11999",
    reviews: "439",
    rating: 3.6,
    categoryName: "sweaters",
  },
  {
    _id: uuid(),
    imageUrl: "Images/bluPattern.png",
    isLiked: false,
    title: "Exquisite Thin catsheet",
    color: "blue",
    prevPrice:"12399",
    price: "8399",
    reviews: "39",
    rating: 4.1,
    categoryName: "pattern-blankets",
  },
  {
    _id: uuid(),
    imageUrl: "Images/catSweater.png",
    isLiked: false,
    title: "Cat Turtle Neck Sweater",
    color: "white",
    prevPrice:"",
    price: "13400",
    reviews: "1183",
    rating: 4.7,
    categoryName: "sweaters",
  },
];