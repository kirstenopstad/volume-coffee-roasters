import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Quiz = ({quizData, quizKey}) => {
  const [winners, setWinners] = useState([])

  console.log(quizData)
  console.log(quizKey)
  // tallyFunction (from lang-selector refactor)
  function tallyResults(ansList) {
  // takes an array of answer keys (a, b, c, d) and outputs an array of winners

    // Init tallies
    let tallyA = 0;
    let tallyB = 0;
    let tallyC = 0;
    let tallyD = 0;

    // Tabulate answers to all questions
    ansList.forEach((answer) => {
      if (answer === "a") {
        tallyA += 1;
      } else if (answer === "b") {
        tallyB += 1;
      } else if (answer === "c") {
        tallyC += 1;
      } else if (answer === "d") {
        tallyD += 1;
      };
    })

    // add tally data to array
    const results = { 
      a: tallyA, 
      b: tallyB, 
      c: tallyC, 
      d: tallyD }
    
    // get highest value in array
    const highScore = Math.max(...Object.values(results))

    // Check tally functionality
    // console.log("TallyA = " + tallyA);
    // console.log("TallyB = " + tallyB);
    // console.log("TallyC = " + tallyC);
    // console.log("TallyD = " + tallyD);
    // console.log("High Score: " + highScore);
    // console.log(results);
    
    // return winners
    let winners = []
    
    // iterate through keys
    Object.keys(results).forEach((key) => {
      // if value of key is equal to high score
      if (results[key] === highScore)  {
        // push key to winners array
        winners.push(key)
      }
    })
    // console.log("Winners: " + winners);
    
    // return calculateResult(tallyA, tallyB, tallyC, tallyD);
    return winners;
  }

  // handleQuizSubmission
  const handleQuizSubmission = (e) => {
    e.preventDefault();
    // initialize answer array
    let ansArray = [];
    // for each question
    quizData.forEach((question) => {
      let name 
      // console.log(e.target[question.name].value)
      // add answer value to answer array 
      ansArray.push(e.target[question.name].value)
      // console.log(`AnsArray: ${ansArray}`)
    })
    // pass answer array to tally & store in winners
    const winners = tallyResults(ansArray)
    // console.log(winners)

    // store winners in state
    setWinners(winners)
  }

  // get results
  let results = null;
  if (winners.length > 0) {
    // Add first winner
      results = quizKey[winners[0]]
      results = <h4><i>Your</i> Strength? {results}</h4>
    // // Add tied winner(s) 
    // for (let i = 1; i < winners.length; i++) {
    //   results = results + ` & ${quizKey[winners[i]]}`
    // } 
  }

  // conditionally render
  // only render if quiz exists!
  let quiz = null;
  if (!quizData) {
    return 
  } else {
      return (
        <>
        <Form onSubmit={handleQuizSubmission}>
          <a id="know-your-strength" />
          {quizData.map((question) => (
            <div key={`quiz-${question.name}`} className="mb-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{question.question}</Form.Label>
              {question.answers.map((answer) => 
                  <Form.Check 
                  key={`${question.name}-${answer.value}`}
                  type="radio"
                  id={`${question.name}-${answer.value}`}
                  value={`${answer.value}`}
                  name={question.name}
                  label={`${answer.answer}`}
                  />
              )}
              </Form.Group>
            </div>
          ))}
          <Button variant="outline-dark" type="submit">Get Your Strength</Button>
        </Form>
        <br />
        {results}
        {/* TODO: add production recommendation / link */}
        </>
      );
    }
  }


export default Quiz