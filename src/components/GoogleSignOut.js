import React from 'react';
import PropTypes from 'prop-types';
import GoogleOAuthBase from './base';

export default class GoogleSignOut extends GoogleOAuthBase {

  static defaultStyle() {
    return {
      width: '240px',
      height: '40px',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#4e88ff',
      padding: '10px 15px 10px 15px'
    };
  }

  constructor(props) {
    super(props);
  }

  renderSignOutButton() {
    return (
      <a style={this.props.style} onClick={(e) => {e.preventDefault(); this.signOut.bind(this);}}>{this.props.title || 'Sign out from Google'}</a>
    );
  }

  render() {
    return (
      <div>
        {super.render()}
        {this.renderSignOutButton()}
      </div>
    );
  }
}

GoogleSignOut.propTypes = {
  clientId: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
  onSignOut: PropTypes.func

};

GoogleSignOut.defaultProps = { scope: '', style: GoogleSignOut.defaultStyle() };
