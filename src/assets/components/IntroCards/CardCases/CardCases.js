import React from 'react'
import ConfirmedCard from '../ConfirmedCard/ConfirmedCard';
import RecoveredCard from '../RecoveredCard/RecoveredCard';
import DeathsCard from '../DeathsCard/DeathsCard';

const CardCases = () => {
  return (
    <section 
      id="globalCases">
      <div 
        className="container">
        <div 
          className="d-flex justify-content-start flex-wrap">
          <ConfirmedCard />
          <RecoveredCard />
          <DeathsCard />
        </div>
      </div>
    </section>
  );
};

export default CardCases;
