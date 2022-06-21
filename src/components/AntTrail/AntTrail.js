import React, {useState} from 'react';
import './AntTrail.css';
import antDot from '../../assets/antDot.png';
import antDot_black from '../../assets/antDot_black.png';
import antDot_orange from '../../assets/antDot_orange.png';
import antDot_green from '../../assets/antDot_green.png';
import antDot_red from '../../assets/antDot_red.png';

const AntTrail = ({current=1, id, totalCount, dotColors=[], moveQuestion=()=>{}}) => {
  let complete = dotColors && dotColors.length > 0 && dotColors.reduce((acc, m) => acc += m === 'blue' ? 1 : 0, 0);
  let statusPercent = Math.floor(complete / totalCount * 100);
  const [showHideNumber, setShowHIdeNumber] = useState('hide');

  return (!dotColors || dotColors.length === 0) ? null : (
      <div id={id} className="row">
        {totalCount && totalCount > 0 && [...Array(totalCount)].map((m, i) =>
            <div key={i} onMouseOver={() => setShowHIdeNumber(i+1)} onMouseOut={() => setShowHIdeNumber('')} className="positionAbsolute" onClick={() => moveQuestion(i+1)}>
              <div className={'showNumber'}>{showHideNumber === i+1 ? i+1 : ''}</div>
              {showHideNumber === i + 1
                ? <div className="imageWidth">&nbsp;</div>
                : <img src={!dotColors
                    ? antDot_black
                    : dotColors.length < i + 1
                      ? antDot
                      : dotColors[i + 1] === 'black'
                        ? antDot_black
                        : dotColors[i + 1] === 'orange'
                          ? antDot_orange
                          : dotColors[i + 1] === 'green'
                            ? antDot_green
                            : dotColors[i + 1] === 'red'
                              ? antDot_red
                              : antDot}
                    key={i} alt="ant trail"
                    style={{marginLeft: '-1px', opacity: i + 1 <= current ? '1' : '0.3'}} />
              }
            </div>
        )}
        <label className="statusText">{statusPercent}%</label>
      </div>
  )
};

export default AntTrail;
