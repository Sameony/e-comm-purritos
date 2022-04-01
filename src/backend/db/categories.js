import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "pattern-blankets",
    description:
      "Designer blankets to make your purritos extra stylish and cute.",
  },
  {
    _id: uuid(),
    categoryName: "plain-blankets",
    description:
      "No patterns or designs, just single colored blanket",
  },
  {
    _id: uuid(),
    categoryName: "sweaters",
    description:
      "Blankets are not necessary for purritos. The ingredient can be switched with floof sweaters as well.",
  },
];
