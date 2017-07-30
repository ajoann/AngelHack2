import React from 'react';
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar} from 'recharts';
const data = [
      {name: 'Room 1', Trash: 1500, Recycle: 2400, Compost:1900},
      {name: 'Room 2', Trash: 1500, Recycle: 2400, Compost:1900},
      {name: 'Room 3', Trash: 1500, Recycle: 2400, Compost:1900}
];
import axios from 'axios';

function wasteCalculator(array){
  let total = 0;
  array.forEach((room) => {
    const item = room.wasteHistory;
    const temp = item.Trash + item.Recycle + item.Compost;
    total += temp
  })
  return total
}
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // secondsElapsed: 0
    }
    this.tick = this.tick.bind(this);
  }

  tick() {
    console.log('in here');
    axios.get('https://angelhack-trc.herokuapp.com/recyclable', )
    .then((resp) => {
      console.log('resp', resp);
      this.setState({data: resp.data})
    })

    // this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  componentDidMount() {
    console.log('lg here');
    axios.get('https://angelhack-trc.herokuapp.com/recyclable', )
    .then((resp) => {
      console.log('resp', resp);
      this.setState({data: resp.data})
    })
    this.interval = setInterval(this.tick, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const Trash = 'wasteHistory.Trash';
    const Recycle = 'wasteHistory.Recycle';
    const Compost = 'wasteHistory.Compost';
    return  (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <BarChart
          width={600}
          height={300}
          data={this.state.data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
          style={{flex: 1}}>
           <XAxis dataKey="photonDeviceId"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Bar dataKey={Trash} fill="red" name="Trash"/>
           <Bar dataKey={Recycle} fill="blue" name="Recycle"/>
           <Bar dataKey={Compost} fill="green" name="Compost"/>
          </BarChart>
          <div style={{flex: 1}}>Total Waste = {wasteCalculator(this.state.data)}</div>
      </div>
    )}
  }

  export default Chart;
