import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Userdasbord2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Reviews',
            data: [
              1000,
              2000,
              1500,
              3000,
              2500,
              1800,
              1700,
              2000,
              1500,
              3000,
              2500,
              1800,
            ],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,123,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(54,162,123,0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(153,102,255,0.6)',
            ],
          },
        ],
      },
      contactData: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
          {
            label: 'Total Contacts',
            data: [1000, 1500, 2000, 3000],
            backgroundColor: [
              'rgba(255,159,64,0.6)',
              'rgba(54,162,123,0.6)',
              'rgba(255,99,132,0.6)',
              'rgba(75,192,192,0.6)',
            ],
          },
        ],
      },
      audienceData: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
          {
            label: 'Audience Reached',
            data: [1000, 3500, 5000, 6000],
            backgroundColor: [
              'rgba(54,162,123,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(255,99,132,0.6)',
            ],
          },
        ],
      },
      designData: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [
          {
            label: 'Audience Reached',
            data: [1000, 3500, 5000, 6000],
            backgroundColor: [
              'rgba(54,162,123,0.6)',
              'rgba(255,159,64,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(255,99,132,0.6)',
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div
        style={{
          width: '60%',
          backgroundColor: '#F4F5F7',
          margin: 'auto',
          minHeight: '100vh',
        }}
      >
        <div className="row p-4 dashboardrow">
          <div className="col">
            <h3 className="active">Dashboard</h3>
          </div>
          
        </div>
        <div className="row p-4">
          <div className="col card">
            <Line data={this.state.contactData} options={{}} />
          </div>
          <div className="col card">
            <Bar data={this.state.audienceData} options={{}} />
          </div>
          <div className="col card">
            <Pie data={this.state.audienceData} options={{}} />
          </div>
        </div>
        <div className="row p-4">
          <div className="col card">
            <Bar data={this.state.chartData} options={{}} />
          </div>
        </div>
      </div>
    );
  }
}
