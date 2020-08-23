import React from 'react';
import ReactTooltip from 'react-tooltip';
import PreLoader from '../src/assets/components/PreLoader/PreLoader';
import SideBar from './assets/components/SideBar/SideBar';
import IntroTexts from './assets/components/IntroTexts/IntroTexts';
import CardCases from './assets/components/IntroCards/CardCases/CardCases';
import CardsGeneral from './assets/components/CardsByCountry/CardsGeneral/CardsGeneral';
import Footer from './assets/components/Footer/Footer';
import './assets/styles/css/main.css';

const App = () => {
  return (
    <React.Fragment>
      <PreLoader />
      <ReactTooltip />
      <SideBar />
      <IntroTexts />
      <CardCases />
      <CardsGeneral />
      <Footer />
    </ React.Fragment>
  );
};

export default App;
