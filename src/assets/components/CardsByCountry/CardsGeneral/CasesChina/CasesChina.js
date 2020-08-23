import React from 'react';
import './css/styles.css'

export default class FetchCasesChina extends React.Component {
  state = {
    cases: null,
    confirmed: null,
    recovered: null,
    deaths: null,
  };

  async componentDidMount() {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/china';
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ 
      cases: body.data.cases,
      confirmed: body.data.confirmed,
      recovered: body.data.recovered,
      deaths: body.data.deaths, 
    });
  };
  render() {
    return (
      <div 
        id="card_china"
        >
        <h1>Situação na China</h1>
        <p 
          className="mt-4">Casos: 
          <strong> {this.state.cases} </strong>
        </p>
        <p 
          className="mt-2">Casos confirmados: 
          <span
            style={{color: '#FFAA00'}}> {this.state.confirmed}
          </span>
        </p>    
        <p 
          className="mt-2">Casos recuperados: 
          <span 
            style={{color: '#00FF66'}}> {this.state.recovered}
          </span>
        </p>
        <p 
          className="mt-2">Óbitos confirmados: 
          <span 
            style={{color: '#FF0000'}}> {this.state.deaths}
          </span>
        </p>
      </div>
    );
  };
};

