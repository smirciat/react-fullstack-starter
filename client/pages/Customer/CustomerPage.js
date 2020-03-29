import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './customer-page.scss';
import {OverlayManager, Navbar, PrivateRoute, PrivateRouteContainer, ErrorBoundary} from '../../components';

export default class CustomerPage extends React.Component {
  constructor(props) {
        super(props);
  }
  
  render() {
    
    return (
      <div className="page-body">
        <Navbar path={this.props.history} />
        <h1>Customer Page</h1>
      </div>
    );
  }
}

