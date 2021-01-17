import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

export default class Subscriptionpage extends Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    const h1 = $('h1');
    console.log($);
    // {
    //   jQuery(($) => {
    //     $('#fb-editor').formBuilder();
    //   });
    // }
  }
  render() {
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
          <div id="build-wrap"></div>

          <div class="setDataWrap">
            <button id="getXML" type="button">
              Get XML Data
            </button>
            <button id="getJSON" type="button">
              Get JSON Data
            </button>
            <button id="getJS" type="button">
              Get JS Data
            </button>
          </div>

          {/* <ReactFormBuilder /> */}
        </div>
      </div>
    );
  }
}
