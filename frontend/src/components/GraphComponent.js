import React from 'react';
import PropTypes from 'prop-types';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const GraphComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kelvin" fill="#8884d8" />
        <Bar dataKey="celcius" fill="#82ca9d" />
        <Bar dataKey="fahrenheight" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

GraphComponent.propTypes = {
  data: PropTypes.array
};

export default GraphComponent;
