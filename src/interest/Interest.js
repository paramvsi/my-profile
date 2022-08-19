import React from 'react';

import './Interest.css';

const Interest = ({ interests }) => {
  return (
    <div className="InterestSection">
      <h1>Things that interest me</h1>
      <ul className="InterestList">
        {interests &&
          interests.map((interest) => (
            <li className="InterestItem" key={interest.name}>
              {interest.icon}
              <p className="InterestName">{interest.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Interest;
