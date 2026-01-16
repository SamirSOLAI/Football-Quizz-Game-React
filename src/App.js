import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      {/* <Welcome />
      <MainComeponent /> */}
      <QuestionsTemplate />
    </div>
  );
}

const data = [
  {
    id: 1,
    question: "Who is the last Manchester united player to win the ballon d'or",
    answer1: "Wayne Rooney",
    answer2: "Bruno Fernandes",
    answer3: "Cristiano ronaldo",
    answer4: "Paul Scholesy",
  },

  {
    id: 2,
    question: "Where did the manchester united plane crash?",
    answer1: "Prague",
    answer2: "Melbourne",
    answer3: "Porto",
    answer4: "Munich",
  },
  {
    id: 3,
    question: "Who succeded Sir Alex Ferguson as a Manchester united Manager?",
    answer1: "Moyes",
    answer2: "Guardiola",
    answer3: "Mourinho",
    answer4: "Arteta",
  },
  {
    id: 4,
    question:
      "Which Manchester united player was knows as 'The Flying Dutchman'",
    answer1: "Maguire",
    answer2: "Van Persie",
    answer3: "Wajih 👽",
    answer4: "Cristiano",
  },

  {
    id: 5,
    question:
      "Which Manchester united player was knows as 'The Flying Dutchman'",
    answer1: "Maguire",
    answer2: "Van Persie",
    answer3: "Wajih 👽",
    answer4: "Memphis",
  },
];

function QuestionsTemplate() {
  const [displayedQuestion, SetDisplayedQuestion] = useState(data[0]);
  const [index, setIndex] = useState(0);
  const [selectedOption, setselectedOption] = useState();
  // la useState qui enregistre temporairement la réponse du user (avant qu'il clique sur Submit)
  const [userAnswer, setUserAnswer] = useState([]);
  // la useState qui update le erray des réponses (ba3d ma il clique sur Submit)
  const correctAnswers = ["Cristiano ronaldo", "Munich", "Moyes", "Van Persie"];

  let result = 0;
  for (let i = 0; i < 4; i++) {
    if (correctAnswers[i] === userAnswer[i]) {
      result = result + 1;
    }
  }

  function handleSubmit() {
    // la fonction du bouton "submit"
    if (index < data.length) {
      SetDisplayedQuestion(data[index + 1]);
      setIndex(index + 1);
    }
    setUserAnswer([...userAnswer, selectedOption]); // we hna win j'update le erray ta3 les réponses
  }

  useEffect(() => {
    console.log(userAnswer);
  }, [userAnswer]);

  const isGameOn = index === data.length - 1 ? false : true;
  const [showResults, setShowResults] = useState(false);

  function handleShowResults() {
    setShowResults(true);
    // console.log(userAnswer);
  }
  return (
    <div>
      <h1> {displayedQuestion.question}</h1>
      <div className="question-options">
        <button
          className={`option ${
            selectedOption === displayedQuestion.answer1 ? "selected" : ""
          }`}
          onClick={() => setselectedOption(displayedQuestion.answer1)}
        >
          {" "}
          {displayedQuestion.answer1}
        </button>
        <button
          className={`option ${
            selectedOption === displayedQuestion.answer2 ? "selected" : ""
          }`}
          onClick={() => setselectedOption(displayedQuestion.answer2)}
        >
          {" "}
          {displayedQuestion.answer2}
        </button>
        <button
          className={`option ${
            selectedOption === displayedQuestion.answer3 ? "selected" : ""
          }`}
          onClick={() => setselectedOption(displayedQuestion.answer3)}
        >
          {" "}
          {displayedQuestion.answer3}
        </button>
        <button
          className={`option ${
            selectedOption === displayedQuestion.answer4 ? "selected" : ""
          }`}
          onClick={() => setselectedOption(displayedQuestion.answer4)}
        >
          {" "}
          {displayedQuestion.answer4}
        </button>
      </div>
      <button onClick={handleSubmit} disabled={index === 4 ? true : false}>
        Submit
      </button>

      {!isGameOn && (
        <button className="see-results" onClick={handleShowResults}>
          See your results
        </button>
      )}
      {showResults && (
        <h3>Game finished, you have {result} correct answer(s) !</h3>
      )}
    </div>
  );
}

function Welcome() {
  return <div>whatsupp, Remmeber coding in React?</div>;
}

function MainComeponent() {
  const [count, setCount] = useState(0);

  const [leverage, setLeverage] = useState(1);

  return (
    <div>
      <div className="MainComponent">
        {" "}
        <button onClick={() => setCount(count - leverage)}>
          Subtract {leverage}
        </button>
        <div className={count < 0 ? "red-color" : "green-color"}>{count}</div>
        <button onClick={() => setCount(count + leverage)}>
          Add {leverage}
        </button>
      </div>
      <button onClick={() => setCount(0)}>RESET</button>
      <div className="leverage">
        <button
          className={leverage === 1 ? "selectedBtn" : "unselectedBtn"}
          value={1}
          onClick={() => setLeverage(1)}
        >
          1
        </button>{" "}
        <button
          className={leverage === 2 ? "selectedBtn" : "unselectedBtn"}
          value={1}
          onClick={() => setLeverage(2)}
        >
          2
        </button>
        <button
          className={leverage === 3 ? "selectedBtn" : "unselectedBtn"}
          value={1}
          onClick={() => setLeverage(3)}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default App;
