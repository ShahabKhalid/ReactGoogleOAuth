import React from 'react';
import PropTypes from 'prop-types';
import GoogleOAuthBase from './base';

export default class GoogleSignIn extends GoogleOAuthBase {

  constructor(props) {
    super(props);
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
    this.gapi = gapi;
    gapi.signin2.render('my-react-google-signin', {
      'scope': this.props.scope || 'profile email',
      'width': this.props.width || 240,
      'height': this.props.height || 50,
      'longtitle': true,
      'theme': this.props.theme || 'dark',
      'onsuccess': this.signIn.bind(this),
      'onfailure': this.onFailure.bind(this)
    })
  }

  onFailure(error) {
    this.props.onFailure(error);
  }

  renderSignInButton() {
    return (
      <div>
        <meta name="google-signin-client_id" content={this.props.clientId}/>
        <div id="my-react-google-signin"/>
      </div>
    );
  }

  render() {
    return (
      <div>
        {super.render()}
        {this.renderSignInButton()}
      </div>
    );
  }
}

GoogleSignIn.propTypes = {
  clientId: PropTypes.string.isRequired,
  scope: PropTypes.string,
  onSignIn: PropTypes.func,
  onFailure: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.string,

};

GoogleSignIn.defaultProps = { scope: '' };
