
import React from 'react'
import {Link} from 'react-router-dom';

export default function Userdasbord2() {
    return (
        <div style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>

        <div className="row p-4 dashboardrow">
          <div className="col">
            <h3 className="active">Dashboard</h3>
          </div>
          {/* <div className="col" id="date" style={{fontSize: 12, margin: 10}}>
          </div> */}
        </div>
        <div className="row p-4">
          <div className="col card">
            <h6>Total Contact</h6>
            <canvas id="pie-chart" style={{display: 'block', width: 50, height: 40}}>
  </canvas>
          </div>
          <div className="col card">
            <h6>Audience Reached</h6>
            <canvas id="pie-chart2" style={{display: 'block', width: 50, height: 40}}>
  </canvas>
          </div>
          <div className="col card">
            <h6>Total Design</h6>
            <canvas id="pie-chart3" style={{display: 'block', width: 50, height: 40}}>
  </canvas>
          </div>
        </div>
        <div className="row p-4">
          <div className="col card">
            <canvas id="chart" style={{display: 'block', width: 455, height: 205}}>
  </canvas>
          </div>
        </div>
      </div>
    )
}
