import React from 'react';
import ComposedCharts from '../ComposedCharts/ComposedCharts';
import LineCharts from '../LineCharts/LineCharts';

const Dashboard = () => {
    return (
      <div>
        <h1 className="text-5xl py-10 text-center">this is Dashboard</h1>
        
     <LineCharts></LineCharts>
      </div>
    );
};

export default Dashboard;