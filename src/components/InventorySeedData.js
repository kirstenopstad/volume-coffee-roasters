import React from "react";
import { v4 } from 'uuid';

const InventorySeedData = [{
  name: "French Roast",
  origin: "Blend",
  price: 17,
  roast: "dark",
  inStock: 0,
  id: v4()
},
{
  name: "Holler Mountain",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  inStock: 0,
  id: v4()
},
{
  name: "Founder's Blend",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  inStock: 0,
  id: v4()
},
{
  name: "Hair Bender",
  origin: "Blend",
  price: 16,
  roast: "dark", 
  inStock: 0,
  id: v4()
},
{
  name: "Homestead",
  origin: "Blend",
  price: 16,
  roast: "light", 
  inStock: 0,
  id: v4()
},
{
  name: "Trapper Creek Decaf",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  inStock: 0,
  id: v4()
},
{
  name: "Hundred Mile",
  origin: "Blend",
  price: 17,
  roast: "light", 
  inStock: 0,
  id: v4()
}

]

export default InventorySeedData;