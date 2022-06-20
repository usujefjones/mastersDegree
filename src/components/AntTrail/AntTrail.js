import React from 'react';
import './AntTrail.css';
import antDot from '../../assets/antDot.png';
import antDot_black from '../../assets/antDot_black.png';
import antDot_orange from '../../assets/antDot_orange.png';

const AntTrail = ({current=1, id, totalCount, dotColors=[]}) => {
  let complete = dotColors && dotColors.length > 0 && dotColors.reduce((acc, m) => acc += m === 'blue' ? 1 : 0, 0);
  let statusPercent = Math.floor(complete / totalCount * 100);
  return (!dotColors || dotColors.length === 0) ? null : (
      <div id={id} className="row">
        {totalCount && totalCount > 0 && [...Array(totalCount)].map((m, i) =>
            <img src={!dotColors
                        ? antDot_black
                        : dotColors.length < i+1
                          ? antDot
                          : dotColors[i+1] === 'black'
                            ? antDot_black
                            : dotColors[i+1] === 'orange'
                              ? antDot_orange
                              : antDot}
                 key={i} alt="ant trail" style={{marginLeft: '-1px', opacity: i+1 <= current ? '1' : '0.3'}}/>
        )}
        <label className="statusText">{statusPercent}%</label>
      </div>
  )
};

export default AntTrail;
