import React from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

export default function Subscriptionpage() {
  return (
    <div
      style={{
        width: '62%',
        backgroundColor: '#F4F5F7',
        margin: 'auto',
        minHeight: '100vh',
      }}
    >
      <div className="select">
        <h1>Embedded Subscription Form</h1>
      </div>
      <div
        style={{
          width: '100%',
          margin: 'auto',
        }}
      >
        <ReactFormBuilder />
      </div>
    </div>
  );
}
