import React, { useEffect, useState } from 'react';
import AntTrail from './components/AntTrail';
import Question from './components/Question';
import './App.css';
import * as data from './data/questions.js';
import MediaQuery, { useMediaQuery } from 'react-responsive'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [dotColors, setDotColors] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [attemptFinished, setAttemptFinished] = useState(true);
  const [currentReview, setCurrentReview] = useState(null);

  const isMobile = useMediaQuery({ query: '(max-width: 424px)' })
  const isNotMobile = useMediaQuery({ query: '(min-width: 425px)' })

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
    setCurrentQuestion(1);
    setCurrentReview(null);
  }

  const setNewReview = (number) => {
    setCurrentQuestion(1);
    setCurrentReview(number);
  }

  useEffect(() => {
    getDotColors();
  },[currentQuestion, attempts, currentReview, attemptFinished]);

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
  }

  const getDotColors = () => {
    //1. set the currentQuestion to black
    //2. loop through the answer length.
    //    a. If the dot is answered, then blue
    //    b. If the dot is unanswered and below the greatest question answered, it is orange.
    //       otherwise it is blank
    let currentAttempt = attempts.length-1;
    let answers = currentReview ? attempts[currentReview-1] : attempts[currentAttempt];
    let highestAnswer = 1;
    answers && answers.length > 0 && answers.forEach((m, i) => {
      if (m.userAnswer && i+1 > highestAnswer) highestAnswer = i+1;
    })
    let newDotColors = [''];

    answers && answers.length > 0 && answers.forEach((m, i) => {
      if (newDotColors.length === currentQuestion) {
        newDotColors[newDotColors.length] = 'black';
      } else if (currentReview) {
        if (answers[i].userAnswer === data.questions[i].answer) {
          newDotColors[newDotColors.length] = 'green';
        } else {
          newDotColors[newDotColors.length] = 'red';
        }
      } else if (answers[i].userAnswer && answers[i].userAnswer.length > 0) {
        newDotColors[newDotColors.length] = 'blue';
      } else if (!answers[i].userAnswer && (newDotColors.length < highestAnswer || newDotColors.length < currentQuestion)) {
        newDotColors[newDotColors.length] = 'orange';
      } else {
        newDotColors[newDotColors.length] = '';
      }
    })
    setDotColors(newDotColors);
  }

  const getQuizScore = (index) => {
    let answers = Object.assign([], attempts[index]);
    let correct = 0;
    answers && answers.length > 0 && answers.forEach((m, i) => {
      if (data.questions[i].answer === answers[i].userAnswer) correct++;
    });
    return correct + '/' + data.questions.length + ' (' + Math.floor(correct/data.questions.length*100) + '%)';
  }

  return (
    <div className="App">
      <div className={isNotMobile ? "row" : "column"}>
        <div className={isNotMobile ? "nav" : "navMobile"}>
          <div>
            <div className="headerItem">Quiz Score</div>
            <div className="topSpace"> Attempts: {(attempts && attempts.length) || 0}</div>
            {attemptFinished && attempts && attempts.length > 0 && attempts.map((m, i) =>
              <div key={i} onClick={() => setNewReview(i+1)} className="divLink">
                attempt #{i+1}: <strong>{getQuizScore(i)}</strong>
              </div>
            )}
          </div>
          {attemptFinished &&
            <button onClick={() => setNewAttempt()} className="quizButton">Take the Quiz</button>
          }
        </div>
        <div>
          <div className={isNotMobile ? "App-header-more-left" : "App-header"}>
            <title>The Quiz</title>
            <h2>The Quiz</h2>
            {(!attemptFinished || currentReview) ?
              <div className="antTrail">
                <AntTrail current={currentQuestion} totalCount={data.questions.length} dotColors={dotColors}
                          moveQuestion={moveQuestion}/>
              </div>
              : null
            }
          </div>
          {(!attemptFinished || currentReview)
            ? <div className={isNotMobile ? "leftSpace" : "lessLeftSpace"}>
                <Question question={data && data.questions[currentQuestion-1]} moveQuestion={moveQuestion} onAnswer={onAnswer} currentReview={currentReview}
                          answer={attempts[attempts.length-1].filter(m => m.questionId === data.questions[currentQuestion-1].questionId)[0].userAnswer || ''}
                          isLastAnswer={currentQuestion === data.questions.length} setAttemptFinished={() => setAttemptFinished(true)}/>
              </div>
            : <div className={isNotMobile ? "leftSpace" : "lessLeftSpace"}>
                {attempts && attempts.length
                  ? `Do you want to take the quiz again?`
                  : `Are you ready to start the quiz?`}
                <button onClick={() => setNewAttempt()} className="quizButton">Take the Quiz</button>
                {attempts && attempts.length
                  ? <div className="attemptInstruct">Click on an attempt on the left to see the corrected answers</div>
                  : ''
                }
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
