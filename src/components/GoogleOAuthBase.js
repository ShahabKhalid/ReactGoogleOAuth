import React, { Component } from 'react';
import Script from 'react-load-script';

export default class GoogleOAuthBase extends Component {
  constructor(props) {
    super(props);
    this.state = {scriptLoaded: false};
  }

  componentDidMount() {
    this.gapi = null;
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
    this.gapi = gapi;
  }

  getUserProfile(user) {
    const profile = user.getBasicProfile();
    return profile ? {
      id: profile.getId(),
      name: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl()
    }: null;
  }

  signIn() {
    const accessToken = this.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
    const profile = this.getUserProfile(this.gapi.auth2.getAuthInstance().currentUser.get());
    this.props.onSignIn(accessToken, profile);
  }

  signOut() {
    this.gapi.auth2.getAuthInstance().signOut();
    this.props.onSignOut();
  }

  render() {
    return (
      <div>
        <Script
          url="https://apis.google.com/js/platform.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    );
  }
}