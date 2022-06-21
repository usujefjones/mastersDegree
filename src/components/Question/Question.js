import React from 'react';
import './Question.css';
import lilypad from '../../assets/questions/lilypad.png';
import parkingspace from '../../assets/questions/parkingspace.png';
import triangles from '../../assets/questions/triangles.png';

const Question = ({question={}, answer='', onAnswer=()=>{}, moveQuestion=()=>{}, isLastAnswer=false, setAttemptFinished=()=>{}, currentReview}) => {
  return (
      <div>
        <div className="fixedHeight">
          <div className="questionId">#{question.questionId})</div>
          <div className="questionText" dangerouslySetInnerHTML={{__html: question.questionText}}></div>
          {question.imageSrc && <img src={question.imageSrc === 'lilypad'
                                            ? lilypad
                                            : question.imageSrc === 'parkingspace'
                                                ? parkingspace
                                                : question.imageSrc === 'triangles'
                                                  ? triangles
                                                  : ''} alt="question image" width={'200px'}/>}
          <div className="space">
            {question.answerType === 'EDIT_CONTROL' &&
              <div className="answerText">
                <input key={question.questionId} defaultValue={answer} onKeyUp={(event) => onAnswer(question.questionId, event.target.value)} size={10}/>
              </div>
            }
            {question.answerType === 'TRUE_FALSE' &&
              <div>
                <input type={'radio'} name={'answer'} value={'true'} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === 'true'}/>True
                <input type={'radio'} name={'answer'} value={'false'} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === 'false'} className="leftSpace"/>False
              </div>
            }
            {question.answerType === 'SINGLE_MULT_CHOICE' &&
              <div className="answerText">
                Multiple choice:
                {question.multipleChoiceAnswers && question.multipleChoiceAnswers.length > 0 && question.multipleChoiceAnswers.map((m, i) =>
                  <div key={i}>
                    <input type={'radio'} name={'mult'} value={m} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === m}/>{m}
                  </div>
                )}
              </div>
            }
          </div>
        </div>
        <div className="buttonRow">
          <button onClick={() => moveQuestion('prev')} className="button" disabled={question.questionId === '1'}>&lt; Prev</button>
          <button onClick={() => moveQuestion('next')} className="button" disabled={question.questionId === '20'}>Next &gt;</button>
          {isLastAnswer && !currentReview &&
          <button onClick={() => setAttemptFinished('next')} className="button"
                    style={{marginLeft: '30px', backgroundColor: 'green'}}>Finish</button>
          }
        </div>
      </div>
  )
};

export default Question;
