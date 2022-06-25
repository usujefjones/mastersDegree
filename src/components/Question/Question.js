import React from 'react';
import './Question.css';
import lilypad from '../../assets/questions/lilypad.png';
import parkingspace from '../../assets/questions/parkingspace.png';
import triangles from '../../assets/questions/triangles.png';
import greenArrow from '../../assets/GreenArrow.png';
import wrongPointer from '../../assets/WrongPointer.png';

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
            {currentReview && (answer === '' || !answer) &&
              <div className="noAnswer">Wrong: No Answer</div>
            }
            {question.answerType === 'EDIT_CONTROL'
              ? !currentReview
                ?  <div className="answerText">
                     <input key={question.questionId} defaultValue={answer} onKeyUp={(event) => onAnswer(question.questionId, event.target.value)} size={10}/>
                   </div>
                : question.answer === answer || (!answer || answer === '')
                  ? <div className="rowImage">
                      <img src={greenArrow} alt={'correct'} className="reviewImage"/>{question.answer}
                    </div>
                  : <div>
                      <div className="rowImage">
                        <img src={greenArrow} alt={'correct'} className="reviewImage"/>{question.answer}
                      </div>
                      <div className="rowImage">
                        <img src={wrongPointer} alt={'wrong'} className="reviewImage"/>{answer}
                      </div>
                    </div>
              : ''
            }
            {question.answerType === 'TRUE_FALSE'
              ? !currentReview
                ?
                  <div>
                    <input type={'radio'} name={'answer'} value={'true'} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === 'true'}/>True
                    <input type={'radio'} name={'answer'} value={'false'} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === 'false'} className="leftSpace"/>False
                  </div>
                :
                  <div>
                    <div className="row">
                      {question.answer === 'true'
                        ? <img src={greenArrow} alt={'correct'} className="reviewImage"/>
                        : answer.userAnswer === 'true'
                          ? <img src={wrongPointer} alt={'wrong'} className="reviewImage"/>
                          : ''
                      }
                      <div className="answer">True</div>
                    </div>
                    <div className="row">
                      {question.answer === 'false'
                        ? <img src={greenArrow} alt={'correct'} className="reviewImage"/>
                        : answer.userAnswer === 'false'
                          ? <img src={wrongPointer} alt={'wrong'} className="reviewImage"/>
                          : ''
                      }
                      <div className="answerSpace" >False</div>
                    </div>
                  </div>
              : ''
            }
            {question.answerType === 'SINGLE_MULT_CHOICE'
              ? !currentReview
                ? <div className="answerText">
                    Multiple choice:
                    {question.multipleChoiceAnswers && question.multipleChoiceAnswers.length > 0 && question.multipleChoiceAnswers.map((m, i) =>
                      <div key={i}>
                        <input type={'radio'} name={'mult'} value={m} onChange={(event) => onAnswer(question.questionId, event.target.value)} checked={answer === m}/>{m}
                      </div>
                    )}
                  </div>
                : <div className="answerText">
                    Multiple choice:
                    {question.multipleChoiceAnswers && question.multipleChoiceAnswers.length > 0 && question.multipleChoiceAnswers.map((m, i) =>
                      <div key={i}>
                        {question.answer === m
                          ? <div className="rowImage">
                              <img src={greenArrow} alt={'correct'} className="reviewImage"/>{m}
                            </div>
                          : answer === m
                            ? <div className="rowImage">
                                <img src={wrongPointer} alt={'wrong'} className="reviewImage"/>{m}
                              </div>
                            : <div className='answerSpace'>{m}</div>
                        }
                      </div>
                    )}
                  </div>
              : ''
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
        {currentReview && question.explanation &&
          <div className='explanation'>
            <strong>Explanation:&nbsp;&nbsp;</strong>
            <div dangerouslySetInnerHTML={{__html: question.explanation}}></div>
          </div>
        }
      </div>
  )
};

export default Question;
