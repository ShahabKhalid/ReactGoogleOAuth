import React from 'react';
import PropTypes from 'prop-types';
import GoogleOAuthBase from './GoogleOAuthBase';

export default class GoogleOAuth extends GoogleOAuthBase {

  constructor(props) {
    super(props);
    this.initClient = this.initClient.bind(this);
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
    gapi.load('client:auth2', this.initClient);
    this.gapi = gapi;
  }

  initClient() {
    const self = this;
    gapi.client.init({
      clientId: this.props.clientId,
      scope: this.props.scope.join(' ')
    }).then(function () {
      if(!gapi.auth2.getAuthInstance().isSignedIn.get()) gapi.auth2.getAuthInstance().signIn();
      console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
      self.signIn();
    }).catch(function(error) {

    });
  }

  render() {
    return super.render();
  }
}

GoogleOAuth.propTypes = {
  clientId: PropTypes.string.isRequired,
  scope: PropTypes.array,
  onSignIn: PropTypes.func
};

GoogleOAuth.defaultProps = { scope: [] };
