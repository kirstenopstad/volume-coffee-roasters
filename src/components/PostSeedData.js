import farmer from './../img/posts/farmer.jpg';
import espresso_machine from './../img/posts/espresso_machine.jpg';

const PostSeedData = [
{
  title: "Meet our Farm Partners",
  tagline: "AMA with our Fair Trade Certified growers",
  image: farmer,
  caption: "Fair Trade Certified coffee grower in the field.",
  content: "Our interview was delayed!",
  photoCredit: "Esteban Benites",
  featured: true,
  featureOrder: 1,
},
{
  title: "Know Your Strength",
  tagline: "take the quiz to find your brewing method match",
  image: espresso_machine,
  caption: "Espresso machine brewing a double.",
  photoCredit: "Tabitha Turner",
  featured: true,
  featureOrder: 2,
  quizQuestions: [
    {
      question: "Describe your taste philosophy",
      name: "q1",
      answers: [
        {
          answer: "Flavor is enhanced by environment – smells, sights, sounds",
          value: "a"
        },
        {
         answer: "Anything tastes better with a little cinnamon in it",
         value: "b"
        },
        {
          answer: "Either you have it or you don't",
          value: "c"
        },
        {
          answer: "Variety is the spice of life",
          value: "d"
        }
      ]
    },
    {
      question: "Time is...",
      name: "q2",
      answers: [
        {
          answer: "Relative",
          value: "a"
        },
        {
         answer: "Precious",
         value: "b"
        },
        {
          answer: "Elastic",
          value: "c"
        },
        {
          answer: "Money",
          value: "d"
        }
      ]
    },
    {
      question: "Your kitchen is your -",
      name: "q3",
      answers: [
        {
          answer: "Workshop",
          value: "a"
        },
        {
         answer: "Kitchen",
         value: "b"
        },
        {
          answer: "Sanctuary",
          value: "c"
        },
        {
          answer: "Showroom",
          value: "d"
        }
      ]
    },
    {
      question: "Grinder profile?",
      name: "q4",
      answers: [
        {
          answer: "Electric with multiple settings",
          value: "a"
        },
        {
         answer: "Whatever they do at the factory",
         value: "b"
        },
        {
          answer: "Hand-ground fresh everyday",
          value: "c"
        },
        {
          answer: "Grinders were abstracted away years ago",
          value: "d"
        }
      ]
    },
    {
      question: "Your vibe",
      name: "q5",
      answers: [
        {
          answer: "Easy to please, hard to win over.",
          value: "a"
        },
        {
         answer: "Low maintenance, loves dogs.",
         value: "b"
        },
        {
          answer: "Black coffee, straight bourbon, can't lose.",
          value: "c"
        },
        {
          answer: "One can never be overdressed.",
          value: "d"
        }
      ]
    },
  ],
  quizKey: {
    a: "Pour Over",
    b: "Drip Coffee Machine",
    c: "French Press",
    d: "Espresso Machine"
  }
},

]

export default PostSeedData;