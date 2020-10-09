import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root { 
  --dark-components: #262626;
  --dark-general: #1B1B1B;
  --dark-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
  --white-text: #ffffff;
  --icons: #67676D;
  --yellow: #FFAA00;

  --light-components: #FFFFFF;
  --light-general: #F5F5FC;
  --black-text: #262626;
  --light-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);

  --card-cases: #0075FF;
  --card-confirmed: #FFAA00;
  --card-recovered: #00FF66;
  --card-deaths: #FF0000;

  --card-support: #FF003D;
  --card-docs: #5200FF;
  --card-api: #00C2FF;

}
  body {
  background-color: var(--dark-general) !important;
  color: var(--white-text) !important;
  font-family: 'Poppins', sans-serif !important;
  transition: all .1s ease;

  &.light-mode {
  background-color: var(--light-general) !important;
  color: var(--black-text) !important;

  #confirmed_box, #recovered_box, #deaths_box {
    background-color: var(--light-components) !important;
    box-shadow: var(--light-shadow) !important;
  }

  #searchBox {
    background-color: var(--light-general) !important;
  }

  .preloader {
    background-color: var(--light-general);
  }

  #card_brazil, #card_china, #card_italy, #card_us {
    background-color: var(--light-components);
    color: var(--black-text);

    &::after {
      content: '';
      display: block;
      background-color: var(--black-text);
      width: 165px;
      height: 2px;
      position: relative;
      float: right;
      bottom: 160px;
    }
  }

  #casesByStates {
    background-color: var(--light-components) !important;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--dark-text);
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--white-general);  
  }

  #sideBar {
    background-color: var(--light-components) !important;
  } 
}
}

p, h1 {
  margin-bottom: 0px !important;
}

h1 {
  font-size: 1.5rem !important;
}


::-moz-selection { background: var(--yellow); }
::selection { background: var(--yellow); }


body>div.preloader {
  position: fixed;
  background: var(--yellow);
  width: 100%;
  height: 100%;
  z-index: 1071;
  opacity: 0;
  transition: opacity .2s ease-in-out;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

body:not(.loaded)>div.preloader {
  opacity: 1;
}

body.loaded .preloader {
  opacity: 0;
  visibility: hidden;
}

body:not(.loaded) {
  overflow: hidden;
}

body.loaded>div.preloader {
  animation: hidePreloader ease .3s ease .5s ease-in-out;
}

.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 32123132131;
  margin: 0 auto;
  background: $dark-general;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .3s ease;
}

`;

export const Container = styled.div`
  max-width: 1500px;
`;