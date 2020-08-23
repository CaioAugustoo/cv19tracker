import React from 'react';
import './styles/css/styles.css';

export default class FetchData extends React.Component {
  state = {
    recovered: null,
  };

  async componentDidMount() {
    const url = 'https://api.covid19api.com/world/total';
    const response = await fetch(url);
    const body = await response.json();
    this.setState({ recovered: body.TotalRecovered })
  }

  render() {
    return (
      <section>
        <div 
          id="recovered_box" 
          className="d-flex align-items-center justify-content-center" 
          style={{'marginRight': '30px'}} 
          data-tip="Casos totais recuperados"
          data-place="right"
          >
          <div>
            <h6 
              style={{fontWeight: '400'}}>
              Casos recuperados
              </h6>

            <h5 style={{fontWeight: '400'}}>
              {this.state.recovered}
            </h5>
          </div>
        </div>
      </section>
    );
  };
}