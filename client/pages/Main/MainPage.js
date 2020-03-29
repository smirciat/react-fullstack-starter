import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './main-page.scss';

export default class MainPage extends React.Component {
  constructor(props) {
        super(props);
  }
  
  render() {
    
    return (
      <div className="page-body">
        <h1>Main Page</h1>
      </div>
    );
  }
}

