import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRecords from './components/UserRecords';

const users = [
  {id: 1, username: "admin", timeout: 10},
  {id: 2, username: "admin", timeout: 10},
  {id: 3, username: "hwinarto", timeout: 10}
];

const App = () => (
  <MuiThemeProvider>
    <UserRecords users={users} />
  </MuiThemeProvider>
);

export default App;
