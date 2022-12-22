import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
  LineChart,
} from "recharts";
import "./App.css";

// Add some mock data
const data = [
  {
    month: 'January',
    savings: 5000,
    loss: 500
  },
  {
    month: 'February',
    savings: 8000,
    loss: 300
  },
  {
    month: 'March',
    savings: 3000,
    loss: 800
  },
  {
    month: 'April',
    savings: 6000,
    loss: 100
  },
  {
    month: 'May',
    savings: 4000,
    loss: 700
  },
  {
    month: 'June',
    savings: 9000,
    loss: 1200
  },
]

function App() {
  return <div className="App">
   <h1>Simple Line chart</h1>
   <LineChart width={1000} height={300} data={data}>
    <CartesianGrid></CartesianGrid>
    <XAxis dataKey="month"></XAxis>
    <YAxis></YAxis>
    <Tooltip> </Tooltip>
    <Legend></Legend>
    <Line type="monotone" dataKey="loss" stroke="green" />
    <Line type="monotone" dataKey="savings" stroke="red"/>
   </LineChart>

   <h1>Simple Area Chart</h1>
   <AreaChart width={1000} height={300} data={data}>
    <CartesianGrid></CartesianGrid>
    <XAxis dataKey="month"></XAxis>
    <YAxis></YAxis>
    <Tooltip> </Tooltip>
    <Legend></Legend>
    <Area type="monotone" dataKey="savings" stroke="blue" fill="blue"/>
    <Area type="monotone" dataKey="loss" stroke="green" fill="green"  />
    </AreaChart>

    <h1>Simple Bar Chart</h1>
    <BarChart width={1000} height={300} data={data}>
    <CartesianGrid></CartesianGrid>
    <XAxis dataKey="month"></XAxis>
    <YAxis></YAxis>
    <Tooltip> </Tooltip>
    <Legend></Legend>
    <Bar type="monotone" dataKey="savings" fill="blue"/>
    <Bar type="monotone" dataKey="loss" fill="green"  />
   </BarChart>

   <h1>Stacked Bar Charts</h1>
   <BarChart width={1000} height={300} data={data}>
    <CartesianGrid></CartesianGrid>
    <XAxis dataKey="month"></XAxis>
    <YAxis></YAxis>
    <Tooltip> </Tooltip>
    <Legend></Legend>
    <Bar type="monotone" dataKey="savings"  stackId="a" fill="green"/>
    <Bar type="monotone" dataKey="loss" stackId="a" fill="red"  />
   </BarChart>

   <h1>Simple Scatterplot</h1>
   <ScatterChart width={1000} height={300} >
    <CartesianGrid></CartesianGrid>
    <XAxis type="category" dataKey="month" name="month"></XAxis>
    <YAxis type="number" dataKey="savings" name="savings"></YAxis>
    <Tooltip> </Tooltip>
    <Scatter data={data} fill="red"></Scatter>
   </ScatterChart>
  </div>
}

export default App;
