import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GraphComponent from '../components/GraphComponent';

const GraphPageStyles = styled.main`
  .header {
    font-size: 3.5vw;
    text-align: center;
  }
`;

class Graph extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const url = `/api/weather/history`;
    let data = null;
    try {
      data = (await axios(url)).data.nicelyFormattedData;
    } catch (e) {
      this.setState({ error: e });
    }
    console.log(data);
    if (data) {
      this.setState({
        data: [...data]
      });
    }
  };

  state = {
    data: []
  };

  render() {
    return (
      <GraphPageStyles>
        <h1 className="header">Your Search History</h1>
        <GraphComponent data={this.state.data} />
      </GraphPageStyles>
    );
  }
}

export default Graph;
