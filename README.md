# reactjs-google-oauth

NPM Packages that allow google oauth with or without a button.

## Getting Started
Install the module with: `npm install reactjs-google-oauth`

## API
The library enables google oauth in two different ways.
- [GoogleOAuth](#googleoauth)
- [GoogleSignIn](#googlesignin)
- [GoogleSignOut](#googlesignout)

#### GoogleOAuth

```

onSignIn(accessToken, profile) {
  // Code goes here
}

const CLIENT_ID = "YOUR_CLIENT_ID";
const SCOPE_LIST = ['https://www.googleapis.com/auth/drive','profile'];
<GoogleOAuth
  clientId={CLIENT_ID}
  scope={SCOPE_LIST}
  onSignIn={this.onSignIn.bind(this)}
 />
```

#### GoogleSignIn

```

onSignIn(accessToken, profile) {
  // Code goes here
}

const CLIENT_ID = "YOUR_CLIENT_ID";
const SCOPE_LIST = 'https://www.googleapis.com/auth/drive';
<GoogleSignIn
  clientId={CLIENT_ID}
  scope={SCOPE_LIST}
  onSignIn={this.onSignIn.bind(this)}
 />
```


#### GoogleSignOut

```

onSignOut() {
  // Code goes here
}

const CLIENT_ID = "YOUR_CLIENT_ID";
<GoogleSignOut
  clientId={CLIENT_ID}
  onSignOut={this.onSignOut.bind(this)}
 />
```

## License
Copyright (c) 2018 Shahab Khalid
Licensed under the ISC license.
