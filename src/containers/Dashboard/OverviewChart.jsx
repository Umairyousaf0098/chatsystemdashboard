import {Box} from "@mui/material";
import React, { useState } from "react";
import Chart from 'react-apexcharts';
function OverviewChart() {

    const [state,setState]=useState({
        
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thr', 'Fri'],
              }
            },
            series: [
              {
                name: "This Month",
                data: [5000, 15000, 20000, 25000, 30000, 35000, 40000]
              },
              {
                name: "Last Month",
                data: [2000, 13000, 23000, 55000, 60000, 15000, 40000]
              }
            ]
          
    })
    return ( 
        <Chart options={state.options} series={state.series} type="area" height={230} width={650}  />
     );
}

export default OverviewChart;