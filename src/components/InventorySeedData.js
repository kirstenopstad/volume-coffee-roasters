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
  roast: "Dark",
  poundsInStock: 130,
  image: french,
  summary: "Keep it simple and fresh with a rotation of our iconic blends. We’ll send a new selection every two weeks, so you can say bye-bye to wasting away in the coffee aisle of your local grocery.",
  id: v4()
},
{
  name: "Holler Mountain",
  origin: "Blend",
  price: 17,
  roast: "Medium", 
  poundsInStock: 130,
  image: holler,
  summary: "This organic blend has been a hometown favorite since day one. It’s got the complexity to pour a great espresso yet the versatility to serve as your daily cup of drip.",
  id: v4()
},
{
  name: "Founder's Blend",
  origin: "Blend",
  price: 17,
  roast: "Medium", 
  poundsInStock: 130,
  image: founders,
  summary: "A smooth, all-day drinker, Founder's Blend combines certified organic coffees from Central and South America for a taste of sunshine in a cup.",
  id: v4()
},
{
  name: "Hair Bender",
  origin: "Blend",
  price: 16,
  roast: "Dark", 
  poundsInStock: 130,
  image: hair,
  summary: "The sweet and balanced coffee that started it all. Hair Bender is our most celebrated blend with a flavor profile that shines no matter how you brew it.",
  id: v4()
},
{
  name: "Trapper Creek Decaf",
  origin: "Blend",
  price: 17,
  roast: "Medium", 
  poundsInStock: 130,
  image: trapper,
  summary: "Finally, decaf coffee beans that hold their own. Using the Swiss Water Process to decaffeinate carefully sourced coffees, we achieve unparalleled flavor and cup quality.",
  id: v4()
},
{
  name: "Hundred Mile",
  origin: "Blend",
  price: 17,
  roast: "Light", 
  poundsInStock: 130,
  image: hundred,
  summary: "Hundred Mile is a pleasant, balanced blend of certified organic coffees that will cut a clean line right through your day, no matter what time you get things started.",
  id: v4()
}

]

export default InventorySeedData;