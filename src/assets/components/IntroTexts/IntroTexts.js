import React from 'react';
import './style/css/styles.css';

const IntroTexts = () => {
  return (
    <section 
      id="helloText">
      <div 
        className="container d-flex justify-content-between flex-wrap">
        <div 
          id="intro_text">
          <h1>Painel Coronavírus</h1>
          <p 
            style={{opacity: '0.5'}}>
            Dados atualizados diariamente
          </p>
        </div>
        <div>
          
        </div>   
      </div>
    </section>
  );
};
export default IntroTexts;