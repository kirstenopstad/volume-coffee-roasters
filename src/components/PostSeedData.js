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
      question: "Sample Q",
      name: "q1",
      answers: [
        {
          answer: "Answer A",
          value: "a"
        },
        {
         answer: "Answer B",
         value: "b"
        },
        {
          answer: "Answer C",
          value: "c"
        },
        {
          answer: "Answer D",
          value: "d"
        }
      ]
    }
  ],
  quizKey: {
    a: "WinnerA",
    b: "WinnerB",
    c: "WinnerC",
    d: "WinnerD"
  }
},

]

export default PostSeedData;