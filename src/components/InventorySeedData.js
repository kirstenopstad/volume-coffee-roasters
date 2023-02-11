import React from "react";
import { v4 } from 'uuid';
import founders from './../img/beans/founders.png';
import french from './../img/beans/french-roast.png';
import hair from './../img/beans/hair-bender.png';
import holler from './../img/beans/holler-mtn.png';
import hundred from './../img/beans/hundred-mile.png';
import trapper from './../img/beans/trapper-creek.png';

const InventorySeedData = [{
  name: "French Roast",
  origin: "Blend",
  price: 17,
  roast: "dark",
  poundsInStock: 130,
  image: french,
  id: v4()
},
{
  name: "Holler Mountain",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  poundsInStock: 130,
  image: holler,
  id: v4()
},
{
  name: "Founder's Blend",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  poundsInStock: 130,
  image: founders,
  id: v4()
},
{
  name: "Hair Bender",
  origin: "Blend",
  price: 16,
  roast: "dark", 
  poundsInStock: 130,
  image: hair,
  id: v4()
},
{
  name: "Trapper Creek Decaf",
  origin: "Blend",
  price: 17,
  roast: "medium", 
  poundsInStock: 130,
  image: trapper,
  id: v4()
},
{
  name: "Hundred Mile",
  origin: "Blend",
  price: 17,
  roast: "light", 
  poundsInStock: 130,
  image: hundred,
  id: v4()
}

]

export default InventorySeedData;