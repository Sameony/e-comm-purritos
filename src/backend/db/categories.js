import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "pattern-blankets",
    coverImg:"https://res.cloudinary.com/ddqawrqs1/image/upload/v1649348707/purritos/sleepPatternBlanket_uc0n6i.png",
    disName:"Fancy Purritos",
    description:
      "Designer blankets to make your purritos extra stylish and cute.",

  },
  {
    _id: uuid(),
    categoryName: "plain-blankets",
    coverImg:"https://res.cloudinary.com/ddqawrqs1/image/upload/v1649348702/purritos/kyotAsleep_vuhjye.jpg",
    disName:"Plain Purritos",
    description:
      "No patterns or designs, just single colored blanket",
  },
  {
    _id: uuid(),
    categoryName: "sweaters",
    coverImg:"https://res.cloudinary.com/ddqawrqs1/image/upload/v1649348706/purritos/kyotHugCat_dldvh4.jpg",
    disName:"Sweater Purritos",
    description:
      "Blankets are not necessary for purritos. The ingredient can be switched with fluff sweaters as well.",
  },
];
