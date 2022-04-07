import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "pattern-blankets",
    coverImg:"/public/images/sleepPatternBlanket.png",
    disName:"Fancy Purritos",
    description:
      "Designer blankets to make your purritos extra stylish and cute.",

  },
  {
    _id: uuid(),
    categoryName: "plain-blankets",
    coverImg:"/public/images/kyotAsleep.jpg",
    disName:"Plain Purritos",
    description:
      "No patterns or designs, just single colored blanket",
  },
  {
    _id: uuid(),
    categoryName: "sweaters",
    coverImg:"/public/images/kyotHugCat.jpg",
    disName:"Sweater Purritos",
    description:
      "Blankets are not necessary for purritos. The ingredient can be switched with fluff sweaters as well.",
  },
];
