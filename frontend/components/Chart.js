import React from 'react';
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar} from 'recharts';
const data = [
      {name: 'Room 1', Trash: 1500, Recycle: 2400, Compost:1900},
      {name: 'Room 2', Trash: 1500, Recycle: 2400, Compost:1900},
      {name: 'Room 3', Trash: 1500, Recycle: 2400, Compost:1900}
];

function wasteCalculator(array){
  let total = 0;
  array.forEach((room) => {
    const temp = room.Trash + room.Recycle + room.Compost;
    total += temp
  })
  return total
}
class Chart extends React.Component {
  render() {
    return  (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
          style={{flex: 1}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey="Trash" fill="red"/>
           <Bar dataKey="Recycle" fill="blue" />
           <Bar dataKey="Compost" fill="green" />
          </BarChart>
          <div style={{flex: 1}}>Total Waste = {wasteCalculator(data)}</div>
      </div>
    )}
  }

  export default Chart;
