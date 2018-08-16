import React from 'react';
import './App.css';
import modeOptions from './constants/modeOptions';
import SystemAdminPage from './containers/systemPages/SystemAdminPage';
import SystemUserPage from './containers/systemPages/SystemUserPage';

class App extends React.Component {
  renderPage = () => {
    if (this.props.activeMode === modeOptions.ADMIN_MODE) {
      return (<SystemAdminPage />);
    }
    else if (this.props.activeMode === modeOptions.USER_MODE) {
      return (<SystemUserPage />);
    }
    return;
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
