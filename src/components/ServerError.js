import React, { Component } from 'react';

const style = {
  root: {
    textAlign: 'center',
  },
  alert: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#e9ab2d',
  },
};

export default class ServerError extends Component {
  render() {
    return (
      <div style={style.root}>
        <div style={style.alert}>&#9888;</div>
        <h1>Ops, we have a problem</h1>
        <p>'Sorry, we coudn\'t access the repositories. Please try again in a few moments.' </p>
      </div>
    );
  }
}
