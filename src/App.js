import React, { useEffect, useState } from 'react';
import AntTrail from './components/AntTrail';
import Question from './components/Question';
import './App.css';
import * as data from './data/questions.js';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [dotColors, setDotColors] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [attemptFinished, setAttemptFinished] = useState(true);

  const setNewAttempt = () => {
    let newAnswers = [];
    data.questions && data.questions.length> 0 && data.questions.forEach((m, i) => {
        newAnswers.push({
          questionId: m.questionId,
          userAnswer: '',
          isCorrect: null
        })
      }
    )
    let newAttempts = Object.assign([], attempts);
    newAttempts[newAttempts.length] = newAnswers;
    setAttempts(newAttempts);
    setAttemptFinished(false);
    getDotColors(newAttempts, currentQuestion);
    setCurrentQuestion(1);
  }

  useEffect(() => {
    getDotColors(attempts, currentQuestion);
  },[currentQuestion]);

  const moveQuestion = (move) => {
    if (move === 'prev') {
      setCurrentQuestion(currentQuestion-1);
      if (currentQuestion <= 1) setCurrentQuestion(1);
    } else if (move === 'next') {
      setCurrentQuestion(currentQuestion+1);
      if (currentQuestion >= data.questions.length) setCurrentQuestion(data.questions.length);
    } else if (!isNaN(move)) {
      setCurrentQuestion(move);
    }
  }

  const onAnswer = (questionId, answer) => {
    let updatedAttempts = Object.assign([], attempts);
    let answers = updatedAttempts[updatedAttempts.length-1];
    let newAnswers = answers && answers.length > 0 && answers.map((m) => {
      if (m.questionId === questionId) {
        m.userAnswer = answer;
      }
      return m;
    })
    updatedAttempts[updatedAttempts.length-1] = answers;
    setAttempts(updatedAttempts);
    getDotColors(updatedAttempts, currentQuestion);
  }

  const getDotColors = (paramAttempts, paramCurrentQuestion) => {
    //1. set the currentQuestion to black
    //2. loop through the answer length.
    //    a. If the dot is answered, then blue
    //    b. If the dot is unanswered and below the greatest question answered, it is orange.
    //       otherwise it is blank
    let currentAttempt = paramAttempts.length-1;
    let answers = paramAttempts[currentAttempt];
    let highestAnswer = 1;
    answers && answers.length > 0 && answers.forEach((m, i) => {
      if (m.userAnswer && i+1 > highestAnswer) highestAnswer = i+1;
    })
    let newDotColors = [''];
    answers && answers.length > 0 && answers.forEach((m, i) => {
      if (newDotColors.length === paramCurrentQuestion) {
        newDotColors[newDotColors.length] = 'black';
      } else if (answers[i].userAnswer && answers[i].userAnswer.length > 0) {
        newDotColors[newDotColors.length] = 'blue';
      } else if (!answers[i].userAnswer && (newDotColors.length < highestAnswer || newDotColors.length < paramCurrentQuestion)) {
        newDotColors[newDotColors.length] = 'orange';
      } else {
        newDotColors[newDotColors.length] = '';
      }
    })
    setDotColors(newDotColors);
  }

  return (
    <div className="App">
      <header className="App-header">
        <title>The Quiz</title>
        <h2>The Quiz</h2>
        {!attemptFinished &&
          <div className="antTrail">
            <AntTrail current={currentQuestion} totalCount={data.questions.length} dotColors={dotColors}
                      moveQuestion={moveQuestion}/>
          </div>
        }
      </header>
      <div className="row">
        <div className="nav">
          <div>
            <div className="headerItem">Quiz Score</div>
            <div> Attempts: {(attempts && attempts.length) || 0}</div>
            {attempts && attempts.length > 0 && attempts.map((m, i) =>
              <div key={i}>attempt {i+1}</div>
            )}
          </div>
          {attemptFinished &&
            <button onClick={() => setNewAttempt()} className="quizButton">Take the Quiz</button>
          }
        </div>
        {!attemptFinished &&
          <div style={{marginLeft: '350px', marginTop: '20px'}}>
            <Question question={data && data.questions[currentQuestion-1]} moveQuestion={moveQuestion} onAnswer={onAnswer}
                      answer={attempts[attempts.length-1].filter(m => m.questionId === data.questions[currentQuestion-1].questionId)[0].userAnswer || ''}
                      isLastAnswer={currentQuestion === data.questions.length} setAttemptFinished={() => setAttemptFinished(true)}/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
