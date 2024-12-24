import { Logo } from "./images";

export const categories = [
  {
    image: <Logo />,
    name: "Burger",
  },
  {
    image: <Logo />,
    name: "Pizza",
  },
  {
    image: <Logo />,
    name: "Seafood",
  },
  {
    image: <Logo />,
    name: "Italian",
  },
  {
    image: <Logo />,
    name: "Meat",
  },
  {
    image: <Logo />,
    name: "Mexican",
  },
];

export const items = [
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese.",
    price: 5.5,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.5 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Burger",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617424771170-d333ef3d93d8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Grilled Chicken Sandwich",
    description: "Tender chicken breast with fresh veggies.",
    price: 6.75,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Pizza",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Vegan Burger",
    description: "Plant-based patty with fresh toppings.",
    price: 7.25,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Seafood",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Double Beef Burger",
    description: "Two beef patties with cheese and toppings.",
    price: 8.0,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Italian",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1701011134119-1d5e68638617?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Crispy Fish Sandwich",
    description: "Crispy fish fillet with tartar sauce.",
    price: 6.5,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Burger",
  },
  {
    image:
      "https://images.unsplash.com/photo-1699728088600-6d684acbeada?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bacon & Cheese Burger",
    description: "Crispy bacon and cheese on a beef patty.",
    price: 7.0,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Mexican",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mushroom Swiss Burger",
    description: "Sautéed mushrooms and Swiss cheese.",
    price: 7.5,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Burger",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617424771170-d333ef3d93d8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "BBQ Pulled Pork Burger",
    description: "Pulled pork with tangy BBQ sauce.",
    price: 7.75,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Pizza",
  },
  {
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spicy Chicken Wrap",
    description: "Spicy grilled chicken in a soft wrap.",
    price: 6.25,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Seafood",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Grilled Veggie Sandwich",
    description: "Fresh grilled vegetables on toasted bread.",
    price: 5.75,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Italian",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1701011134119-1d5e68638617?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Buffalo Chicken Sandwich",
    description: "Buffalo sauce-coated chicken with a spicy kick.",
    price: 7.25,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Meat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1699728088600-6d684acbeada?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Turkey Club Sandwich",
    description: "Layers of turkey, bacon, and fresh veggies.",
    price: 6.75,
    sizes: [
      { size: "small", price: 3.25 },
      { size: "medium", price: 5.25 },
      { size: "large", price: 7.0 },
    ],
    drinks: ["Pepsi", "Merenda", "Seven up"],
    category: "Mexican",
  },
];
