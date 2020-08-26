import React from 'react'
import './styles/css/style.css';

class CasesByUF extends React.Component {
  state = {
    uf: [],
    uid: 0,
  };

  async componentDidMount() { 
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1';
    const response = await fetch(url);
    const body = await response.json();
    this.setState({
      uf: body.data,
      uid: body.data.uid
    });

  };

  render() {
    const { uf } = this.state;
    return (
      <section 
        id="casesByStates">
        <h1>Casos no Brasil por estados</h1>
      <div 
        id="tableCases">
          <div
            id="data" 
            className="d-flex justify-content-between mb-2 mt-4 pb-2"> 
            <p>
             Estado
            </p>
            <p>
              Confirmados
            </p>
            <p>
              Óbitos
            </p>
          </div>
          <div className="mb-2"> 
            {uf.map(uf => (
              <div 
                className="d-flex justify-content-between  align-items-center infos">
                <p 
                  className="py-1" 
                  key={uf.uf.uid}>{uf.uf}
                 </p>
                <p 
                  key={uf.uf.uid}>{uf.cases}
                </p>
                <p 
                  key={uf.uf.uid}>{uf.deaths}
                </p>
              </div>       
            ))}
          </div>
        </div> 
      </section>
    );
  };
};

export default CasesByUF;
