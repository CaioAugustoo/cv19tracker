import React from 'react'
import './styles/css/styles.css';

export default class FetchData extends React.Component {
  state = {
    confirmed: null,
  };

  async componentDidMount() {
    const url = 'https://api.covid19api.com/world/total';
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ confirmed: body.TotalConfirmed })
  }

  render() {
    return (
      <section>
        <div 
          id="confirmed_box" 
          className="d-flex align-items-center justify-content-center" 
          style={{'marginRight': '30px'}} 
          data-tip="Casos totais confirmados"
          data-place="right"
          >
          <div>
            <h6 
              style={{fontWeight: '400'}}>
              Casos confirmados
            </h6>

            <h5 
              style={{fontWeight: '400'}}>
              {this.state.confirmed}
            </h5>
          </div>
        </div>
      </section>
    );
  };
}