import React from 'react';
import './AntTrail.css';
import antDot from '../../assets/antDot.png';

const AntTrail = ({current=1, id, totalCount}) => {
  let statusPercent = Math.floor(totalCount / current);
  return (
      <div id={id} className="row">
        {totalCount && totalCount > 0 && [...Array(totalCount)].map((m, i) =>
            <img src={antDot} key={i} alt="ant trail" style={{marginLeft: '-1px', opacity: i + 1 * 1 < current ? '1' : '0.3'}}/>
        )}
        <label className="statusText">{statusPercent}%</label>
      </div>
  )
};

export default AntTrail;
