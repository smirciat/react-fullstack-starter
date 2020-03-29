import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';
import {EmptyNavbar} from '../../components';
import querystring from 'querystring';

function parseRedirectFromQueryString(searchStr) {
  if(!searchStr) {
    return null;
  }
  const {redirect} = querystring.parse(searchStr.slice(1)) || {};
  if(redirect) {
    const cleanRedirect = redirect.replace(/^\/+|\/+$/g, ''); // remove leading and trailing slashes
    return `/${cleanRedirect}`;
  }
  return null;
}

export class LogoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.logout();
  }
  
  logout = async() => {
    try {
      await this.props.authActions.logout();
      await this.props.authActions.handlePostAuthRedirect('/');
    } catch(err) {
        console.log(err);
      }
    }
  

  render() {
    return (
      <div className="fill flex-column">
        
      </div>
    );
  }
}

LogoutPage.propTypes = {
  authActions: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    routing: state.router
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage);
